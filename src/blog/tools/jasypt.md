---
title: Jasypt
icon: jiami
order: 3
description: 适用于spirng项目中配置文件的敏感数据
category:
  - Tool
tag:
  - jasypt 
---
# jasypt加密

> Jasypt Spring Boot 为 spring boot 应用程序中的属性源提供加密支持，出于安全考虑，Spring boot 配置文件中的敏感信息通常需要对它进行加密/脱敏处理，尽量不使用明文，要实现这一点，办法有很多，自己手动对敏感信息进行加解密也是可以的

依赖
```xml
    <dependency>
        <groupId>com.github.ulisesbocchio</groupId>
        <artifactId>jasypt-spring-boot-starter</artifactId>
        <version>---</version>
    </dependency>
```
简单使用
```java
    @Autowired
    BasicTextEncryptor ba;

    @Test
    void SimpleTest() {
        ba.setPassword("hh");// 设置密钥
        System.out.println(ba.encrypt("root"));//加密
        System.out.println(ba.encrypt("123456"));//加密
        System.out.println(ba.decrypt("837BpgX2vWwq/Ysmzs6Ucg=="));//解密
    }
``` 
配置
```yml
spring:
  datasource:
    name: defaultDataSource
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/quartz?serverTimezone=Asia/Shanghai&useSSL=false&useUnicode=true&allowPublicKeyRetrieval=true
    username: ENC(jzMNMTaZzF0uxnFstWttUg==)
    password: ENC(aRki+PG956fgx9vyP09p9A==)
```
解密
1. 配置文件中使用`不推荐`
```yml
jasypt:
  encryptor:
    password: hh
```
2. 环境配置
java -jar xxxxx.jar -Djasypt.encryptor.password=hh