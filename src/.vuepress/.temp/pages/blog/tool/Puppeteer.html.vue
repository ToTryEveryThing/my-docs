<template><div><h1 id="puppeteer" tabindex="-1"><a class="header-anchor" href="#puppeteer" aria-hidden="true">#</a> Puppeteer</h1>
<h6 id="api-faq-contributing-troubleshooting" tabindex="-1"><a class="header-anchor" href="#api-faq-contributing-troubleshooting" aria-hidden="true">#</a> <a href="https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md" target="_blank" rel="noopener noreferrer">API<ExternalLinkIcon/></a> | <a href="https://puppeteer.bootcss.com/#faq" target="_blank" rel="noopener noreferrer">FAQ<ExternalLinkIcon/></a> | <a href="https://github.com/GoogleChrome/puppeteer/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">Contributing<ExternalLinkIcon/></a> | <a href="https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md" target="_blank" rel="noopener noreferrer">Troubleshooting<ExternalLinkIcon/></a></h6>
<blockquote>
<p>Puppeteer 是一个 Node 库，它提供了一个高级 API 来通过 <a href="https://chromedevtools.github.io/devtools-protocol/" target="_blank" rel="noopener noreferrer">DevTools<ExternalLinkIcon/></a> 协议控制 Chromium 或 Chrome。Puppeteer 默认以 <a href="https://developers.google.com/web/updates/2017/04/headless-chrome" target="_blank" rel="noopener noreferrer">headless<ExternalLinkIcon/></a> 模式运行，但是可以通过修改配置文件运行“有头”模式。</p>
</blockquote>
<h6 id="能做什么" tabindex="-1"><a class="header-anchor" href="#能做什么" aria-hidden="true">#</a> 能做什么?</h6>
<p>你可以在浏览器中手动执行的绝大多数操作都可以使用 Puppeteer 来完成！ 下面是一些示例：</p>
<ul>
<li>生成页面 PDF。</li>
<li>抓取 SPA（单页应用）并生成预渲染内容（即“SSR”（服务器端渲染））。</li>
<li>自动提交表单，进行 UI 测试，键盘输入等。</li>
<li>创建一个时时更新的自动化测试环境。 使用最新的 JavaScript 和浏览器功能直接在最新版本的Chrome中执行测试。</li>
<li>捕获网站的 <a href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference" target="_blank" rel="noopener noreferrer">timeline trace<ExternalLinkIcon/></a>，用来帮助分析性能问题。</li>
<li>测试浏览器扩展。</li>
</ul>
<p>演示地址: <a href="https://try-puppeteer.appspot.com/" target="_blank" rel="noopener noreferrer">https://try-puppeteer.appspot.com/<ExternalLinkIcon/></a></p>
<h2 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用" aria-hidden="true">#</a> 开始使用</h2>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>
<p>在项目中使用 Puppeteer：</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i puppeteer
<span class="token comment"># or "yarn add puppeteer"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: 当你安装 Puppeteer 时，它会下载最新版本的Chromium（~170MB Mac，~282MB Linux，~280MB Win），以保证可以使用 API。 如果想要跳过下载，请阅读<a href="https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#environment-variables" target="_blank" rel="noopener noreferrer">环境变量<ExternalLinkIcon/></a>。</p>
<h3 id="puppeteer-core" tabindex="-1"><a class="header-anchor" href="#puppeteer-core" aria-hidden="true">#</a> puppeteer-core</h3>
<p>自 1.7.0 版本以来，我们都会发布一个 <a href="https://www.npmjs.com/package/puppeteer-core" target="_blank" rel="noopener noreferrer"><code v-pre>puppeteer-core</code><ExternalLinkIcon/></a> 包，这个包默认不会下载 Chromium。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i puppeteer-core
<span class="token comment"># or "yarn add puppeteer-core"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>puppeteer-core</code> 是一个的轻量级的 Puppeteer 版本，用于启动现有浏览器安装或连接到远程安装。</p>
<p>具体见 <a href="https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteer-vs-puppeteer-core" target="_blank" rel="noopener noreferrer">puppeteer vs puppeteer-core<ExternalLinkIcon/></a>.</p>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3>
<p>Note: Puppeteer 至少需要 Node v6.4.0，下面的示例使用 async / await，它们仅在 Node v7.6.0 或更高版本中被支持。</p>
<p>Puppeteer 使用起来和其他测试框架类似。你需要创建一个 <code v-pre>Browser</code> 实例，打开页面，然后使用 <a href="https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#" target="_blank" rel="noopener noreferrer">Puppeteer 的 API<ExternalLinkIcon/></a>。</p>
<p><strong>Example</strong> - 跳转到 <a href="https://example.com/" target="_blank" rel="noopener noreferrer">https://example.com<ExternalLinkIcon/></a> 并保存截图至 <em>example.png</em>:</p>
<p>文件为 <strong>example.js</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> puppeteer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'puppeteer'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">'https://example.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">screenshot</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'example.png'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在命令行中执行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> example.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Puppeteer 初始化的屏幕大小默认为 800px x 600px。但是这个尺寸可以通过 <a href="https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#pagesetviewportviewport" target="_blank" rel="noopener noreferrer"><code v-pre>Page.setViewport()</code><ExternalLinkIcon/></a> 设置。</p>
<p><strong>Example</strong> - 创建一个 PDF。</p>
<p>文件为 <strong>hn.js</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> puppeteer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'puppeteer'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">'https://news.ycombinator.com'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">waitUntil</span><span class="token operator">:</span> <span class="token string">'networkidle2'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">pdf</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">'hn.pdf'</span><span class="token punctuation">,</span> <span class="token literal-property property">format</span><span class="token operator">:</span> <span class="token string">'A4'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在命令行中执行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> hn.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 <a href="https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#pagepdfoptions" target="_blank" rel="noopener noreferrer"><code v-pre>Page.pdf()</code><ExternalLinkIcon/></a> 了解跟多内容。</p>
<p><strong>Example</strong> - 在页面中执行脚本</p>
<p>文件为 <strong>get-dimensions.js</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> puppeteer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'puppeteer'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">'https://example.com'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// Get the "viewport" of the page, as reported by the page.</span>
  <span class="token keyword">const</span> dimensions <span class="token operator">=</span> <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">width</span><span class="token operator">:</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientWidth<span class="token punctuation">,</span>
      <span class="token literal-property property">height</span><span class="token operator">:</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">,</span>
      <span class="token literal-property property">deviceScaleFactor</span><span class="token operator">:</span> window<span class="token punctuation">.</span>devicePixelRatio
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Dimensions:'</span><span class="token punctuation">,</span> dimensions<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在命令行中执行</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">node</span> get-dimensions.js
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看 <a href="https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#pageevaluatepagefunction-args" target="_blank" rel="noopener noreferrer"><code v-pre>Page.evaluate()</code><ExternalLinkIcon/></a> 了解更多相关内容，该方法有点类似于 <code v-pre>evaluateOnNewDocument</code> and <code v-pre>exposeFunction</code>。</p>
<h2 id="默认设置" tabindex="-1"><a class="header-anchor" href="#默认设置" aria-hidden="true">#</a> 默认设置</h2>
<p><strong>1. 使用无头模式</strong></p>
<p>Puppeteer 运行 Chromium 的<a href="https://developers.google.com/web/updates/2017/04/headless-chrome" target="_blank" rel="noopener noreferrer">headless mode<ExternalLinkIcon/></a>。如果想要使用完全版本的 Chromium，设置 <a href="https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#puppeteerlaunchoptions" target="_blank" rel="noopener noreferrer">'headless' option<ExternalLinkIcon/></a> 即可。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">headless</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// default is true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2. 运行绑定的 Chromium 版本</strong></p>
<p>默认情况下，Puppeteer 下载并使用特定版本的 Chromium 以及其 API 保证开箱即用。 如果要将 Puppeteer 与不同版本的 Chrome 或 Chromium 一起使用，在创建<code v-pre>Browser</code>实例时传入 Chromium 可执行文件的路径即可：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">executablePath</span><span class="token operator">:</span> <span class="token string">'/path/to/Chrome'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>具体见：<a href="https://github.com/GoogleChrome/puppeteer/blob/v1.10.0/docs/api.md#puppeteerlaunchoptions" target="_blank" rel="noopener noreferrer"><code v-pre>Puppeteer.launch()</code><ExternalLinkIcon/></a></p>
<p>看<a href="https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/" target="_blank" rel="noopener noreferrer"><code v-pre>这篇文章</code><ExternalLinkIcon/></a>了解 Chromium 与 Chrome 的不同。<a href="https://chromium.googlesource.com/chromium/src/+/master/docs/chromium_browser_vs_google_chrome.md" target="_blank" rel="noopener noreferrer"><code v-pre>这篇文章</code><ExternalLinkIcon/></a> 介绍了一些 Linux 用户在使用上的区别。</p>
<p><strong>3. 创建用户配置文件</strong></p>
<p>Puppeteer 会创建自己的 Chromium 用户配置文件，<strong>它会在每次运行时清理</strong>。</p>
<h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> puppeteer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'puppeteer'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">captureScreenshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> browser <span class="token operator">=</span> <span class="token keyword">await</span> puppeteer<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'--no-sandbox'</span><span class="token punctuation">,</span> <span class="token string">'--disable-setuid-sandbox'</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

  <span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">newPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">setViewport</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1920</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1080</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 根据需要设置宽度和高度</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">goto</span><span class="token punctuation">(</span><span class="token string">'http://xxxxxxx.com/'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 替换成你的网站地址</span>

  <span class="token comment">// 获取当前日期</span>
  <span class="token keyword">const</span> currentDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> formattedDate <span class="token operator">=</span> currentDate<span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 格式化日期为 yyyy-MM-dd</span>

  <span class="token comment">// 生成截图文件路径和名称</span>
  <span class="token keyword">const</span> screenshotPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>formattedDate<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.png</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 设置截图选项</span>
  <span class="token keyword">const</span> screenshotOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> screenshotPath<span class="token punctuation">,</span> <span class="token comment">// 保存截图的文件路径和名称</span>
    <span class="token literal-property property">fullPage</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 截取整个页面</span>
    <span class="token literal-property property">clip</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1920</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">1080</span> <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> page<span class="token punctuation">.</span><span class="token function">screenshot</span><span class="token punctuation">(</span>screenshotOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">await</span> browser<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">captureScreenshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>




<span class="token comment">// //可以使用</span>
<span class="token comment">// const puppeteer = require('puppeteer');</span>
<span class="token comment">// const path = require('path');</span>

<span class="token comment">// async function captureScreenshot() {</span>
<span class="token comment">//   const browser = await puppeteer.launch();</span>
<span class="token comment">//   const page = await browser.newPage();</span>
<span class="token comment">//   await page.goto('https://beink.cn'); // 替换成你的网站地址</span>
<span class="token comment">//     // 获取当前日期</span>
<span class="token comment">//   const currentDate = new Date();</span>
<span class="token comment">//   const formattedDate = currentDate.toISOString().slice(0, 10); // 格式化日期为 yyyy-MM-dd</span>
  
<span class="token comment">//   // 生成截图文件路径和名称</span>
<span class="token comment">//   const screenshotPath = path.join(__dirname, `${formattedDate}.png`);</span>
  
<span class="token comment">//   await page.screenshot({ path: screenshotPath }); // 保存截图的文件路径和名称</span>
<span class="token comment">//   await browser.close();</span>
<span class="token comment">// }</span>

<span class="token comment">// captureScreenshot();</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>一张图片大概3M</p>
</blockquote>
<h2 id="定时" tabindex="-1"><a class="header-anchor" href="#定时" aria-hidden="true">#</a> 定时</h2>
<ul>
<li>crontab -e</li>
<li>0 0 12 * * ? cd /www/shot &amp;&amp; node shot.js</li>
</ul>
<h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2>
<h3 id="puppeteer没有自动安装chromium的解决办法" tabindex="-1"><a class="header-anchor" href="#puppeteer没有自动安装chromium的解决办法" aria-hidden="true">#</a> Puppeteer没有自动安装Chromium的解决办法</h3>
<p><a href="https://blog.csdn.net/henryhu712/article/details/115588221" target="_blank" rel="noopener noreferrer">Puppeteer没有自动安装Chromium的解决办法_亮子AI的博客-CSDN博客<ExternalLinkIcon/></a><br>
<a href="https://blog.csdn.net/qq_42414062/article/details/114539378" target="_blank" rel="noopener noreferrer">安装后再看这<ExternalLinkIcon/></a></p>
<p>按照官方文档的说法，安装 Puppeteer 时会自动安装 Chromium 浏览器。但是实际安装过程中，会出现不安装 Chromium 的情况，这时需要使用下面的命令来手动安装 Chromium：</p>
<p><code v-pre>node node_modules/puppeteer/install.js</code><br>
这样就能把 Chromium 正确的安装到 node_modules/puppeteer/.local-chromium 目录下。根据操作系统及浏览器版本的不同，浏览器大概占用 200M～400M 的磁盘空间。</p>
</div></template>


