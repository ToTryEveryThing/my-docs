import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as l,c,a as n,b as s,d as e,f as o}from"./app-77071b0d.js";const u={},p=n("h1",{id:"elasticsearch",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#elasticsearch","aria-hidden":"true"},"#"),s(" ElasticSearch")],-1),d={href:"https://www.bilibili.com/video/BV1np4y1C7Yf?p=102&vd_source=f8821730ff8a13ec89104c8629e6d42b",target:"_blank",rel:"noopener noreferrer"},r={href:"https://www.bilibili.com/video/BV1hh411D7sb/?p=20&spm_id_from=pageDriver&vd_source=f8821730ff8a13ec89104c8629e6d42b",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.cnblogs.com/hualess/p/11540477.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.csdn.net/qq_17229141/article/details/123106584",target:"_blank",rel:"noopener noreferrer"},b={href:"https://elasticsearch.bookhub.tech/getting_started/esindex.html#%E6%89%B9%E9%87%8F%E7%B4%A2%E5%BC%95%E6%96%87%E6%A1%A3",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/qq_41879343/article/details/107376190",target:"_blank",rel:"noopener noreferrer"},h={href:"https://apifox.com/apidoc/shared-f3e304ee-a95c-4dd0-b6a7-5a83abb6ff2c",target:"_blank",rel:"noopener noreferrer"},g=o(`<div class="hint-container tip"><p class="hint-container-title">介绍</p><p>Elasticsearch 是一个分布式的、开源的搜索分析引擎，支持各种数据类型，包括文本、数字、地理、结构化、非结构化。</p><p>可以很好地存储和查询文档，用于应用程序搜索、企业搜索和网站搜索。</p></div><blockquote><p>对比数据库</p></blockquote><table><thead><tr><th>索引（indices）</th><th>Databases 数据库</th></tr></thead><tbody><tr><td>类型（type）</td><td>Table 数据表</td></tr><tr><td>文档（Document）</td><td>Row 行</td></tr><tr><td>字段（Field）</td><td>Columns 列</td></tr></tbody></table><h2 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作" aria-hidden="true">#</a> 基础操作</h2><h3 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> _cat</h3><blockquote><p>method: GET</p></blockquote><ul><li>/_cat/nodes 查看所有的节点</li><li>/_cat/health 健康状态</li><li>/_cat/master</li><li>/_cat/indices 查看索引 show databases;</li></ul><h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h3><ul><li>创建索引</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT  /shopping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查看索引</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /shopping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除索引</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DELETE /shopping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h3><ul><li>创建文档(会覆盖原有的数据）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT/POST  /myindex/_doc/1
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Tom&quot;</span>
<span class="token punctuation">}</span>
<span class="token comment">## 不加id 则会自动生成id</span>
POST  /myindex/_doc
<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Tom&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改文档（在原来的数据上修改）</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>POST /shopping/_update/23
<span class="token punctuation">{</span>
    <span class="token string">&quot;doc&quot;</span>:<span class="token punctuation">{</span>
        <span class="token string">&quot;school&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;666&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET  /myindex/_doc/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>查询索引下所有文档</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /shopping/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>删除</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>DELETE  /myindex/_doc/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="高级查询" tabindex="-1"><a class="header-anchor" href="#高级查询" aria-hidden="true">#</a> 高级查询</h3><ul><li>匹配</li></ul><blockquote><p><code>match_phrase</code>不拆分、 <code>match</code>拆分后模糊查询、<code>match_all</code>查询所有</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /shopping/_search
<span class="token punctuation">{</span>
    <span class="token string">&quot;query&quot;</span>:<span class="token punctuation">{</span>
        <span class="token string">&quot;match&quot;</span>:<span class="token punctuation">{</span> <span class="token comment">## 匹配</span>
			<span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Tom&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分页+排序</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /shopping/_search
<span class="token punctuation">{</span>
    <span class="token string">&quot;query&quot;</span>:<span class="token punctuation">{</span>
        <span class="token string">&quot;match_all&quot;</span>:<span class="token punctuation">{</span> <span class="token comment">## 匹配</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;from&quot;</span>:0, <span class="token comment">## 第几条开始</span>
    <span class="token string">&quot;size&quot;</span>:2,  <span class="token comment">## 一页几条数据</span>
    <span class="token string">&quot;_source&quot;</span>:<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span>, <span class="token comment">## 只要的字段</span>
    <span class="token string">&quot;sort&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token comment">##排序</span>
    	<span class="token string">&quot;name.keyword&quot;</span>:<span class="token punctuation">{</span> <span class="token comment">##排序的字段</span>
    		<span class="token string">&quot;order&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;desc&quot;</span> <span class="token comment">## 升降序</span>
    	<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>多条件查询</li></ul><blockquote><p><code>bool</code>把各种其它查询通过<code>must</code>（与）、<code>must_not</code>（非）、<code>should</code>（或）的方式进行组合</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /shopping/_search
<span class="token punctuation">{</span>
    <span class="token string">&quot;query&quot;</span>:<span class="token punctuation">{</span>
        <span class="token string">&quot;bool&quot;</span>:<span class="token punctuation">{</span>    <span class="token comment">## 多添加查询</span>
            <span class="token string">&quot;should&quot;</span>:<span class="token punctuation">[</span> 
                <span class="token punctuation">{</span>
                    <span class="token string">&quot;match&quot;</span>:<span class="token punctuation">{</span> <span class="token comment">##匹配</span>
                        <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Tom&quot;</span>  <span class="token comment">##name字段</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>,
                <span class="token punctuation">{</span>
                    <span class="token string">&quot;match&quot;</span>:<span class="token punctuation">{</span>
                        <span class="token string">&quot;school&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;汤姆&quot;</span> <span class="token comment">## school字段</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>范围查询</li></ul><blockquote><p><code>gt</code>-大于 <code>gte</code>-大于等于 lt<code>-小于 </code>lte\`-小于等于</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /shopping/_search
<span class="token punctuation">{</span>
    <span class="token string">&quot;query&quot;</span>:<span class="token punctuation">{</span>
        <span class="token string">&quot;range&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;amount&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">&quot;gt&quot;</span><span class="token builtin class-name">:</span>  <span class="token number">12</span>
            <span class="token punctuation">}</span>
    	<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>高亮</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>GET /shopping/_search
<span class="token punctuation">{</span>
    <span class="token string">&quot;query&quot;</span>:<span class="token punctuation">{</span>
        <span class="token string">&quot;match&quot;</span>:<span class="token punctuation">{</span>
            <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span><span class="token string">&quot;Tom&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;highlight&quot;</span>:<span class="token punctuation">{</span>
        <span class="token string">&quot;fields&quot;</span>:<span class="token punctuation">{</span>
            <span class="token string">&quot;name&quot;</span>:<span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>聚合</li><li>映射</li></ul><blockquote><p><strong>Mapping（映射）</strong>： 是用来定义文档和它所包含的字段是如何被存储和索引的。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>PUT /shopping/_mapping
<span class="token punctuation">{</span>
    <span class="token string">&quot;properties&quot;</span>:<span class="token punctuation">{</span> 
        <span class="token string">&quot;name&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token comment">## 字段</span>
            <span class="token string">&quot;type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;text&quot;</span>, <span class="token comment">## 可以被分词查询</span>
            <span class="token string">&quot;index&quot;</span> <span class="token builtin class-name">:</span> <span class="token boolean">true</span> <span class="token comment">## 可以被索引</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;sex&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">&quot;type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;text&quot;</span>,
            <span class="token string">&quot;index&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>,
        <span class="token string">&quot;tell&quot;</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span> 
            <span class="token string">&quot;type&quot;</span> <span class="token builtin class-name">:</span> <span class="token string">&quot;keyword&quot;</span>, <span class="token comment">## 必须是个完整的词</span>
            <span class="token string">&quot;index&quot;</span> <span class="token builtin class-name">:</span> <span class="token boolean">false</span> <span class="token comment">## 不能被索引</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java操作" tabindex="-1"><a class="header-anchor" href="#java操作" aria-hidden="true">#</a> JAVA操作</h2>`,43);function q(_,f){const a=i("ExternalLinkIcon");return l(),c("div",null,[p,n("p",null,[n("a",d,[s("old-ElasticSearchbilibili"),e(a)]),n("a",r,[s("new-ElasticSearchbilibili"),e(a)])]),n("p",null,[n("a",v,[s("安装"),e(a)]),s(),n("a",m,[s("报错"),e(a)]),s(),n("a",b,[s("官方文档"),e(a)]),s(),n("a",k,[s("基本查询，结果过滤，高级查询，过滤，排序"),e(a)])]),n("p",null,[n("a",h,[s("创建索引 - ElasticSearch (apifox.com)"),e(a)])]),g])}const T=t(u,[["render",q],["__file","ElasticSearch.html.vue"]]);export{T as default};
