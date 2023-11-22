<template><div><h1 id="day12-jwt令牌-filter-interceptor-cookie-session-异常统一处理" tabindex="-1"><a class="header-anchor" href="#day12-jwt令牌-filter-interceptor-cookie-session-异常统一处理" aria-hidden="true">#</a> day12-JWT令牌-Filter-Interceptor-cookie-session-异常统一处理</h1>
<h2 id="boot配置文件" tabindex="-1"><a class="header-anchor" href="#boot配置文件" aria-hidden="true">#</a> boot配置文件</h2>
<h3 id="_1-properties文件" tabindex="-1"><a class="header-anchor" href="#_1-properties文件" aria-hidden="true">#</a> 1: properties文件</h3>
<ul>
<li>
<p>优先级高</p>
</li>
<li>
<p>代码层次结构可读性较差</p>
</li>
</ul>
<h3 id="_2-yml文件" tabindex="-1"><a class="header-anchor" href="#_2-yml文件" aria-hidden="true">#</a> 2: yml文件</h3>
<ul>
<li>
<p>主流趋势,极简模式,以数据为核心</p>
</li>
<li>
<p>以层次结构的形式写数据</p>
</li>
<li>
<p>每一层都要有缩进,数据前面必须有空格</p>
</li>
</ul>
<h3 id="_3-代码中获取配置文件中的内容的方式" tabindex="-1"><a class="header-anchor" href="#_3-代码中获取配置文件中的内容的方式" aria-hidden="true">#</a> 3:代码中获取配置文件中的内容的方式</h3>
<ul>
<li>
<p>@Value(&quot;${键}&quot;)</p>
<ul>
<li>可以注入简单数据</li>
</ul>
</li>
<li>
<p>@ConfigurationProperties(prefix=&quot;前缀&quot;)</p>
<ul>
<li>
<p>我们给每一个成员变量加@Value注解</p>
</li>
<li>
<p>可以注入复杂的数据类型比如数组或者集合</p>
</li>
</ul>
</li>
</ul>
<h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h3>
<ul>
<li>
<p>所有配置文件的名称都必须是 application</p>
</li>
<li>
<p>多种配置文件同时存在的时候,properties文件的优先级比yml高;</p>
</li>
</ul>
<h2 id="会话" tabindex="-1"><a class="header-anchor" href="#会话" aria-hidden="true">#</a> 会话</h2>
<h3 id="是什么" tabindex="-1"><a class="header-anchor" href="#是什么" aria-hidden="true">#</a> 是什么</h3>
<ul>
<li>可以让浏览器的多次请求之间,可以进行数据共享的技术,就是会话技术;</li>
</ul>
<h3 id="相关技术" tabindex="-1"><a class="header-anchor" href="#相关技术" aria-hidden="true">#</a> 相关技术</h3>
<ul>
<li>
<p>cookie(了解)</p>
<ul>
<li>
<p>由服务器负责创建,浏览器负责保存的一个对象;(相当于一张小卡片,只能保存少量的信息,且有数量限制)</p>
</li>
<li>
<p>缺点</p>
<ul>
<li>
<p>1: 由浏览器保存,所以不安全;(有被篡改的风险)</p>
</li>
<li>
<p>2: 有大小和数量的限制;</p>
</li>
<li>
<p>3: 不能跨应用使用;(每个浏览器的cookie都保存在浏览器内部,互相 不共享)</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>session(能说出来原理)</p>
<ul>
<li>
<p>是什么</p>
<ul>
<li>由服务器负责创建,并由服务器负责保存的一个对象,相对于cookie更安全,理论上没有大小限制(实际上受服务器内存大小的制约);</li>
</ul>
</li>
<li>
<p>session共享会话数据的原理</p>
<ul>
<li>当客户端第一次请求session的时候, 服务器检查他是否携带了JSESSIONID的钥匙, 如果没有, 证明第一次访问, 则会创建新的session对象, 并且服务器将这个session的id以cookie的形式保存给浏览器, 下次浏览器只要不关闭,就会带着钥匙过来, 此时服务器不会在创建新的session,就会找到钥匙所对应的session对象,这样用户找到自己上次的数据</li>
</ul>
</li>
<li>
<p>致命缺点</p>
<ul>
<li>
<p>1: 不能跨域</p>
</li>
<li>
<p>2: 移动端不支持</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>JWT令牌(重点掌握)</p>
<ul>
<li>
<p>是什么</p>
<ul>
<li>JSON Web Token（JWT）是一个开放的行业标准（RFC 7519），它定义了一种简洁的、自包含的协议格式，通过这种格式可以完成网络中部分数据的传输;</li>
</ul>
</li>
<li>
<p>作用:</p>
<ul>
<li>也是完成会话的;</li>
</ul>
</li>
<li>
<p>工作原理</p>
<ul>
<li>可以承载一部分信息,在前端和后台之间进行数据传递, 他有自己的一套安全机制,可以验证数据的安全性, 主要共享的是数据的id, 不会把整个数据给到浏览器;</li>
</ul>
</li>
<li>
<p>组成部分</p>
<ul>
<li>
<p>由Header、Payload、Signature三部分组成，每部分中间使用点（.）分隔</p>
</li>
<li>
<p>Header(头)</p>
<ul>
<li>头部包括令牌的类型（即JWT）及使用的哈希算法</li>
</ul>
</li>
<li>
<p>Payload(载体)</p>
<ul>
<li>它是存放有效信息的地方</li>
</ul>
</li>
<li>
<p>Signature(签名)</p>
<ul>
<li>此部分用于防止jwt内容被篡改。</li>
</ul>
</li>
</ul>
</li>
<li>
<p>使用步骤</p>
<ul>
<li>
<p>1: 引入坐标</p>
<ul>
<li>
<!-- JWT依赖-->
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.1</version>
</dependency>
<pre><code>	- 2: 利用工具类提供的静态方法直接调用方法,传递数据即可生成一个令牌结果;

		- String jwt = Jwts.builder()
    .setClaims(map集合) //自定义内容(载荷)          
    .signWith(SignatureAlgorithm.HS256, &quot;itheima&quot;) //签名算法 和密钥       
    .setExpiration(new Date(System.currentTimeMillis() + 24*3600*1000)) //有效期   
    .compact();// 生成结果

	- 3: 利用工具类提供的静态方法直接调用方法,传递已经生成的令牌和密钥即可解析令牌的内容;

		- public static Claims parseJWT(String jwt){
    Claims claims = Jwts.parser()
            .setSigningKey(signKey)//指定签名密钥
            .parseClaimsJws(jwt)//指定令牌Token
            .getBody();
    return claims;
}

	- 注意

		- 如果令牌解析失败则说明令牌的内容被篡改了或过期失效了;

- 优点

	- 1、jwt基于json，非常方便解析。 

	- 2、可以在令牌中自定义丰富的内容，易扩展。 

	- 3、通过非对称加密算法及数字签名技术，JWT防止篡改，安全性高。

	- 可以简单理解为解决了cookie和session暴露的所有问题!
</code></pre>
<h2 id="boot高级操作" tabindex="-1"><a class="header-anchor" href="#boot高级操作" aria-hidden="true">#</a> boot高级操作</h2>
<h3 id="过滤器filter" tabindex="-1"><a class="header-anchor" href="#过滤器filter" aria-hidden="true">#</a> 过滤器Filter</h3>
<ul>
<li>
<p>作用: 在请求达到资源之前进行统一操作</p>
</li>
<li>
<p>使用步骤</p>
<ul>
<li>
<p>1.定义一个类实现Filter(javax.servlet)接口</p>
</li>
<li>
<p>2.重写doFilter方法, 在这个方法中编写过滤逻辑</p>
<ul>
<li>chain.doFilter(request, response);//放行请求</li>
</ul>
</li>
<li>
<p>3.配置过滤器生效的路径</p>
<ul>
<li>在自定义类的上面添加@WebFilter(urlPatterns = &quot;/*&quot;)注解即可</li>
</ul>
</li>
<li>
<p>4.让boot认识过滤器</p>
<ul>
<li>在主程序的类上面添加@ServletComponentScan注解即可</li>
</ul>
</li>
</ul>
</li>
<li>
<p>细节</p>
<ul>
<li>
<p>路径的写法</p>
<ul>
<li>
<p>&quot;/login&quot;</p>
<ul>
<li>绝对路径匹配</li>
</ul>
</li>
<li>
<p>&quot;/emps/*&quot;</p>
<ul>
<li>目录匹配</li>
</ul>
</li>
<li>
<p>&quot;*.do&quot;</p>
<ul>
<li>后缀名匹配,  但是这种方式不能以/开头属于语法错误</li>
</ul>
</li>
<li>
<p>&quot;/*&quot;</p>
<ul>
<li>拦截所有</li>
</ul>
</li>
</ul>
</li>
<li>
<p>多个过滤器工作特点</p>
<ul>
<li>按照过滤器的类名的字典顺序来执行,  1,  2 目标资源 2 , 1</li>
</ul>
</li>
</ul>
</li>
</ul>
<h3 id="拦截器" tabindex="-1"><a class="header-anchor" href="#拦截器" aria-hidden="true">#</a> 拦截器</h3>
<ul>
<li>
<p>拦截器(Interceptor)和过滤器(Filter)的区别</p>
<ul>
<li>
<p>Interceptor</p>
<ul>
<li>
<p>Interceptor属于SpringMVC技术</p>
</li>
<li>
<p>Interceptor仅针对controller的访问进行增强</p>
</li>
</ul>
</li>
<li>
<p>Filter</p>
<ul>
<li>
<p>Filter属于Servlet技术</p>
</li>
<li>
<p>Filter对所有访问进行增强</p>
</li>
</ul>
</li>
<li></li>
</ul>
</li>
<li>
<p>作用:</p>
<ul>
<li>
<p>在指定的方法调用前后执行预先设定的代码</p>
</li>
<li>
<p>控制原始方法的执行</p>
</li>
</ul>
</li>
<li>
<p>使用步骤</p>
<ul>
<li>
<p>1: 自定义拦截器类并实现接口</p>
<ul>
<li></li>
</ul>
</li>
<li>
<p>2:在不同的方法中写处理逻辑</p>
<ul>
<li></li>
<li>
<p>request:请求对象</p>
</li>
<li>
<p>response:响应对象</p>
</li>
<li>
<p>handler:被调用的处理器对象，本质上是一个方法对象，对反射技术中的Method对象进行了再包装</p>
</li>
</ul>
</li>
<li>
<p>3: 单独写一个配置类用于指定拦截器拦截路径</p>
<ul>
<li></li>
<li>
<p>路径要记得加 &quot;/users/**&quot;</p>
</li>
</ul>
</li>
</ul>
</li>
<li>
<p>拦截器有多个的话执行顺序</p>
<ul>
<li>
<p>当配置多个拦截器时，形成拦截器链</p>
</li>
<li>
<p>拦截器链的运行顺序默认以拦截器类的名称按字符串自然顺序排序执行;</p>
</li>
<li>
<p>当某个拦截器中出现对原始处理器的拦截，后面的拦截器均终止运行</p>
</li>
<li>
<p>当拦截器运行中断，仅运行配置在前面的拦截器的afterCompletion操作</p>
</li>
</ul>
</li>
</ul>
<h3 id="拦截器和过滤器的区别" tabindex="-1"><a class="header-anchor" href="#拦截器和过滤器的区别" aria-hidden="true">#</a> 拦截器和过滤器的区别</h3>
<ul>
<li>
<p>过滤器是tomcat的技术, 拦截器是属于boot的springMVC的技术</p>
</li>
<li>
<p>过滤器在执行servlet之前走的,  而拦截器在controller之前走的</p>
</li>
<li>
<p>过滤器能够拦截后台资源和前端资源(前后端不分离的情况), 拦截器只能控制controller</p>
</li>
</ul>
<h3 id="异常的统一处理" tabindex="-1"><a class="header-anchor" href="#异常的统一处理" aria-hidden="true">#</a> 异常的统一处理</h3>
<ul>
<li>
<p>项目各个个层级均可能出现异常, 所有应该对异常进行自行分类</p>
</li>
<li>
<p>异常出现的原因</p>
<ul>
<li>
<ul>
<li>框架内部抛出的异常：因使用不合规导致</li>
</ul>
</li>
<li>
<ul>
<li>数据层抛出的异常：因外部服务器故障导致（例如：服务器访问超时）</li>
</ul>
</li>
<li>
<ul>
<li>业务层抛出的异常：因业务逻辑书写错误导致（例如：遍历业务书写操作，导致索引异常等）</li>
</ul>
</li>
<li>
<ul>
<li>表现层抛出的异常：因数据收集、校验等规则导致（例如：不匹配的数据类型间导致异常）</li>
</ul>
</li>
<li>
<ul>
<li>工具类抛出的异常：因工具类书写不严谨不够健壮导致（例如：必要释放的连接长期未释放等）</li>
</ul>
</li>
</ul>
</li>
<li>
<p>异常处理器步骤</p>
<ul>
<li>
<p>1.定义一个类</p>
</li>
<li>
<p>2.标注一下他是全局异常的类@RestControllerAdvise</p>
</li>
<li>
<p>3.编写方法, 使用@HandlerException(异常类型);</p>
<ul>
<li></li>
</ul>
</li>
</ul>
</li>
<li>
<p>常见的注解</p>
<ul>
<li>
<p>@RestControllerAdvice</p>
<ul>
<li>为Rest风格开发的控制器类做增强</li>
</ul>
</li>
<li>
<p>@ExceptionHandler</p>
<ul>
<li>设置指定异常的处理方案，程序出现哪类异常会被我们异常处理器处理</li>
</ul>
</li>
</ul>
</li>
</ul>
</div></template>


