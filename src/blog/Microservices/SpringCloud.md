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

#### [基础使用](https://www.bilibili.com/video/BV1kH4y1S7wz?p=16&vd_source=f8821730ff8a13ec89104c8629e6d42b)

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

#### [连接池](https://www.bilibili.com/video/BV1kH4y1S7wz?p=17&spm_id_from=pageDriver&vd_source=f8821730ff8a13ec89104c8629e6d42b)

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

#### [最佳实践（优化）](https://www.bilibili.com/video/BV1kH4y1S7wz?p=18&spm_id_from=pageDriver&vd_source=f8821730ff8a13ec89104c8629e6d42b)

> 额外创建模块 用来写公用的`OpenFeign`

#### [日志](https://www.bilibili.com/video/BV1kH4y1S7wz?p=19&spm_id_from=pageDriver&vd_source=f8821730ff8a13ec89104c8629e6d42b)

## 网关

> 请求转发，身份校验。

### 启动

- 依赖

```xml
 <!--网关-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-gateway</artifactId>
</dependency>
<!--nacos discovery-->
<dependency>
    <groupId>com.alibaba.cloud</groupId>
    <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>
</dependency>
<!--负载均衡-->
<dependency>
    <groupId>org.springframework.cloud</groupId>
    <artifactId>spring-cloud-starter-loadbalancer</artifactId>
</dependency>
```

- 配置

```yml
server:
  port: 9090
spring:
  application:
    name: gateway
  cloud:
    nacos:
      discovery:
        server-addr: 127.0.0.1:8848
    gateway:
      routes:
        - id: item-service
          uri: lb://item-service
          predicates:
            - Path=/items/**,/search/**
        - id: user-service
          uri: lb://user-service
          predicates:
            - Path=/address/**,/user/**
```

### 路由属性

#### 路由断言

- Path   \- Path=/*/producterone/**
- Host   \- Host=**.ityouknow.com
- 请求方式   \- Method=GET
- 请求参数        \- Query=smile
- IP       \- RemoteAddr=192.168.1.1/24
- 时间    \- After=2018-01-20T06:06:06+08:00[Asia/Shanghai] ,\- Before=2017-01-20T17:42:47.789-07:00[America/Denver]
- Cookie  \- Cookie=ityouknow, kee.e
- Header \- Header=X-Request-Id, \d+

#### 路由过滤器

[filter](https://blog.csdn.net/MinggeQingchun/article/details/125554886?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-125554886-blog-127310614.235^v39^pc_relevant_anti_t3_base&spm=1001.2101.3001.4242.1&utm_relevant_index=3)

### 网关登录校验

#### GlobalFilter

```java
@Component
public class MyGlobalFilter  implements GlobalFilter , Ordered {


    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {

        //针对请求的过滤，拿到请求的header、url、参数等

        // HttpServletRequest  是web里面的
        // ServerHttpRequest   是webFlux里面（响应式）
        ServerHttpRequest request = exchange.getRequest();

        String path = request.getURI().getPath();
        System.out.println("path====" + path);

        HttpHeaders headers = request.getHeaders();
        System.out.println("headers====" + headers);

        String methodName = request.getMethod().name();
        System.out.println("methodName====" + methodName);

        //IPV4、IPV6地址
        String hostName = request.getRemoteAddress().getHostName();
        System.out.println("hostName====" + hostName);

        String ip = request.getHeaders().getHost().getHostString();
        System.out.println("ip====" + ip);



        return chain.filter(exchange);
    }


    /**
     * 设置权重，优先执行
     * @return
     */
    @Override
    public int getOrder(){
        return 0;
    }

}
```

#### 登录样例

```java
package com.hmll.gateway.filters;

import com.hmll.gateway.config.AuthProperties;
import com.hmll.gateway.util.JwtTool;
import lombok.RequiredArgsConstructor;
import org.apache.http.HttpStatus;
import org.springframework.cloud.gateway.filter.GatewayFilterChain;
import org.springframework.cloud.gateway.filter.GlobalFilter;
import org.springframework.core.Ordered;
import org.springframework.http.HttpHeaders;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;

import java.util.List;

/**
 * @author ToTryEveryThing
 * @date 2023/12/4 16:41
 * @Description
 */
@Component
@RequiredArgsConstructor
public class AuthGlobalFilter implements GlobalFilter, Ordered {

    private final AuthProperties authProperties;

    private final JwtTool jwtTool;

    private final AntPathMatcher antPathMatcher = new AntPathMatcher();

    @Override
    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {

        ServerHttpRequest request = exchange.getRequest();

        if(isExclude(request.getPath().toString())){
//            放行
            return chain.filter(exchange);
        }

        HttpHeaders headers = request.getHeaders();
        String token = null;
        List<String> authorization = headers.get("authorization");

        if(authorization != null && !authorization.isEmpty()){
            token = authorization.get(0);
        }
        Long userId = null;
        try {
             userId = jwtTool.parseToken(token);
        } catch (Exception e) {
            ServerHttpResponse response = exchange.getResponse();
            response.setStatusCode(org.springframework.http.HttpStatus.valueOf(HttpStatus.SC_UNAUTHORIZED));
            return response.setComplete();
        }

        System.out.println("userId = " + userId);

        System.out.println("headers====" + headers);


        return chain.filter(exchange);
    }

    private boolean isExclude(String path) {
        for (String pathPattern : authProperties.getExcludePaths()) {
            if(antPathMatcher.match(pathPattern,path))
                return true;
        }
        return false;
    }

    @Override
    public int getOrder() {
        return 0;
    }
}

```

### 网关传递信息

> 网关中拿到啊用户信息，网关可以把信息重新放入请求头中。

```java
        String userInfo = userId.toString();
        //设置信息
        ServerWebExchange build = exchange.mutate()
                .request(builder -> builder.header("user-info", userInfo))
                .build();
        //往后传递
        return chain.filter(build);
```

```java
    @GetMapping
    public List<CartVO> queryMyCarts(@RequestHeader(value = "user-info", required = false) String userinfo){
        System.out.println("userinfo = " + userinfo);
        return cartService.queryMyCarts();
    }
```

#### 使用线程存储数据

```java
public class UserContext {
    private static final ThreadLocal<Long> tl = new ThreadLocal<>();

    /**
     * 保存当前登录用户信息到ThreadLocal
     * @param userId 用户id
     */
    public static void setUser(Long userId) {
        tl.set(userId);
    }

    /**
     * 获取当前登录用户信息
     * @return 用户id
     */
    public static Long getUser() {
        return tl.get();
    }

    /**
     * 移除当前登录用户信息
     */
    public static void removeUser(){
        tl.remove();
    }
}

```

### OpenFeign传递

> 由于 oepnfeign 之间发送请求，不携带请求头，所有后续的微服务中，就没有用户信息

> openfiegn 提供了一个拦截器接口，所有的op发起的请求都会先调用拦截器处理请求

```java
public class config {
    @Bean
    public RequestInterceptor UserInfo (){
        return new RequestInterceptor() {
            @Override
            public void apply(RequestTemplate requestTemplate) {
                requestTemplate.header("user-info", String.valueOf(UserContext.getUser()));
            }
        };
    }
}
```

```java
@MapperScan("com.hmall.trade.mapper")
@EnableFeignClients(basePackages = "com.hmall.api.client",defaultConfiguration = config.class)
@SpringBootApplication
public class TradeApplication {
    public static void main(String[] args) {
        SpringApplication.run(TradeApplication.class, args);
    }
}
```

## 共享配置

> - 网关路由在配置文件中写死了，如果变更必须重启微服务
> - 某些业务配置在配置文件中写死了，每次修改都要重启服务
> - 每个微服务都有很多重复的配置，维护成本高

### 共享配置

1. 把每个服务中的公共配置抽取出来
2. 在nacos`配置管理`-`配置列表`中添加公共配置

```yaml
spring:
  datasource:
    url: jdbc:mysql://${hm.db.host:192.168.150.101}:${hm.db.port:3306}/${hm.db.database}
    driver-class-name: com.mysql.cj.jdbc.Driver
    username: ${hm.db.un:root} #没有配置则使用 root
    password: ${hm.db.pw:123} #没有配置则使用 123
mybatis-plus:
  configuration:
    default-enum-type-handler: com.baomidou.mybatisplus.core.handlers.MybatisEnumTypeHandler
  global-config:
    db-config:
      update-strategy: not_null
      id-type: auto
```

3. 不同的地方还是读取原来服务的`application.yaml`
4. 引入依赖

```xml
  <!--nacos配置管理-->
  <dependency>
      <groupId>com.alibaba.cloud</groupId>
      <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>
  </dependency>
  <!--读取bootstrap文件-->
  <dependency>
      <groupId>org.springframework.cloud</groupId>
      <artifactId>spring-cloud-starter-bootstrap</artifactId>
  </dependency>
```

5. 在相应服务中新建`bootstrap.yaml`

```yaml
spring:
  application:
    name: cart-service # 服务名称
  profiles:
    active: dev
  cloud:
    nacos:
      server-addr: 127.0.0.1:8848 # nacos地址
      config:
        file-extension: yaml # 文件后缀名
        shared-configs: # 共享配置
          - dataId: shared-jdbc.yaml # 共享mybatis配置
          - dataId: shared-log.yaml # 共享日志配置
          - dataId: shared-swagger.yaml # 共享日志配置
```

6. 重启

### 配置热跟新

> 具体的业务可能需要 随时调整，即不写死

1. 在nacos中添加配置文件

   - ```yaml
     hm: 
      cart:
      	maxItems: 4
     ```

   - ```Plain
     [服务名]-[spring.active.profile].[后缀名]
     ```

     - **`服务名`**：我们是购物车服务，所以是`cart-service`
     - **`spring.active.profile`**：就是spring boot中的`spring.active.profile`，可以省略，则所有profile共享该配置
     - **`后缀名`**：例如yaml
     

2. 在服务中添加配置 读取即可

```java
package com.hmall.cart.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Data
@Component
@ConfigurationProperties(prefix = "hm.cart")
public class CartProperties {
    private Integer maxAmount;
}

```

3. 使用

## 服务保护

### Sentinel

[Github](https://github.com/alibaba/Sentinel)

```
java -Dserver.port=8090 -Dcsp.sentinel.dashboard.server=localhost:8090 -Dproject.name=sentinel-dashboard -jar sentinel-dashboard.jar
```

```
java '-Dserver.port=8090' '-Dcsp.sentinel.dashboard.server=localhost:8090' '-Dproject.name=sentinel-dashboard' '-jar' sentinel-dashboard-X.X.X.jar
```

- 依赖

```xml
<!--sentinel-->
<dependency>
    <groupId>com.alibaba.cloud</groupId> 
    <artifactId>spring-cloud-starter-alibaba-sentinel</artifactId>
</dependency>
```

- 配置

```yml
spring:
  cloud: 
    sentinel:
      transport:
        dashboard: localhost:8090
      http-method-specify: true # 开启请求方式前缀
```

#### 请求限流

> 限制访问次数

#### 线程隔断

> 当一个业务接口响应时间长，而且并发高时，就可能耗尽服务器的线程资源，导致服务内的其它接口受到影响。所以我们必须把这种影响降低，或者缩减影响的范围。线程隔离正是解决这个问题的好办法。

#### 服务熔断

> 当下游服务因访问压力过大而响应变慢或失败，上游服务为了保护系统整体的可用性，可以暂时切断对下游服务的调用。

## 分布式事务
