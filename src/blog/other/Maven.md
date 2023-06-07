---
title: Maven
icon: clone
order: 2
category:
  - 使用指南
tag:
  - Markdown
---

## 安装
[下载地址](https://maven.apache.org/docs/history.html)
[中央仓库](https://mvnrepository.com/)
[配置本地仓库](https://www.bilibili.com/video/BV1Ah411S7ZE/?p=5&share_source=copy_web&vd_source=022da6ab90330725b8894f9c2e9a8cb0)
### 阿里镜像
```xml
<mirror>
     <id>alimaven</id>
      <mirrorOf>central</mirrorOf>
      <name>aliyun maven</name>
      <url>http://maven.aliyun.com/nexus/content/repositories/central/</url>
    </mirror>
```
## 简单命令
```
mvn compile        #编译
mvn clean          #清理
mvn test           #测试
mvn package        #打包
mvn install        #安装到本地仓库
```
## 依赖管理
### 依赖传递
>例如A依赖了B，B依赖了C和D，那么你就可以在A中，像主动依赖了C和D一样使用它们。并且传递的依赖是没有数量和层级的限制的，非常方便。

### 可选依赖
> 当别的项目引用这个jar包，`optional`为`true`时不让别人知道自己所用依赖
```xml
        <dependency>
            <groupId>joda-time</groupId>
            <artifactId>joda-time</artifactId>
            <version>2.9.9</version>
//          可选依赖
            <optional>true</optional>
        </dependency>
```
### 排除依赖
> 加入某个jar包依赖后，不想使用其中的某个依赖，使用坐标主动排除掉
```xml
<dependency>  
            <groupId>org.apache.struts</groupId>  
            <artifactId>struts2-core</artifactId>  
            <version>${struts.version}</version>  
            <exclusions>  
                <exclusion> <!-- we prefer our explicit version, though it should be the same -->  
                    <groupId>asm</groupId>  
                    <artifactId>asm</artifactId>  
                </exclusion>  
            </exclusions>  
        </dependency>  
<dependency>
    <groupId>asm</groupId>
    <artifactId>asm</artifactId>
    <version>3.3.1</version>
</dependency>
```
### 依赖范围
|scope|主代码|测试代码|打包|
|-|-|-|-|
|compile(默认)|Y|Y|Y|
|test||Y||
|provided|Y|Y||
|runtime|||Y|

####