import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,o as n}from"./app-Q8tRuFHo.js";const l={};function e(h,i){return n(),a("div",null,i[0]||(i[0]=[t(`<h1 id="jasypt加密" tabindex="-1"><a class="header-anchor" href="#jasypt加密"><span>jasypt加密</span></a></h1><blockquote><p>Jasypt Spring Boot 为 spring boot 应用程序中的属性源提供加密支持，出于安全考虑，Spring boot 配置文件中的敏感信息通常需要对它进行加密/脱敏处理，尽量不使用明文，要实现这一点，办法有很多，自己手动对敏感信息进行加解密也是可以的</p></blockquote><p>依赖</p><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" data-title="xml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;com.github.ulisesbocchio&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">groupId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;jasypt-spring-boot-starter&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">artifactId</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;---&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">dependency</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单使用</p><div class="language-java line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="java" data-title="java" style="--vp-collapsed-lines:10;--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Autowired</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">    BasicTextEncryptor</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> ba</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">Test</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> SimpleTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        ba</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">setPassword</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;hh&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 设置密钥</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ba</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">encrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">));</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//加密</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ba</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">encrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;123456&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">));</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//加密</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">ba</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">decrypt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;837BpgX2vWwq/Ysmzs6Ucg==&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">));</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">//解密</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>配置</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">spring</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  datasource</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">defaultDataSource</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    driver-class-name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">com.mysql.cj.jdbc.Driver</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    url</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">jdbc:mysql://localhost:3306/quartz?serverTimezone=Asia/Shanghai&amp;useSSL=false&amp;useUnicode=true&amp;allowPublicKeyRetrieval=true</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    username</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">ENC(jzMNMTaZzF0uxnFstWttUg==)</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    password</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">ENC(aRki+PG956fgx9vyP09p9A==)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解密</p><ol><li>配置文件中使用<code>不推荐</code></li></ol><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">jasypt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  encryptor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    password</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">hh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>环境配置<br> java -jar xxxxx.jar -Djasypt.encryptor.password=hh</li></ol>`,12)]))}const r=s(l,[["render",e],["__file","jasypt.html.vue"]]),d=JSON.parse('{"path":"/blog/tools/jasypt.html","title":"Jasypt","lang":"zh-CN","frontmatter":{"title":"Jasypt","icon":"jiami","order":3,"description":"适用于spirng项目中配置文件的敏感数据","category":["Tool"],"tag":["jasypt"],"head":[["meta",{"property":"og:url","content":"https://docs.beink.cn/blog/tools/jasypt.html"}],["meta",{"property":"og:title","content":"Jasypt"}],["meta",{"property":"og:description","content":"适用于spirng项目中配置文件的敏感数据"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-16T07:37:40.000Z"}],["meta",{"property":"article:tag","content":"jasypt"}],["meta",{"property":"article:modified_time","content":"2024-08-16T07:37:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jasypt\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-16T07:37:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"mishu\\",\\"url\\":\\"https://github.com/ToTryEveryThing/my-docs\\"}]}"]]},"headers":[],"git":{"createdTime":1702971377000,"updatedTime":1723793860000,"contributors":[{"name":"mishu","email":"riceuncle@outlook.com","commits":3}]},"readingTime":{"minutes":0.77,"words":232},"filePathRelative":"blog/tools/jasypt.md","localizedDate":"2023年12月19日","excerpt":"\\n<blockquote>\\n<p>Jasypt Spring Boot 为 spring boot 应用程序中的属性源提供加密支持，出于安全考虑，Spring boot 配置文件中的敏感信息通常需要对它进行加密/脱敏处理，尽量不使用明文，要实现这一点，办法有很多，自己手动对敏感信息进行加解密也是可以的</p>\\n</blockquote>\\n<p>依赖</p>\\n<div class=\\"language-xml line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"xml\\" data-title=\\"xml\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    &lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">dependency</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">        &lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">groupId</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;com.github.ulisesbocchio&lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">groupId</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">        &lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">artifactId</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;jasypt-spring-boot-starter&lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">artifactId</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">        &lt;</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">version</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;---&lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">version</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    &lt;/</span><span style=\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\">dependency</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">&gt;</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,d as data};