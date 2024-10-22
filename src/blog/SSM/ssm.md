---
title: Spring SpringMVC
icon: openmoji:hot-springs
description: Spring框架基础及其在Web开发中的应用。
order: 5
category:
  - SSM
tag:
  - Spring SpringMVC
---
## Spring
[Spring-01-初识Spring_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Fi4y1S7ix?p=3&vd_source=f8821730ff8a13ec89104c8629e6d42b)
### IoC
> **Ioc—Inversion of Control**
>
> 一种思想。 创建对象、管理对象
>
> 一般对象都是直接通过new出来 ，交由IoC管理后，IoC容器来控制对象的创建
>
> 配置实在是多

pom.xml

```xml
<dependency>
<!--            1.导入-->
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>5.3.23</version>
</dependency>
```


applicationContext.xml

```XML
<!--    2.配置Bean--> 
<bean id="bookDao" class="com.beink.dao.Impl.bookDaoImpl"/>
<bean id="bookService" class="com.beink.service.Impl.bookServiceImpl"/>
```


Main.java

```java
public class Main {
    public static void main(String[] args) {
//        3.获取容器
         ApplicationContext atx = new ClassPathXmlApplicationContext("applicationContext.xml");
//        4. 获取bean
         bookDao bookDao = (bookDao) atx.getBean("bookDao");
         bookDao.save();
        //         等同于
         bookDao bookDao1 = new bookDaoImpl();
         bookDao1.save();
    }
}
```


#### Bean

被构造 调用的是无参构造

生命周期：

```java
    public void init(){
        System.out.println("init");
    }
    public void destory(){
        System.out.println("destory");
    }
```
> 配置
>    <bean init-method="init" destroy-method="destory"/>
>    或者 直接 implements InitializingBean, DisposableBean 同样效果


#### 依赖注入

#### setter

```java
.xml
<bean id="bookDao" class="com.beink.dao.Impl.bookDaoImpl">
    <property name="a" value="123"/>
    <property name="s" value="true"/>
</bean>

Impl.java
private String s;
private int a;
```


#### 构造器

```xml
<bean id="bookDao" class="com.beink.dao.Impl.bookDaoImpl">
     <constructor-arg name="a" value="6"/>
     <constructor-arg name="s" value="true"/>
</bean>
<bean id="bookService" class="com.beink.service.Impl.bookServiceImpl">
<!--red对应ID-->
    <constructor-arg name="bookdao" ref="bookDao"/>
</bean>
```


 依赖注入

```java
private bookDao book_dao;

public void setBookdao(bookDao bookdao){
    this.book_dao = bookdao;
}
```


一般 注入

```java
private String s;
private int a;

public bookDaoImpl(String s, int a) {
    this.s = s;
    this.a = a;
}
```


#### 集合注入

```xml
    <bean id="bookDao" class="com.beink.dao.Impl.bookDaoImpl">
        <property name="list">
            <array>
                <value>hello </value>
                <value>world</value>
            </array>
        </property>
        <property name="map">
            <map>
                <entry key="hello" value="world"></entry>
            </map>
        </property>
    </bean>
```


### 注解开发

> @Component("名字") 定义Bean
>
>  ---@Service
>
>  ---@Controller(同样效果 只是便于理解)
>
>  ---@Repository
>
> ```
> @Configuration 设置位配置类 类似于applicationContext.xml
> @ComponentScan("com.beink") 扫描路径 自动装配到spring的bean
> @Scope("singleton") 单例
> @PostConstruct 生命周期-初始化
> @PreDestroy  生命周期-销毁
> @Autowired 自动装配  === private bookDao bookdao = new bookDaoImpl();
> @Value("${name}") 简单类型注入 private String s;
> @PropertySource("xxx.yml") 数据源 内容--（name=hello world）
> ```

### 反射

[大白话说Java反射：入门、使用、原理 - 陈树义 - 博客园](https://www.cnblogs.com/chanshuyi/p/head_first_of_reflection.html)

[Java 反射（Reflection） | 菜鸟教程](https://www.runoob.com/java/java-reflection.html)

> 反射就是在运行时才知道要操作的类是什么，并且可以在运行时获取类的完整构造，并调用对应的方法。

**获取反射的 Class 对象**

- 使用 Class.forName 静态方法。当你知道该类的全路径名时，你可以使用该方法获取 Class 类对象。

```java
Class clz = Class.forName("java.lang.String");
```

- 使用 .class 方法。

> 这种方法只适合在编译前就知道操作的 Class。

```java
Class clz = String.class;
```

- 使用类对象的 getClass() 方法。

```java
String str = new String("Hello");
Class clz = str.getClass();
```

::: code-tabs#shell

@tab 访问字段

```java
Class<?> clazz = Person.class;
Field field = clazz.getDeclaredField("name");
field.setAccessible(true); // 如果字段是私有的，需要设置为可访问
Object value = field.get(personInstance); // 获取字段值
field.set(personInstance, "New Name"); // 设置字段值
```

@tab 调用方法

```java
Class<?> clazz = Person.class;
Method method = clazz.getMethod("sayHello");
method.invoke(personInstance);

Method methodWithArgs = clazz.getMethod("greet", String.class);
methodWithArgs.invoke(personInstance, "World");
```

@tab 获取构造函数

```java
Class<?> clazz = Person.class;
Constructor<?> constructor = clazz.getConstructor(String.class, int.class);
Object obj = constructor.newInstance("John", 30);
```
@tab  获取接口和父类

```java
Class<?> clazz = Person.class;

// 获取所有接口
Class<?>[] interfaces = clazz.getInterfaces();
for (Class<?> i : interfaces) {
    System.out.println("Interface: " + i.getName());
}

// 获取父类
Class<?> superClass = clazz.getSuperclass();
System.out.println("Superclass: " + superClass.getName());
```

@tab 示例
```java
import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Method;

public class ReflectionExample {

    public static void main(String[] args) throws Exception {
        // 获取 Class 对象
        Class<?> clazz = Person.class;
        
        // 创建对象
        Constructor<?> constructor = clazz.getConstructor(String.class, int.class);
        Object person = constructor.newInstance("John", 30);
        
        // 访问字段
        Field nameField = clazz.getDeclaredField("name");
        nameField.setAccessible(true);
        System.out.println("Name: " + nameField.get(person));
        
        // 修改字段
        nameField.set(person, "Doe");
        System.out.println("Updated Name: " + nameField.get(person));
        
        // 调用方法
        Method greetMethod = clazz.getMethod("greet", String.class);
        greetMethod.invoke(person, "World");
    }
}

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void greet(String message) {
        System.out.println(name + " says: " + message);
    }
}
```

:::


### AOP

> **不改变原始设计 将功能增强**

#### 举例

```java
@Component
@Aspect
//这是个aop
public class MyAop {
//    在哪里执行
    @Pointcut("execution(void com.beink.dao.bookDao.save())")
    private void ss(){}
    
//    绑定
    @AfterReturning("ss()")
    public void set(){
        System.out.println("AOP");
    }
}
```


### 切入点表达式

- 定义切入点

> 类型都可以使用

 ```java
 //使用*通配符即可
 @Pointcut("execution( * * com.beink.dao.*)")
 ```

- 使用注解切入

```java 4,5
public @interface Redisdel {
    String key() default "";
}
// 必须是小写
@Around("@annotation(redisdel)")

```

:::details 类型执行顺序

```mermaid
graph TD
    A(开始) --> B[@Before 通知执行]
    B --> C[@Around 通知的前置逻辑执行]
    C --> D{目标方法执行?}
    D -- 是 --> E[目标方法执行]
    D -- 否 --> F[流程结束]
    E --> G{是否正常返回?}
    G -- 是 --> H[@AfterReturning 通知执行]
    G -- 否 --> I[@AfterThrowing 通知执行]
    H --> J[@After 通知执行]
    I --> J
    J --> K[@Around 通知的后置逻辑执行]
    K --> L(流程结束)

```


:::

:::details 获取参数
| 通知           | 可以获取入参 | 可以获取出参 |
| -------------- | ---------- | ---------- |
| `@Before`      | ✔️          | ❌          |
| `@Around`      | ✔️          | ✔️         |
| `@AfterReturning` | ❌       | ✔️          |
| `@AfterThrowing`| ❌           | ❌          |
| `@After`       | ❌           | ❌         |
:::

:::details ProceedingJoinPoint 和 JoinPoint 

- `JoinPoint`：代表一个可以被增强的点（通常是方法），允许你获取方法的参数、目标对象等信息，但不能控制方法的执行。

- `ProceedingJoinPoint`：是JoinPoint的扩展，除了可以获取方法信息外，还可以控制目标方法的执行，比如在方法执行前后添加自定义逻辑。

获取参数和返回值：
- 获取参数：JoinPoint和ProceedingJoinPoint都可以获取方法的参数。
- 获取返回值：@AfterReturning通知可以直接获取返回值。在@Around通知中，通过调用proceed()方法可以获取并可能修改返回值。


:::

#### 实操
```java
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Advice;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;

@Aspect
public class LoggingAspect {

    // 定义一个切点，匹配任意包中的任意类和任意方法
    @Pointcut("execution(* *.*(..))")
    public void anyMethod() {}

    // 定义一个切点，匹配使用了@Loggable注解的方法
    @Pointcut("@annotation(Loggable)")
    public void loggableMethod() {}

    // 使用@Before注解定义前置通知
    @Before("loggableMethod()")
    public void beforeAdvice(JoinPoint joinPoint) {
        System.out.println("Before advice: 方法 " + joinPoint.getSignature().getName() + " 即将执行");
    }

    // 使用@Around注解定义环绕通知
    @Around("loggableMethod()")
    public Object aroundAdvice(ProceedingJoinPoint joinPoint) throws Throwable {
        System.out.println("Around advice: 方法 " + joinPoint.getSignature().getName() + " 开始执行");
        Object result = null;
        try {
            result = joinPoint.proceed(); // 执行目标方法
        } finally {
            System.out.println("Around advice: 方法 " + joinPoint.getSignature().getName() + " 执行结束");
        }
        return result;
    }

    // 使用@AfterReturning注解定义返回后通知
    @AfterReturning(pointcut = "loggableMethod()", returning = "result")
    public void afterReturningAdvice(JoinPoint joinPoint, Object result) {
        System.out.println("After returning advice: 方法 " + joinPoint.getSignature().getName() + " 返回值是 " + result);
    }

    // 使用@After注解定义最终通知
    @After("loggableMethod()")
    public void afterAdvice(JoinPoint joinPoint) {
        System.out.println("After advice: 方法 " + joinPoint.getSignature().getName() + " 已经执行完毕");
    }

    // 使用@AfterThrowing注解定义异常通知
    @AfterThrowing(pointcut = "loggableMethod()", throwing = "error")
    public void afterThrowingAdvice(JoinPoint joinPoint, Throwable error) {
        System.out.println("After throwing advice: 方法 " + joinPoint.getSignature().getName() + " 抛出异常 " + error.getMessage());
    }
}

```


## SpringMVC

[SpringMVC-02-SpringMVC入门案例_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Fi4y1S7ix?p=44&vd_source=f8821730ff8a13ec89104c8629e6d42b)

### 创建使用

pom.xml

```xml
  <dependencies>
    <dependency>
      <groupId>javax.servlet</groupId>
      <artifactId>javax.servlet-api</artifactId>
      <version>4.0.1</version>
      <scope>provided</scope>
    </dependency>
    <dependency>
      <groupId>org.springframework</groupId>
      <artifactId>spring-webmvc</artifactId>
      <version>5.3.23</version>
    </dependency>
  </dependencies>
```

userControler类

```java
@Controller
//定义Bean
public class userController {

//    访问路径
    @RequestMapping("/save")
//    返回值类型
    @ResponseBody
    public String save(){
        System.out.println("hhh");
        return "hello world";
    }

}
```


config类

```java
servletinitConfig.java

//定义一个servlet启动配置，在里面加载spring配置
public class servletinitConfig extends AbstractDispatcherServletInitializer {

//    加载springMVC配置
    @Override
    protected WebApplicationContext createServletApplicationContext() {
        AnnotationConfigWebApplicationContext ctx = new AnnotationConfigWebApplicationContext();
        ctx.register(springMVCConfig.class);


        return ctx;
    }
//设置那些请求归springMVC处理
    @Override
    protected String[] getServletMappings() {
        return new String[]{"/"};
    }
//加载spring配置
    @Override
    protected WebApplicationContext createRootApplicationContext() {
        return null;
    }
}


springMVCConfig.java

//加载对应的Bean
@ComponentScan("com.beink.controller")
//加载配置
@Configuration
public class springMVCConfig {
}
```


配置Tomcat启动即可。。

#### 请求

##### get

**/save?name=name**
```java
    @RequestMapping("/save")
    @ResponseBody
    public String save(String name){
        System.out.println(name);
        return "hello world";
    }
```
![](https://cdn.beink.cn/study/aTotRlU61Nj-1aXSUHaQx.png)

##### **post** 


```java
    @RequestMapping("/save")
    @ResponseBody
    public String save(String name,String id){
        System.out.println(name + id);
        return "hello world";
    }
```


#### post乱码处理

![img](
https://cdn.beink.cn/study/IrnFxcmuLsBODJvoQMw3M.png)

#### 参数类型

[SpringMVC-09-json数据传递参数_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Fi4y1S7ix?p=51&spm_id_from=pageDriver&vd_source=f8821730ff8a13ec89104c8629e6d42b)

```java
    @ResponseBody
    public String save(@RequestParam("name") String userName, String id){
//       一： 会把地址中的name映射给userName
//       二： save(User user) 当名字一样使  会自动把属性放进去
//       三：Map List.....@RequestParam List<String>
//       四：JSON
//       五：时间
//       六：。。。
        System.out.println(userName + id);
        return "hello world";
    }
```


#### 响应

```java
    @RequestMapping("topage")
    public String toapage(){
//        跳转到index.jsp页面
        return "index.jsp";
    }

    @RequestMapping("ttt")
    @ResponseBody
    public String toattpage(){
//        返回一个串“index.jsp”
        return "index.jsp";
    }
```


### Rest风格 

访问形式：  **/put/5  /get/6**

[SpringMVC-14-RESTful快速开发_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Fi4y1S7ix?p=56&vd_source=f8821730ff8a13ec89104c8629e6d42b)

```java
    @RequestMapping(value = "/put/{id}",method = RequestMethod.PUT)
    @ResponseBody
    public void put(@PathVariable String id){
        System.out.println(id);

    }


    @RequestMapping(value = "/get/{id}",method = RequestMethod.GET)
    @ResponseBody
    public void get(@PathVariable String id){
        System.out.println(id);

    }

    POST DELETE ....
```


### 注解说明

> ```
> @Controller    //定义Bean
> @RequestMapping("/save")   // 访问路径
> @ResponseBody    //返回值
> @RequestParam  //用于接收url地址参数    /get?id=5
> @ResponseBody //用于接收JSON数据
> @PathVariable  //接受url地址参数   /get/
> @RestController //= @Controller + @ResponseBody
> @GetMapping("/get/{id}") // == @RequestMapping(value = "/get/{id}",method = RequestMethod.GET)
> ```

## <font color=orange>其他</font>
### 自定义注解为属性赋值
> 使用场景：
把用户传过来的```token```，解析出来用户信息， 为属性赋值。
#### 1.创建自定义注解
```java
@Target({ElementType.PARAMETER})
@Documented
@Retention(RetentionPolicy.RUNTIME)
public @interface UserInfo {
}
```
#### 2.创建拦截器 ,获得token,存入作用域中
```java
public class GlobalInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        String token = request.getHeader("Authorization").substring(7);
        request.getSession().setAttribute("account", JwtUtil.parseJWT(token).getSubject());
        return true;
    }
}
```
#### 3.配置拦截器
```java
@Configuration
public class interceptor extends WebMvcConfigurationSupport {

    @Override
    protected void addArgumentResolvers(List<HandlerMethodArgumentResolver> argumentResolvers) {
        argumentResolvers.add(new UserInfoImpl());
    }

    @Override
    protected void addInterceptors(InterceptorRegistry registry) {

        registry.addInterceptor(new GlobalInterceptor()).addPathPatterns("/user/account/color/");

        super.addInterceptors(registry);

    }
}
```
#### 4.实现自定义注解
```java
public class UserInfoImpl implements HandlerMethodArgumentResolver {
    @Override
    public boolean supportsParameter(MethodParameter methodParameter) {
        return methodParameter.getParameterAnnotation(UserInfo.class)!=null;
    }

    @Override
    public Object resolveArgument(MethodParameter methodParameter, ModelAndViewContainer modelAndViewContainer, NativeWebRequest nativeWebRequest, WebDataBinderFactory webDataBinderFactory) throws Exception {
        HttpServletRequest nativeRequest = (HttpServletRequest) nativeWebRequest.getNativeRequest();
        return nativeRequest.getSession().getAttribute("account");

    }
}
```
#### 5.使用
```java
 @PostMapping("/user/account/color/")
    public Result setColor(@UserInfo String account, @RequestParam Map<String,String>map){
        String color = map.get("backImg");
        String list = map.get("list");
        return colorService.setColor(account,color,list);
    }
```
### 拦截器
> HttpServletRequest request  发送过来的信息
HttpServletResponse response  发送走的信息
#### 1.先实现一个拦截对象
```java
@Component
public class MyInterceptor implements HandlerInterceptor {
//   被拦截的操作之前运行
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        System.out.println("preHandle...");

//        true  通行
//        false  拦截
        return true;
    }
//  被拦截的操作之后运行
    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        System.out.println("postHandle...");
    }
//  也是后面 也在posthandle之后
    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        System.out.println("afterCompletion...");
    }
}
```
#### 2.配置
```java
@Configuration
public class Support extends WebMvcConfigurationSupport {
//implements WebMvcConfigurer 也行

//    拦截器对象
    @Autowired
    private MyInterceptor myInterceptor;
    /**
     *
     * @param registry
     */
    @Override
    protected void addInterceptors(InterceptorRegistry registry) {
//        拦截路径
       registry.addInterceptor(myInterceptor).addPathPatterns("/user","/user*");
    }
}
```
### 过滤器
### 枚举

