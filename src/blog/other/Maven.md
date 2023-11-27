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
#### 简单命令
```
mvn compile        ##编译
mvn clean          ##清理
mvn test           ##测试
mvn package        ##打包
mvn install        ##安装到本地仓库
```
## 依赖管理

###### 依赖传递
>例如A依赖了B，B依赖了C和D，那么你就可以在A中，像主动依赖了C和D一样使用它们。并且传递的依赖是没有数量和层级的限制的，非常方便。

###### 可选依赖
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
###### 排除依赖
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
###### 依赖范围
|scope|主代码|测试代码|打包|
|-|-|-|-|
|compile(默认)|Y|Y|Y|
|test||Y||
|provided|Y|Y||
|runtime|||Y|


## 分模块
### pom
::: code-tabs#shell

@tab 父pom
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>maven-super</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <packaging>pom</packaging>
    <name>maven-super</name>
    <description>maven-super</description>

    <modules>
        <module>web-controller</module>
        <module>web-pojo</module>
        <module>web-parent</module>
    </modules>

    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.0.5</version>
    </parent>

    <properties>
        <java.version>17</java.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
        <spring-boot.version>3.0.2</spring-boot.version>
        <!--自定义属性-->
        <lombok.version>1.18.28</lombok.version>
    </properties>

<!--    子项目直接继承-->
    <dependencies>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

    </dependencies>

<!--    版本管理，子项目还需重新引入-->
    <dependencyManagement>
        <dependencies>

            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-dependencies</artifactId>
                <version>${spring-boot.version}</version>
                <type>pom</type>
                <scope>import</scope>
            </dependency>

            <dependency>
                <groupId>org.projectlombok</groupId>
                <artifactId>lombok</artifactId>
                <!--                引用属性-->
                <version>${lombok.version}</version>
            </dependency>
        </dependencies>
    </dependencyManagement>

</project>

```

@tab 子(pojo)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

<!--    继承maven-super-->
    <parent>
        <groupId>com.example</groupId>
        <artifactId>maven-super</artifactId>
        <version>0.0.1-SNAPSHOT</version>
    </parent>

<!--    <groupId>org.example</groupId> 可以省略 因为他可以从父亲继承-->
    <artifactId>web-pojo</artifactId>
    <version>1.0.0</version>

    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

<!--    因为父亲使用了<dependencyManagement> 所以还需要自己引入依赖-->
    <dependencies>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
                <configuration>
                    <source>17</source>
                    <target>17</target>
                    <encoding>UTF-8</encoding>
                </configuration>
            </plugin>
        </plugins>
    </build>

</project>
```
@tab 子(controller)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <parent>
        <groupId>com.example</groupId>
        <artifactId>maven-super</artifactId>
        <version>0.0.1-SNAPSHOT</version>
    </parent>

    <artifactId>web-controller</artifactId>
    <packaging>jar</packaging>

    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <dependency>
            <groupId>com.example</groupId>
            <artifactId>web-pojo</artifactId>
            <version>1.0.0</version>
        </dependency>
    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <version>3.8.1</version>
                <configuration>
                    <source>17</source>
                    <target>17</target>
                    <encoding>UTF-8</encoding>
                </configuration>
            </plugin>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <version>${spring-boot.version}</version>
                <configuration>
                    <mainClass>com.example.WebControllerApplication</mainClass>
                </configuration>
                <executions>
                    <execution>
                        <id>repackage</id>
                        <goals>
                            <goal>repackage</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>

</project>
```
:::
### 说明
-   `<dependencies>` 是直接依赖,在父工程配置了依赖,子工程会直接继承下来。
-  `<dependencyManagement>` 是统一管理依赖版本,不会直接依赖，还需要在子工程中引入所需依赖(无需指定版本)
- 各个模块之间引入坐标即可使用
## 多模块打包
### 正确流程
- 检查<font color="red">父模块</font>或者<font color="red">不是启动模块</font>是否加了依赖，如有，删除
```xml
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-maven-plugin</artifactId>
  <version>${spring-boot.version}</version>
```
- 找到<font color="red">非启动模块</font>添加依赖
```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.1</version>
            <configuration>
                <source>17</source>
                <target>17</target>
                <encoding>UTF-8</encoding>
            </configuration>
        </plugin>
    </plugins>
</build>
```
- 找到<font color="red">启动模块</font>添加打包依赖
```xml
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.1</version>
            <configuration>
                <source>17</source>
                <target>17</target>
                <encoding>UTF-8</encoding>
            </configuration>
        </plugin>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
            <version>${spring-boot.version}</version>
            <configuration>
                <mainClass>com.example.WebControllerApplication</mainClass>
            </configuration>
            <executions>
                <execution>
                    <id>repackage</id>
                    <goals>
                        <goal>repackage</goal>
                    </goals>
                </execution>
            </executions>
        </plugin>
    </plugins>
</build>
```
- 点击父模块的package即可打包
