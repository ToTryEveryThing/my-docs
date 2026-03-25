---
title: RocketMQ
icon: material-icon-theme:rocket
order: 2
description: RocketMQ
category:
  - work
tag:
  - RocketMQ 
---

# RocketMQ

## 运行前准备

### 1. 环境要求

- JDK 17
- Maven
- RocketMQ NameServer
- RocketMQ Broker

### 2. 启动 RocketMQ

```bash
mqnamesrv
mqbroker -n localhost:9876
```

### 3. 推荐验证顺序

1. 启动 `NameServer`
2. 启动 `Broker`
3. 先启动消费者
4. 再启动生产者

---

## Day 1：基础消息收发

Day 1 的目标是先把最基础的消息链路跑通，理解三种发送方式和一个最简单的消费者。

### 1. 同步发送 `SyncProducer`

功能：

- 创建 `DefaultMQProducer`
- 发送 `Day1Topic` + `SyncTag` 的消息
- 每发一条就等待 Broker 返回结果
- 打印发送状态、消息 ID、队列 ID

代码示例：

```java
DefaultMQProducer producer = new DefaultMQProducer("demo-producer-group");
producer.setNamesrvAddr("localhost:9876");
producer.setSendMsgTimeout(3000);
producer.setRetryTimesWhenSendFailed(2);
producer.start();

Message msg = new Message(
    "Day1Topic",
    "SyncTag",
    "同步消息内容".getBytes(RemotingHelper.DEFAULT_CHARSET)
);
msg.setKeys("KEY_1");

SendResult sendResult = producer.send(msg);
System.out.println(sendResult.getSendStatus());
```

适用场景：

- 订单创建
- 支付结果通知
- 重要业务事件

特点：

- 优点：最容易确认是否发送成功
- 缺点：吞吐量相对较低

### 2. 异步发送 `AsyncProducer`

功能：

- 创建异步生产者
- 使用 `SendCallback` 处理成功与失败回调
- 使用 `CountDownLatch` 等待异步任务结束

代码示例：

```java
DefaultMQProducer producer = new DefaultMQProducer("demo-producer-group");
producer.setNamesrvAddr("localhost:9876");
producer.setRetryTimesWhenSendAsyncFailed(2);
producer.start();

CountDownLatch latch = new CountDownLatch(1);
Message msg = new Message(
    "Day1Topic",
    "AsyncTag",
    "异步消息内容".getBytes(RemotingHelper.DEFAULT_CHARSET)
);

producer.send(msg, new SendCallback() {
    @Override
    public void onSuccess(SendResult sendResult) {
        System.out.println("发送成功: " + sendResult.getMsgId());
        latch.countDown();
    }

    @Override
    public void onException(Throwable e) {
        System.err.println("发送失败: " + e.getMessage());
        latch.countDown();
    }
});
```

适用场景：

- 对响应时间敏感的业务
- 高并发通知
- 短信、邮件、埋点类异步链路

特点：

- 优点：吞吐量更高，不阻塞主线程
- 缺点：要处理回调和等待逻辑

### 3. 单向发送 `OnewayProducer`

功能：

- 只负责把消息发出去
- 不等待 Broker 返回结果

代码示例：

```java
DefaultMQProducer producer = new DefaultMQProducer("demo-producer-group");
producer.setNamesrvAddr("localhost:9876");
producer.start();

Message msg = new Message(
    "Day1Topic",
    "OnewayTag",
    "单向消息内容".getBytes(RemotingHelper.DEFAULT_CHARSET)
);

producer.sendOneway(msg);
```

适用场景：

- 日志采集
- 监控上报
- 对可靠性要求没那么高的链路

特点：

- 优点：最快
- 缺点：调用方不知道是否真正发送成功

### 4. 并发消费 `SimpleConsumer`

功能：

- 创建 `DefaultMQPushConsumer`
- 订阅 `Day1Topic`
- 使用 `MessageListenerConcurrently` 并发消费
- 打印 Topic、Tag、Keys、Body、QueueId、MsgId

代码示例：

```java
DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("demo-consumer-group");
consumer.setNamesrvAddr("localhost:9876");
consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);
consumer.subscribe("Day1Topic", "*");

consumer.registerMessageListener(new MessageListenerConcurrently() {
    @Override
    public ConsumeConcurrentlyStatus consumeMessage(
            List<MessageExt> msgs,
            ConsumeConcurrentlyContext context) {

        for (MessageExt msg : msgs) {
            String body = new String(msg.getBody(), StandardCharsets.UTF_8);
            System.out.printf("Topic=%s, Tag=%s, Body=%s%n",
                msg.getTopic(), msg.getTags(), body);
        }
        return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
    }
});

consumer.start();
```

说明：

- `consumer.subscribe("Day1Topic", "*")` 表示订阅所有 Tag
- `CONSUME_FROM_FIRST_OFFSET` 表示首次使用该消费组时从最早消息开始消费

### 5. JSON 异步发送示例 `fasg`

功能：

- 使用 `fastjson2` 构造 JSON
- 将 JSON 作为消息体发送
- 使用异步回调查看结果

代码示例：

```java
JSONObject jsonObject = new JSONObject();
jsonObject.put("name", "mishu");
jsonObject.put("age", 18);

Message message = new Message("Day1Topic", "tag", jsonObject.toString().getBytes());
defaultMQProducer.send(message, new SendCallback() {
    @Override
    public void onSuccess(SendResult sendResult) {
        System.out.println("消息发送成功: " + sendResult);
    }

    @Override
    public void onException(Throwable e) {
        System.out.println("消息发送失败: " + e);
    }
});
```

这个类更像一个补充实验类，展示“对象序列化为 JSON 后再发消息”的做法。

### 6. Day 1 重点结论

- 同步发送最适合验证环境和关键链路
- 异步发送适合高吞吐场景
- 单向发送适合日志和埋点
- PushConsumer 是最常见的消费方式
- Topic 决定消息归属，Tag 决定二级分类

### 7. Day 1 注意事项

- `SimpleConsumer` 源码最后返回的是 `RECONSUME_LATER`，这会导致消息不断重试，不符合“消费成功”的预期。
- 如果你是为了正常演示消费成功，应该返回：

```java
return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
```

---

## Day 2：顺序消息、延迟消息、批量消息、消息过滤

Day 2 进入 RocketMQ 的常见进阶功能。

### 1. 顺序消息生产者 `OrderProducer`

功能：

- 模拟订单的三个阶段：创建、支付、完成
- 用 `orderId` 作为路由依据
- 用 `MessageQueueSelector` 把同一个订单的消息固定发送到同一队列

代码示例：

```java
SendResult result = producer.send(msg, new MessageQueueSelector() {
    @Override
    public MessageQueue select(List<MessageQueue> mqs, Message msg, Object arg) {
        Integer id = (Integer) arg;
        int index = id % mqs.size();
        return mqs.get(index);
    }
}, orderId);
```

为什么这样能保证顺序：

- 同一个 `orderId` 一直进入同一个队列
- 同一个队列内部由顺序消费者串行处理

### 2. 顺序消息消费者 `OrderConsumer`

功能：

- 订阅 `Day2OrderTopic`
- 使用 `MessageListenerOrderly`
- 对单个队列内消息按顺序消费

代码示例：

```java
consumer.registerMessageListener(new MessageListenerOrderly() {
    @Override
    public ConsumeOrderlyStatus consumeMessage(
            List<MessageExt> msgs,
            ConsumeOrderlyContext context) {

        context.setAutoCommit(true);
        for (MessageExt msg : msgs) {
            String body = new String(msg.getBody());
            System.out.printf("QueueId=%d, Content=%s%n",
                msg.getQueueId(), body);
        }
        return ConsumeOrderlyStatus.SUCCESS;
    }
});
```

适用场景：

- 订单状态流转
- 账户余额变更流水
- 库存变更流水

### 3. 延迟消息生产者 `DelayProducer`

功能：

- 发送到 `Day2DelayTopic`
- 通过 `setDelayTimeLevel()` 设置延迟级别
- 示例里发送 1 到 5 级延迟消息

代码示例：

```java
Message msg = new Message(
    "Day2DelayTopic",
    "DelayTag",
    "延迟消息".getBytes("UTF-8")
);
msg.setDelayTimeLevel(3); // 10 秒
SendResult result = producer.send(msg);
```

源码中的延迟级别表：

```text
1s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m 8m 9m 10m 20m 30m 1h 2h
```

说明：

- 这是 RocketMQ 预置级别，不是任意秒级定时器

### 4. 延迟消息消费者 `DelayConsumer`

功能：

- 接收延迟消息
- 打印存储时间、接收时间、实际延迟

代码示例：

```java
long receiveTime = System.currentTimeMillis();
long storeTime = msg.getStoreTimestamp();
long delay = receiveTime - storeTime;

System.out.printf("内容=%s, 存储时间=%s, 接收时间=%s, 实际延迟=%dms%n",
    body,
    sdf.format(new Date(storeTime)),
    sdf.format(new Date(receiveTime)),
    delay
);
```

适用场景：

- 订单超时检查
- 延迟通知
- 补偿任务触发

### 5. 批量消息生产者 `BatchProducer`

功能：

- 一次发送多条消息
- 演示“小批量一次发”
- 演示“大批量手动拆批再发”

代码示例 1：直接批量发送

```java
List<Message> messages = new ArrayList<>();
for (int i = 0; i < 10; i++) {
    Message msg = new Message(
        "Day2BatchTopic",
        "BatchTag",
        ("批量消息-" + i).getBytes("UTF-8")
    );
    messages.add(msg);
}
SendResult result = producer.send(messages);
```

代码示例 2：大批量拆批发送

```java
int batchSize = 20;
for (int i = 0; i < largeBatch.size(); i += batchSize) {
    int end = Math.min(i + batchSize, largeBatch.size());
    List<Message> subList = largeBatch.subList(i, end);
    producer.send(subList);
}
```

注意：

- 批量消息总大小不能超过约 4MB
- 同一批消息应属于同一个 Topic

### 6. 过滤消息生产者 `FilterProducer`

功能：

- 发送 `TagA`、`TagB`、`TagC` 三种 Tag 的消息
- 同时给消息加用户属性 `level` 和 `type`

代码示例：

```java
Message msg = new Message(
    "Day2FilterTopic",
    tag,
    ("消息内容 - Tag=" + tag).getBytes("UTF-8")
);
msg.putUserProperty("level", String.valueOf(i % 3 + 1));
msg.putUserProperty("type", i % 2 == 0 ? "even" : "odd");
producer.send(msg);
```

说明：

- 当前消费者只演示了 Tag 过滤
- 用户属性为后续 SQL92 过滤做准备

### 7. Tag 过滤消费者 `TagFilterConsumer`

功能：

- 只订阅 `TagA`
- 验证“同 Topic 下的二级分类消费”

代码示例：

```java
consumer.subscribe("Day2FilterTopic", "TagA");
```

如果想同时接收多个 Tag，可以写成：

```java
consumer.subscribe("Day2FilterTopic", "TagA || TagB");
```

### 8. Day 2 重点结论

- 顺序消息不是“整个 Topic 全局有序”，而是“同一业务键有序”
- 延迟消息不是任意时间点定时任务，而是预设级别
- 批量消息提升吞吐，但要控制大小
- Tag 过滤是最轻量、最常见的过滤方式

---

## Day 3：集群消费、广播消费、消费重试、死信队列

Day 3 主要是理解不同消费模型和异常处理机制。

### 1. 消费模式测试生产者 `ConsumeModeProducer`

功能：

- 向 `Day3ConsumeTopic` 连续发送 10 条消息
- 用于测试“集群模式”和“广播模式”表现差异

代码示例：

```java
for (int i = 0; i < 10; i++) {
    Message msg = new Message(
        "Day3ConsumeTopic",
        "TestTag",
        ("测试消息 - " + i).getBytes("UTF-8")
    );
    producer.send(msg);
}
```

### 2. 集群消费 `ClusteringConsumer`

功能：

- 设置 `MessageModel.CLUSTERING`
- 同一消费组下多个实例共同分摊消息

代码示例：

```java
consumer.setMessageModel(MessageModel.CLUSTERING);
consumer.subscribe("Day3ConsumeTopic", "*");
```

特点：

- 一条消息只会被组内某一个消费者消费
- 适合绝大多数业务系统

### 3. 广播消费 `BroadcastingConsumer`

功能：

- 设置 `MessageModel.BROADCASTING`
- 同一消费组中的每个消费者都会收到全部消息

代码示例：

```java
consumer.setMessageModel(MessageModel.BROADCASTING);
consumer.subscribe("Day3ConsumeTopic", "*");
```

特点：

- 每个实例都消费全量消息
- 适合配置同步、缓存刷新、系统通知

### 4. 重试测试生产者 `RetryProducer`

功能：

- 向 `Day3RetryTopic` 发送一条重试测试消息

代码示例：

```java
Message msg = new Message(
    "Day3RetryTopic",
    "RetryTag",
    "测试重试消息".getBytes("UTF-8")
);
producer.send(msg);
```

### 5. 重试消费者 `RetryConsumer`

功能：

- 消费组名为 `demo-retry-group`
- 设置最大重试次数为 3
- 让消息前两次失败，第三次成功

代码示例：

```java
consumer.setMaxReconsumeTimes(3);

if (reconsumeTimes < 2) {
    return ConsumeConcurrentlyStatus.RECONSUME_LATER;
} else {
    return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
}
```

说明：

- `msg.getReconsumeTimes()` 可以拿到当前消息已重试次数
- 返回 `RECONSUME_LATER` 后，RocketMQ 会按默认重试间隔继续投递

### 6. 死信队列消费者 `DLQConsumer`

功能：

- 订阅 `%DLQ%demo-retry-group`
- 查看进入死信队列的消息
- 打印原始 Topic、内容、重试次数、消息 ID

代码示例：

```java
consumer.subscribe("%DLQ%demo-retry-group", "*");

System.out.println("原始Topic: " + msg.getProperty("REAL_TOPIC"));
System.out.println("消息内容: " + body);
System.out.println("重试次数: " + msg.getReconsumeTimes());
System.out.println("消息ID: " + msg.getMsgId());
```

适用场景：

- 人工排查失败消息
- 持久化失败记录
- 告警与补偿处理

### 7. Day 3 重点结论

- 集群消费解决的是“分摊消费压力”
- 广播消费解决的是“每个实例都要收到”
- 重试依赖返回值控制
- 死信队列是“多次重试后仍失败”的兜底机制

---

## Day 4：事务消息

Day 4 是 RocketMQ 中非常重要的高级能力，用来保证“本地事务”和“消息投递”的一致性。

### 1. 事务消息生产者 `TransactionProducer`

功能：

- 创建 `TransactionMQProducer`
- 注册 `TransactionListener`
- 在 `executeLocalTransaction` 中执行本地事务
- 在 `checkLocalTransaction` 中处理 Broker 回查
- 示例里用 `orderId` 的奇偶数模拟成功或失败

代码示例 1：发送事务消息

```java
TransactionMQProducer producer = new TransactionMQProducer("demo-transaction-group");
producer.setNamesrvAddr("localhost:9876");

TransactionSendResult result = producer.sendMessageInTransaction(msg, i);
```

代码示例 2：执行本地事务

```java
producer.setTransactionListener(new TransactionListener() {
    @Override
    public LocalTransactionState executeLocalTransaction(Message msg, Object arg) {
        Integer orderId = (Integer) arg;
        boolean success = orderId % 2 == 0;
        return success
            ? LocalTransactionState.COMMIT_MESSAGE
            : LocalTransactionState.ROLLBACK_MESSAGE;
    }

    @Override
    public LocalTransactionState checkLocalTransaction(MessageExt msg) {
        Boolean result = localTransactionMap.get(msg.getTransactionId());
        if (result == null) {
            return LocalTransactionState.UNKNOW;
        }
        return result
            ? LocalTransactionState.COMMIT_MESSAGE
            : LocalTransactionState.ROLLBACK_MESSAGE;
    }
});
```

示例逻辑：

- 偶数订单提交事务消息
- 奇数订单回滚事务消息

### 2. 事务消息消费者 `TransactionConsumer`

功能：

- 订阅 `Day4TransactionTopic`
- 只会消费已经提交成功的事务消息

代码示例：

```java
consumer.subscribe("Day4TransactionTopic", "*");
consumer.registerMessageListener(new MessageListenerConcurrently() {
    @Override
    public ConsumeConcurrentlyStatus consumeMessage(
            List<MessageExt> msgs,
            ConsumeConcurrentlyContext context) {

        for (MessageExt msg : msgs) {
            String body = new String(msg.getBody());
            System.out.printf("收到事务消息: %s, MsgId=%s%n",
                body, msg.getMsgId());
        }
        return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
    }
});
```

### 3. 事务消息执行流程

1. 生产者先发半消息
2. Broker 暂时不让消费者看到这条消息
3. 生产者执行本地事务
4. 生产者提交或回滚事务状态
5. Broker 对已提交消息开放消费
6. 如果状态不明确，Broker 发起事务回查

### 4. Day 4 重点结论

- 事务消息不是“数据库事务”，而是“消息与本地事务一致性”方案
- 核心在 `executeLocalTransaction()` 和 `checkLocalTransaction()`
- 本地事务状态必须可查询、可恢复

---

## Day 5：订单实战与最佳实践

Day 5 把前面几天的能力组合成一个订单场景。

### 1. 订单实体 `Order`

功能：

- 定义订单模型
- 包含订单 ID、用户 ID、商品名、金额、状态、创建时间

代码示例：

```java
Order order = new Order(
    1L,
    1001L,
    "商品1",
    new BigDecimal("99.99")
);
order.setStatus("CREATED");
```

状态字段说明：

- `CREATED`
- `PAID`
- `COMPLETED`
- `CANCELLED`

### 2. 订单生产者 `day5/producer/OrderProducer`

这个类是 Day 5 的核心，体现了“生产者最佳实践”。

#### 功能 A：生产者初始化

功能：

- 配置超时
- 配置同步/异步重试次数
- 配置最大消息大小

代码示例：

```java
producer = new DefaultMQProducer("order-producer-group");
producer.setNamesrvAddr("localhost:9876");
producer.setSendMsgTimeout(3000);
producer.setRetryTimesWhenSendFailed(2);
producer.setRetryTimesWhenSendAsyncFailed(2);
producer.setMaxMessageSize(4 * 1024 * 1024);
producer.start();
```

#### 功能 B：发送订单流程消息 `sendOrderMessage`

功能：

- 发送 `OrderTopic`
- 用 Tag 区分 `CREATED`、`PAID`、`COMPLETED`
- 用 Key 跟踪订单
- 用顺序消息保证同一订单流程有序

代码示例：

```java
Message msg = new Message(
    "OrderTopic",
    action,
    content.getBytes(StandardCharsets.UTF_8)
);
msg.setKeys("ORDER_" + order.getOrderId());

SendResult result = producer.send(msg, new MessageQueueSelector() {
    @Override
    public MessageQueue select(List<MessageQueue> mqs, Message msg, Object arg) {
        Long orderId = (Long) arg;
        int index = (int) (orderId % mqs.size());
        return mqs.get(index);
    }
}, order.getOrderId());
```

这里复用了 Day 2 的顺序消息思想，但放到了真实订单场景里。

#### 功能 C：发送订单超时检查消息 `sendDelayMessage`

功能：

- 发送到 `OrderTimeoutTopic`
- Tag 为 `TIMEOUT_CHECK`
- 使用延迟级别 16，表示 30 分钟后检查

代码示例：

```java
Message msg = new Message(
    "OrderTimeoutTopic",
    "TIMEOUT_CHECK",
    content.getBytes(StandardCharsets.UTF_8)
);
msg.setKeys("ORDER_TIMEOUT_" + order.getOrderId());
msg.setDelayTimeLevel(16); // 30分钟后检查
producer.send(msg);
```

#### 功能 D：模拟完整订单链路 `main`

功能：

- 创建 3 个订单
- 每个订单按顺序发送：
  - `CREATED`
  - 延迟检查消息
  - `PAID`
  - `COMPLETED`

代码示例：

```java
order.setStatus("CREATED");
orderProducer.sendOrderMessage(order, "CREATED");

orderProducer.sendDelayMessage(order);

order.setStatus("PAID");
orderProducer.sendOrderMessage(order, "PAID");

order.setStatus("COMPLETED");
orderProducer.sendOrderMessage(order, "COMPLETED");
```

### 3. 订单消费者 `day5/consumer/OrderConsumer`

这个类体现了“消费者最佳实践”。

#### 功能 A：消费者初始化

功能：

- 设置消费线程数范围
- 设置批量消费大小
- 设置最大重试次数
- 订阅订单主题

代码示例：

```java
consumer = new DefaultMQPushConsumer("order-consumer-group");
consumer.setNamesrvAddr("localhost:9876");
consumer.setConsumeFromWhere(ConsumeFromWhere.CONSUME_FROM_FIRST_OFFSET);
consumer.setConsumeThreadMin(5);
consumer.setConsumeThreadMax(20);
consumer.setConsumeMessageBatchMaxSize(1);
consumer.setMaxReconsumeTimes(3);
consumer.subscribe("OrderTopic", "*");
```

#### 功能 B：顺序消费订单消息

功能：

- 使用 `MessageListenerOrderly`
- 保证同一订单状态流转顺序

代码示例：

```java
consumer.registerMessageListener(new MessageListenerOrderly() {
    @Override
    public ConsumeOrderlyStatus consumeMessage(
            List<MessageExt> msgs,
            ConsumeOrderlyContext context) {

        for (MessageExt msg : msgs) {
            String body = new String(msg.getBody(), "UTF-8");
            String keys = msg.getKeys();
            String tags = msg.getTags();
            System.out.printf("Keys=%s, Tag=%s, Content=%s%n", keys, tags, body);
        }
        return ConsumeOrderlyStatus.SUCCESS;
    }
});
```

#### 功能 C：幂等性检查 `isDuplicate`

功能：

- 判断消息是否重复消费
- 当前源码里只是占位实现，始终返回 `false`

代码示例：

```java
private boolean isDuplicate(String msgId) {
    return false;
}
```

实际项目建议：

- Redis 去重
- 数据库唯一约束
- 业务表状态机控制

#### 功能 D：记录已处理消息 `recordMessageId`

功能：

- 当前源码预留了“记录消息 ID”的扩展点

代码示例：

```java
private void recordMessageId(String msgId) {
    // 实际项目应落库或存 Redis
}
```

#### 功能 E：订单业务处理 `processOrder`

功能：

- 根据 Tag 执行业务分支
- 支持 `CREATED`、`PAID`、`COMPLETED`

代码示例：

```java
private void processOrder(String action, String content) {
    switch (action) {
        case "CREATED":
            System.out.println("  -> 处理订单创建");
            break;
        case "PAID":
            System.out.println("  -> 处理订单支付");
            break;
        case "COMPLETED":
            System.out.println("  -> 处理订单完成");
            break;
        default:
            System.out.println("  -> 未知操作");
    }
}
```

#### 功能 F：异常处理

功能：

- 消费异常时挂起当前队列，稍后重试

代码示例：

```java
catch (Exception e) {
    System.err.println("消费失败: " + e.getMessage());
    return ConsumeOrderlyStatus.SUSPEND_CURRENT_QUEUE_A_MOMENT;
}
```

### 4. 订单超时消费者 `OrderTimeoutConsumer`

功能：

- 监听 `OrderTimeoutTopic`
- 处理延迟到达的订单超时检查消息
- 模拟“订单未支付则取消”

代码示例：

```java
consumer.subscribe("OrderTimeoutTopic", "*");

consumer.registerMessageListener(new MessageListenerConcurrently() {
    @Override
    public ConsumeConcurrentlyStatus consumeMessage(
            List<MessageExt> msgs,
            ConsumeConcurrentlyContext context) {

        for (MessageExt msg : msgs) {
            String body = new String(msg.getBody());
            System.out.printf("【超时检查】%s%n", body);
            System.out.println("  -> 查询订单支付状态");
            System.out.println("  -> 订单未支付，执行取消操作");
        }
        return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;
    }
});
```

适用场景：

- 订单 30 分钟未支付自动取消
- 自动释放库存
- 自动恢复优惠券、资格等资源

### 5. Day 5 重点结论

- 生产者端要配置超时、重试、最大消息大小
- 消费者端要控制线程数、重试次数、异常处理方式
- 同一订单必须用顺序消息保证流程一致
- 幂等是业务消费端必须补上的能力
- 延迟消息很适合做订单超时关闭

---

## 五天学习主线

### Day 1 学会了什么

- RocketMQ 最基础的生产与消费
- 同步、异步、单向三种发送方式
- PushConsumer 的基本使用

### Day 2 学会了什么

- 顺序消息如何保证同一业务键有序
- 延迟消息如何做超时检查
- 批量消息如何提吞吐
- Tag 如何做轻量过滤

### Day 3 学会了什么

- 集群模式与广播模式的差异
- 消费失败如何重试
- 重试失败如何进入死信队列

### Day 4 学会了什么

- 本地事务和消息投递如何保证一致性
- Broker 回查事务状态的机制

### Day 5 学会了什么

- 如何把顺序消息、延迟消息、消费幂等、异常处理组合成订单场景
- 如何从“功能示例”过渡到“工程实践”
