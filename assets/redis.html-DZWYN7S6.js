import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as d,c as p,a as n,d as s,b as e,w as o,e as a}from"./app-OfohqbRX.js";const u={},r={href:"https://www.bilibili.com/video/BV1Fd4y1T7pD/?spm_id_from=333.880.my_history.page.click&vd_source=f8821730ff8a13ec89104c8629e6d42b",target:"_blank",rel:"noopener noreferrer"},v=a(`<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sudo apt update
sudo apt install redis-server
redis-cli 启动命令
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bdsize 当前数据库大小
select 数据库切换
flushdb 清空当前数据库
flushall 清空所有数据库
type name  查看key的类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五大数据类型" tabindex="-1"><a class="header-anchor" href="#五大数据类型" aria-hidden="true">#</a> 五大数据类型</h2><ul><li>Redsi-Key</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>keys *     打印所有的key
set name hhh   设置k-v(&quot;name&quot;,&quot;hh&quot;)
get name   打印name的value
exists name  判断key是否存在
move name  1  将name移入到数据库1中
expire name 5  设置name 5s 过期
ttl name 查看name剩余过期时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>String</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>append name  &quot;world&quot;     #value后面增加world
strlen name   #value的长度
incr  age    #实现自增
incrby age  20  #增加20
decr age   #实现自减
dectby age 20   #减少20
getrange name 0 3   #串的截取
mget mset  #批量set或get
setnx  #如果存在则不创建
getset  #找不到就创建 找到就设置
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>lpush list hello   #往list中加入hello
lrange list 0 -1   #打印所有
lpop/rpop list     #删除左右头部
lindex list 1      # 打印下标1的值
llen list          # 长度
lrem list 1 hello      # 删除一个hello
ltrim list 2 4       # 截取 剩余2-4
lset list 0 hello    # 指定下标值替换为hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>set</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sadd: 向集合中添加元素。例如：sadd myset &quot;element1&quot; &quot;element2&quot;

smembers: 返回集合中所有元素。例如：smembers myset

sismember: 判断元素是否在集合中。例如：sismember myset &quot;element1&quot;

scard: 返回集合中元素的数量。例如：scard myset

srem: 从集合中删除元素。例如：srem myset &quot;element1&quot;

spop: 从集合中弹出一个随机元素。例如：spop myset

sunion: 返回多个集合的并集。例如：sunion set1 set2 set3

sdiff: 返回多个集合的差集。例如：sdiff set1 set2 set3

sinter: 返回多个集合的交集。例如：sinter set1 set2 set3

srandmember: 随机返回集合中的一个元素。例如：srandmember myset
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Hash</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hset key field value : 在key对应的hash中设置field对应的value。如果key不存在，则新建一个。
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Sorted sets</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zadd: 向有序集合中添加元素，支持指定分数。例如：zadd mysortedset 1 &quot;element1&quot; 2 &quot;element2&quot;

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

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="持久化" tabindex="-1"><a class="header-anchor" href="#持久化" aria-hidden="true">#</a> 持久化</h2><h3 id="rdb" tabindex="-1"><a class="header-anchor" href="#rdb" aria-hidden="true">#</a> RDB</h3><blockquote><p>RDB 是 Redis Database 文件的缩写，它是 Redis 的默认数据持久化方式。RDB 文件是在指定的时间间隔内（通常是每几秒或几分钟）自动生成的快照文件。这种方式可以在损失一定数据的情况下更快地恢复数据库。</p></blockquote><h5 id="触发" tabindex="-1"><a class="header-anchor" href="#触发" aria-hidden="true">#</a> 触发</h5><ul><li><p>保存配置：</p><ul><li>save：只管保存，其他不管，全部阻塞。</li></ul><blockquote><p>内部触发机制</p><p>900s 内有一条数据被修改 则执行bgsave</p><p>save 900 1<br> save 300 10<br> save 60 10000</p><p>save &quot;&quot; # 禁用RDB</p></blockquote><ul><li>bgsave：Redis 会在后台异步进行快照操作，快照同时还可以响应客户端请求。</li><li>lastsave：获取最后一次成功执行快照的时间。</li></ul></li><li><p>执行 flushall 命令，也会产生 dump.rdb 文件，但里面是空的，无意义 。</p></li><li><p>退出的时候也会产生 dump.rdb 文件。</p></li></ul><h3 id="aof" tabindex="-1"><a class="header-anchor" href="#aof" aria-hidden="true">#</a> AOF</h3>`,32),m=a(`<blockquote><p>AOF 是 Append-Only File 的缩写，它是 Redis 的另一种数据持久化方式。AOF 文件是将 Redis 所有写操作命令追加到文件的过程，因此可以保证数据的完整性。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 是否以append only模式作为持久化方式，默认使用的是rdb方式持久化，这种方式在许多应用中已经足够用了
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

## 触发阈值自动重写aof
# 设置重写的基准值
Auto-aof-rewrite-min-size  100
# 设置重写的基准值
Auto-aof-rewrite-percentage 64mb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>由于记录中的很多操作没有意义， 可以执行 bgrewriteaof</p><p>可以让aof文件执行重写功能，用最少的命令达到相同的效果</p></div><h2 id="主从" tabindex="-1"><a class="header-anchor" href="#主从" aria-hidden="true">#</a> 主从</h2>`,4),b={href:"https://www.bilibili.com/video/BV1cr4y1671t?p=101&spm_id_from=pageDriver&vd_source=f8821730ff8a13ec89104c8629e6d42b",target:"_blank",rel:"noopener noreferrer"},k=a(`<h3 id="开启" tabindex="-1"><a class="header-anchor" href="#开启" aria-hidden="true">#</a> 开启</h3><blockquote><p>先配置 三个不同的redis.conf 用来启动不同的端口</p><p>默认 从机只读</p></blockquote><ul><li><p>修改配置文件（永久生效）</p><ul><li>下redis.conf 添加一行配置 slaveof ip port</li></ul></li><li><p>使用redis-cli 客户端连接到redis服务，执行slaveof(重启后失效)</p><p><code>slaveof ip port </code></p></li></ul><h3 id="哨兵" tabindex="-1"><a class="header-anchor" href="#哨兵" aria-hidden="true">#</a> 哨兵</h3><blockquote><p>用来实现主从集群的自动故障恢复</p><p>采用心跳机制 每个1s就会向每个实例发送ping命令</p><ul><li>主观下线 如果某实例未在规定时间内 返回相应 ，则主观认为该实例下线。</li><li>客观下线 好多个哨兵都认为该实例下线，则该实例客观下线</li></ul></blockquote><ul><li>搭建sentinel集群</li></ul><p>需要多个sentinel</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Redis Sentinel configuration file
port 27003
# 设置 Sentinel 进程的ID，默认为 sentinel，默认情况下无需修改
#sentinel myid 1

# 配置监控的主节点信息
# 指定主节点的名称、IP地址和端口
sentinel monitor mymaster 127.0.0.1 7001 2

# 设置 Sentinel 进程和主节点失去联系后，判断主节点下线的时间阈值（单位：毫秒）
sentinel down-after-milliseconds mymaster 5000

# 设置 Sentinel 进行故障转移的超时时间（单位：毫秒）
sentinel failover-timeout mymaster 10000

# 配置日志文件路径和级别
# 默认情况下，日志将输出到控制台
# 可以将日志输出到指定的文件，配置 log-file 参数
# 可以设置日志级别，配置 loglevel 参数，可选值：debug、verbose、notice、warning
#sentinel loglevel notice
# sentinel logfile &quot;sentinel.log&quot;

# 设置 Sentinel 进程的认证密码（如果有密码）
# 如果 Redis 主节点设置了密码，则需要配置 sentinel auth-pass 指令来提供密码
# sentinel auth-pass mymaster password

# 配置其他 Sentinel 进程信息
# 可以添加更多的 Sentinel 进程信息，用于构建 Sentinel 的多节点部署
# sentinel monitor othermaster 127.0.0.1 6380 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>启动</p><blockquote><p>redis-sentinel s1/sentinel.conf</p></blockquote></li></ul>`,9);function h(g,f){const i=l("ExternalLinkIcon"),t=l("font");return d(),p("div",null,[n("p",null,[n("a",r,[s("Redis详细解释"),e(i)])]),v,e(t,{color:"gray"},{default:o(()=>[s("很少使用")]),_:1}),m,n("p",null,[n("a",b,[s("高级篇-分布式缓存-06-Redis主从-主从集群结构_哔哩哔哩_bilibili"),e(i)])]),k])}const q=c(u,[["render",h],["__file","redis.html.vue"]]);export{q as default};
