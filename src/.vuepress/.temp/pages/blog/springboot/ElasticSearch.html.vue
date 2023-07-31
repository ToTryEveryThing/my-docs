<template><div><h1 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch" aria-hidden="true">#</a> ElasticSearch</h1>
<p><a href="https://www.bilibili.com/video/BV1np4y1C7Yf?p=102&amp;vd_source=f8821730ff8a13ec89104c8629e6d42b" target="_blank" rel="noopener noreferrer">old-ElasticSearchbilibili<ExternalLinkIcon/></a>
<a href="https://www.bilibili.com/video/BV1hh411D7sb/?p=20&amp;spm_id_from=pageDriver&amp;vd_source=f8821730ff8a13ec89104c8629e6d42b" target="_blank" rel="noopener noreferrer">new-ElasticSearchbilibili<ExternalLinkIcon/></a></p>
<p><a href="https://www.cnblogs.com/hualess/p/11540477.html" target="_blank" rel="noopener noreferrer">安装<ExternalLinkIcon/></a>      <a href="https://blog.csdn.net/qq_17229141/article/details/123106584" target="_blank" rel="noopener noreferrer">报错<ExternalLinkIcon/></a>      <a href="https://elasticsearch.bookhub.tech/getting_started/esindex.html#%E6%89%B9%E9%87%8F%E7%B4%A2%E5%BC%95%E6%96%87%E6%A1%A3" target="_blank" rel="noopener noreferrer">官方文档<ExternalLinkIcon/></a>    <a href="https://blog.csdn.net/qq_41879343/article/details/107376190" target="_blank" rel="noopener noreferrer">基本查询，结果过滤，高级查询，过滤，排序<ExternalLinkIcon/></a></p>
<p><a href="https://apifox.com/apidoc/shared-f3e304ee-a95c-4dd0-b6a7-5a83abb6ff2c" target="_blank" rel="noopener noreferrer">创建索引 - ElasticSearch (apifox.com)<ExternalLinkIcon/></a></p>
<div class="hint-container tip">
<p class="hint-container-title">介绍</p>
<p>Elasticsearch 是一个分布式的、开源的搜索分析引擎，支持各种数据类型，包括文本、数字、地理、结构化、非结构化。</p>
<p>可以很好地存储和查询文档，用于应用程序搜索、企业搜索和网站搜索。</p>
</div>
<p>安装</p>
<blockquote>
<p>限制内存大小 <code v-pre>ES_JAVA_OPTS=&quot;-Xms64m -Xmx512m&quot;</code></p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">docker</span> pull elasticsearch:7.6.2
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> elasticsearch <span class="token parameter variable">-p</span> <span class="token number">9200</span>:9200 <span class="token parameter variable">-p</span> <span class="token number">9300</span>:9300 <span class="token parameter variable">-e</span> <span class="token string">"discovery.type=single-node"</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">ES_JAVA_OPTS</span><span class="token operator">=</span><span class="token string">"-Xms64m -Xmx512m"</span> elasticsearch:7.6.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>对比数据库</p>
</blockquote>
<table>
<thead>
<tr>
<th>索引（indices）</th>
<th>Databases 数据库</th>
</tr>
</thead>
<tbody>
<tr>
<td>类型（type）</td>
<td>Table 数据表</td>
</tr>
<tr>
<td>文档（Document）</td>
<td>Row 行</td>
</tr>
<tr>
<td>字段（Field）</td>
<td>Columns 列</td>
</tr>
</tbody>
</table>
<h2 id="基础操作" tabindex="-1"><a class="header-anchor" href="#基础操作" aria-hidden="true">#</a> 基础操作</h2>
<h3 id="cat" tabindex="-1"><a class="header-anchor" href="#cat" aria-hidden="true">#</a> _cat</h3>
<blockquote>
<p>method: GET</p>
</blockquote>
<ul>
<li>/_cat/nodes 查看所有的节点</li>
<li>/_cat/health 健康状态</li>
<li>/_cat/master</li>
<li>/_cat/indices 查看索引  show databases;</li>
</ul>
<h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h3>
<ul>
<li>创建索引</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>PUT  /shopping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>查看索引</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>GET /shopping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>删除索引</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>DELETE /shopping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h3>
<ul>
<li>创建文档(会覆盖原有的数据）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>PUT/POST  /myindex/_doc/1
<span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Tom"</span>
<span class="token punctuation">}</span>
<span class="token comment">## 不加id 则会自动生成id</span>
POST  /myindex/_doc
<span class="token punctuation">{</span>
  <span class="token string">"name"</span><span class="token builtin class-name">:</span> <span class="token string">"Tom"</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>修改文档（在原来的数据上修改）</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>POST /shopping/_update/23
<span class="token punctuation">{</span>
    <span class="token string">"doc"</span>:<span class="token punctuation">{</span>
        <span class="token string">"school"</span><span class="token builtin class-name">:</span><span class="token string">"666"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>查询</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>GET  /myindex/_doc/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>查询索引下所有文档</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>GET /shopping/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>删除</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>DELETE  /myindex/_doc/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="高级查询" tabindex="-1"><a class="header-anchor" href="#高级查询" aria-hidden="true">#</a> 高级查询</h3>
<ul>
<li>匹配</li>
</ul>
<blockquote>
<p><code v-pre>match_phrase</code>不拆分、 <code v-pre>match</code>拆分后模糊查询、<code v-pre>match_all</code>查询所有</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>GET /shopping/_search
<span class="token punctuation">{</span>
    <span class="token string">"query"</span>:<span class="token punctuation">{</span>
        <span class="token string">"match"</span>:<span class="token punctuation">{</span> <span class="token comment">## 匹配</span>
			<span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"Tom"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>分页+排序</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>GET /shopping/_search
<span class="token punctuation">{</span>
    <span class="token string">"query"</span>:<span class="token punctuation">{</span>
        <span class="token string">"match_all"</span>:<span class="token punctuation">{</span> <span class="token comment">## 匹配</span>

        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"from"</span>:0, <span class="token comment">## 第几条开始</span>
    <span class="token string">"size"</span>:2,  <span class="token comment">## 一页几条数据</span>
    <span class="token string">"_source"</span>:<span class="token punctuation">[</span><span class="token string">"name"</span><span class="token punctuation">]</span>, <span class="token comment">## 只要的字段</span>
    <span class="token string">"sort"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token comment">##排序</span>
    	<span class="token string">"name.keyword"</span>:<span class="token punctuation">{</span> <span class="token comment">##排序的字段</span>
    		<span class="token string">"order"</span><span class="token builtin class-name">:</span><span class="token string">"desc"</span> <span class="token comment">## 升降序</span>
    	<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>多条件查询</li>
</ul>
<blockquote>
<p><code v-pre>bool</code>把各种其它查询通过<code v-pre>must</code>（与）、<code v-pre>must_not</code>（非）、<code v-pre>should</code>（或）的方式进行组合</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>GET /shopping/_search
<span class="token punctuation">{</span>
    <span class="token string">"query"</span>:<span class="token punctuation">{</span>
        <span class="token string">"bool"</span>:<span class="token punctuation">{</span>    <span class="token comment">## 多添加查询</span>
            <span class="token string">"should"</span>:<span class="token punctuation">[</span> 
                <span class="token punctuation">{</span>
                    <span class="token string">"match"</span>:<span class="token punctuation">{</span> <span class="token comment">##匹配</span>
                        <span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"Tom"</span>  <span class="token comment">##name字段</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>,
                <span class="token punctuation">{</span>
                    <span class="token string">"match"</span>:<span class="token punctuation">{</span>
                        <span class="token string">"school"</span><span class="token builtin class-name">:</span><span class="token string">"汤姆"</span> <span class="token comment">## school字段</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>范围查询</li>
</ul>
<blockquote>
<p><code v-pre>gt</code>-大于   <code v-pre>gte</code>-大于等于   lt<code v-pre>-小于  </code>lte`-小于等于</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>GET /shopping/_search
<span class="token punctuation">{</span>
    <span class="token string">"query"</span>:<span class="token punctuation">{</span>
        <span class="token string">"range"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"amount"</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
                <span class="token string">"gt"</span><span class="token builtin class-name">:</span>  <span class="token number">12</span>
            <span class="token punctuation">}</span>
    	<span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>高亮</li>
</ul>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>GET /shopping/_search
<span class="token punctuation">{</span>
    <span class="token string">"query"</span>:<span class="token punctuation">{</span>
        <span class="token string">"match"</span>:<span class="token punctuation">{</span>
            <span class="token string">"name"</span><span class="token builtin class-name">:</span><span class="token string">"Tom"</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>,
    <span class="token string">"highlight"</span>:<span class="token punctuation">{</span>
        <span class="token string">"fields"</span>:<span class="token punctuation">{</span>
            <span class="token string">"name"</span>:<span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>聚合</li>
<li>映射</li>
</ul>
<blockquote>
<p><strong>Mapping（映射）</strong>： 是用来定义文档和它所包含的字段是如何被存储和索引的。</p>
</blockquote>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>PUT /shopping/_mapping
<span class="token punctuation">{</span>
    <span class="token string">"properties"</span>:<span class="token punctuation">{</span> 
        <span class="token string">"name"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span> <span class="token comment">## 字段</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"text"</span>, <span class="token comment">## 可以被分词查询</span>
            <span class="token string">"index"</span> <span class="token builtin class-name">:</span> <span class="token boolean">true</span> <span class="token comment">## 可以被索引</span>
        <span class="token punctuation">}</span>,
        <span class="token string">"sex"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"text"</span>,
            <span class="token string">"index"</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>,
        <span class="token string">"tell"</span> <span class="token builtin class-name">:</span> <span class="token punctuation">{</span> 
            <span class="token string">"type"</span> <span class="token builtin class-name">:</span> <span class="token string">"keyword"</span>, <span class="token comment">## 必须是个完整的词</span>
            <span class="token string">"index"</span> <span class="token builtin class-name">:</span> <span class="token boolean">false</span> <span class="token comment">## 不能被索引</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="springboot" tabindex="-1"><a class="header-anchor" href="#springboot" aria-hidden="true">#</a> springboot</h2>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>spring-boot-starter-data-elasticsearch<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>2.7.9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre v-pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">elasticsearch</span><span class="token punctuation">:</span>
    <span class="token key atrule">uris</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">9200</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实体类</p>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@Document</span><span class="token punctuation">(</span>indexName <span class="token operator">=</span> <span class="token string">"mytest"</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> mytest <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Id</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Field</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token comment">//不可被索引 不可被分开的词查询</span>
    <span class="token annotation punctuation">@Field</span><span class="token punctuation">(</span>index <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>type <span class="token operator">=</span> <span class="token class-name">FieldType<span class="token punctuation">.</span>Keyword</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> address<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Field</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="索引-1" tabindex="-1"><a class="header-anchor" href="#索引-1" aria-hidden="true">#</a> 索引</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">indexops</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 创建索引</span>
        es<span class="token punctuation">.</span><span class="token function">indexOps</span><span class="token punctuation">(</span>mytest<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 删除索引</span>
        es<span class="token punctuation">.</span><span class="token function">indexOps</span><span class="token punctuation">(</span>mytest<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文档-1" tabindex="-1"><a class="header-anchor" href="#文档-1" aria-hidden="true">#</a> 文档</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        mytest mytest <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">mytest</span><span class="token punctuation">(</span><span class="token number">102L</span><span class="token punctuation">,</span><span class="token string">"ggg"</span><span class="token punctuation">,</span><span class="token string">"gasd"</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 删除文档</span>
        <span class="token class-name">String</span> delete <span class="token operator">=</span> es<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">"102"</span><span class="token punctuation">,</span> mytest<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 添加文档</span>
        es<span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span>mytest<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//添加多个</span>
<span class="token comment">//      es.save(List&lt;mytest>)</span>
        <span class="token comment">//查询文档</span>
        es<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"101"</span><span class="token punctuation">,</span>mytest<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="高级查询-1" tabindex="-1"><a class="header-anchor" href="#高级查询-1" aria-hidden="true">#</a> 高级查询</h3>
<CodeTabs id="271" :data='[{"id":"匹配查询"},{"id":"查询多个值"},{"id":"布尔查询"},{"id":"分页"},{"id":"排序"},{"id":"过滤"},{"id":"高亮"},{"id":"大杂烩"}]' tab-id="shell">
<template #title0="{ value, isActive }">匹配查询</template>
<template #title1="{ value, isActive }">查询多个值</template>
<template #title2="{ value, isActive }">布尔查询</template>
<template #title3="{ value, isActive }">分页</template>
<template #title4="{ value, isActive }">排序</template>
<template #title5="{ value, isActive }">过滤</template>
<template #title6="{ value, isActive }">高亮</template>
<template #title7="{ value, isActive }">大杂烩</template>
<template #tab0="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">search</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">NativeSearchQueryBuilder</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NativeSearchQueryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        query<span class="token punctuation">.</span><span class="token function">withQuery</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span><span class="token string">"tmo"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SearchHits</span><span class="token generics"><span class="token punctuation">&lt;</span>mytest<span class="token punctuation">></span></span> search <span class="token operator">=</span> es<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mytest<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        search<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">NativeSearchQueryBuilder</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NativeSearchQueryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> list <span class="token operator">=</span> <span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">"tom"</span><span class="token punctuation">,</span><span class="token string">"ggg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        query<span class="token punctuation">.</span><span class="token function">withQuery</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">termQuery</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SearchHits</span><span class="token generics"><span class="token punctuation">&lt;</span>mytest<span class="token punctuation">></span></span> search <span class="token operator">=</span> es<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mytest<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        search<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fsdf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">NativeSearchQueryBuilder</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NativeSearchQueryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//must</span>
        query<span class="token punctuation">.</span><span class="token function">withQuery</span><span class="token punctuation">(</span>
                <span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">boolQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">must</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span><span class="token string">"tom"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">must</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">"address"</span><span class="token punctuation">,</span><span class="token string">"sSH"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//should</span>
<span class="token comment">//        QueryBuilders.boolQuery()</span>
<span class="token comment">//                .should(QueryBuilders.matchQuery("title", searchTerm1))</span>
<span class="token comment">//                .should(QueryBuilders.matchQuery("content", searchTerm2))</span>
<span class="token comment">//                .minimumShouldMatch(1) // 设置至少满足一个should条件</span>
<span class="token comment">//        );</span>
        <span class="token class-name">SearchHits</span><span class="token generics"><span class="token punctuation">&lt;</span>mytest<span class="token punctuation">></span></span> search <span class="token operator">=</span> es<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mytest<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        search<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab3="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">hasdf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">NativeSearchQueryBuilder</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NativeSearchQueryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">PageRequest</span> of <span class="token operator">=</span> <span class="token class-name">PageRequest</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//分页设置</span>
        query<span class="token punctuation">.</span><span class="token function">withPageable</span><span class="token punctuation">(</span>of<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SearchHits</span><span class="token generics"><span class="token punctuation">&lt;</span>mytest<span class="token punctuation">></span></span> search <span class="token operator">=</span> es<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mytest<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        search<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab4="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">hhfsh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">NativeSearchQueryBuilder</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NativeSearchQueryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        query<span class="token punctuation">.</span><span class="token function">withSort</span><span class="token punctuation">(</span><span class="token class-name">Sort</span><span class="token punctuation">.</span><span class="token function">by</span><span class="token punctuation">(</span><span class="token string">"age"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ascending</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SearchHits</span><span class="token generics"><span class="token punctuation">&lt;</span>mytest<span class="token punctuation">></span></span> search <span class="token operator">=</span> es<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mytest<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        search<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab5="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">hhhhhh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">NativeSearchQueryBuilder</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NativeSearchQueryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 添加过滤条件</span>
        query<span class="token punctuation">.</span><span class="token function">withFilter</span><span class="token punctuation">(</span>
            <span class="token class-name">FilterBuilders</span><span class="token punctuation">.</span><span class="token function">boolFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">must</span><span class="token punctuation">(</span><span class="token class-name">FilterBuilders</span><span class="token punctuation">.</span><span class="token function">termFilter</span><span class="token punctuation">(</span><span class="token string">"category"</span><span class="token punctuation">,</span> <span class="token string">"电子产品"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">must</span><span class="token punctuation">(</span><span class="token class-name">FilterBuilders</span><span class="token punctuation">.</span><span class="token function">rangeFilter</span><span class="token punctuation">(</span><span class="token string">"price"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">gte</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lte</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SearchHits</span><span class="token generics"><span class="token punctuation">&lt;</span>mytest<span class="token punctuation">></span></span> search <span class="token operator">=</span> es<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mytest<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        search<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab6="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code>    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span>  <span class="token function">gasdg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">NativeSearchQueryBuilder</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NativeSearchQueryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        query<span class="token punctuation">.</span><span class="token function">withQuery</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span><span class="token string">"tom"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 添加高亮信息到查询</span>
        <span class="token class-name">HighlightBuilder</span> highlightBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HighlightBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        highlightBuilder<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 指定需要高亮的字段</span>
        highlightBuilder<span class="token punctuation">.</span><span class="token function">preTags</span><span class="token punctuation">(</span><span class="token string">"&lt;em>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置高亮前缀</span>
        highlightBuilder<span class="token punctuation">.</span><span class="token function">postTags</span><span class="token punctuation">(</span><span class="token string">"&lt;/em>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置高亮后缀</span>
        query<span class="token punctuation">.</span><span class="token function">withHighlightBuilder</span><span class="token punctuation">(</span>highlightBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">SearchHits</span><span class="token generics"><span class="token punctuation">&lt;</span>mytest<span class="token punctuation">></span></span> search <span class="token operator">=</span> es<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>query<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> mytest<span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        search<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token operator">::</span><span class="token function">println</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 处理高亮结果</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span>mytest<span class="token punctuation">></span></span> blogs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span><span class="token generics"><span class="token punctuation">&lt;</span>mytest<span class="token punctuation">></span></span> searchHit <span class="token operator">:</span> search<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            mytest blog <span class="token operator">=</span> searchHit<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 从高亮结果中获取需要高亮的字段内容</span>
            <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> highlightFields <span class="token operator">=</span> searchHit<span class="token punctuation">.</span><span class="token function">getHighlightFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>highlightFields<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> titleHighlights <span class="token operator">=</span> highlightFields<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token comment">// 获取高亮的标题内容</span>
                <span class="token class-name">String</span> highlightedTitle <span class="token operator">=</span> titleHighlights<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 假设只有一个高亮片段</span>
                blog<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>highlightedTitle<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            blogs<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>blog<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab7="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>index<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span><span class="token class-name">BoolQueryBuilder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>index<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span><span class="token class-name">QueryBuilders</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>index<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span><span class="token class-name">FilterBuilders</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>search<span class="token punctuation">.</span>fetch<span class="token punctuation">.</span>subphase<span class="token punctuation">.</span>highlight<span class="token punctuation">.</span></span><span class="token class-name">HighlightBuilder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">PageRequest</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Pageable</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>domain<span class="token punctuation">.</span></span><span class="token class-name">Sort</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>core<span class="token punctuation">.</span></span><span class="token class-name">ElasticsearchRestTemplate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>core<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span><span class="token class-name">NativeSearchQueryBuilder</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>data<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>core<span class="token punctuation">.</span>query<span class="token punctuation">.</span></span><span class="token class-name">SearchHits</span></span><span class="token punctuation">;</span>

<span class="token comment">// 定义分页信息</span>
<span class="token keyword">int</span> pageNumber <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 第一页，页码从0开始</span>
<span class="token keyword">int</span> pageSize <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment">// 每页显示10条数据</span>
<span class="token class-name">Pageable</span> pageable <span class="token operator">=</span> <span class="token class-name">PageRequest</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span>pageNumber<span class="token punctuation">,</span> pageSize<span class="token punctuation">,</span> <span class="token class-name">Sort</span><span class="token punctuation">.</span><span class="token function">by</span><span class="token punctuation">(</span><span class="token string">"price"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ascending</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 创建NativeSearchQueryBuilder对象</span>
<span class="token class-name">NativeSearchQueryBuilder</span> queryBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NativeSearchQueryBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加查询条件，使用should操作</span>
<span class="token class-name">String</span> searchTerm <span class="token operator">=</span> <span class="token string">"手机"</span><span class="token punctuation">;</span>
queryBuilder<span class="token punctuation">.</span><span class="token function">withQuery</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">boolQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> searchTerm<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token class-name">QueryBuilders</span><span class="token punctuation">.</span><span class="token function">matchQuery</span><span class="token punctuation">(</span><span class="token string">"category"</span><span class="token punctuation">,</span> searchTerm<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加过滤条件</span>
queryBuilder<span class="token punctuation">.</span><span class="token function">withFilter</span><span class="token punctuation">(</span>
    <span class="token class-name">FilterBuilders</span><span class="token punctuation">.</span><span class="token function">boolFilter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">must</span><span class="token punctuation">(</span><span class="token class-name">FilterBuilders</span><span class="token punctuation">.</span><span class="token function">termFilter</span><span class="token punctuation">(</span><span class="token string">"category"</span><span class="token punctuation">,</span> <span class="token string">"电子产品"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">must</span><span class="token punctuation">(</span><span class="token class-name">FilterBuilders</span><span class="token punctuation">.</span><span class="token function">rangeFilter</span><span class="token punctuation">(</span><span class="token string">"price"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">gte</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lte</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加高亮信息到查询</span>
<span class="token class-name">HighlightBuilder</span> highlightBuilder <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HighlightBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
highlightBuilder<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 指定需要高亮的字段</span>
highlightBuilder<span class="token punctuation">.</span><span class="token function">preTags</span><span class="token punctuation">(</span><span class="token string">"&lt;em>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置高亮前缀</span>
highlightBuilder<span class="token punctuation">.</span><span class="token function">postTags</span><span class="token punctuation">(</span><span class="token string">"&lt;/em>"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 设置高亮后缀</span>
queryBuilder<span class="token punctuation">.</span><span class="token function">withHighlightBuilder</span><span class="token punctuation">(</span>highlightBuilder<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加分页信息到查询</span>
queryBuilder<span class="token punctuation">.</span><span class="token function">withPageable</span><span class="token punctuation">(</span>pageable<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 添加排序信息到查询</span>
queryBuilder<span class="token punctuation">.</span><span class="token function">withSort</span><span class="token punctuation">(</span><span class="token class-name">Sort</span><span class="token punctuation">.</span><span class="token function">by</span><span class="token punctuation">(</span><span class="token string">"price"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ascending</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 执行查询并获取分页结果</span>
<span class="token class-name">SearchHits</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Product</span><span class="token punctuation">></span></span> searchHits <span class="token operator">=</span> elasticsearchRestTemplate<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>queryBuilder<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">Product</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 处理高亮结果和排序结果</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Product</span><span class="token punctuation">></span></span> products <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">SearchHit</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Product</span><span class="token punctuation">></span></span> searchHit <span class="token operator">:</span> searchHits<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">Product</span> product <span class="token operator">=</span> searchHit<span class="token punctuation">.</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 从高亮结果中获取需要高亮的字段内容</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">List</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span><span class="token punctuation">></span></span> highlightFields <span class="token operator">=</span> searchHit<span class="token punctuation">.</span><span class="token function">getHighlightFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>highlightFields<span class="token punctuation">.</span><span class="token function">containsKey</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">></span></span> nameHighlights <span class="token operator">=</span> highlightFields<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取高亮的名称内容</span>
        <span class="token class-name">String</span> highlightedName <span class="token operator">=</span> nameHighlights<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 假设只有一个高亮片段</span>
        product<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span>highlightedName<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    products<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>product<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 返回分页结果</span>
<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">PageImpl</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">></span></span><span class="token punctuation">(</span>products<span class="token punctuation">,</span> pageable<span class="token punctuation">,</span> searchHits<span class="token punctuation">.</span><span class="token function">getTotalHits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<div class="hint-container tip">
<p class="hint-container-title">大杂烩</p>
<p>在上述例子中，
我们结合使用查询、过滤、分页、高亮、排序和should操作。
我们使用<code v-pre>QueryBuilders.boolQuery</code>来创建一个布尔查询，使用should操作指定至少满足一个条件的情况：name字段包含搜索词&quot;手机&quot;，或category字段包含搜索词&quot;手机&quot;。
然后，我们使用<code v-pre>FilterBuilders.boolFilter</code>来创建一个布尔过滤器，使用must操作添加category字段必须等于&quot;电子产品&quot;，price字段必须在1000到5000之间的过滤条件。
接着，我们按照前述分页方式和排序方式添加分页和排序信息到查询。通过<code v-pre>elasticsearchRestTemplate.search()</code>执行查询，并获取查询结果的SearchHits对象。接着，我们从SearchHits中获取查询结果列表，并遍历每个结果，从高亮结果中获取需要高亮的字段内容，并设置到对应的实体对象中。
最后，我们使用PageImpl将结果封装成Page&lt;<code v-pre>Product</code>&gt;对象，其中包含了分页信息、查询结果列表和总记录数。</p>
</div>
</div></template>


