<template><div><p><a href="https://www.bilibili.com/video/BV1RE411R7Uy/?spm_id_from=333.788.recommend_more_video.1&amp;vd_source=f8821730ff8a13ec89104c8629e6d42b" target="_blank" rel="noopener noreferrer">bilibili</a></p>
<p><a href="https://github.com/JamesIves/github-pages-deploy-action" target="_blank" rel="noopener noreferrer">将文件推送到新的分支</a></p>
<div class="language-yml line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--vp-collapsed-lines:10;--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 程序名字</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">CI</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 触发时机</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">on</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">######### schedule和push只能用一个</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 定时执行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">#  schedule:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">#   - cron: '0 10 *  * *'</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># main分支变动时  触发</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">  push</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">    branches</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">main</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 某个文件发生变化  也可以！！    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">#    paths:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">#      - src/*</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 里面有多个任务</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 任务名字</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">  build</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">  # 运行的系统下</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">ubuntu-latest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    # 步骤</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">      # 拉取代码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">      # 使用别人现成的action完成需要的操作</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">uses</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">actions/checkout@v3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">      # 步骤名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">Run a one-line script</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">echo Hello, world!</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">      # 步骤名称</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">      # Runs a set of commands using the runners shell</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">Run a multi-line script</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379">          echo Add other actions to build,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379">          echo test, and deploy your project.</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379">          </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">      # 步骤名称</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">metoo</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379">          echo "\n Hello World" >> ./README.md</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379">          </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">      # 重新提交到githu   </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">Push to GitHub</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">EndBug/add-and-commit@v7.2.1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        # 携带参数</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">          branch</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">main</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">          message</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">'Add content'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></div></template>


