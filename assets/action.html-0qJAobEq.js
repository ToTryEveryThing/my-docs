import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as i,c,a as n,b as a,d as e,f as p}from"./app-KxHelxDn.js";const o={},u={href:"https://www.bilibili.com/video/BV1RE411R7Uy/?spm_id_from=333.788.recommend_more_video.1&vd_source=f8821730ff8a13ec89104c8629e6d42b",target:"_blank",rel:"noopener noreferrer"},d={href:"https://github.com/JamesIves/github-pages-deploy-action",target:"_blank",rel:"noopener noreferrer"},r=p(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 程序名字</span>
<span class="token key atrule">name</span><span class="token punctuation">:</span> CI

<span class="token comment"># 触发时机</span>
<span class="token key atrule">on</span><span class="token punctuation">:</span>
<span class="token comment">######### schedule和push只能用一个</span>
<span class="token comment"># 定时执行</span>
<span class="token comment">#  schedule:</span>
<span class="token comment">#   - cron: &#39;0 10 *  * *&#39;</span>

<span class="token comment"># main分支变动时  触发</span>
  <span class="token key atrule">push</span><span class="token punctuation">:</span>
    <span class="token key atrule">branches</span><span class="token punctuation">:</span> 
      <span class="token punctuation">-</span> main
<span class="token comment"># 某个文件发生变化  也可以！！    </span>
<span class="token comment">#    paths:</span>
<span class="token comment">#      - src/*</span>
    

<span class="token comment"># 里面有多个任务</span>
<span class="token key atrule">jobs</span><span class="token punctuation">:</span>

<span class="token comment"># 任务名字</span>
  <span class="token key atrule">build</span><span class="token punctuation">:</span>
  
  <span class="token comment"># 运行的系统下</span>
    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest

    <span class="token comment"># 步骤</span>
    <span class="token key atrule">steps</span><span class="token punctuation">:</span>
    
      <span class="token comment"># 拉取代码</span>
      <span class="token comment"># 使用别人现成的action完成需要的操作</span>
      <span class="token punctuation">-</span> <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@v3

      <span class="token comment"># 步骤名称</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run a one<span class="token punctuation">-</span>line script
        <span class="token key atrule">run</span><span class="token punctuation">:</span> echo Hello<span class="token punctuation">,</span> world<span class="token tag">!</span>

      <span class="token comment"># 步骤名称</span>
      <span class="token comment"># Runs a set of commands using the runners shell</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Run a multi<span class="token punctuation">-</span>line script
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          echo Add other actions to build,
          echo test, and deploy your project.</span>
          
      <span class="token comment"># 步骤名称</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> metoo
        <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">
          echo &quot;\\n Hello World&quot; &gt;&gt; ./README.md</span>
          
      <span class="token comment"># 重新提交到githu   </span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Push to GitHub
        <span class="token key atrule">uses</span><span class="token punctuation">:</span> EndBug/add<span class="token punctuation">-</span>and<span class="token punctuation">-</span>commit@v7.2.1
        <span class="token comment"># 携带参数</span>
        <span class="token key atrule">with</span><span class="token punctuation">:</span>
          <span class="token key atrule">branch</span><span class="token punctuation">:</span> main
          <span class="token key atrule">message</span><span class="token punctuation">:</span> <span class="token string">&#39;Add content&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function m(v,k){const s=l("ExternalLinkIcon");return i(),c("div",null,[n("p",null,[n("a",u,[a("b"),e(s)])]),n("p",null,[n("a",d,[a("将文件推送到新的分支"),e(s)])]),r])}const y=t(o,[["render",m],["__file","action.html.vue"]]);export{y as default};
