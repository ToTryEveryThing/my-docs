---
title: 书本
icon: book
order: 2
category:
  - 使用指南
tag:
  - Markdown
---
## 静态资源访问

```yml
spring:
  mvc:
    static-path-pattern: /static/**
  web:
    resources:
      static-locations: classpath:/static/
```
```java
@Configuration
public class staticHandles implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/static/**")
                .addResourceLocations("classpath:/static/");
    }
}
```
## 文件上传
```xml
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>servlet-api</artifactId>
            <version>2.5</version>
            <scope>provided</scope>
        </dependency>
```
```html
 <form action="/upload" method="post" enctype="multipart/form-data">
     <input type="file" name="uploadFile" value="选择文件">
     <input type="submit" value="上传">
 </form>
```
```java
@RestController
public class FileUploadController {

     SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");

    @PostMapping("/upload")
    public String upload(MultipartFile uploadFile, HttpServletRequest req){
//        运行目录下  没有文件夹 就建一个
        String realPath = req.getSession().getServletContext().getRealPath("/uploadFile/");
        System.out.println(realPath);
        String format = sdf.format(new Date());
        File folder = new File(realPath + format);
        if(!folder.isDirectory()){
            folder.mkdirs();
        }
//        重命名
        String oldName = uploadFile.getOriginalFilename();
        String newName = UUID.randomUUID().toString() +
                oldName.substring(oldName.lastIndexOf("."));
        try{
//            保存
            uploadFile.transferTo(new File(folder,newName));
//            返回路径
            String filePath = req.getScheme() + "://" + req.getServerName() + ":" +
                    req.getServerPort() + "/uploadFile/" + format + newName;
            return filePath;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
```
::: info
打包使用
:::
```java
@PostMapping("/localhost")
    public String uploadFile(MultipartFile file) {
        String directoryPath = "static/images/";
        String fileName = file.getOriginalFilename();

        try {
            // 获取当前应用程序的根目录
            String rootPath = System.getProperty("user.dir");

            // 拼接完整的目录路径
            String filePath = rootPath + "/" + directoryPath;
            // 创建目录
            File directory = new File(filePath);
            if (!directory.exists()) {
                directory.mkdirs();
            }
            // 创建文件对象
            File destFile = new File(directory, fileName);
            // 保存文件
            file.transferTo(destFile);

            return "上传成功";
        } catch (IOException e) {
            e.printStackTrace();
        }

        return "上传失败";
    }
```


```yml
spring:
  servlet:
    multipart:
#      是否开启上传
      enabled: true
      file-size-threshold: 0
#      保存临时位置
      location: E:\\temp
#      最大
      max-file-size: 10MB
#      总大小
      max-request-size: 10MB
#      是否延迟解析
      resolve-lazily: false
```
## 热加载（Hot Swap）
```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-devtools</artifactId>
            <optional>true</optional>
        </dependency>
```
## WebSocket 和 SockJS
:::tip 应用场景
WebSocket 和 SockJS 两者都应用广泛，具体应该根据实际情况来选择。WebSocket 是 HTML5 的一种新协议，它实现了浏览器与服务器全双工通信，实现了客户端与服务器端的实时通信。而 SockJS 是 WebSocket 的一个 polyfill 实现，即当浏览器不支持 WebSocket 时，SockJS 可以自动降级为支持长轮询等传输方式的 WebSocket 模拟实现，从而使得浏览器与服务器之间的通信始终保持稳定和高效。<font color="#42b983">因此，在一些对稳定性和兼容性有较高要求的项目中，可能会优先选择 SockJS；而在一些对效率要求较高，同时对兼容性要求相对较低的项目中，则可能会优先选择 WebSocket。</font>
:::

> WebSocket和SockJS都是在Web应用程序中使用实时通信的协议，它们都有自己的优势和缺点。

#### WebSocket的优势：

- 简单易用：WebSocket是一个非常简单的协议，只需建立连接，就可以进行双向通信。
- 高效性：WebSocket的头部信息非常小，数据格式紧凑，因此数据传输的效率非常高。
- 双向通信：WebSocket提供了双向通信的功能，可以同时在客户端和服务器端发送和接收消息。
#### WebSocket的缺点：

- 支持性：WebSocket是HTML5标准的一部分，因此只有在支持HTML5的浏览器中才能使用。对于老的浏览器，需要使用polyfill或其他技术。
- 长连接：WebSocket在连接建立后会一直保持连接，如果服务器端不能正常关闭连接，可能会导致资源浪费和性能问题。
#### SockJS的优势：

 - 跨浏览器：SockJS可以在所有支持JavaScript的浏览器中运行，甚至包括IE6。
 - 支持性：SockJS可以通过polyfill模拟WebSocket的功能，因此在不支持WebSocket的浏览器中也可以使用。
- 可靠性：SockJS在不支持WebSocket的浏览器中使用的是长轮询技术，可以保证数据的可靠性。
#### SockJS的缺点：

- 头部信息较大：因为SockJS在不支持WebSocket的浏览器中使用的是长轮询技术，因此需要发送大量的头部信息，导致数据传输效率较低。
- 连接不稳定：由于SockJS在不支持WebSocket的浏览器中使用的是长轮询技术，因此可能会遇到连接不稳定的情况，例如断开连接或网络故障。
## 发送邮件
![study](https://images.beink.cn/study/UE1u8asx1_ccuu_NWZKiX.png)

application.yml
```xml
spring:
#  邮件配置
  mail:
    host: smtp.qq.com
    port: 465
    username: totryeverything@qq.com
    password:<第一步获得的密钥>
    default-encoding: utf-8
    properties:
      mail:
        smtp:
          socketFactory:
            class: javax.net.ssl.SSLSocketFactory
      debug: true
```
pom.xml
```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-mail</artifactId>
        </dependency>
```
Service
```java

@Service
public class MailService {

    @Autowired
    JavaMailSender javaMailSender;


//    抄送（CC），用户给收件人发出邮件的同时把该邮件抄送给另外的人，在这种抄送方式中，“收件人”知道发件人把该邮件抄送给了另外哪些人。
//    发送者 收件人  抄送人 主题 内容
    public void sendSimpleMail(String from,String to,
                               String subject,String content){
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setFrom(from);
        msg.setTo(to);
        msg.setSubject(subject);
        msg.setText(content);
        javaMailSender.send(msg);
    }
//   发送带附件的邮件
    public void sendFailMail(String from,String to,
                             String subject,String content,
                             File file) throws MessagingException {

        MimeMessage msg = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(msg,true);
        helper.setFrom(from);
        helper.setTo(to);
        helper.setText(content);
        helper.setSubject(subject);
        helper.addAttachment(file.getName(),file);
        javaMailSender.send(msg);

    }
//    附带图片
    public void sendMailImg(String from,String to,
                            String subject,String content,
                            String[] srcPath, String[] resIds) throws MessagingException {

        if(srcPath.length!=resIds.length){
            System.out.println("hello world");
            return ;
        }

        MimeMessage msg = javaMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(msg, true);
        helper.setFrom(from);
        helper.setTo(to);
        helper.setText(content,true);//表示正文是HTML格式
        helper.setSubject(subject);
        for(int i=0;i<srcPath.length;i++){
            FileSystemResource res = new FileSystemResource(new File(srcPath[i]));
            helper.addInline(resIds[i],res);
        }
        javaMailSender.send(msg);

    }


}
```
Test
```java
    @Autowired
    private MailService mailService;

    @Test
    void sendSimpleMail() {

        mailService.sendSimpleMail("totryeverything@qq.com","19138084894@163.com",
                "Test","这只不过是一个测试而已");

    }


    @Test
    void sendFailMail() throws MessagingException {
        mailService.sendFailMail("totryeverything@qq.com","19138084894@163.com",
                "Test","这只不过是一个测试而已",new File("E:\\c\\ToTryEveryThing\\README.md"));
    }

    @Test
    void sendImgMail() throws MessagingException {
        mailService.sendMailImg("totryeverything@qq.com","19138084894@163.com",
                "Test",
                "这只不过是一个测试而已" + "<img  /><img  />",
                new String []{"C:\\Users\\Administrator\\Pictures\\47f4c019880711ebb6edd017c2d2eca2.jpg","C:\\Users\\Administrator\\Pictures\\下载 (2).png"},
                new String[]{"p1","p2"} );
    }
```
## 定时任务
:::tip 
在Spring Boot应用程序中使用@Scheduled注解标记的定时任务是在应用程序启动时自动启动的。
:::
配置
```java
@Configuration
@EnableScheduling
public class ScheduledTasksConfig {
}
```
使用
> 延迟5s启动 然后每隔5s运行一次
```java
 @Scheduled(fixedRate = 5000,initialDelay = 5000)
    public String schedul (){
        System.out.println(i++);
        return String.valueOf(i);
    }
```
#### @Scheduled(cron = "0 0 12 * * ?"): 使用CRON表达式指定执行时间。
```java
// 每天中午12点执行任务
@Scheduled(cron = "0 0 12 * * ?")
public void doTask() {
    // your task code here
}
```
自启动 通过get方法停止任务
```java
@RestController
public class ScheduleController {

    @Autowired
    private TaskScheduler taskScheduler;

    private ScheduledFuture<?> scheduledFuture;

    @PostConstruct
    public void start() {
        scheduledFuture = taskScheduler.scheduleWithFixedDelay(new MyTask(), 5000L);//5000ms
    }

    @GetMapping("/stop")
    public String stop() {
        if (scheduledFuture != null) {
            scheduledFuture.cancel(true);
        }
        return "stop";
    }

    private class MyTask implements Runnable {
        @Override
        public void run() {
            System.out.println("Task executing...");
        }
    }
}
```
## 数据校验
[https://www.cnblogs.com/54chensongxia/p/14016179.html](https://www.cnblogs.com/54chensongxia/p/14016179.html)

依赖
```xml
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-validation</artifactId>
        </dependency>
```

配置 ValidationMessages.properties
```xml
user.name.size = name
user.address.notnull = adress
user.age.size =  age
user.email.pattern = email
```
pojo
```java
public class User {
    @Size(min = 2,max = 10, message = "{user.name.size}")
    private String name;
    @NotNull(message = "{user.address.notnull}")
    private String address;

    @DecimalMin(value = "1" ,message = "{user.age.size}")
    @DecimalMax(value = "100" ,message = "{user.age.size}")
    private Integer age;

    @Email(message = "{user.email.pattern}")
    private String email;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
```
controller
```java
@RestController
public class UserController {


    @PostMapping("/adduser/")
    public List<String> addUser(@Validated User user, BindingResult bindingResult){
        ArrayList<String> error = new ArrayList<>();
        if(bindingResult.hasErrors()){
            List<ObjectError> allErrors = bindingResult.getAllErrors();
            for(ObjectError e : allErrors){
                error.add(e.getDefaultMessage());
                System.out.println("e.getDefaultMessage() = " + e.getDefaultMessage());
            }
        }
        return error;
    }


}
```

```html
<template>
  <div>
    <!-- input 标签用于选择图片 -->
    <input type="file" accept="image/*" @change="previewImage">

    <!-- 预览图片的 img 标签 -->
    <img ref="previewImg" style="max-width: 100%; max-height: 100%;" />
  </div>
</template>

<script>
export default {
  methods: {
    previewImage(event) {
      // 获取选择的文件
      const file = event.target.files[0];

      // 判断是否是图片类型
      if (file.type.startsWith('image/')) {
        // 创建 FileReader 对象
        const reader = new FileReader();

        // 读取图片文件
        reader.readAsDataURL(file);

        // 在图片文件读取完毕后设置预览图片的 URL
        reader.onload = () => {
          this.$refs.previewImg.src = reader.result;
        };
      }
    },
  },
};
</script>

```
## 分布式锁
#### Redis分布式锁和Redisson分布式锁都是用于实现分布式系统中的分布式锁，但它们之间有以下区别：
- Redis分布式锁是基于Redis的SETNX命令实现的，而Redisson分布式锁是基于Redis的Redisson分布式框架实现的。
- Redis分布式锁需要手动编写锁逻辑代码，包括锁定、释放锁等。Redisson分布式锁封装了锁逻辑，并提供了API接口，使得锁的使用变得简单。
- Redis分布式锁在进行锁定和解锁操作时，需要自己实现保证操作的原子性。Redisson分布式锁内部封装了Redis的单线程模型，保证了锁的操作原子性。
- Redis分布式锁在锁定后需要手动维护锁的超时时间。Redisson分布式锁内部封装了锁的自动续期机制，避免了锁过期的问题。
- Redis分布式锁在高并发场景下可能存在死锁的问题。Redisson分布式锁使用Redlock算法避免了死锁的问题。
### redis分布式锁
```java
public Result regasdgsdgister(String account, String password) {
        final String key = account + "-lock";
        final String value = System.nanoTime() + " " + UUID.randomUUID();
        ValueOperations v = stringRedisTemplate.opsForValue();
        Boolean res = v.setIfAbsent(key,value);
        if(res){
            stringRedisTemplate.expire(key,20L, TimeUnit.SECONDS);
            if(account == null){
                return new Result(0,"用户名不能为空");
            }
            if(password.length() == 0){
                return new Result(0,"密码不能为空");
            }

            account = account.trim();
            if(account.length()==0){
                return new Result(0,"用户名不能为空");
            }

            if(password.length()>50){
                return new Result(0,"密码长度不能超过50");
            }

            QueryWrapper<web> queryWrapper = new QueryWrapper<web>();
            queryWrapper.eq("account",account);
            List<web> webs =  webMapper.selectList(queryWrapper);
            if(!webs.isEmpty()){
                return new Result(0,"用户名已存在");
            }
            String pass = passwordEncoder.encode(password);
            String jwt = JwtUtil.createJWT(account);
            web web1 = new web();
            web1.setBackimg("5");
            web1.setList("[]");
            web1.setPassword(pass);
            web1.setAccount(account);
            web1.setDate(new Date());
            webMapper.insert(web1);
            String git  = "[{\"title\":\"你好\",\"name\":1,\"content\":\"## new content\",\"show\":true}]\n" +
                    "\n";
            String title = "[\"你好\"]";
            System.out.println(publicMapper.insert(new Public(account, title,git))+999999);
            System.out.println(new Date());
            if(value.equals(v.get(key).toString())){
                stringRedisTemplate.delete(key);
            }
            return new Result(1,"success",jwt);
        }
        return null;
    }
```
### Redisson
[Redisson学习地址](https://www.bilibili.com/video/BV1Yy4y1k79y/?p=5&vd_source=f8821730ff8a13ec89104c8629e6d42b)
> 引入
```xml
<!--    redisson-->
        <dependency>
            <groupId>org.redisson</groupId>
            <artifactId>redisson</artifactId>
            <version>3.6.5</version>
        </dependency>
```
> RedissonConfig
```java
@Configuration
public class RedissonConfig {

    @Bean
    RedissonClient redisson() {
        Config config = new Config();
        config.useSingleServer().setAddress("redis://localhost:6379").setDatabase(0);
        return Redisson.create(config);
    }
}
```
> 使用
```java

    @Autowired
    RedissonClient redissonClient;

    @Override
    public Result showbyid(Integer id) {
        RLock lock = redissonClient.getLock(String.valueOf(id));
        lock.lock();
        try{
            article article = articleMapper.selectById(id);
            article.setViews(article.getViews()+1);
            int i = articleMapper.updateById(article);
            return new Result(1,"success",article);
        }finally {
            lock.unlock();
        }
    }
```
## Swagger
### 搭建
```xml
        <dependency>
            <groupId>io.springfox</groupId>
            <artifactId>springfox-swagger2</artifactId>
            <version>3.0.0</version>
        </dependency>
```
```java
@Configuration
@EnableSwagger2
public class SwaggerConfig {

    @Bean
    public Docket productApi() {
        return new Docket(DocumentationType.SWAGGER_2)
                .apiInfo(apiInfo())
                .select()
                .apis(RequestHandlerSelectors.withMethodAnnotation(ApiOperation.class))  //添加ApiOperiation注解的被扫描
                .paths(PathSelectors.any())
                .build();

    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder().title("都是书本上的呀").description("根本不需要的描述")
                .version("1.0").build();
    }

}

```




