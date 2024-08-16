<template><div><h1 id="regex" tabindex="-1"><a class="header-anchor" href="#regex" aria-hidden="true">#</a> Regex</h1>
<h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2>
<CodeTabs id="6" :data='[{"id":"vscode"},{"id":"idea"}]'>
<template #title0="{ value, isActive }">vscode</template>
<template #title1="{ value, isActive }">idea</template>
<template #tab0="{ value, isActive }">
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[正则大全](https://any-rule.vercel.app/)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>[Regexp Tester](https://plugins.jetbrains.com/plugin/2917-regexp-tester)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> java</h2>
<CodeTabs id="17" :data='[{"id":"使用<code v-pre>Pattern</code>和<code v-pre>Matcher</code>类"},{"id":"使用<code v-pre>String</code>类的<code v-pre>matches</code>方法"},{"id":"使用<code v-pre>String</code>类的<code v-pre>replaceAll</code>方法"}]' tab-id="shell">
<template #title0="{ value, isActive }">使用<code v-pre>Pattern</code>和<code v-pre>Matcher</code>类</template>
<template #title1="{ value, isActive }">使用<code v-pre>String</code>类的<code v-pre>matches</code>方法</template>
<template #title2="{ value, isActive }">使用<code v-pre>String</code>类的<code v-pre>replaceAll</code>方法</template>
<template #tab0="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token class-name">Matcher</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>regex<span class="token punctuation">.</span></span><span class="token class-name">Pattern</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RegexExample</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> inputString <span class="token operator">=</span> <span class="token string">"Hello,123"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> regexPattern <span class="token operator">=</span> <span class="token string">"\\d+"</span><span class="token punctuation">;</span> <span class="token comment">// 匹配数字</span>

        <span class="token class-name">Pattern</span> pattern <span class="token operator">=</span> <span class="token class-name">Pattern</span><span class="token punctuation">.</span><span class="token function">compile</span><span class="token punctuation">(</span>regexPattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Matcher</span> matcher <span class="token operator">=</span> pattern<span class="token punctuation">.</span><span class="token function">matcher</span><span class="token punctuation">(</span>inputString<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>matcher<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"字符串中包含匹配的子串："</span> <span class="token operator">+</span> matcher<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 字符串中包含匹配的子串：123</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"字符串中没有匹配的子串。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RegexExample2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> inputString <span class="token operator">=</span> <span class="token string">"Hello,123"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> regexPattern <span class="token operator">=</span> <span class="token string">"\\d+"</span><span class="token punctuation">;</span> <span class="token comment">// 匹配数字</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>inputString<span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span>regexPattern<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"字符串匹配正则表达式。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"字符串不匹配正则表达式。"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 字符串不匹配正则表达式。</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-java line-numbers-mode" data-ext="java"><pre v-pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RegexExample3</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> inputString <span class="token operator">=</span> <span class="token string">"Hello,123"</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> regexPattern <span class="token operator">=</span> <span class="token string">"\\d+"</span><span class="token punctuation">;</span> <span class="token comment">// 匹配数字</span>

        <span class="token class-name">String</span> replacedString <span class="token operator">=</span> inputString<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span>regexPattern<span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"替换后的字符串："</span> <span class="token operator">+</span> replacedString<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 替换后的字符串：Hello,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="元字符" tabindex="-1"><a class="header-anchor" href="#元字符" aria-hidden="true">#</a> 元字符</h2>
<CodeTabs id="34" :data='[{"id":"."},{"id":"[]"},{"id":"^"},{"id":"*"},{"id":"+"},{"id":"?"},{"id":"{}"},{"id":"|"}]' tab-id="shell">
<template #title0="{ value, isActive }">.</template>
<template #title1="{ value, isActive }">[]</template>
<template #title2="{ value, isActive }">^</template>
<template #title3="{ value, isActive }">*</template>
<template #title4="{ value, isActive }">+</template>
<template #title5="{ value, isActive }">?</template>
<template #title6="{ value, isActive }">{}</template>
<template #title7="{ value, isActive }">|</template>
<template #tab0="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>- 是元字符中最简单的例子。
- 匹配任意单个字符，但不匹配换行符。

<span class="token string">".ar"</span> <span class="token operator">=</span><span class="token operator">></span> The <span class="token variable"><span class="token variable">`</span>car<span class="token variable">`</span></span> <span class="token variable"><span class="token variable">`</span>par<span class="token variable">`</span></span>ked <span class="token keyword">in</span> the <span class="token variable"><span class="token variable">`</span>gar<span class="token variable">`</span></span>age.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab1="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>- 字符集也叫做字符类。
- 方括号用来指定一个字符集。
- 在方括号中使用连字符来指定字符集的范围。
- 在方括号中的字符集不关心顺序。

<span class="token string">"[Tt]he"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token variable"><span class="token variable">`</span>The<span class="token variable">`</span></span> car parked <span class="token keyword">in</span> <span class="token variable"><span class="token variable">`</span>the<span class="token variable">`</span></span> garage.

- 方括号的句号就表示句号。

<span class="token string">"ar[.]"</span> <span class="token operator">=</span><span class="token operator">></span> A garage is a good place to park a c<span class="token variable"><span class="token variable">`</span>ar.<span class="token variable">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab2="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>- 否定字符集

<span class="token punctuation">[</span>^c<span class="token punctuation">]</span>ar <span class="token operator">=</span><span class="token operator">></span> The car <span class="token variable"><span class="token variable">`</span>par<span class="token variable">`</span></span>ked <span class="token keyword">in</span> the <span class="token variable"><span class="token variable">`</span>gar<span class="token variable">`</span></span>age.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab3="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>- <span class="token variable"><span class="token variable">`</span>*<span class="token variable">`</span></span>号匹配 在<span class="token variable"><span class="token variable">`</span>*<span class="token variable">`</span></span>之前的字符出现<span class="token variable"><span class="token variable">`</span>大于等于0<span class="token variable">`</span></span>次。
- 表达式<span class="token variable"><span class="token variable">`</span><span class="token punctuation">[</span>a-z<span class="token punctuation">]</span>*<span class="token variable">`</span></span> 匹配一个行中所有以小写字母开头的字符串。

<span class="token string">"[a-z]*"</span> <span class="token operator">=</span><span class="token operator">></span> T<span class="token variable"><span class="token variable">`</span>he car parked <span class="token keyword">in</span> the garage<span class="token variable">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab4="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>- <span class="token variable"><span class="token variable">`</span>+<span class="token variable">`</span></span>号匹配<span class="token variable"><span class="token variable">`</span>+<span class="token variable">`</span></span>号之前的字符出现 <span class="token operator">>=</span><span class="token number">1</span> 次。

- 例如表达式<span class="token variable"><span class="token variable">`</span>c.+t<span class="token variable">`</span></span> 匹配以首字母<span class="token variable"><span class="token variable">`</span>c<span class="token variable">`</span></span>开头以<span class="token variable"><span class="token variable">`</span>t<span class="token variable">`</span></span>结尾，中间跟着至少一个字符的字符串。

<span class="token string">"c.+t"</span> <span class="token operator">=</span><span class="token operator">></span> The fat <span class="token variable"><span class="token variable">`</span><span class="token function">cat</span> sat on the mat<span class="token variable">`</span></span><span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab5="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>- 出现 <span class="token number">0</span> 或 <span class="token number">1</span> 次。
- 表达式 <span class="token variable"><span class="token variable">`</span><span class="token punctuation">[</span>T<span class="token punctuation">]</span>?he<span class="token variable">`</span></span> 匹配字符串 <span class="token variable"><span class="token variable">`</span>he<span class="token variable">`</span></span> 和 <span class="token variable"><span class="token variable">`</span>The<span class="token variable">`</span></span>

<span class="token string">"[T]he"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token variable"><span class="token variable">`</span>The<span class="token variable">`</span></span> car is parked <span class="token keyword">in</span> the garage.

<span class="token string">"[T]?he"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token variable"><span class="token variable">`</span>The<span class="token variable">`</span></span> car is parked <span class="token keyword">in</span> t<span class="token variable"><span class="token variable">`</span>he<span class="token variable">`</span></span> garage.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab6="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>- 常用来限定一个或一组字符可以重复出现的次数。
- 表达式 <span class="token variable"><span class="token variable">`</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">2,3</span><span class="token punctuation">}</span><span class="token variable">`</span></span> 匹配最少 <span class="token number">2</span> 位最多 <span class="token number">3</span> 位 <span class="token number">0</span>~9 的数字

<span class="token string">"[0-9]{2,3}"</span> <span class="token operator">=</span><span class="token operator">></span> The number was <span class="token number">9</span>.<span class="token variable"><span class="token variable">`</span><span class="token number">9997</span><span class="token variable">`</span></span> but we rounded it off to <span class="token variable"><span class="token variable">`</span><span class="token number">10</span><span class="token variable">`</span></span>.0.

- 我们可以省略第二个参数。
- <span class="token variable"><span class="token variable">`</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">2</span>,<span class="token punctuation">}</span><span class="token variable">`</span></span> 匹配至少两位 <span class="token number">0</span>~9 的数字。

<span class="token string">"[0-9]{2,}"</span> <span class="token operator">=</span><span class="token operator">></span> The number was <span class="token number">9</span>.<span class="token variable"><span class="token variable">`</span><span class="token number">9997</span><span class="token variable">`</span></span> but we rounded it off to <span class="token variable"><span class="token variable">`</span><span class="token number">10</span><span class="token variable">`</span></span>.0.

- 如果逗号也省略掉则表示重复固定的次数。
- <span class="token variable"><span class="token variable">`</span><span class="token punctuation">[</span><span class="token number">0</span>-9<span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span><span class="token variable">`</span></span> 匹配3位数字

<span class="token string">"[0-9]{3}"</span> <span class="token operator">=</span><span class="token operator">></span> The number was <span class="token number">9</span>.<span class="token variable"><span class="token variable">`</span><span class="token number">999</span><span class="token variable">`</span></span><span class="token number">7</span> but we rounded it off to <span class="token number">10.0</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
<template #tab7="{ value, isActive }">
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code>- 或运算符就表示或，用作判断条件。

- <span class="token variable"><span class="token variable">`</span><span class="token punctuation">(</span>T<span class="token operator">|</span>t<span class="token punctuation">)</span>he<span class="token operator">|</span>car<span class="token variable">`</span></span> 匹配 <span class="token variable"><span class="token variable">`</span><span class="token punctuation">(</span>T<span class="token operator">|</span>t<span class="token punctuation">)</span>he<span class="token variable">`</span></span> 或 <span class="token variable"><span class="token variable">`</span>car<span class="token variable">`</span></span>。

<span class="token string">"(T|t)he|car"</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token variable"><span class="token variable">`</span>The<span class="token variable">`</span></span> <span class="token variable"><span class="token variable">`</span>car<span class="token variable">`</span></span> is parked <span class="token keyword">in</span> <span class="token variable"><span class="token variable">`</span>the<span class="token variable">`</span></span> garage.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></template>
</CodeTabs>
<h2 id="简写字符集" tabindex="-1"><a class="header-anchor" href="#简写字符集" aria-hidden="true">#</a> 简写字符集</h2>
<table>
<thead>
<tr>
<th style="text-align:center">简写</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">.</td>
<td>除换行符外的所有字符</td>
</tr>
<tr>
<td style="text-align:center">\w</td>
<td>匹配所有字母数字，等同于 <code v-pre>[a-zA-Z0-9]</code></td>
</tr>
<tr>
<td style="text-align:center">\W</td>
<td>匹配所有非字母数字，即符号，等同于： <code v-pre>[^\w]</code></td>
</tr>
<tr>
<td style="text-align:center">\d</td>
<td>匹配数字： <code v-pre>[0-9]</code></td>
</tr>
<tr>
<td style="text-align:center">\D</td>
<td>匹配非数字： <code v-pre>[^\d]</code></td>
</tr>
<tr>
<td style="text-align:center">\s</td>
<td>匹配所有空格字符，等同于： <code v-pre>[\t\n\f\r\p{Z}]</code></td>
</tr>
<tr>
<td style="text-align:center">\S</td>
<td>匹配所有非空格字符： <code v-pre>[^\s]</code></td>
</tr>
<tr>
<td style="text-align:center">\f</td>
<td>匹配一个换页符</td>
</tr>
<tr>
<td style="text-align:center">\n</td>
<td>匹配一个换行符</td>
</tr>
<tr>
<td style="text-align:center">\r</td>
<td>匹配一个回车符</td>
</tr>
<tr>
<td style="text-align:center">\t</td>
<td>匹配一个制表符</td>
</tr>
<tr>
<td style="text-align:center">\v</td>
<td>匹配一个垂直制表符</td>
</tr>
<tr>
<td style="text-align:center">\p</td>
<td>匹配 CR/LF（等同于 <code v-pre>\r\n</code>），用来匹配 DOS 行终止符</td>
</tr>
</tbody>
</table>
<h2 id="标志" tabindex="-1"><a class="header-anchor" href="#标志" aria-hidden="true">#</a> 标志</h2>
<h3 id="忽略大小写" tabindex="-1"><a class="header-anchor" href="#忽略大小写" aria-hidden="true">#</a> 忽略大小写</h3>
<ul>
<li>修饰语 <code v-pre>i</code> 用于忽略大小写。</li>
<li>例如，表达式 <code v-pre>/The/gi</code> 表示在全局搜索 <code v-pre>The</code>，在后面的 <code v-pre>i</code> 将其条件修改为忽略大小写，则变成搜索 <code v-pre>the</code> 和 <code v-pre>The</code>，<code v-pre>g</code> 表示全局搜索。</li>
</ul>
<p>&quot;/The/gi&quot; =&gt; <code v-pre>The</code> fat cat sat on <code v-pre>the</code> mat.</p>
<h3 id="全局搜索" tabindex="-1"><a class="header-anchor" href="#全局搜索" aria-hidden="true">#</a> 全局搜索</h3>
<ul>
<li>修饰符 <code v-pre>g</code> 常用于执行一个全局搜索匹配</li>
</ul>
<p>&quot;/.(at)/g&quot; =&gt; The <code v-pre>fat</code> <code v-pre>cat</code> <code v-pre>sat</code> on the <code v-pre>mat</code>.</p>
</div></template>


