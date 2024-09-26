<template><div><p><a href="https://www.bilibili.com/video/BV1Fd4y1T7pD/?spm_id_from=333.880.my_history.page.click&amp;vd_source=f8821730ff8a13ec89104c8629e6d42b" target="_blank" rel="noopener noreferrer">Redis详细解释</a></p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> update</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> redis-server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">redis-cli</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 启动命令</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令"><span>基本命令</span></a></h2>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">bdsize</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 当前数据库大小</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">select</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> 数据库切换</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">flushdb</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 清空当前数据库</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">flushall</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 清空所有数据库</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2">type</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">  查看key的类型</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五大数据类型" tabindex="-1"><a class="header-anchor" href="#五大数据类型"><span>五大数据类型</span></a></h2>
<ul>
<li>Redsi-Key</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">keys</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">     打印所有的key</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2">set</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> hhh</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">   设置k-v</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">"name"</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">"hh"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">   打印name的value</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">exists</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">  判断key是否存在</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">move</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> name</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">  1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">  将name移入到数据库1中</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">expire</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> name</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 5</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">  设置name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 5s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 过期</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">ttl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 查看name剩余过期时间</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>String</li>
</ul>
<div class="language-bash line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--vp-collapsed-lines:10;--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">append</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">  "world"</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">     #value后面增加world</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">strlen</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> name</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">   #value的长度</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">incr</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">  age</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    #实现自增</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">incrby</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> age</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">  20</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">  #增加20</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">decr</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> age</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">   #实现自减</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">dectby</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> age</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 20</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">   #减少20</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">getrange</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> name</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">   #串的截取</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">mget</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> mset</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">  #批量set或get</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">setnx</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">  #如果存在则不创建</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">getset</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">  #找不到就创建 找到就设置</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ul>
<li>List</li>
</ul>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">lpush</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> list</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> hello</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">   #往list中加入hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">lrange</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> -1</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">   #打印所有</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">lpop/rpop</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> list</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">     #删除左右头部</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">lindex</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">      # 打印下标1的值</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">llen</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> list</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">          # 长度</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">lrem</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> hello</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">      # 删除一个hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">ltrim</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 4</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">       # 截取 剩余2-4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">lset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> hello</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    # 指定下标值替换为hello</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>set</li>
</ul>
<div class="language-bash line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--vp-collapsed-lines:10;--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">sadd:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 向集合中添加元素。例如：sadd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> myset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> "element1"</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> "element2"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">smembers:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 返回集合中所有元素。例如：smembers</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> myset</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">sismember:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 判断元素是否在集合中。例如：sismember</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> myset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> "element1"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">scard:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 返回集合中元素的数量。例如：scard</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> myset</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">srem:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 从集合中删除元素。例如：srem</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> myset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> "element1"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">spop:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 从集合中弹出一个随机元素。例如：spop</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> myset</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">sunion:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 返回多个集合的并集。例如：sunion</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> set1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> set2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> set3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">sdiff:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 返回多个集合的差集。例如：sdiff</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> set1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> set2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> set3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">sinter:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 返回多个集合的交集。例如：sinter</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> set1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> set2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> set3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">srandmember:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 随机返回集合中的一个元素。例如：srandmember</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> myset</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ul>
<li>Hash</li>
</ul>
<div class="language-bash line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--vp-collapsed-lines:10;--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">hset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> field</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> value</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 在key对应的hash中设置field对应的value。如果key不存在，则新建一个。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">例如:hset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> user:1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> "tom"</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">hget</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> field</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 获取key对应的hash中field对应的value。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">例如:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> hget</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> user:1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">hgetall</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 获取key对应的hash中所有的键值对。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">例如:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> hgetall</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> user:1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">hdel</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> field</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> [field </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">...]</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 删除key对应的hash中的一个或多个field。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">例如:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> hdel</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> user:1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">hlen</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 获取key对应的hash中field的数量。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">例如:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> hlen</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> user:1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">hexists</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> field</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 检查key对应的hash中是否存在field。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">例如:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> hexists</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> user:1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> name</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">hkeys</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 获取key对应的hash中所有的field。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">例如:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> hkeys</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> user:1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">hvals</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> key</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 获取key对应的hash中所有的value。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">例如:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> hvals</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> user:1</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">这里是一些基本的Redis</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> Hash命令。实际上还有许多其他的命令可供使用，如hincrby、hmset、hmget等。</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ul>
<li>Sorted sets</li>
</ul>
<div class="language-bash line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--vp-collapsed-lines:10;--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">zadd:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 向有序集合中添加元素，支持指定分数。例如：zadd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> mysortedset</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> "element1"</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> "element2"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">zrange:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 返回有序集合中指定范围的元素。例如：zrange</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> mysortedset</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> -1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">zrangebyscore:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 返回有序集合中指定分数范围的元素。例如：zrangebyscore</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> mysortedset</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">zrank:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 返回有序集合中指定元素的排名。例如：zrank</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> mysortedset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> "element1"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">zrem:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 从有序集合中删除元素。例如：zrem</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> mysortedset</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> "element1"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">zcount:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 返回有序集合中指定分数范围的元素数量。例如：zcount</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> mysortedset</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">zincrby:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 对有序集合中指定元素的分数进行增加/减少操作。例如：zincrby</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> mysortedset</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> "element1"</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">zcard:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 返回有序集合中元素的数量。例如：zcard</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> mysortedset</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">zunionstore:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 计算多个有序集合的并集，并将结果存储到新的有序集合中。例如：zunionstore</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> new_sortedset</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> sortedset1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> sortedset2</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">zinterstore:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> 计算多个有序集合的交集，并将结果存储到新的有序集合中。例如：zinterstore</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> new_sortedset</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> sortedset1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> sortedset2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化"><span>序列化</span></a></h2>
<ul>
<li>Redis是一种内存数据库，为了更有效地使用内存，它需要对存储的数据进行序列化，使数据占用的空间更小。序列化是指将数据结构转换为字节流的过程。</li>
<li>Redis支持多种序列化格式，如二进制协议（Redis默认使用的序列化格式）、JSON、MessagePack等。二进制协议是Redis自定义的序列化格式，它可以最大程度地减少数据占用的空间。JSON和MessagePack是常用的序列化格式，它们可以方便地与其他语言和系统进行交互。</li>
</ul>
<h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h3>
<p>stu.java</p>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B"> stu</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> implements</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B"> Serializable</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B"> Integer</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B"> String</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RedisConfig.java</p>
<div class="language-java line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="java" data-title="java" style="--vp-collapsed-lines:10;--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">Configuration</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B"> RedisConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">Bean</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    //配置redisTemplate</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    // 默认情况下的模板只能支持 RedisTemplate&#x3C;String,String>，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    // 只能存入字符串，很多时候，我们需要自定义 RedisTemplate ，设置序列化器</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B"> RedisTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">></span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> redisTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">RedisConnectionFactory</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"> factory</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        RedisTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">String</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">> </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">template</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B"> RedisTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> &#x3C;>();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">setConnectionFactory</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(factory);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        Jackson2JsonRedisSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> jackson2JsonRedisSerializer</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> Jackson2JsonRedisSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">Object</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">class</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        ObjectMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> om</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> ObjectMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        om</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">setVisibility</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">PropertyAccessor</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">ALL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">JsonAutoDetect</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">Visibility</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">ANY</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        om</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">enableDefaultTyping</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">ObjectMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">DefaultTyping</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">NON_FINAL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        jackson2JsonRedisSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">setObjectMapper</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(om);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        StringRedisSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> stringRedisSerializer</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> StringRedisSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        // key采用String的序列化方式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">setKeySerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(stringRedisSerializer);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">setValueSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(stringRedisSerializer);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        // hash的key也采用String的序列化方式</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">setHashKeySerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(stringRedisSerializer);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        // value序列化方式采用jackson</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">setValueSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(jackson2JsonRedisSerializer);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        // hash的value序列化方式采用jackson</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">setHashValueSerializer</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(jackson2JsonRedisSerializer);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">afterPropertiesSet</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> template;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h3>
<div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">Autowired</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    private</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B"> RedisTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75"> redisTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B">Test</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> contextLoads</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">        stu stu </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF"> stu</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">,</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> "liming"</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">)</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        redisTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">opsForValue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">set</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"hh"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">,stu);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">        System</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">out</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B">redisTemplate</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">opsForValue</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"hh"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75">    }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="持久化" tabindex="-1"><a class="header-anchor" href="#持久化"><span>持久化</span></a></h2>
<h3 id="rdb" tabindex="-1"><a class="header-anchor" href="#rdb"><span>RDB</span></a></h3>
<blockquote>
<p>RDB 是 Redis Database 文件的缩写，它是 Redis 的默认数据持久化方式。RDB 文件是在指定的时间间隔内（通常是每几秒或几分钟）自动生成的快照文件。这种方式可以在损失一定数据的情况下更快地恢复数据库。</p>
</blockquote>
<h5 id="触发" tabindex="-1"><a class="header-anchor" href="#触发"><span>触发</span></a></h5>
<ul>
<li>
<p>保存配置：</p>
<ul>
<li>save：只管保存，其他不管，全部阻塞。</li>
</ul>
<blockquote>
<p>内部触发机制</p>
<p>900s 内有一条数据被修改 则执行bgsave</p>
<p>save 900 1<br>
save 300 10<br>
save 60 10000</p>
<p>save &quot;&quot;  # 禁用RDB</p>
</blockquote>
<ul>
<li>bgsave：Redis 会在后台异步进行快照操作，快照同时还可以响应客户端请求。</li>
<li>lastsave：获取最后一次成功执行快照的时间。</li>
</ul>
</li>
<li>
<p>执行 flushall 命令，也会产生 dump.rdb 文件，但里面是空的，无意义 。</p>
</li>
<li>
<p>退出的时候也会产生 dump.rdb 文件。</p>
</li>
</ul>
<h3 id="aof" tabindex="-1"><a class="header-anchor" href="#aof"><span>AOF</span></a></h3>
<font color="gray">很少使用</font><blockquote>
<p>AOF 是 Append-Only File 的缩写，它是 Redis 的另一种数据持久化方式。AOF 文件是将 Redis 所有写操作命令追加到文件的过程，因此可以保证数据的完整性。</p>
</blockquote>
<div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" data-title="" style="--vp-collapsed-lines:10;--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># 是否以append only模式作为持久化方式，默认使用的是rdb方式持久化，这种方式在许多应用中已经足够用了</span></span>
<span class="line"><span>appendonly no </span></span>
<span class="line"><span># appendfilename AOF 文件名称</span></span>
<span class="line"><span>appendfilename "appendonly.aof" </span></span>
<span class="line"><span># appendfsync aof持久化策略的配置：</span></span>
<span class="line"><span>#     no：不执行fsync，由操作系统保证数据同步到磁盘，速度最快。</span></span>
<span class="line"><span>#     always：每次写入都执行fsync，以保证数据同步到磁盘。</span></span>
<span class="line"><span>#     everysec：每秒执行一次fsync，可能会导致丢失这1s数据。</span></span>
<span class="line"><span>appendfsync everysec </span></span>
<span class="line"><span># 重写时是否可以运用Appendfsync，用默认no即可，保证数据安全性</span></span>
<span class="line"><span>No-appendfsync-on-rewrite </span></span>
<span class="line"><span></span></span>
<span class="line"><span>## 触发阈值自动重写aof</span></span>
<span class="line"><span># 设置重写的基准值</span></span>
<span class="line"><span>Auto-aof-rewrite-min-size  100</span></span>
<span class="line"><span># 设置重写的基准值</span></span>
<span class="line"><span>Auto-aof-rewrite-percentage 64mb</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><div class="hint-container info">
<p class="hint-container-title">相关信息</p>
<p>由于记录中的很多操作没有意义， 可以执行 bgrewriteaof</p>
<p>可以让aof文件执行重写功能，用最少的命令达到相同的效果</p>
</div>
<h2 id="主从" tabindex="-1"><a class="header-anchor" href="#主从"><span>主从</span></a></h2>
<p><a href="https://www.bilibili.com/video/BV1cr4y1671t?p=101&amp;spm_id_from=pageDriver&amp;vd_source=f8821730ff8a13ec89104c8629e6d42b" target="_blank" rel="noopener noreferrer">高级篇-分布式缓存-06-Redis主从-主从集群结构_哔哩哔哩_bilibili</a></p>
<h3 id="开启" tabindex="-1"><a class="header-anchor" href="#开启"><span>开启</span></a></h3>
<blockquote>
<p>先配置 三个不同的redis.conf  用来启动不同的端口</p>
<p>默认 从机只读</p>
</blockquote>
<ul>
<li>
<p>修改配置文件（永久生效）</p>
<ul>
<li>下redis.conf 添加一行配置 slaveof  ip port</li>
</ul>
</li>
<li>
<p>使用redis-cli 客户端连接到redis服务，执行slaveof(重启后失效)</p>
<p><code v-pre>slaveof ip port </code></p>
</li>
</ul>
<h3 id="哨兵" tabindex="-1"><a class="header-anchor" href="#哨兵"><span>哨兵</span></a></h3>
<blockquote>
<p>用来实现主从集群的自动故障恢复</p>
<p>采用心跳机制 每个1s就会向每个实例发送ping命令</p>
<ul>
<li>主观下线 如果某实例未在规定时间内 返回相应 ，则主观认为该实例下线。</li>
<li>客观下线 好多个哨兵都认为该实例下线，则该实例客观下线</li>
</ul>
</blockquote>
<ul>
<li>搭建sentinel集群</li>
</ul>
<p>需要多个sentinel</p>
<div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" data-title="" style="--vp-collapsed-lines:10;--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span># Redis Sentinel configuration file</span></span>
<span class="line"><span>port 27003</span></span>
<span class="line"><span># 设置 Sentinel 进程的ID，默认为 sentinel，默认情况下无需修改</span></span>
<span class="line"><span>#sentinel myid 1</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 配置监控的主节点信息</span></span>
<span class="line"><span># 指定主节点的名称、IP地址和端口</span></span>
<span class="line"><span>sentinel monitor mymaster 127.0.0.1 7001 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置 Sentinel 进程和主节点失去联系后，判断主节点下线的时间阈值（单位：毫秒）</span></span>
<span class="line"><span>sentinel down-after-milliseconds mymaster 5000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置 Sentinel 进行故障转移的超时时间（单位：毫秒）</span></span>
<span class="line"><span>sentinel failover-timeout mymaster 10000</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 配置日志文件路径和级别</span></span>
<span class="line"><span># 默认情况下，日志将输出到控制台</span></span>
<span class="line"><span># 可以将日志输出到指定的文件，配置 log-file 参数</span></span>
<span class="line"><span># 可以设置日志级别，配置 loglevel 参数，可选值：debug、verbose、notice、warning</span></span>
<span class="line"><span>#sentinel loglevel notice</span></span>
<span class="line"><span># sentinel logfile "sentinel.log"</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 设置 Sentinel 进程的认证密码（如果有密码）</span></span>
<span class="line"><span># 如果 Redis 主节点设置了密码，则需要配置 sentinel auth-pass 指令来提供密码</span></span>
<span class="line"><span># sentinel auth-pass mymaster password</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 配置其他 Sentinel 进程信息</span></span>
<span class="line"><span># 可以添加更多的 Sentinel 进程信息，用于构建 Sentinel 的多节点部署</span></span>
<span class="line"><span># sentinel monitor othermaster 127.0.0.1 6380 2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><ul>
<li>
<p>启动</p>
<blockquote>
<p>redis-sentinel s1/sentinel.conf</p>
</blockquote>
</li>
</ul>
</div></template>


