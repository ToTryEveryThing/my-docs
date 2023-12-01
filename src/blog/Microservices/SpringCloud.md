---
title: Spring Cloud
icon: flag
order: 1
category:
  - 微服务
tag:
  - Markdown
---
# Spring Cloud

[飞书](https://b11et3un53m.feishu.cn/wiki/R4Sdwvo8Si4kilkSKfscgQX0niB) [bilibili](https://www.bilibili.com/video/BV1kH4y1S7wz?p=1&vd_source=f8821730ff8a13ec89104c8629e6d42b)



## 服务注册和发现

### nacos注册中心

#### nacos安装

- nacos.mysql

```
...
```

- custom.env

```env
PREFER_HOST_MODE=hostname
MODE=standalone
MYSQL_SERVICE_HOST=127.0.0.1
MYSQL_SERVICE_DB_NAME=nacos
MYSQL_SERVICE_PORT=3306
MYSQL_SERVICE_USER=root
MYSQL_SERVICE_PASSWORD=123456
MYSQL_SERVICE_DB_PARAM=characterEncoding=utf8&connectTimeout=1000&socketTimeout=3000&autoReconnect=true&useUnicode=true&useSSL=false&serverTimezone=Asia/Shanghai
```

- 运行

```
docker run -d \
--name nacos \
--env-file ./nacos/custom.env \
-p 8848:8848 \
-p 9848:9848 \
-p 9849:9849 \
--restart=always \
nacos/nacos-server:v2.1.0-slim
```

### 服务注册

1. 引入依赖

```xml
<!--        nacos 注册与发现-->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
        </dependency>
```

2. 配置

```yml
spring:
  application:
    name: item-service
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
```

### 服务发现

1. 引入依赖

```xml
<!--        nacos 注册与发现-->
        <dependency>
            <groupId>com.alibaba.cloud</groupId>
            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
        </dependency>
```

2. 配置

```yml
spring:
  application:
    name: item-service
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
```

3. 使用

```java
    private final DiscoveryClient discoveryClient;

//       根据服务名称拉取所有的服务
        List<ServiceInstance> instances = discoveryClient.getInstances("item-service");
//        负载均衡，随机给一个
        ServiceInstance instancs = instances.get(RandomUtil.randomInt(instances.size()));
//      拿到uri  (域名 + 端口)
        URI uri = instancs.getUri();

        ResponseEntity<List<ItemDTO>> response = restTemplate.exchange(
                uri + "/items?ids={ids}",
                HttpMethod.GET,
                null,
                new ParameterizedTypeReference<List<ItemDTO>>() {
                },
                Map.of("ids", CollUtils.join(itemIds, ","))

        );
```

## OpenFeign

### 基础使用[🚪](https://www.bilibili.com/video/BV1kH4y1S7wz?p=16&vd_source=f8821730ff8a13ec89104c8629e6d42b)

> 上面的代码 太多了，想简单点。。。
>
> 帮助我们优雅的发送请求

- 依赖

```xml
  <!--openFeign-->
  <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-openfeign</artifactId>
  </dependency>
  <!--负载均衡器-->
  <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-loadbalancer</artifactId>
  </dependency>
```

- 开启注解

```java
@EnableFeignClients
@SpringBootApplication
public class ItemApplication {
    public static void main(String[] args) {
        SpringApplication.run(ItemApplication.class, args);
    }
}
```

- 编写FeignClient

```java
@FeignClient("Item-service")
public interface ItemClient {

    @GetMapping("/items")
    List<ItemDTO> query(@RequestParam("ids") Collection<Long> ids);

}
```

- 使用

```java
    private final ItemClient itemClient;
    // 查询商品
    List<ItemDTO> items = itemClient.query(itemIds);
```

### 连接池[🚪](https://www.bilibili.com/video/BV1kH4y1S7wz?p=17&spm_id_from=pageDriver&vd_source=f8821730ff8a13ec89104c8629e6d42b)

> 默认每次发送，会重新创建请求，加一个连接池，减少创建次数

- 依赖

```xml
<!--OK http 的依赖 -->
<dependency>
  <groupId>io.github.openfeign</groupId>
  <artifactId>feign-okhttp</artifactId>
</dependency>
```

- 配置

```yml
feign:
  okhttp:
    enabled: true
```

### 最佳实践（优化）[🚪](https://www.bilibili.com/video/BV1kH4y1S7wz?p=18&spm_id_from=pageDriver&vd_source=f8821730ff8a13ec89104c8629e6d42b)

> 额外创建模块 用来写公用的`OpenFeign`

### 日志[🚪](https://www.bilibili.com/video/BV1kH4y1S7wz?p=19&spm_id_from=pageDriver&vd_source=f8821730ff8a13ec89104c8629e6d42b)







