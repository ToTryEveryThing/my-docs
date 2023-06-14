import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as p,d as s,e as a,b as e,w as o,f as i}from"./app-4a43e54b.js";const u={},r={href:"https://www.bilibili.com/video/BV1Fd4y1T7pD/?spm_id_from=333.880.my_history.page.click&vd_source=f8821730ff8a13ec89104c8629e6d42b",target:"_blank",rel:"noopener noreferrer"},v=i(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update
sudo apt install redis-server
redis-cli 启动命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bdsize 当前数据库大小
select 数据库切换
flushdb 清空当前数据库
flushall 清空所有数据库
type name  查看key的类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五大数据类型" tabindex="-1"><a class="header-anchor" href="#五大数据类型" aria-hidden="true">#</a> 五大数据类型</h2><h3 id="redsi-key" tabindex="-1"><a class="header-anchor" href="#redsi-key" aria-hidden="true">#</a> Redsi-Key</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>keys *     打印所有的key
set name hhh   设置k-v(&quot;name&quot;,&quot;hh&quot;)
get name   打印name的value
exists name  判断key是否存在
move name  1  将name移入到数据库1中
expire name 5  设置name 5s 过期
ttl name 查看name剩余过期时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> String</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>append name  &quot;world&quot;     #value后面增加world
strlen name   #value的长度
incr  age    #实现自增
incrby age  20  #增加20
decr age   #实现自减
dectby age 20   #减少20
getrange name 0 3   #串的截取
mget mset  #批量set或get
setnx  #如果存在则不创建
getset  #找不到就创建 找到就设置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="list" tabindex="-1"><a class="header-anchor" href="#list" aria-hidden="true">#</a> List</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lpush list hello   #往list中加入hello
lrange list 0 -1   #打印所有
lpop/rpop list     #删除左右头部
lindex list 1      # 打印下标1的值
llen list          # 长度
lrem list 1 hello      # 删除一个hello
ltrim list 2 4       # 截取 剩余2-4
lset list 0 hello    # 指定下标值替换为hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> set</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sadd: 向集合中添加元素。例如：sadd myset &quot;element1&quot; &quot;element2&quot;

smembers: 返回集合中所有元素。例如：smembers myset

sismember: 判断元素是否在集合中。例如：sismember myset &quot;element1&quot;

scard: 返回集合中元素的数量。例如：scard myset

srem: 从集合中删除元素。例如：srem myset &quot;element1&quot;

spop: 从集合中弹出一个随机元素。例如：spop myset

sunion: 返回多个集合的并集。例如：sunion set1 set2 set3

sdiff: 返回多个集合的差集。例如：sdiff set1 set2 set3

sinter: 返回多个集合的交集。例如：sinter set1 set2 set3

srandmember: 随机返回集合中的一个元素。例如：srandmember myset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hash" tabindex="-1"><a class="header-anchor" href="#hash" aria-hidden="true">#</a> Hash</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hset key field value : 在key对应的hash中设置field对应的value。如果key不存在，则新建一个。
例如:hset user:1 name &quot;tom&quot;
hget key field : 获取key对应的hash中field对应的value。
例如: hget user:1 name
hgetall key : 获取key对应的hash中所有的键值对。
例如: hgetall user:1
hdel key field [field ...] : 删除key对应的hash中的一个或多个field。
例如: hdel user:1 name
hlen key : 获取key对应的hash中field的数量。
例如: hlen user:1
hexists key field : 检查key对应的hash中是否存在field。
例如: hexists user:1 name
hkeys key : 获取key对应的hash中所有的field。
例如: hkeys user:1
hvals key : 获取key对应的hash中所有的value。
例如: hvals user:1
这里是一些基本的Redis Hash命令。实际上还有许多其他的命令可供使用，如hincrby、hmset、hmget等。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sorted-sets" tabindex="-1"><a class="header-anchor" href="#sorted-sets" aria-hidden="true">#</a> Sorted sets</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zadd: 向有序集合中添加元素，支持指定分数。例如：zadd mysortedset 1 &quot;element1&quot; 2 &quot;element2&quot;

zrange: 返回有序集合中指定范围的元素。例如：zrange mysortedset 0 -1

zrangebyscore: 返回有序集合中指定分数范围的元素。例如：zrangebyscore mysortedset 1 2

zrank: 返回有序集合中指定元素的排名。例如：zrank mysortedset &quot;element1&quot;

zrem: 从有序集合中删除元素。例如：zrem mysortedset &quot;element1&quot;

zcount: 返回有序集合中指定分数范围的元素数量。例如：zcount mysortedset 1 2

zincrby: 对有序集合中指定元素的分数进行增加/减少操作。例如：zincrby mysortedset 2 &quot;element1&quot;

zcard: 返回有序集合中元素的数量。例如：zcard mysortedset

zunionstore: 计算多个有序集合的并集，并将结果存储到新的有序集合中。例如：zunionstore new_sortedset 2 sortedset1 sortedset2

zinterstore: 计算多个有序集合的交集，并将结果存储到新的有序集合中。例如：zinterstore new_sortedset 2 sortedset1 sortedset2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="序列化" tabindex="-1"><a class="header-anchor" href="#序列化" aria-hidden="true">#</a> 序列化</h2><ul><li>Redis是一种内存数据库，为了更有效地使用内存，它需要对存储的数据进行序列化，使数据占用的空间更小。序列化是指将数据结构转换为字节流的过程。</li><li>Redis支持多种序列化格式，如二进制协议（Redis默认使用的序列化格式）、JSON、MessagePack等。二进制协议是Redis自定义的序列化格式，它可以最大程度地减少数据占用的空间。JSON和MessagePack是常用的序列化格式，它们可以方便地与其他语言和系统进行交互。</li></ul><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><p>stu.java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> stu <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> id<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>RedisConfig.java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RedisConfig</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token comment">//配置redisTemplate</span>
    <span class="token comment">// 默认情况下的模板只能支持 RedisTemplate&lt;String,String&gt;，</span>
    <span class="token comment">// 只能存入字符串，很多时候，我们需要自定义 RedisTemplate ，设置序列化器</span>
    <span class="token keyword">public</span> <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> <span class="token function">redisTemplate</span><span class="token punctuation">(</span><span class="token class-name">RedisConnectionFactory</span> factory<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">RedisTemplate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> template <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RedisTemplate</span> <span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">setConnectionFactory</span><span class="token punctuation">(</span>factory<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Jackson2JsonRedisSerializer</span> jackson2JsonRedisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jackson2JsonRedisSerializer</span><span class="token punctuation">(</span><span class="token class-name">Object</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">ObjectMapper</span> om <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ObjectMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        om<span class="token punctuation">.</span><span class="token function">setVisibility</span><span class="token punctuation">(</span><span class="token class-name">PropertyAccessor</span><span class="token punctuation">.</span><span class="token constant">ALL</span><span class="token punctuation">,</span> <span class="token class-name">JsonAutoDetect<span class="token punctuation">.</span>Visibility</span><span class="token punctuation">.</span><span class="token constant">ANY</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        om<span class="token punctuation">.</span><span class="token function">enableDefaultTyping</span><span class="token punctuation">(</span><span class="token class-name">ObjectMapper<span class="token punctuation">.</span>DefaultTyping</span><span class="token punctuation">.</span><span class="token constant">NON_FINAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        jackson2JsonRedisSerializer<span class="token punctuation">.</span><span class="token function">setObjectMapper</span><span class="token punctuation">(</span>om<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">StringRedisSerializer</span> stringRedisSerializer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StringRedisSerializer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// key采用String的序列化方式</span>
        template<span class="token punctuation">.</span><span class="token function">setKeySerializer</span><span class="token punctuation">(</span>stringRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span>stringRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// hash的key也采用String的序列化方式</span>
        template<span class="token punctuation">.</span><span class="token function">setHashKeySerializer</span><span class="token punctuation">(</span>stringRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// value序列化方式采用jackson</span>
        template<span class="token punctuation">.</span><span class="token function">setValueSerializer</span><span class="token punctuation">(</span>jackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// hash的value序列化方式采用jackson</span>
        template<span class="token punctuation">.</span><span class="token function">setHashValueSerializer</span><span class="token punctuation">(</span>jackson2JsonRedisSerializer<span class="token punctuation">)</span><span class="token punctuation">;</span>
        template<span class="token punctuation">.</span><span class="token function">afterPropertiesSet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> template<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">RedisTemplate</span> redisTemplate<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">void</span> <span class="token function">contextLoads</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        stu stu <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token function">stu</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;liming&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;hh&quot;</span><span class="token punctuation">,</span>stu<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>redisTemplate<span class="token punctuation">.</span><span class="token function">opsForValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;hh&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="持久化" tabindex="-1"><a class="header-anchor" href="#持久化" aria-hidden="true">#</a> 持久化</h2><h3 id="rdb" tabindex="-1"><a class="header-anchor" href="#rdb" aria-hidden="true">#</a> RDB</h3><blockquote><p>RDB 是 Redis Database 文件的缩写，它是 Redis 的默认数据持久化方式。RDB 文件是在指定的时间间隔内（通常是每几秒或几分钟）自动生成的快照文件。这种方式可以在损失一定数据的情况下更快地恢复数据库。</p></blockquote><h4 id="触发" tabindex="-1"><a class="header-anchor" href="#触发" aria-hidden="true">#</a> 触发</h4><ul><li>保存配置： -- save：只管保存，其他不管，全部阻塞。 -- bgsave：Redis 会在后台异步进行快照操作，快照同时还可以响应客户端请求。 -- lastsave：获取最后一次成功执行快照的时间。</li><li>执行 flushall 命令，也会产生 dump.rdb 文件，但里面是空的，无意义 。</li><li>退出的时候也会产生 dump.rdb 文件。</li></ul><h3 id="aof" tabindex="-1"><a class="header-anchor" href="#aof" aria-hidden="true">#</a> AOF</h3>`,32),m=i(`<blockquote><p>AOF 是 Append-Only File 的缩写，它是 Redis 的另一种数据持久化方式。AOF 文件是将 Redis 所有写操作命令追加到文件的过程，因此可以保证数据的完整性。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 是否以append only模式作为持久化方式，默认使用的是rdb方式持久化，这种方式在许多应用中已经足够用了
appendonly no 
# appendfilename AOF 文件名称
appendfilename &quot;appendonly.aof&quot; 
# appendfsync aof持久化策略的配置：
#     no：不执行fsync，由操作系统保证数据同步到磁盘，速度最快。
#     always：每次写入都执行fsync，以保证数据同步到磁盘。
#     everysec：每秒执行一次fsync，可能会导致丢失这1s数据。
appendfsync everysec 
# 重写时是否可以运用Appendfsync，用默认no即可，保证数据安全性
No-appendfsync-on-rewrite 
# 设置重写的基准值
Auto-aof-rewrite-min-size 
# 设置重写的基准值
Auto-aof-rewrite-percentage
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function k(b,h){const t=n("ExternalLinkIcon"),l=n("font");return d(),p("div",null,[s("p",null,[s("a",r,[a("Redis详细解释"),e(t)])]),v,e(l,{color:"gray"},{default:o(()=>[a("很少使用")]),_:1}),m])}const f=c(u,[["render",k],["__file","redis.html.vue"]]);export{f as default};
