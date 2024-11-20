import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as t,o as n}from"./app-CGgmYC36.js";const e={};function l(h,s){return n(),a("div",null,s[0]||(s[0]=[t(`<h2 id="sseemitter" tabindex="-1"><a class="header-anchor" href="#sseemitter"><span>SseEmitter</span></a></h2><blockquote><p>SseEmitter 是 Spring 框架中用于服务器发送事件（Server-Sent Events，SSE）的一个类。SSE 是一种允许服务器主动向客户端发送数据的技术，通常用于创建到服务器的单向连接，以便服务器可以在有新数据时立即推送给客户端。</p></blockquote><p>SseEmitter 类提供了一种方便的方式来发送这些事件。以下是一些基本的使用步骤：</p><ul><li><p>创建 SseEmitter 实例：在 Spring 控制器中，可以创建一个 SseEmitter 实例，并返回它。</p></li><li><p>发送数据：使用 SseEmitter 的 send 方法来发送数据给客户端。</p></li><li><p>完成或错误处理：当完成发送数据时，可以调用 SseEmitter 的 complete 方法来关闭连接。如果发生错误，可以调用 completeWithError 方法。</p></li><li><p>超时处理：可以设置超时时间，并且在超时后进行相应的处理</p></li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">GetMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;/stream&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> SseEmitter</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">() throws IOException {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    final</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;"> SseEmitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> emitter </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> SseEmitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">-&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        try</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            for</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10000</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">                emitter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">send</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">SseEmitter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">event</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Message &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> i));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">                Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            emitter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">complete</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">Exception</span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;"> ex</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">            emitter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">completeWithError</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(ex);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    })</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">start</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> emitter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://beink.oss-cn-beijing.aliyuncs.com/study/Snipaste_2024-11-20_16-13-52.png" alt="web" tabindex="0" loading="lazy"><figcaption>web</figcaption></figure>`,6)]))}const r=i(e,[["render",l],["__file","class.html.vue"]]),d=JSON.parse('{"path":"/blog/worklogs/class.html","title":"class","lang":"zh-CN","frontmatter":{"title":"class","icon":"vscode-icons:file-type-class","order":2,"description":"class","category":["work"],"tag":["class"],"head":[["meta",{"property":"og:url","content":"https://docs.beink.cn/blog/worklogs/class.html"}],["meta",{"property":"og:title","content":"class"}],["meta",{"property":"og:description","content":"class"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://beink.oss-cn-beijing.aliyuncs.com/study/Snipaste_2024-11-20_16-13-52.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-20T08:25:36.000Z"}],["meta",{"property":"article:tag","content":"class"}],["meta",{"property":"article:modified_time","content":"2024-11-20T08:25:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"class\\",\\"image\\":[\\"https://beink.oss-cn-beijing.aliyuncs.com/study/Snipaste_2024-11-20_16-13-52.png\\"],\\"dateModified\\":\\"2024-11-20T08:25:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"mishu\\",\\"url\\":\\"https://github.com/ToTryEveryThing/my-docs\\"}]}"]]},"headers":[{"level":2,"title":"SseEmitter","slug":"sseemitter","link":"#sseemitter","children":[]}],"git":{"createdTime":1732091136000,"updatedTime":1732091136000,"contributors":[{"name":"mishu","email":"riceuncle@outlook.com","commits":1}]},"readingTime":{"minutes":0.96,"words":288},"filePathRelative":"blog/worklogs/class.md","localizedDate":"2024年11月20日","excerpt":"<h2>SseEmitter</h2>\\n<blockquote>\\n<p>SseEmitter 是 Spring 框架中用于服务器发送事件（Server-Sent Events，SSE）的一个类。SSE 是一种允许服务器主动向客户端发送数据的技术，通常用于创建到服务器的单向连接，以便服务器可以在有新数据时立即推送给客户端。</p>\\n</blockquote>\\n<p>SseEmitter 类提供了一种方便的方式来发送这些事件。以下是一些基本的使用步骤：</p>\\n<ul>\\n<li>\\n<p>创建 SseEmitter 实例：在 Spring 控制器中，可以创建一个 SseEmitter 实例，并返回它。</p>\\n</li>\\n<li>\\n<p>发送数据：使用 SseEmitter 的 send 方法来发送数据给客户端。</p>\\n</li>\\n<li>\\n<p>完成或错误处理：当完成发送数据时，可以调用 SseEmitter 的 complete 方法来关闭连接。如果发生错误，可以调用 completeWithError 方法。</p>\\n</li>\\n<li>\\n<p>超时处理：可以设置超时时间，并且在超时后进行相应的处理</p>\\n</li>\\n</ul>"}');export{r as comp,d as data};