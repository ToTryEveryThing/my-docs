<template><div><h2 id="什么是正则表达式" tabindex="-1"><a class="header-anchor" href="#什么是正则表达式" aria-hidden="true">#</a> 什么是正则表达式？</h2>
<p><a href="https://github.com/ziishaned/learn-regex/blob/master/translations/README-cn.md" target="_blank" rel="noopener noreferrer">地址：learn-regex/translations/README-cn.md at master · ziishaned/learn-regex · GitHub<ExternalLinkIcon/></a></p>
<blockquote>
<p>正则表达式是一组由字母和符号组成的特殊文本，它可以用来从文本中找出满足你想要的格式的句子。</p>
</blockquote>
<p>一个正则表达式是一种从左到右匹配主体字符串的模式。
“Regular expression”这个词比较拗口，我们常使用缩写的术语“regex”或“regexp”。
正则表达式可以从一个基础字符串中根据一定的匹配模式替换文本中的字符串、验证表单、提取字符串等等。</p>
<h2 id="_1-基本匹配" tabindex="-1"><a class="header-anchor" href="#_1-基本匹配" aria-hidden="true">#</a> 1. 基本匹配</h2>
<p>正则表达式其实就是在执行搜索时的格式，它由一些字母和数字组合而成。
例如：一个正则表达式 <code v-pre>the</code>，它表示一个规则：由字母<code v-pre>t</code>开始，接着是<code v-pre>h</code>，再接着是<code v-pre>e</code>。</p>
<pre>
"the" => The fat cat sat on <a href="#learn-regex"><strong>the</strong></a> mat.
</pre>
<p><a href="https://regex101.com/r/dmRygT/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<p>正则表达式<code v-pre>123</code>匹配字符串<code v-pre>123</code>。它逐个字符的与输入的正则表达式做比较。</p>
<p>正则表达式是大小写敏感的，所以<code v-pre>The</code>不会匹配<code v-pre>the</code>。</p>
<pre>
"The" => <a href="#learn-regex"><strong>The</strong></a> fat cat sat on the mat.
</pre>
<p><a href="https://regex101.com/r/1paXsy/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h2 id="_2-元字符" tabindex="-1"><a class="header-anchor" href="#_2-元字符" aria-hidden="true">#</a> 2. 元字符</h2>
<p>正则表达式主要依赖于元字符。
元字符不代表他们本身的字面意思，他们都有特殊的含义。一些元字符写在方括号中的时候有一些特殊的意思。以下是一些元字符的介绍：</p>
<table>
<thead>
<tr>
<th>元字符</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>.</td>
<td>句号匹配任意单个字符除了换行符。</td>
</tr>
<tr>
<td>[ ]</td>
<td>字符种类。匹配方括号内的任意字符。</td>
</tr>
<tr>
<td>[^ ]</td>
<td>否定的字符种类。匹配除了方括号里的任意字符</td>
</tr>
<tr>
<td>*</td>
<td>匹配&gt;=0个重复的在*号之前的字符。</td>
</tr>
<tr>
<td>+</td>
<td>匹配&gt;=1个重复的+号前的字符。</td>
</tr>
<tr>
<td>?</td>
<td>标记?之前的字符为可选.</td>
</tr>
<tr>
<td><code v-pre>{n,m}</code></td>
<td><code v-pre>匹配num个大括号之前的字符或字符集 (n &lt;= num &lt;= m).</code></td>
</tr>
<tr>
<td>(xyz)</td>
<td>字符集，匹配与 xyz 完全相等的字符串.</td>
</tr>
<tr>
<td>|</td>
<td>或运算符，匹配符号前或后的字符.</td>
</tr>
<tr>
<td>\</td>
<td>转义字符,用于匹配一些保留的字符 `[ ] ( ) { } . * + ? ^ $ \</td>
</tr>
<tr>
<td>^</td>
<td>从开始行开始匹配.</td>
</tr>
<tr>
<td>$</td>
<td>从末端开始匹配.</td>
</tr>
</tbody>
</table>
<h2 id="_2-1-点运算符" tabindex="-1"><a class="header-anchor" href="#_2-1-点运算符" aria-hidden="true">#</a> 2.1 点运算符 <code v-pre>.</code></h2>
<p><code v-pre>.</code>是元字符中最简单的例子。
<code v-pre>.</code>匹配任意单个字符，但不匹配换行符。
例如，表达式<code v-pre>.ar</code>匹配一个任意字符后面跟着是<code v-pre>a</code>和<code v-pre>r</code>的字符串。</p>
<pre>
".ar" => The <a href="#learn-regex"><strong>car</strong></a> <a href="#learn-regex"><strong>par</strong></a>ked in the <a href="#learn-regex"><strong>gar</strong></a>age.
</pre>
<p><a href="https://regex101.com/r/xc9GkU/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h2 id="_2-2-字符集" tabindex="-1"><a class="header-anchor" href="#_2-2-字符集" aria-hidden="true">#</a> 2.2 字符集</h2>
<p>字符集也叫做字符类。
方括号用来指定一个字符集。
在方括号中使用连字符来指定字符集的范围。
在方括号中的字符集不关心顺序。
例如，表达式<code v-pre>[Tt]he</code> 匹配 <code v-pre>the</code> 和 <code v-pre>The</code>。</p>
<pre>
"[Tt]he" => <a href="#learn-regex"><strong>The</strong></a> car parked in <a href="#learn-regex"><strong>the</strong></a> garage.
</pre>
<p><a href="https://regex101.com/r/2ITLQ4/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<p>方括号的句号就表示句号。
表达式 <code v-pre>ar[.]</code> 匹配 <code v-pre>ar.</code>字符串</p>
<pre>
"ar[.]" => A garage is a good place to park a c<a href="#learn-regex"><strong>ar.</strong></a>
</pre>
<p><a href="https://regex101.com/r/wL3xtE/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h3 id="_2-2-1-否定字符集" tabindex="-1"><a class="header-anchor" href="#_2-2-1-否定字符集" aria-hidden="true">#</a> 2.2.1 否定字符集</h3>
<p>一般来说 <code v-pre>^</code> 表示一个字符串的开头，但它用在一个方括号的开头的时候，它表示这个字符集是否定的。
例如，表达式<code v-pre>[^c]ar</code> 匹配一个后面跟着<code v-pre>ar</code>的除了<code v-pre>c</code>的任意字符。</p>
<pre>
"[^c]ar" => The car <a href="#learn-regex"><strong>par</strong></a>ked in the <a href="#learn-regex"><strong>gar</strong></a>age.
</pre>
<p><a href="https://regex101.com/r/nNNlq3/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h2 id="_2-3-重复次数" tabindex="-1"><a class="header-anchor" href="#_2-3-重复次数" aria-hidden="true">#</a> 2.3 重复次数</h2>
<p>后面跟着元字符 <code v-pre>+</code>，<code v-pre>*</code> or <code v-pre>?</code> 的，用来指定匹配子模式的次数。
这些元字符在不同的情况下有着不同的意思。</p>
<h3 id="_2-3-1-号" tabindex="-1"><a class="header-anchor" href="#_2-3-1-号" aria-hidden="true">#</a> 2.3.1 <code v-pre>*</code> 号</h3>
<p><code v-pre>*</code>号匹配 在<code v-pre>*</code>之前的字符出现<code v-pre>大于等于0</code>次。
例如，表达式 <code v-pre>a*</code> 匹配0或更多个以a开头的字符。表达式<code v-pre>[a-z]*</code> 匹配一个行中所有以小写字母开头的字符串。</p>
<pre>
"[a-z]*" => T<a href="#learn-regex"><strong>he</strong></a> <a href="#learn-regex"><strong>car</strong></a> <a href="#learn-regex"><strong>parked</strong></a> <a href="#learn-regex"><strong>in</strong></a> <a href="#learn-regex"><strong>the</strong></a> <a href="#learn-regex"><strong>garage</strong></a> #21.
</pre>
<p><a href="https://regex101.com/r/7m8me5/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<p><code v-pre>*</code>字符和<code v-pre>.</code>字符搭配可以匹配所有的字符<code v-pre>.*</code>。
<code v-pre>*</code>和表示匹配空格的符号<code v-pre>\s</code>连起来用，如表达式<code v-pre>\s*cat\s*</code>匹配0或更多个空格开头和0或更多个空格结尾的cat字符串。</p>
<pre>
"\s*cat\s*" => The fat<a href="#learn-regex"><strong> cat </strong></a>sat on the con<a href="#learn-regex"><strong>cat</strong></a>enation.
</pre>
<p><a href="https://regex101.com/r/gGrwuz/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h3 id="_2-3-2-号" tabindex="-1"><a class="header-anchor" href="#_2-3-2-号" aria-hidden="true">#</a> 2.3.2 <code v-pre>+</code> 号</h3>
<p><code v-pre>+</code>号匹配<code v-pre>+</code>号之前的字符出现 &gt;=1 次。
例如表达式<code v-pre>c.+t</code> 匹配以首字母<code v-pre>c</code>开头以<code v-pre>t</code>结尾，中间跟着至少一个字符的字符串。</p>
<pre>
"c.+t" => The fat <a href="#learn-regex"><strong>cat sat on the mat</strong></a>.
</pre>
<p><a href="https://regex101.com/r/Dzf9Aa/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h3 id="_2-3-3-号" tabindex="-1"><a class="header-anchor" href="#_2-3-3-号" aria-hidden="true">#</a> 2.3.3 <code v-pre>?</code> 号</h3>
<p>在正则表达式中元字符 <code v-pre>?</code> 标记在符号前面的字符为可选，即出现 0 或 1 次。
例如，表达式 <code v-pre>[T]?he</code> 匹配字符串 <code v-pre>he</code> 和 <code v-pre>The</code>。</p>
<pre>
"[T]he" => <a href="#learn-regex"><strong>The</strong></a> car is parked in the garage.
</pre>
<p><a href="https://regex101.com/r/cIg9zm/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<pre>
"[T]?he" => <a href="#learn-regex"><strong>The</strong></a> car is parked in t<a href="#learn-regex"><strong>he</strong></a> garage.
</pre>
<p><a href="https://regex101.com/r/kPpO2x/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h2 id="_2-4-号" tabindex="-1"><a class="header-anchor" href="#_2-4-号" aria-hidden="true">#</a> 2.4 <code v-pre>{}</code> 号</h2>
<p>在正则表达式中 <code v-pre>{}</code> 是一个量词，常用来限定一个或一组字符可以重复出现的次数。
例如， 表达式 <code v-pre>[0-9]{2,3}</code> 匹配最少 2 位最多 3 位 0~9 的数字。</p>
<pre>
"[0-9]{2,3}" => The number was 9.<a href="#learn-regex"><strong>999</strong></a>7 but we rounded it off to <a href="#learn-regex"><strong>10</strong></a>.0.
</pre>
<p><a href="https://regex101.com/r/juM86s/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<p>我们可以省略第二个参数。
例如，<code v-pre>[0-9]{2,}</code> 匹配至少两位 0~9 的数字。</p>
<pre>
"[0-9]{2,}" => The number was 9.<a href="#learn-regex"><strong>9997</strong></a> but we rounded it off to <a href="#learn-regex"><strong>10</strong></a>.0.
</pre>
<p><a href="https://regex101.com/r/Gdy4w5/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<p>如果逗号也省略掉则表示重复固定的次数。
例如，<code v-pre>[0-9]{3}</code> 匹配3位数字</p>
<pre>
"[0-9]{3}" => The number was 9.<a href="#learn-regex"><strong>999</strong></a>7 but we rounded it off to 10.0.
</pre>
<p><a href="https://regex101.com/r/Sivu30/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h2 id="_2-5-特征标群" tabindex="-1"><a class="header-anchor" href="#_2-5-特征标群" aria-hidden="true">#</a> 2.5 <code v-pre>(...)</code> 特征标群</h2>
<p>特征标群是一组写在 <code v-pre>(...)</code> 中的子模式。<code v-pre>(...)</code> 中包含的内容将会被看成一个整体，和数学中小括号（ ）的作用相同。例如, 表达式 <code v-pre>(ab)*</code> 匹配连续出现 0 或更多个 <code v-pre>ab</code>。如果没有使用 <code v-pre>(...)</code> ，那么表达式 <code v-pre>ab*</code> 将匹配连续出现 0 或更多个 <code v-pre>b</code> 。再比如之前说的 <code v-pre>{}</code> 是用来表示前面一个字符出现指定次数。但如果在 <code v-pre>{}</code> 前加上特征标群 <code v-pre>(...)</code> 则表示整个标群内的字符重复 N 次。</p>
<p>我们还可以在 <code v-pre>()</code> 中用或字符 <code v-pre>|</code> 表示或。例如，<code v-pre>(c|g|p)ar</code> 匹配 <code v-pre>car</code> 或 <code v-pre>gar</code> 或 <code v-pre>par</code>.</p>
<pre>
"(c|g|p)ar" => The <a href="#learn-regex"><strong>car</strong></a> is <a href="#learn-regex"><strong>par</strong></a>ked in the <a href="#learn-regex"><strong>gar</strong></a>age.
</pre>
<p><a href="https://regex101.com/r/tUxrBG/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h2 id="_2-6-或运算符" tabindex="-1"><a class="header-anchor" href="#_2-6-或运算符" aria-hidden="true">#</a> 2.6 <code v-pre>|</code> 或运算符</h2>
<p>或运算符就表示或，用作判断条件。</p>
<p>例如 <code v-pre>(T|t)he|car</code> 匹配 <code v-pre>(T|t)he</code> 或 <code v-pre>car</code>。</p>
<pre>
"(T|t)he|car" => <a href="#learn-regex"><strong>The</strong></a> <a href="#learn-regex"><strong>car</strong></a> is parked in <a href="#learn-regex"><strong>the</strong></a> garage.
</pre>
<p><a href="https://regex101.com/r/fBXyX0/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h2 id="_2-7-转码特殊字符" tabindex="-1"><a class="header-anchor" href="#_2-7-转码特殊字符" aria-hidden="true">#</a> 2.7 转码特殊字符</h2>
<p>反斜线 <code v-pre>\</code> 在表达式中用于转码紧跟其后的字符。用于指定 <code v-pre>{ } [ ] / \ + * . $ ^ | ?</code> 这些特殊字符。如果想要匹配这些特殊字符则要在其前面加上反斜线 <code v-pre>\</code>。</p>
<p>例如 <code v-pre>.</code> 是用来匹配除换行符外的所有字符的。如果想要匹配句子中的 <code v-pre>.</code> 则要写成 <code v-pre>\.</code> 以下这个例子 <code v-pre>\.?</code>是选择性匹配<code v-pre>.</code></p>
<pre>
"(f|c|m)at\.?" => The <a href="#learn-regex"><strong>fat</strong></a> <a href="#learn-regex"><strong>cat</strong></a> sat on the <a href="#learn-regex"><strong>mat.</strong></a>
</pre>
<p><a href="https://regex101.com/r/DOc5Nu/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h2 id="_2-8-锚点" tabindex="-1"><a class="header-anchor" href="#_2-8-锚点" aria-hidden="true">#</a> 2.8 锚点</h2>
<p>在正则表达式中，想要匹配指定开头或结尾的字符串就要使用到锚点。<code v-pre>^</code> 指定开头，<code v-pre>$</code> 指定结尾。</p>
<h3 id="_2-8-1-号" tabindex="-1"><a class="header-anchor" href="#_2-8-1-号" aria-hidden="true">#</a> 2.8.1 <code v-pre>^</code> 号</h3>
<p><code v-pre>^</code> 用来检查匹配的字符串是否在所匹配字符串的开头。</p>
<p>例如，在 <code v-pre>abc</code> 中使用表达式 <code v-pre>^a</code> 会得到结果 <code v-pre>a</code>。但如果使用 <code v-pre>^b</code> 将匹配不到任何结果。因为在字符串 <code v-pre>abc</code> 中并不是以 <code v-pre>b</code> 开头。</p>
<p>例如，<code v-pre>^(T|t)he</code> 匹配以 <code v-pre>The</code> 或 <code v-pre>the</code> 开头的字符串。</p>
<pre>
"(T|t)he" => <a href="#learn-regex"><strong>The</strong></a> car is parked in <a href="#learn-regex"><strong>the</strong></a> garage.
</pre>
<p><a href="https://regex101.com/r/5ljjgB/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<pre>
"^(T|t)he" => <a href="#learn-regex"><strong>The</strong></a> car is parked in the garage.
</pre>
<p><a href="https://regex101.com/r/jXrKne/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h3 id="_2-8-2-号" tabindex="-1"><a class="header-anchor" href="#_2-8-2-号" aria-hidden="true">#</a> 2.8.2 <code v-pre>$</code> 号</h3>
<p>同理于 <code v-pre>^</code> 号，<code v-pre>$</code> 号用来匹配字符是否是最后一个。</p>
<p>例如，<code v-pre>(at\.)$</code> 匹配以 <code v-pre>at.</code> 结尾的字符串。</p>
<pre>
"(at\.)" => The fat c<a href="#learn-regex"><strong>at.</strong></a> s<a href="#learn-regex"><strong>at.</strong></a> on the m<a href="#learn-regex"><strong>at.</strong></a>
</pre>
<p><a href="https://regex101.com/r/y4Au4D/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<pre>
"(at\.)$" => The fat cat. sat. on the m<a href="#learn-regex"><strong>at.</strong></a>
</pre>
<p><a href="https://regex101.com/r/t0AkOd/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h2 id="_3-简写字符集" tabindex="-1"><a class="header-anchor" href="#_3-简写字符集" aria-hidden="true">#</a> 3. 简写字符集</h2>
<p>正则表达式提供一些常用的字符集简写。如下:</p>
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
<td>匹配所有字母数字，等同于 <code v-pre>[a-zA-Z0-9_]</code></td>
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
<h2 id="_4-零宽度断言-前后预查" tabindex="-1"><a class="header-anchor" href="#_4-零宽度断言-前后预查" aria-hidden="true">#</a> 4. 零宽度断言（前后预查）</h2>
<p>先行断言和后发断言（合称 lookaround）都属于<strong>非捕获组</strong>（用于匹配模式，但不包括在匹配列表中）。当我们需要一个模式的前面或后面有另一个特定的模式时，就可以使用它们。</p>
<p>例如，我们希望从下面的输入字符串 <code v-pre>$4.44</code> 和 <code v-pre>$10.88</code> 中获得所有以 <code v-pre>$</code> 字符开头的数字，我们将使用以下的正则表达式 <code v-pre>(?&lt;=\$)[0-9\.]*</code>。意思是：获取所有包含 <code v-pre>.</code> 并且前面是 <code v-pre>$</code> 的数字。</p>
<p>零宽度断言如下：</p>
<table>
<thead>
<tr>
<th style="text-align:center">符号</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">?=</td>
<td>正先行断言-存在</td>
</tr>
<tr>
<td style="text-align:center">?!</td>
<td>负先行断言-排除</td>
</tr>
<tr>
<td style="text-align:center">?&lt;=</td>
<td>正后发断言-存在</td>
</tr>
<tr>
<td style="text-align:center">?&lt;!</td>
<td>负后发断言-排除</td>
</tr>
</tbody>
</table>
<h3 id="_4-1-正先行断言" tabindex="-1"><a class="header-anchor" href="#_4-1-正先行断言" aria-hidden="true">#</a> 4.1 <code v-pre>?=...</code> 正先行断言</h3>
<p><code v-pre>?=...</code> 正先行断言，表示第一部分表达式之后必须跟着 <code v-pre>?=...</code>定义的表达式。</p>
<p>返回结果只包含满足匹配条件的第一部分表达式。
定义一个正先行断言要使用 <code v-pre>()</code>。在括号内部使用一个问号和等号： <code v-pre>(?=...)</code>。</p>
<p>正先行断言的内容写在括号中的等号后面。
例如，表达式 <code v-pre>(T|t)he(?=\sfat)</code> 匹配 <code v-pre>The</code> 和 <code v-pre>the</code>，在括号中我们又定义了正先行断言 <code v-pre>(?=\sfat)</code> ，即 <code v-pre>The</code> 和 <code v-pre>the</code> 后面紧跟着 <code v-pre>(空格)fat</code>。</p>
<pre>
"(T|t)he(?=\sfat)" => <a href="#learn-regex"><strong>The</strong></a> fat cat sat on the mat.
</pre>
<p><a href="https://regex101.com/r/IDDARt/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h3 id="_4-2-负先行断言" tabindex="-1"><a class="header-anchor" href="#_4-2-负先行断言" aria-hidden="true">#</a> 4.2 <code v-pre>?!...</code> 负先行断言</h3>
<p>负先行断言 <code v-pre>?!</code> 用于筛选所有匹配结果，筛选条件为 其后不跟随着断言中定义的格式。
<code v-pre>正先行断言</code>  定义和 <code v-pre>负先行断言</code> 一样，区别就是 <code v-pre>=</code> 替换成 <code v-pre>!</code> 也就是 <code v-pre>(?!...)</code>。</p>
<p>表达式 <code v-pre>(T|t)he(?!\sfat)</code> 匹配 <code v-pre>The</code> 和 <code v-pre>the</code>，且其后不跟着 <code v-pre>(空格)fat</code>。</p>
<pre>
"(T|t)he(?!\sfat)" => The fat cat sat on <a href="#learn-regex"><strong>the</strong></a> mat.
</pre>
<p><a href="https://regex101.com/r/V32Npg/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h3 id="_4-3-正后发断言" tabindex="-1"><a class="header-anchor" href="#_4-3-正后发断言" aria-hidden="true">#</a> 4.3 <code v-pre>?&lt;= ...</code> 正后发断言</h3>
<p>正后发断言 记作<code v-pre>(?&lt;=...)</code> 用于筛选所有匹配结果，筛选条件为 其前跟随着断言中定义的格式。
例如，表达式 <code v-pre>(?&lt;=(T|t)he\s)(fat|mat)</code> 匹配 <code v-pre>fat</code> 和 <code v-pre>mat</code>，且其前跟着 <code v-pre>The</code> 或 <code v-pre>the</code>。</p>
<pre>
"(?《 =(T|t)he\s)(fat|mat)" => The <a href="#learn-regex"><strong>fat</strong></a> cat sat on the <a href="#learn-regex"><strong>mat</strong></a>.
</pre>
<p><a href="https://regex101.com/r/avH165/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h3 id="_4-4-负后发断言" tabindex="-1"><a class="header-anchor" href="#_4-4-负后发断言" aria-hidden="true">#</a> 4.4 <code v-pre>?&lt;!...</code> 负后发断言</h3>
<p>负后发断言 记作 <code v-pre>(?&lt;!...)</code> 用于筛选所有匹配结果，筛选条件为 其前不跟随着断言中定义的格式。
例如，表达式 <code v-pre>(?&lt;!(T|t)he\s)(cat)</code> 匹配 <code v-pre>cat</code>，且其前不跟着 <code v-pre>The</code> 或 <code v-pre>the</code>。</p>
<pre>
"(? &lt; !(T|t)he\s)(cat)" => The cat sat on <a href="#learn-regex"><strong>cat</strong></a>.
</pre>
<p><a href="https://regex101.com/r/8Efx5G/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h2 id="_5-标志" tabindex="-1"><a class="header-anchor" href="#_5-标志" aria-hidden="true">#</a> 5. 标志</h2>
<p>标志也叫模式修正符，因为它可以用来修改表达式的搜索结果。
这些标志可以任意的组合使用，它也是整个正则表达式的一部分。</p>
<table>
<thead>
<tr>
<th style="text-align:center">标志</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">i</td>
<td>忽略大小写。</td>
</tr>
<tr>
<td style="text-align:center">g</td>
<td>全局搜索。</td>
</tr>
<tr>
<td style="text-align:center">m</td>
<td>多行修饰符：锚点元字符 <code v-pre>^</code> <code v-pre>$</code> 工作范围在每行的起始。</td>
</tr>
</tbody>
</table>
<h3 id="_5-1-忽略大小写-case-insensitive" tabindex="-1"><a class="header-anchor" href="#_5-1-忽略大小写-case-insensitive" aria-hidden="true">#</a> 5.1 忽略大小写 (Case Insensitive)</h3>
<p>修饰语 <code v-pre>i</code> 用于忽略大小写。
例如，表达式 <code v-pre>/The/gi</code> 表示在全局搜索 <code v-pre>The</code>，在后面的 <code v-pre>i</code> 将其条件修改为忽略大小写，则变成搜索 <code v-pre>the</code> 和 <code v-pre>The</code>，<code v-pre>g</code> 表示全局搜索。</p>
<pre>
"The" => <a href="#learn-regex"><strong>The</strong></a> fat cat sat on the mat.
</pre>
<p><a href="https://regex101.com/r/dpQyf9/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<pre>
"/The/gi" => <a href="#learn-regex"><strong>The</strong></a> fat cat sat on <a href="#learn-regex"><strong>the</strong></a> mat.
</pre>
<p><a href="https://regex101.com/r/ahfiuh/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h3 id="_5-2-全局搜索-global-search" tabindex="-1"><a class="header-anchor" href="#_5-2-全局搜索-global-search" aria-hidden="true">#</a> 5.2 全局搜索 (Global search)</h3>
<p>修饰符 <code v-pre>g</code> 常用于执行一个全局搜索匹配，即（不仅仅返回第一个匹配的，而是返回全部）。
例如，表达式 <code v-pre>/.(at)/g</code> 表示搜索 任意字符（除了换行）+ <code v-pre>at</code>，并返回全部结果。</p>
<pre>
"/.(at)/" => The <a href="#learn-regex"><strong>fat</strong></a> cat sat on the mat.
</pre>
<p><a href="https://regex101.com/r/jnk6gM/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<pre>
"/.(at)/g" => The <a href="#learn-regex"><strong>fat</strong></a> <a href="#learn-regex"><strong>cat</strong></a> <a href="#learn-regex"><strong>sat</strong></a> on the <a href="#learn-regex"><strong>mat</strong></a>.
</pre>
<p><a href="https://regex101.com/r/dO1nef/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h3 id="_5-3-多行修饰符-multiline" tabindex="-1"><a class="header-anchor" href="#_5-3-多行修饰符-multiline" aria-hidden="true">#</a> 5.3 多行修饰符 (Multiline)</h3>
<p>多行修饰符 <code v-pre>m</code> 常用于执行一个多行匹配。</p>
<p>像之前介绍的 <code v-pre>(^,$)</code> 用于检查格式是否是在待检测字符串的开头或结尾。但我们如果想要它在每行的开头和结尾生效，我们需要用到多行修饰符 <code v-pre>m</code>。</p>
<p>例如，表达式 <code v-pre>/at(.)?$/gm</code> 表示小写字符 <code v-pre>a</code> 后跟小写字符 <code v-pre>t</code> ，末尾可选除换行符外任意字符。根据 <code v-pre>m</code> 修饰符，现在表达式匹配每行的结尾。</p>
<pre>
"/.at(.)?$/" => The fat
                cat sat
                on the <a href="#learn-regex"><strong>mat.</strong></a>
</pre>
<p><a href="https://regex101.com/r/hoGMkP/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<pre>
"/.at(.)?$/gm" => The <a href="#learn-regex"><strong>fat</strong></a>
                  cat <a href="#learn-regex"><strong>sat</strong></a>
                  on the <a href="#learn-regex"><strong>mat.</strong></a>
</pre>
<p><a href="https://regex101.com/r/E88WE2/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<h3 id="_6-贪婪匹配与惰性匹配-greedy-vs-lazy-matching" tabindex="-1"><a class="header-anchor" href="#_6-贪婪匹配与惰性匹配-greedy-vs-lazy-matching" aria-hidden="true">#</a> 6. 贪婪匹配与惰性匹配 (Greedy vs lazy matching)</h3>
<p>正则表达式默认采用贪婪匹配模式，在该模式下意味着会匹配尽可能长的子串。我们可以使用 <code v-pre>?</code> 将贪婪匹配模式转化为惰性匹配模式。</p>
<pre>
"/(.*at)/" => <a href="#learn-regex"><strong>The fat cat sat on the mat</strong></a>. </pre>
<p><a href="https://regex101.com/r/AyAdgJ/1" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
<pre>
"/(.*?at)/" => <a href="#learn-regex"><strong>The fat</strong></a> cat sat on the mat. </pre>
<p><a href="https://regex101.com/r/AyAdgJ/2" target="_blank" rel="noopener noreferrer">在线练习<ExternalLinkIcon/></a></p>
</div></template>


