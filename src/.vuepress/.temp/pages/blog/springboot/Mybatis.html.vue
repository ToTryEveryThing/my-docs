<template><div><h1 id="mybatis" tabindex="-1"><a class="header-anchor" href="#mybatis" aria-hidden="true">#</a> Mybatis</h1>
<p><a href="https://mybatis.org/mybatis-3/zh/getting-started.html" target="_blank" rel="noopener noreferrer">官网<ExternalLinkIcon/></a><br>
<a href="https://www.bilibili.com/video/BV1MT4y1k7wZ?p=7&amp;vd_source=f8821730ff8a13ec89104c8629e6d42b" target="_blank" rel="noopener noreferrer">学习地址<ExternalLinkIcon/></a></p>
<p>依赖</p>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token comment">&lt;!-- https://mvnrepository.com/artifact/org.mybatis/mybatis --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">></span></span>org.mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">></span></span>mybatis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">></span></span>3.5.5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>xml配置详解<br>
<img src="https://images.beink.cn/study/UL4ng9jJ1Vpg86bUFMn8K.png" alt="study" loading="lazy"></p>
<h3 id="添加-主键返回" tabindex="-1"><a class="header-anchor" href="#添加-主键返回" aria-hidden="true">#</a> 添加-主键返回</h3>
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> mapper<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>test1<span class="token punctuation">)</span><span class="token punctuation">;</span>
可以把id拿出来
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>update<span class="token punctuation">"</span></span> <span class="token attr-name">useGeneratedKeys</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">keyProperty</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>id<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
        insert into test1 (id, name, views, up) values
        (
        #{id},
        #{name},
        #{views},
        #{up}
        );
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="动态条件查询" tabindex="-1"><a class="header-anchor" href="#动态条件查询" aria-hidden="true">#</a> 动态条件查询</h3>
<ul>
<li>if</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>findActiveBlogLike<span class="token punctuation">"</span></span>
     <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Blog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  SELECT * FROM BLOG WHERE state = ‘ACTIVE’
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    AND title like #{title}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author != null and author.name != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    AND author_name like #{author.name}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>choose</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>findActiveBlogLike<span class="token punctuation">"</span></span>
        <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Blog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    SELECT * FROM BLOG WHERE state = ‘ACTIVE’
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>choose</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            AND title like #{title}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>when</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author != null and author.name != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
            AND author_name like #{author.name}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>when</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>otherwise</span><span class="token punctuation">></span></span>
            AND featured = 1
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>otherwise</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>choose</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>trim</li>
</ul>
<div class="language-xml line-numbers-mode" data-ext="xml"><pre v-pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>findActiveBlogLike<span class="token punctuation">"</span></span>
     <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Blog<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  SELECT * FROM BLOG
  WHERE
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>state != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    state = #{state}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>

  
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    AND title like #{title}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>author != null and author.name != null<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    AND author_name like #{author.name}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


