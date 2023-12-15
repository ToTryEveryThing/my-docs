---
title: aliyun OSS
icon: image
order: 2
category:
  - 使用指南
tag:
  - Markdown
---

## Java 上传 aliyun OSS 

[阿里官方文档](https://help.aliyun.com/document_detail/32008.html)
[Java上传文件概述和文件下载](https://help.aliyun.com/document_detail/32013.html?spm=a2c4g.84796.0.0.65b05266v925WX)

---
####  使用RAM访问 更安全
:::danger
主账号AccessKey泄露会威胁您所有资源的安全。建议使用子账号（RAM用户）AccessKey进行操作，可以有效降低AccessKey泄露的风险。
:::

> ① [使用RAM用户访问密钥发起请求](https://help.aliyun.com/document_detail/375246.html)
>  ② "Action": [
        "oss:PutObject",
        "oss:ListObjects",
        "oss:DeleteObject"
      ],放行权限 上传/目录/删除 权限 
      ③ 跨域放行
     
#### 上传图片
```java
public List uploadObject(MultipartFile file) throws IOException {
        // Endpoint以华东1（杭州）为例，其它Region请按实际情况填写。
        String Endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
        // 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
        String AccessKeyId = "yourAccessKeyId";
        String AccessKeySecret = "yourAccessKeySecret";
        // 填写Bucket名称，例如examplebucket。
        String BucketName = "examplebucket";

        String originalFilename = file.getOriginalFilename();
        OSS  os = new OSSClientBuilder().build(
                Endpoint ,
                AccessKeyId ,
                AccessKeySecret );
        os.putObject(
                BucketName ,
                originalFilename,
                file.getInputStream()
        );
        os.shutdown();
        return getList();

    }
```
#### 目录列表
```java
public List getList(){
       OSS ossClient = new OSSClientBuilder().build(
                 Endpoint
                ,AccessKeyId
                ,AccessKeySecert);

        try {
            // 列举文件。如果不设置keyPrefix，则列举存储空间下的所有文件。如果设置keyPrefix，则列举包含指定前缀的文件。
            ObjectListing objectListing = ossClient.listObjects(Bucket);
            List<OSSObjectSummary> sums = objectListing.getObjectSummaries();
            ArrayList<String> list = new ArrayList<>();
            for (OSSObjectSummary s : sums) {
//                System.out.println("\t" + s.getKey());
                list.add(s.getKey());//返回所有的链接
            }
            return list;
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
        return null;
}
```
#### 删除图片
````java
public List deleteObject(String s){
//s为图片的名字
        OSS ossClient = new OSSClientBuilder().build(
                 Endpoint()
                ,AccessKeyId()
                ,AccessKeySecert());
        try {
            // 删除文件或目录。如果要删除目录，目录必须为空。
            ossClient.deleteObject(Bucket(), s);
            return this.getList();
        } catch (OSSException oe) {
            System.out.println("Caught an OSSException, which means your request made it to OSS, "
                    + "but was rejected with an error response for some reason.");
            System.out.println("Error Message:" + oe.getErrorMessage());
            System.out.println("Error Code:" + oe.getErrorCode());
            System.out.println("Request ID:" + oe.getRequestId());
            System.out.println("Host ID:" + oe.getHostId());
        } finally {
            if (ossClient != null) {
                ossClient.shutdown();
            }
        }
        return null;
    }
````

## 自定义 Starter ^[来自：https://juejin.cn/post/7124603507025379365]

### 介绍

大家在开发的过程中应该经常会看到各种各样的`Starter`

当我们需要集成某个功能的时候，`Spring`或是第三方都会提供一个`Starter`来帮助我们更简单的集成对应的功能到我们的`Spring Boot`项目中


### 准备

现在我们假定，我们实现了一个`A`类用于提供我们封装好的功能

```java
java复制代码public class A { 
    ...
}
```

一般情况下我们会使用`@Component`往`Spring`容器中注入实例，如下：

```java
java复制代码@Component
public class A { 
    ...
}
```

现在当我们要把`A`单独抽出来做成一个`Starter`时`@Component`就不太合适了，那么我们应该怎么实现呢，让我们先给我们的`Starter`取个名字吧哈哈哈

### 取名

首先我们要先确定我们的`Starter`的名字

`Spring`本身就有很多自带的`Starter`，比如：

- `spring-boot-starter-web`
- `spring-boot-starter-data-redis`
- `spring-boot-starter-websocket`
- `spring-cloud-starter-netflix-eureka-client`
- `spring-cloud-starter-openfeign`
- `spring-cloud-starter-gateway`

可以发现这些自带的`Starter`的名称格式都是`spring-boot-starter-xxx`或是`spring-cloud-starter-xxx`

另外我们也可以看到很多第三方库的`Starter`，比如：

- `redisson-spring-boot-starter`
- `mybatis-plus-boot-starter`

一般来说，第三方的`Starter`会把`starter`放后面，`xxx-spring-boot-starter`或是`xxx-boot-starter`或是`xxx-starter`

不过我个人习惯还是`xxx-spring-boot-starter`感觉更标准一点

所以现在就把我们要实现的`Starter`取名为`a-spring-boot-starter`

## 配置类

之前说`@Component`已经不太合适了，那么要怎么把`A`注入到`Spring`的容器中呢

答案是：`@Configuration`+`@Bean`，如下

```java
java复制代码@Configuration
public class AConfiguration { 
    
    @Bean
    public A a() {
        return new A();
    }
}
```

这个用法大家应该也是比较熟悉，一般在一个项目中也会有一些标记了`@Configuration`的配置类

只要`Spring`能够扫描到这个类，`A`实例就能被注入

如果这个配置类是写在我们自己的包下，那么`Spring`默认的扫描路径就能扫到

但是现在我们如果做成一个`Starter`，对应的包名可能就扫不到了

所以我们需要用另外的方式来导入这个配置类

### 导入方式

接下来就可以决定我们的`Starter`的导入方式了

常用的导入方式有两种：使用`@EnableXXX`或是`spring.factories`

我们经常能看到有些组件的会需要你添加`@EnableXXX`的注解来启用某个功能，比如：

- `@EnableDiscoveryClient`
- `@EnableFeignClients`

这种方式光引入包还不够，需要手动添加注解来启用

而使用`spring.factories`就只要引入包就可以直接生效了

这两种方式其实用哪种都一样，主要是看有没有必要额外配置一个注解

比如`@EnableFeignClients`这个注解是可以配置扫描路径的，所以额外添加一个注解更加合适（这里使用配置文件是不合适的，因为我们的包结构是确定的，如果配置在配置文件里面反而多余又容易写错）

##### 注解导入

我们先使用注解的方式来导入，定义一个`@EnableA`

```java
java复制代码@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Import(AConfiguration.class)
public @interface EnableA {

}
```

使用`@Import`注解导入`AConfiguration.class`就可以了

当我们需要集成这个功能的时候只要添加这个注解就行了

```java
java复制代码@EnableA
@SpringBootApplication
public class SampleApplication {

    public static void main(String[] args) {
        SpringApplication.run(SampleApplication.class, args);
    }
}
```

#### 注解参数

这个时候可能就有同学要问了，如果我的注解上有参数呢，上面的写法好像没办法拿到参数啊

接下来我们来解决这个问题

现在我们给`@EnableA`注解添加一个参数`enabled`，当`enabled`为`true`时导入`AConfiguration.class`，当`enabled`为`false`时不导入`AConfiguration.class`

```java
java复制代码@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Import(AConfiguration.class)
public @interface EnableA {

    boolean enabled() default true;
}
```

接着我们实现一个`ImportSelector`

```java
java复制代码public class AImportSelector implements ImportSelector {

    @Override
    public String[] selectImports(AnnotationMetadata metadata) {
        Map<String, Object> attributes = metadata
            .getAnnotationAttributes(EnableA.class.getName());
        boolean enabled = (boolean) attributes.get("enabled");
        if (enabled) {
            return new String[]{AConfiguration.class.getName()};
        } else {
            return new String[]{};
        }
    }
}
```

我们可以通过`ImportSelector`中提供给我们的`AnnotationMetadata`来获得`EnableA`中的属性`enabled`

当`enabled`为`true`时，我们返回`AConfiguration.class`的全限定名；当`enabled`为`false`时，返回空数组即可

最后我们将`@Import(AConfiguration.class)`改为`@Import(AImportSelector.class)`就行了

```java
java复制代码@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Import(AImportSelector.class)
public @interface EnableA {

    boolean enabled() default true;
}
```

当我们将`enabled`设置为`false`时，就不会配置`AConfiguration.class`了

```java
java复制代码@EnableA(enabled = false)
@SpringBootApplication
public class SampleApplication {

    public static void main(String[] args) {
        SpringApplication.run(SampleApplication.class, args);
    }
}
```

其实还有另一种方式也可以拿到注解的属性，那就是`ImportBeanDefinitionRegistrar`

```java
java复制代码public interface ImportBeanDefinitionRegistrar {

   default void registerBeanDefinitions(AnnotationMetadata importingClassMetadata, BeanDefinitionRegistry registry) {
   }
}
```

和`ImportSelector`不同的是，`ImportBeanDefinitionRegistrar`可以直接注册`BeanDefinition`

如果我们用`ImportBeanDefinitionRegistrar`来实现上面的功能大概就是这个样子

```java
java复制代码public class AImportBeanDefinitionRegistrar implements ImportBeanDefinitionRegistrar {

    @Override
    public void registerBeanDefinitions(AnnotationMetadata metadata, BeanDefinitionRegistry registry) {
        Map<String, Object> attributes = metadata
            .getAnnotationAttributes(EnableA.class.getName());
        boolean enabled = (boolean) attributes.get("enabled");
        if (enabled) {
            registry.registerBeanDefinition("a", new RootBeanDefinition(A.class));
        }
    }
}
```

然后同样的把`@Import(AConfiguration.class)`改为`@Import(AImportBeanDefinitionRegistrar.class)`就行了

```java
java复制代码@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Import(AImportBeanDefinitionRegistrar.class)
public @interface EnableA {

    boolean enabled() default true;
}
```

#### spring.factories导入

接下来我们使用`spring.factories`来导入配置（注解和`spring.factories`选择一种就可以啦）

我们需要在`resources`目录下新建一个`META-INF`目录，然后在`META-INF`目录下创建`spring.factories`文件

接着我们需要在`spring.factories`中将`AConfiguration.class`配置上去

```properties
properties复制代码org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.xxx.xxx.AConfiguration
```

一般情况下，如果是配置在`spring.factories`中的配置类都会取名`xxxAutoConfiguration`，所以我们在这里修改名称为`AAutoConfiguration`

最后在`spring.factories`中的配置

```properties
properties复制代码org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.xxx.xxx.AAutoConfiguration
```

这样当你的项目启动后，`Spring`就会自动读取`spring.factories`将`AAutoConfiguration(AConfiguration)`扫描进去了

### 配置文件

正常情况下，我们很有可能需要在`application.yml`或`application.properties`中配置一些参数

所以我们现在需要一个属性`a.enabled`来控制是否注入`A`

还需要一个属性`a.b.type`来配置`A`的某个字段

那么怎么在我们的`AAutoConfiguration`中获得这两个属性呢

大家可能会想，简单啊，用`@Value`不就好了？

虽然`@Value`确实能拿到配置文件中的值，但是有更好的方式

那就是用`@ConfigurationProperties`+`@EnableConfigurationProperties`

我们需要先定义一个`AProperties`

```java
java复制代码@Data
@ConfigurationProperties(prefix = "a")
public class AProperties {

    //映射 a.enabled;
    private boolean enabled = true;
    
    private B b = new B();
    
    @Data
    public static class B {
        
        //映射 a.b.type;
        private String type;
    }
}
```

同时给`AProperties`添加`ConfigurationProperties`注解并标记前缀为`a`

接着我们在`AAutoConfiguration`上添加`@EnableConfigurationProperties`就行了

```java
java复制代码@Configuration
@EnableConfigurationProperties(AProperties.class)
public class AConfiguration { 
    
    @Bean
    @ConditionalOnProperty(name = "a.enabled", havingValue = "true", matchIfMissing = true)
    public A a(AProperties properties) {
        String type = properties.getB().getType();
        return new A();
    }
}
```

我们可以通过`@ConditionalOnProperty`来根据`a.enabled`控制是否注入`A`

在方法参数中也可以直接注入`AProperties`对象，并且里面的属性已经根据配置文件绑定好了

### 自动提示

不知道大家有没有发现，`Spring`自带的配置是会有提示的，但是我们自定义的配置就没有

有没有什么办法让我们的`AProperties`也能自动提示呢

只要引入下面这个包就行啦

```gradle
gradle
复制代码annotationProcessor 'org.springframework.boot:spring-boot-configuration-processor'
xml复制代码<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-configuration-processor</artifactId>
  <optional>true</optional>
</dependency>
```

如果`AProperties`有改动需要重新编译才会生效哦

### 配置代理

`@Configuration`的`proxyBeanMethods`可以指定该配置中的方法是否进行代理，具体有什么作用呢

假设现在我们的`A`需要依赖`B`实例，那我们的配置可以这样写

```java
java复制代码@Configuration
public class AConfiguration { 
    
    @Bean
    public B b() {
        return new B();
    }
    
    @Bean
    public A a() {
        return new A(b());
    }
}
```

`@Configuration`的`proxyBeanMethods`默认是`true`，所以在`a()`中调用`b()`是会从`Spring`的容器中获得`B`实例

如果我们不启用方法代理可以这样写

```java
java复制代码@Configuration(proxyBeanMethods = false)
public class AConfiguration { 
    
    @Bean
    public B b() {
        return new B();
    }
    
    @Bean
    public A a(B b) {
        return new A(b);
    }
}
```

直接在方法参数中注入即可

不启用方法代理的情况下，如果直接调用方法，就是普通的方法调用，每调用一次就会新建一个`B`实例

### 配置依赖

接着之前的假设，`A`需要依赖`B`实例，但是现在`B`允许为`null`

那么之前的配置方式就不行了

```java
java复制代码@Configuration
public class AConfiguration { 
    
    @Bean
    public A a(B b) {
        return new A(b);
    }
}
```

如果直接在方法上注入`B`实例，就会报错找不到对应的`Bean`

这种情况下，我们可以使用`ObjectProvider`，如下：

```java
java复制代码@Configuration
public class AConfiguration { 
    
    @Bean
    public A a(ObjectProvider<B> bProvider) {
        return new A(bProvider.getIfUnique());
    }
}
```

### 条件装配

在我们写`Starter`的过程中，条件装配也是经常用到的功能

最常用的其实就是`@ConditionalOnMissingBean`了

我们可以这样用

```java
java复制代码@Configuration
public class AConfiguration { 
    
    @Bean
    @ConditionalOnMissingBean
    public A a() {
        return new A();
    }
}
```

当`Spring`发现当前已经存在`A`对应的实例时，就不会再注入这个配置中的`A`实例了

一般当我们重写了某个库中的某个组件后，该库中该组件的默认实现就不会生效了，便于我们扩展一些自定义的功能来替换默认实现

但是这个注解如果用不好也可能出现问题

假设现在我们的`A`有一个扩展类`A1`

我们来看下面的配置1

```java
java复制代码@Configuration
public class AConfiguration { 
    
    @Bean
    @ConditionalOnMissingBean
    public A1 a() {
        return new A1();
    }
}
```

`@ConditionalOnMissingBean`的判断逻辑是：当容器中存在`A1`类型的对象就不会再注入这个配置中的`A1`实例

接着我们再看下面的配置2

```java
java复制代码@Configuration
public class AConfiguration { 
    
    @Bean
    @ConditionalOnMissingBean
    public A a() {
        return new A1();
    }
}
```

`@ConditionalOnMissingBean`的判断逻辑是：当容器中存在`A`类型的对象就不会再注入这个配置中的`A1`实例

如果在这个时候，容器中存在`A2(A的另一个扩展类)`实例，配置1中的`A1`还是会被注入，配置2中`A1`不会被注入

因为`@ConditionalOnMissingBean`的缺省值是方法的返回类型，所以大家在使用时需要多加注意，保险起见可以指定`@ConditionalOnMissingBean`中的值，例如：

```java
java复制代码@Configuration
public class AConfiguration { 
    
    @Bean
    @ConditionalOnMissingBean(A.class)
    public A1 a() {
        return new A1();
    }
}
```

### 其他常用的条件注解

- `@ConditionalOnBean` 当对应的`Bean`存在时生效
- `@ConditionalOnClass` 当对应的`Class`存在时生效
- `@ConditionalOnMissingClass` 当对应的`Class`不存在时生效
- `@ConditionalOnProperty` 当对应的配置匹配时生效
- `@ConditionalOnWebApplication` 可以指定在`Servlet`或`Reactive`环境中生效

### 配置顺序

在某些情况下，我们可能会发现一些条件注解不生效

这个时候我们可以尝试指定配置顺序（并不保证能够解决所有的失效问题）

- `@AutoConfigureBefore` 在某个配置之前进行配置
- `@AutoConfigureAfter` 在某个配置之后进行配置
- `@AutoConfigureOrder` 指定配置顺序

不过这里需要注意这几个注解只能对自动配置生效，也就是需要定义在`spring.factories`中的配置

添加注解的类的可以是任意的配置类，但是注解中指定的类需要是`spring.factories`中的配置的类

------
