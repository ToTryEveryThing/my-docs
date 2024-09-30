import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,a as e,o as n}from"./app-CDu2_RGC.js";const l={};function t(h,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h2 id="去重" tabindex="-1"><a class="header-anchor" href="#去重"><span>去重</span></a></h2><p><a href="https://leetcode.cn/problems/delete-duplicate-emails/description/" target="_blank" rel="noopener noreferrer">196. 删除重复的电子邮箱</a></p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">delete</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Person </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">not</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">	select</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">		select</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> min</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(id) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Person </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">group by</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> email</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">	) T</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">delete</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> p1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> Person  p1, Person  p2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> p1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">Email</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> p2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">Email</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  and</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  p1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">id</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> p2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">id</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="排名" tabindex="-1"><a class="header-anchor" href="#排名"><span>排名</span></a></h2><p><a href="https://leetcode.cn/problems/rank-scores/" target="_blank" rel="noopener noreferrer">178. 分数排名</a></p><blockquote><p><a href="https://zhuanlan.zhihu.com/p/133469603" target="_blank" rel="noopener noreferrer">row_number, rank(), dense_rank()的区别及具体用法示例 - 知乎 (zhihu.com)</a></p><p>dense_rank() 1 1 2 3 4 5</p><p>rank() 1 1 3 4 5 6</p><p>row_number() 1 2 3 4 5 6</p></blockquote><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">SELECT</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  score,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">  DENSE_RANK</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">over</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    order by</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      score </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">desc</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;rank&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">FROM</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  Scores;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8)]))}const r=i(l,[["render",t],["__file","mysql.html.vue"]]),d=JSON.parse('{"path":"/blog/worklogs/mysql.html","title":"Mysql","lang":"zh-CN","frontmatter":{"title":"Mysql","icon":"Mysql","order":1,"description":"mysql简单常用基础操作","category":["work"],"tag":["mysql"],"head":[["meta",{"property":"og:url","content":"https://docs.beink.cn/blog/worklogs/mysql.html"}],["meta",{"property":"og:title","content":"Mysql"}],["meta",{"property":"og:description","content":"mysql简单常用基础操作"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-30T01:54:06.000Z"}],["meta",{"property":"article:tag","content":"mysql"}],["meta",{"property":"article:modified_time","content":"2024-09-30T01:54:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Mysql\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-30T01:54:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"mishu\\",\\"url\\":\\"https://github.com/ToTryEveryThing/my-docs\\"}]}"]]},"headers":[{"level":2,"title":"去重","slug":"去重","link":"#去重","children":[]},{"level":2,"title":"排名","slug":"排名","link":"#排名","children":[]}],"git":{"createdTime":1727335440000,"updatedTime":1727661246000,"contributors":[{"name":"mishu","email":"riceuncle@outlook.com","commits":2}]},"readingTime":{"minutes":0.45,"words":134},"filePathRelative":"blog/worklogs/mysql.md","localizedDate":"2024年9月26日","excerpt":"<h2>去重</h2>\\n<p><a href=\\"https://leetcode.cn/problems/delete-duplicate-emails/description/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">196. 删除重复的电子邮箱</a></p>\\n<div class=\\"language-sql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sql\\" data-title=\\"sql\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">delete</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> from</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> Person </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">where</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> id </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">not</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> in</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> (</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">\\tselect</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> id </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">from</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> (</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">\\t\\tselect</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\"> min</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(id) </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">as</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> id </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">from</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> Person </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">group by</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> email</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">\\t) T</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">)</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,d as data};
