<template><div><h1 id="jasypt加密" tabindex="-1"><a class="header-anchor" href="#jasypt加密"><span>jasypt加密</span></a></h1>
<blockquote>
<p>Jasypt Spring Boot 为 spring boot 应用程序中的属性源提供加密支持，出于安全考虑，Spring boot 配置文件中的敏感信息通常需要对它进行加密/脱敏处理，尽量不使用明文，要实现这一点，办法有很多，自己手动对敏感信息进行加解密也是可以的</p>
</blockquote>
<p>依赖</p>
<div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">>com.github.ulisesbocchio&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">>jasypt-spring-boot-starter&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">        &#x3C;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">>---&#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    &#x3C;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单使用</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">Autowired</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">    BasicTextEncryptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> ba</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">Test</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> SimpleTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        ba</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">setPassword</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"hh"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">// 设置密钥</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">ba</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">encrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"root"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">));</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">//加密</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">ba</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">encrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"123456"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">));</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">//加密</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">ba</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">decrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"837BpgX2vWwq/Ysmzs6Ucg=="</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">));</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">//解密</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">    }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置</p>
<div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">spring</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">  datasource</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">defaultDataSource</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">    driver-class-name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">    url</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">jdbc:mysql://localhost:3306/quartz?serverTimezone=Asia/Shanghai&#x26;useSSL=false&#x26;useUnicode=true&#x26;allowPublicKeyRetrieval=true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">    username</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">ENC(jzMNMTaZzF0uxnFstWttUg==)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">    password</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">ENC(aRki+PG956fgx9vyP09p9A==)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解密</p>
<ol>
<li>配置文件中使用<code v-pre>不推荐</code></li>
</ol>
<div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">jasypt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">  encryptor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">    password</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">hh</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>环境配置<br>
java -jar xxxxx.jar -Djasypt.encryptor.password=hh</li>
</ol>
</div></template>


