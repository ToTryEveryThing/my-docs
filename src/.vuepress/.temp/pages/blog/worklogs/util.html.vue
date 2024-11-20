<template><div><h2 id="sseemitter" tabindex="-1"><a class="header-anchor" href="#sseemitter"><span>SseEmitter</span></a></h2>
<blockquote>
<p>SseEmitter 是 Spring 框架中用于服务器发送事件（Server-Sent Events，SSE）的一个类。SSE 是一种允许服务器主动向客户端发送数据的技术，通常用于创建到服务器的单向连接，以便服务器可以在有新数据时立即推送给客户端。</p>
</blockquote>
<p>SseEmitter 类提供了一种方便的方式来发送这些事件。以下是一些基本的使用步骤：</p>
<ul>
<li>
<p>创建 SseEmitter 实例：在 Spring 控制器中，可以创建一个 SseEmitter 实例，并返回它。</p>
</li>
<li>
<p>发送数据：使用 SseEmitter 的 send 方法来发送数据给客户端。</p>
</li>
<li>
<p>完成或错误处理：当完成发送数据时，可以调用 SseEmitter 的 complete 方法来关闭连接。如果发生错误，可以调用 completeWithError 方法。</p>
</li>
<li>
<p>超时处理：可以设置超时时间，并且在超时后进行相应的处理</p>
</li>
</ul>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">GetMapping</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"/stream"</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B"> SseEmitter</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">() throws IOException {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    final</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B"> SseEmitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> emitter </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> SseEmitter</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">()</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">-></span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        try</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">            for</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">int</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2">&#x3C;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 10000</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">                emitter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">send</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">SseEmitter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">event</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">data</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"Message "</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> i));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">                Thread</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">100</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">            emitter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">complete</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">Exception</span><span style="--shiki-light:#E36209;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> ex</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">            emitter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">completeWithError</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(ex);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">    })</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">start</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> emitter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


