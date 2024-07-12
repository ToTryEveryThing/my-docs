---
title: Spring SpringMVC
icon: spring
order: 1
category:
  - 使用指南
tag:
  - Markdown
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

>     被构造 调用的是无参构造
>
>     生命周期：
>
>     ```
>     public void init(){
>     System.out.println("init");
>     }
>     public void destory(){
>     System.out.println("destory");
>     }
>     配置
>     <bean init-method="init" destroy-method="destory"/>
>     或者 直接 implements InitializingBean, DisposableBean 同样效果
>     ```

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

```XML
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

```XML
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

> ```
> 使用*通配符即可
> @Pointcut("execution( * * com.beink.dao.*)")
> ```

#### 通知类型

```java
public class MyAop {
    @Pointcut("execution(void com.beink.dao.bookDao.save())")
    private void ss(){}
    
    @AfterReturning("ss()")
    public void set(){
        System.out.println("AOP");
    }
//  环绕
    @Around("ss()")
    public void round(ProceedingJoinPoint e) throws Throwable {
        System.out.println("qian");
        e.proceed();/*调用原始操作*/
        System.out.println("hou");
//        如果有返回值 返回对象必须是Object
    }

//    @AfterReturning
//    @AfterThrowing
}
```


#### 获取通知数据

```java
public class MyAop {
    @Pointcut("execution(void com.beink.dao.bookDao.save(..))")
    private void ss(){}

//  环绕
    @Around("ss()")
    public Object round(ProceedingJoinPoint e) throws Throwable {

        Object[] args = e.getArgs();
        e.proceed();/*调用原始操作*/
        System.out.println(Arrays.toString(args));/*获取参数*/
//        修改参数
        args[0] = 666;
        Object ret = e.proceed(args);
        
        return ret;
    }

}
```


## SpringMVC

[SpringMVC-02-SpringMVC入门案例_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Fi4y1S7ix?p=44&vd_source=f8821730ff8a13ec89104c8629e6d42b)

### 创建使用

pom.xml

```XML
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
![](https://images.beink.cn/study/aTotRlU61Nj-1aXSUHaQx.png)

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
https://images.beink.cn/study/IrnFxcmuLsBODJvoQMw3M.png)

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

