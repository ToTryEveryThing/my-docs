---
title: RabbitMQ
icon: sitemap
order: 3
category:
  - 微服务
tag:
  - Markdown
---

# RabbitMQ

> 安装地址 [Docker安装RabbitMQ详细步骤 - 逊老头 - 博客园 (cnblogs.com)](https://www.cnblogs.com/Aamir-Ye/p/16832374.html)
>  学习地址 [MQ的引言和不同MQ的特点_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1dE411K7MG?p=7&vd_source=f8821730ff8a13ec89104c8629e6d42b)

## simple简单模式
![study](https://images.beink.cn/study/yXPg2WxAvPSWeEtqSwEX5.png)

> 1. 消息产生者将消息放入队列
> 2. 消息的消费者(consumer) 监听(while) 消息队列,如果队列中有消息,就消费掉,消息被拿走后,自动从队列中删除(隐患 消息可能没有被消费者正确处理,已经从队列中消失了,造成消息的丢失)应用场景:聊天(中间有一个过度的服务器;p端,c端)

#### 生产消息

```java
//生产者
    @Test
    void send() throws IOException, TimeoutException {
//        创建MQ的连接工厂对象 
        ConnectionFactory connectionFactory = new ConnectionFactory();
//        设置连接mq主机
        connectionFactory.setHost("127.0.0.1");
//        端口号
        connectionFactory.setPort(5672);
//        设置连接哪一个虚拟主机
        connectionFactory.setVirtualHost("/ems");
//         设置用户名和密码
        connectionFactory.setUsername("ems");
        connectionFactory.setPassword("ems");
//        获取连接对象
        Connection connection = connectionFactory.newConnection();
//        获取连接中的通道
        Channel channel = connection.createChannel();
//          通道绑定对应的消息队列
//        s：队列名称  b:队列是否持久化  b1:是否独占队列(其他的连接不可用)
//        b2: 是否消费结束后自动删除  map:
        channel.queueDeclare("hello",false,false,false,null);
//       发布消息
//        s： 交换机名称 s1:通道名称 b: MessageProperties.MINIMAL_PERSISTENT_BASIC（ 重启消息也在 )
//       最后：内容
        channel.basicPublish("","hello",null,"hello rabbit".getBytes());

        channel.close();
        connection.close();

    }
```

#### 消费消息

```java

//    消费者
    @Test
    void getMessage() throws IOException, TimeoutException {
//        创建MQ的连接工厂对象
        ConnectionFactory connectionFactory = new ConnectionFactory();
//        设置连接mq主机
        connectionFactory.setHost("127.0.0.1");
//        端口号
        connectionFactory.setPort(5672);
//        设置连接哪一个虚拟主机
        connectionFactory.setVirtualHost("/ems");
//         设置用户名和密码
        connectionFactory.setUsername("ems");
        connectionFactory.setPassword("ems");
//        获取连接对象
        Connection connection = connectionFactory.newConnection();
//        获取连接中的通道
        Channel channel = connection.createChannel();
//          通道绑定对应的消息队列
//        s：队列名称  b:队列是否持久化  b1:是否独占队列(其他的连接不可用)
//        b2: 是否消费结束后自动删除  map:
        channel.queueDeclare("hello",false,false,false,null);
//       消费消息
//        s： 交换机名称 s1:开始消息的自动确认机制 最后：消费时的回调接口
        channel.basicConsume("hello",true, new DefaultConsumer(channel){
          
            @Override
            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {
                System.out.println("new String (body) = " + new String (body));
            }
            
        });

      //不关闭 为了一直消费信息
       // channel.close();
       // connection.close();

    }
```

#### 实现工具类

```java
public class RabbitMQConnection {

    private static ConnectionFactory connectionFactory;
//静态代码块  只执行一次
    static {
        connectionFactory = new ConnectionFactory();
        connectionFactory.setHost("127.0.0.1");        //        设置连接mq主机
        connectionFactory.setPort(5672);//        端口号
        connectionFactory.setVirtualHost("/ems");//        设置连接哪一个虚拟主机
        connectionFactory.setUsername("ems");//         设置用户名和密码
        connectionFactory.setPassword("ems");
    }
//    获取 连接对象方法
    public static Connection getConnection() throws IOException, TimeoutException {
//        获取连接对象
        return connectionFactory.newConnection();
    }
//    关闭通道和连接
    public void closeChannelAndConnection(Connection con, Channel channel){
        try {
           if(con!=null)con.close();
           if(channel!=null)channel.close();
        } catch (IOException | TimeoutException e) {
            e.printStackTrace();
        }
    }
}
```
## 任务模型

![study](https://images.beink.cn/study/WK27DmlxzPPOTI-buJtnM.png)

> 两个消费者  消费同一个队列  默认会平均分配内容 叫做循环

> 目前要求能者多劳！！！

- 设置通道一次只能消费一个消息
- 关闭消息的自动确认，开始手动确认消息
#### Consumer
```java
public class consumer2 {
    public static void main(String[] args) throws IOException, TimeoutException {
        
        Connection connection = RabbitMQConnection.getConnection();
        Channel channel = connection.createChannel();
        channel.queueDeclare("word",false,false,false,null);
        channel.basicQos(1);//        每次消费一个
        // false  关闭自动确定
        channel.basicConsume("word",false, new DefaultConsumer(channel){
            @SneakyThrows
            @Override
            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {
                    Thread.sleep(1000);//模拟执行的漫
                System.out.println("new String (body) = " + new String (body));
                /**
                 * 参数
                 * - 手动确认的表示
                 * -  false  是否开启多个消息同时确认
                 */
                channel.basicAck(envelope.getDeliveryTag(),false);
            }
        });
    }
}
```
## 广播
![Description](https://www.rabbitmq.com/img/tutorials/exchanges.png)
流程如下：

- 有多个消费者
-  每个**消费者有自己的队列**
- 每个队列都绑定了交换机
- 生产者只能向交换机发送消息，再有交换机发给队列，生产者无权决定
- 交换机吧消息发给和自己绑定的队列
- 队列中的消费者都可以拿到消息

#### 生产者

```java
public class producer {

    public static void main(String[] args) throws IOException, TimeoutException {
//        创建连接对象
        Connection connection = RabbitMQConnection.getConnection();
        Channel channel = connection.createChannel();
//      将通道声明到交换机 (交换机名称，类型)
        channel.exchangeDeclare("one","fanout");
        channel.basicPublish("one","",null,"hello world".getBytes());
        channel.close();
        connection.close();
    }
}
```

#### 消费者

```java
public class consumerOne {
    public static void main(String[] args) throws IOException, TimeoutException {
        Connection connection = RabbitMQConnection.getConnection();
        Channel channel = connection.createChannel();
//      通道绑定交换机
        channel.exchangeDeclare("one","fanout");
//      临时队列
        String queue = channel.queueDeclare().getQueue();
//      交换机和队列绑定
        channel.queueBind(queue,"one","");
//        消费消息
        channel.basicConsume(queue,true,new DefaultConsumer(channel){
            @Override
            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {
                System.out.println("new String(body) = " + new String(body));
            }
        });
    }
}
```
## 路由模型
#### 直连
![Description](https://www.rabbitmq.com/img/tutorials/python-four.png)
> 在fanout的模式下，一条消息，会被订阅的队列消费。但有时我们希望不同的消息被不同的队列消费，
>
> 此时就用到了 Direct类型的Exchange

- 队列与交换机绑定，不再是任意绑定了，而是要指定一个`RoutingKey`(路由key)
- 消息 的发送方在向exchang发送消息时，也必须要指定一个`RoutingKey`
- Exchange在发送消息时，会根据指定的RoutingKey进行判断，只有队列的`RoutingKey`与消息的`RoutingKey`完全一致，才会收到消息

#### 生产者

```java
public class producer {

    public static void main(String[] args) throws IOException, TimeoutException {
        Connection connection = RabbitMQConnection.getConnection();
        Channel channel = connection.createChannel();
        channel.exchangeDeclare("name_direct","direct");
        String RoutingKey = "warn";
        channel.basicPublish("name_direct",
                RoutingKey,null,
                "这是direct发布于的".getBytes());
        channel.close();
        connection.close();
    }
}
```

#### 消费者

```java
public class consumerOne {
    public static void main(String[] args) throws IOException, TimeoutException {
        Connection connection = RabbitMQConnection.getConnection();
        Channel channel = connection.createChannel();
//      通道绑定交换机
        channel.exchangeDeclare("name_direct","direct");
//      临时队列
        String queue = channel.queueDeclare().getQueue();
//      交换机和队列绑定和 RoutingKey
        channel.queueBind(queue,"name_direct","error");
        channel.queueBind(queue,"name_direct","info");
        channel.queueBind(queue,"name_direct","warn");
//        消费消息
        channel.basicConsume(queue,true,new DefaultConsumer(channel){
            @Override
            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {
                System.out.println("error " + new String(body));
            }
        });
    }
}
```

```java
public class consumerTwo {
    public static void main(String[] args) throws IOException, TimeoutException {
        Connection connection = RabbitMQConnection.getConnection();
        Channel channel = connection.createChannel();
//      通道绑定交换机
        channel.exchangeDeclare("name_direct","direct");
//      临时队列
        String queue = channel.queueDeclare().getQueue();
//      交换机和队列绑定和 RoutingKey
        channel.queueBind(queue,"name_direct","warn");
//        消费消息
        channel.basicConsume(queue,true,new DefaultConsumer(channel){
            @Override
            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {
                System.out.println("info " + new String(body));
            }
        });
    }
}

```

#### 动态
![Description](https://www.rabbitmq.com/img/tutorials/python-five.png)

> Topic类型的`Exchange`与`Direct `相比，都是可以根据`Routinghey`把消息路由到不同的队列。只不过`Topic `类型Exchange可以让队列在绑定Routing key的时候使用通配符!这种模型Routingkey一般都是由一个或多个单词组成，多个单词之间以`".	"`分割，例如:`item.insert`

- `*` 匹配不多不少恰好一个单词

- > `admin.*` --> `admin.hh.abc` | `admin.hh`

- `#` 匹配一个或多个单词

- > `admin.#` --> `admin.hh`

#### 代码

```java
public class producer {
    public static void main(String[] args) throws IOException, TimeoutException {
        Connection connection = RabbitMQConnection.getConnection();
        Channel channel = connection.createChannel();
        channel.exchangeDeclare("name_topic","topic");
        String RoutingKey = "warn.js";
        channel.basicPublish("name_direct",
                RoutingKey,null,
                "这是direct发布于的".getBytes());
        channel.close();
        connection.close();
    }
}
```

```java
public class consumerOne {
    public static void main(String[] args) throws IOException, TimeoutException {
        Connection connection = RabbitMQConnection.getConnection();
        Channel channel = connection.createChannel();
//      通道绑定交换机
        channel.exchangeDeclare("name_topic","topic");
//      临时队列
        String queue = channel.queueDeclare().getQueue();
//      交换机和队列绑定和 RoutingKey
        channel.queueBind(queue,"name_topic","error.*"); //error.xxx  | error.aaa
        channel.queueBind(queue,"name_topic","info.#");//info.gag.agsdga | info.gas.gas.g.asg.
        channel.queueBind(queue,"name_topic","warn");
//        消费消息
        channel.basicConsume(queue,true,new DefaultConsumer(channel){
            @Override
            public void handleDelivery(String consumerTag, Envelope envelope, AMQP.BasicProperties properties, byte[] body) throws IOException {
                System.out.println("error " + new String(body));
            }
        });
    }
}
```
## spring boot 整合
```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-amqp</artifactId>
        </dependency>
```

```yml
spring:
  rabbitmq:
    host: 127.0.0.1
    port: 5672
    username: ems
    password: ems
    virtual-host: /ems
```

#### Test

```java
@SpringBootTest
public class rabbitMQTest {
    @Autowired
    private RabbitTemplate rabbitTemplate;

//    hello
    @Test
    void test(){
        rabbitTemplate.convertAndSend("hello","hello world");
    }

//  work
    @Test
    void work(){
        for (int i = 0; i < 10; i++) {
            rabbitTemplate.convertAndSend("work","hello work");
        }
    }

//fanout
    @Test
    void fanout(){
        rabbitTemplate.convertAndSend("fanout","","hello fanout");
    }

//    route
    @Test
    void direct(){
        rabbitTemplate.convertAndSend("direct","warn","hello direct");
    }

//    动态路由
    @Test
    void Topic(){
        rabbitTemplate.convertAndSend("topic","user.hh.gash","hello topic");
    }



}
```

#### 简单

```java
@Component //默认队列持久化 非独占 不是autodelete
@RabbitListener(queuesToDeclare = @Queue(value = "hello"))
public class RabbitMQ {
//    第一种模式
    @RabbitHandler
    public void recrive(String message){
        System.out.println("message = " + message);
    }
}
```

#### 任务

```java
@Component
public class workConsumer {
  //公平消费
    @RabbitListener(queuesToDeclare = @Queue("work"))
    public void work1(String message){
        System.out.println("message1 = " + message);
    }
    @RabbitListener(queuesToDeclare = @Queue("work"))
    public void work2(String message){
        System.out.println("message2 = " + message);
    }
}

```

#### 广播

```java
@Component
public class fanoutConsumer {

    @RabbitListener(bindings = {
            @QueueBinding(
                    value = @Queue,
                    exchange = @Exchange(value = "fanout",type = "fanout")
            )
    })
    public void fanout1(String message){
        System.out.println("message1 = " + message);
    }

    @RabbitListener(bindings = {
            @QueueBinding(
                    value = @Queue,
                    exchange = @Exchange(value = "fanout",type = "fanout")
            )
    })
    public void fanout2(String message){
        System.out.println("message2 = " + message);
    }
}

```

#### 静态路由

```java
@Component
public class routeConsumer {

    @RabbitListener(bindings = {
            @QueueBinding(
                    value = @Queue,
                    exchange = @Exchange(value = "direct",type = "direct"),
                    key = {"info","warn"}
            )
    })
    public void  route1(String message){
        System.out.println("message1 = " + message);
    }

 
    @RabbitListener(bindings = {
            @QueueBinding(
                    value = @Queue,
                    exchange = @Exchange(value = "direct",type = "direct"),
                    key = {"warn","message"}
            )
    })
    public void  route2(String message){
        System.out.println("message2 = " + message);
    }

}
```

#### 动态路由

```java
@Component
public class topicConsumer {

    @RabbitListener(bindings = {
            @QueueBinding(
                    value = @Queue,
                    exchange = @Exchange(value = "topic",type = "topic"),
                    key = {"user.*","user.#"}
            )
    })
    public void  topic1(String message){
        System.out.println("message1 = " + message);
    }


    @RabbitListener(bindings = {
            @QueueBinding(
                    value = @Queue,
                    exchange = @Exchange(value = "topic",type = "topic"),
                    key = {"user.*","message"}
            )
    })
    public void  topic2(String message){
        System.out.println("message2 = " + message);
    }

}
```
## 延迟队列
[安装插件以及使用](https://blog.csdn.net/coderyjz/article/details/107378451)
config
```java
@Configuration
public class TestDelayQueueConfig {


    public static final String DEAD_EXCHANGE = "delay_exchange";
    public static final String DEAD_QUEUE = "delay_queue";
    public static final String DEAD_ROUTING = "delay_key";


    @Bean
    public CustomExchange delayExchange() {
        Map<String, Object> args = new HashMap<String, Object>();
        args.put("x-delayed-type", "direct");
        return new CustomExchange(DEAD_EXCHANGE, "x-delayed-message", true, false, args);
    }

    /**
     * 延迟消息队列
     * @return
     */
    @Bean
    public Queue delayQueue() {
        return new Queue(DEAD_QUEUE, true);
    }

    @Bean
    public Binding deplyBinding() {
        return BindingBuilder
                .bind(delayQueue())
                .to(delayExchange())
                .with(DEAD_ROUTING)
                .noargs();
    }
}
```
#### 生产者
```java
@Component
public class DeplyProducer {

    @Resource
    RabbitTemplate rabbitTemplate;

    public void send(String msg, Integer delayTime){
//        MessageProperties messageProperties = new MessageProperties();
//        messageProperties.setDelay(delayTime);
//        Message message = new Message(msg.getBytes(), messageProperties);
//        rabbitTemplate.convertAndSend(DEAD_EXCHANGE, DEAD_ROUTING, message);
        rabbitTemplate.convertAndSend(DEAD_EXCHANGE, DEAD_ROUTING, msg,
                message1 -> {
                   message1.getMessageProperties().setDelay(delayTime);
                   return message1;}

                );
    }
}
```
#### 消费者
```java
@Component
public class DeplyConsumer {

    @RabbitListener(queues = DEAD_QUEUE)
    public void onMessage(String msg) {
        System.out.println("收到信息了  msg = " + msg);
    }
}
```
