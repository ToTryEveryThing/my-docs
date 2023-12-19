---
title: Jasypt
icon: lock
category:
  - Tool
tag:
  - jasypt 
---
# jasypt加密
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