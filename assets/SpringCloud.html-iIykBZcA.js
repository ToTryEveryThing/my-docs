import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as l,c as i,a as n,b as s,d as e,f as t}from"./app-gH8PS8ER.js";const o={},u=n("h1",{id:"spring-cloud",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#spring-cloud","aria-hidden":"true"},"#"),s(" Spring Cloud")],-1),d={href:"https://b11et3un53m.feishu.cn/wiki/R4Sdwvo8Si4kilkSKfscgQX0niB",target:"_blank",rel:"noopener noreferrer"},r={href:"https://www.bilibili.com/video/BV1kH4y1S7wz?p=1&vd_source=f8821730ff8a13ec89104c8629e6d42b",target:"_blank",rel:"noopener noreferrer"},k=t(`<h2 id="服务注册和发现" tabindex="-1"><a class="header-anchor" href="#服务注册和发现" aria-hidden="true">#</a> 服务注册和发现</h2><h3 id="nacos注册中心" tabindex="-1"><a class="header-anchor" href="#nacos注册中心" aria-hidden="true">#</a> nacos注册中心</h3><h4 id="nacos安装" tabindex="-1"><a class="header-anchor" href="#nacos安装" aria-hidden="true">#</a> nacos安装</h4><ul><li>nacos.mysql</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>custom.env</li></ul><div class="language-env line-numbers-mode" data-ext="env"><pre class="language-env"><code>PREFER_HOST_MODE=hostname
MODE=standalone
MYSQL_SERVICE_HOST=127.0.0.1
MYSQL_SERVICE_DB_NAME=nacos
MYSQL_SERVICE_PORT=3306
MYSQL_SERVICE_USER=root
MYSQL_SERVICE_PASSWORD=123456
MYSQL_SERVICE_DB_PARAM=characterEncoding=utf8&amp;connectTimeout=1000&amp;socketTimeout=3000&amp;autoReconnect=true&amp;useUnicode=true&amp;useSSL=false&amp;serverTimezone=Asia/Shanghai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>运行</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -d \\
--name nacos \\
--env-file ./nacos/custom.env \\
-p 8848:8848 \\
-p 9848:9848 \\
-p 9849:9849 \\
--restart=always \\
nacos/nacos-server:v2.1.0-slim
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务注册" tabindex="-1"><a class="header-anchor" href="#服务注册" aria-hidden="true">#</a> 服务注册</h3><ol><li>引入依赖</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--        nacos 注册与发现--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>配置</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> item<span class="token punctuation">-</span>service
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务发现" tabindex="-1"><a class="header-anchor" href="#服务发现" aria-hidden="true">#</a> 服务发现</h3><ol><li>引入依赖</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--        nacos 注册与发现--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-alibaba-nacos-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>配置</li></ol><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">application</span><span class="token punctuation">:</span>
    <span class="token key atrule">name</span><span class="token punctuation">:</span> item<span class="token punctuation">-</span>service
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>使用</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">DiscoveryClient</span> discoveryClient<span class="token punctuation">;</span>

<span class="token comment">//       根据服务名称拉取所有的服务</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ServiceInstance</span><span class="token punctuation">&gt;</span></span> instances <span class="token operator">=</span> discoveryClient<span class="token punctuation">.</span><span class="token function">getInstances</span><span class="token punctuation">(</span><span class="token string">&quot;item-service&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        负载均衡，随机给一个</span>
        <span class="token class-name">ServiceInstance</span> instancs <span class="token operator">=</span> instances<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token class-name">RandomUtil</span><span class="token punctuation">.</span><span class="token function">randomInt</span><span class="token punctuation">(</span>instances<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//      拿到uri  (域名 + 端口)</span>
        <span class="token class-name">URI</span> uri <span class="token operator">=</span> instancs<span class="token punctuation">.</span><span class="token function">getUri</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">ResponseEntity</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">ItemDTO</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> response <span class="token operator">=</span> restTemplate<span class="token punctuation">.</span><span class="token function">exchange</span><span class="token punctuation">(</span>
                uri <span class="token operator">+</span> <span class="token string">&quot;/items?ids={ids}&quot;</span><span class="token punctuation">,</span>
                <span class="token class-name">HttpMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">,</span>
                <span class="token keyword">null</span><span class="token punctuation">,</span>
                <span class="token keyword">new</span> <span class="token class-name">ParameterizedTypeReference</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">ItemDTO</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token punctuation">}</span><span class="token punctuation">,</span>
                <span class="token class-name">Map</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">&quot;ids&quot;</span><span class="token punctuation">,</span> <span class="token class-name">CollUtils</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>itemIds<span class="token punctuation">,</span> <span class="token string">&quot;,&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="openfeign" tabindex="-1"><a class="header-anchor" href="#openfeign" aria-hidden="true">#</a> OpenFeign</h2>`,22),v={id:"基础使用🚪",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#基础使用🚪","aria-hidden":"true"},"#",-1),g={href:"https://www.bilibili.com/video/BV1kH4y1S7wz?p=16&vd_source=f8821730ff8a13ec89104c8629e6d42b",target:"_blank",rel:"noopener noreferrer"},b=t(`<blockquote><p>上面的代码 太多了，想简单点。。。</p><p>帮助我们优雅的发送请求</p></blockquote><ul><li>依赖</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>  <span class="token comment">&lt;!--openFeign--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!--负载均衡器--&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-loadbalancer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>开启注解</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@EnableFeignClients</span>
<span class="token annotation punctuation">@SpringBootApplication</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ItemApplication</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">SpringApplication</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token class-name">ItemApplication</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>编写FeignClient</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@FeignClient</span><span class="token punctuation">(</span><span class="token string">&quot;Item-service&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">ItemClient</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/items&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ItemDTO</span><span class="token punctuation">&gt;</span></span> <span class="token function">query</span><span class="token punctuation">(</span><span class="token annotation punctuation">@RequestParam</span><span class="token punctuation">(</span><span class="token string">&quot;ids&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Collection</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Long</span><span class="token punctuation">&gt;</span></span> ids<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>使用</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ItemClient</span> itemClient<span class="token punctuation">;</span>
    <span class="token comment">// 查询商品</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ItemDTO</span><span class="token punctuation">&gt;</span></span> items <span class="token operator">=</span> itemClient<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>itemIds<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),h={id:"连接池🚪",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#连接池🚪","aria-hidden":"true"},"#",-1),_={href:"https://www.bilibili.com/video/BV1kH4y1S7wz?p=17&spm_id_from=pageDriver&vd_source=f8821730ff8a13ec89104c8629e6d42b",target:"_blank",rel:"noopener noreferrer"},y=t(`<blockquote><p>默认每次发送，会重新创建请求，加一个连接池，减少创建次数</p></blockquote><ul><li>依赖</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--OK http 的依赖 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>io.github.openfeign<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>feign-okhttp<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置</li></ul><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">feign</span><span class="token punctuation">:</span>
  <span class="token key atrule">okhttp</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),x={id:"最佳实践-优化-🚪",tabindex:"-1"},I=n("a",{class:"header-anchor",href:"#最佳实践-优化-🚪","aria-hidden":"true"},"#",-1),w={href:"https://www.bilibili.com/video/BV1kH4y1S7wz?p=18&spm_id_from=pageDriver&vd_source=f8821730ff8a13ec89104c8629e6d42b",target:"_blank",rel:"noopener noreferrer"},S=n("blockquote",null,[n("p",null,[s("额外创建模块 用来写公用的"),n("code",null,"OpenFeign")])],-1),E={id:"日志🚪",tabindex:"-1"},q=n("a",{class:"header-anchor",href:"#日志🚪","aria-hidden":"true"},"#",-1),C={href:"https://www.bilibili.com/video/BV1kH4y1S7wz?p=19&spm_id_from=pageDriver&vd_source=f8821730ff8a13ec89104c8629e6d42b",target:"_blank",rel:"noopener noreferrer"};function R(L,V){const a=c("ExternalLinkIcon");return l(),i("div",null,[u,n("p",null,[n("a",d,[s("飞书"),e(a)]),s(),n("a",r,[s("bilibili"),e(a)])]),k,n("h3",v,[m,s(" 基础使用"),n("a",g,[s("🚪"),e(a)])]),b,n("h3",h,[f,s(" 连接池"),n("a",_,[s("🚪"),e(a)])]),y,n("h3",x,[I,s(" 最佳实践（优化）"),n("a",w,[s("🚪"),e(a)])]),S,n("h3",E,[q,s(" 日志"),n("a",C,[s("🚪"),e(a)])])])}const D=p(o,[["render",R],["__file","SpringCloud.html.vue"]]);export{D as default};
