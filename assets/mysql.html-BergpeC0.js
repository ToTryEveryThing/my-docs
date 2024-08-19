import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as r,c,a as e,d as i,b as d,e as a}from"./app-BgTGAdND.js";const t={},u=e("h1",{id:"mysql",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mysql","aria-hidden":"true"},"#"),i(" Mysql")],-1),o={href:"https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=4&vd_source=f8821730ff8a13ec89104c8629e6d42b",target:"_blank",rel:"noopener noreferrer"},m=a(`<p><code>utf8mb4</code>: 编码格式</p><h2 id="基础语句" tabindex="-1"><a class="header-anchor" href="#基础语句" aria-hidden="true">#</a> 基础语句</h2><h4 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> insert</h4><ul><li>给指定字段添加值</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>insert into 表名 (字段1，字段2..) values(值1，值2..);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>给指定字段批量添加值</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>insert into 表名 (字段1，字段2..) values(值1，值2..),(值1，值2..),(值1，值2..);
insert into 表名  values(值1，值2..),(值1，值2..),(值1，值2..);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>给全部字段添加值</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>insert into 表名  values(值1，值2..);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>update 表名 set 字段1=值1，字段2=值2... [where 条件];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>不写条件 更新所有</p></blockquote><h4 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> delete</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>delete from 表名 [where 条件];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>delete from 表名 删除所有数据</p></blockquote><h3 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h3><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select [字段列表] from [表名列表] where [条件列表] group by [分组字段列表] having [分组后条件列表] order by [排序字段列表] limit [分页]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>条件查询(where)、聚合查询(count,max,min,avg,sum)、分组查询(group by)、排序查询(order by)、分页查询(limit)</p></blockquote><h4 id="基本查询" tabindex="-1"><a class="header-anchor" href="#基本查询" aria-hidden="true">#</a> 基本查询</h4><ul><li>起别名</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select name as &#39;姓名&#39; from 表名;    或者  select name &#39;姓名&#39; from 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>不重复</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select distinct name from 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h4><table><thead><tr><th>比较运算符</th><th>功能</th></tr></thead><tbody><tr><td>&gt;</td><td></td></tr><tr><td>&gt;=</td><td></td></tr><tr><td>&lt;</td><td></td></tr><tr><td>&lt;=</td><td></td></tr><tr><td>=</td><td></td></tr><tr><td>&lt;&gt;或!=</td><td>不等于</td></tr><tr><td>between...and...</td><td>某个范围之内 []</td></tr><tr><td>in(..)</td><td>列表中的值，多选一</td></tr><tr><td>like 占位符</td><td>模糊匹配（_单个字符、%任意个字符）</td></tr><tr><td>is null</td><td>为空</td></tr><tr><td>and 或 &amp;&amp;</td><td>并且</td></tr><tr><td>or或 ||</td><td>或者</td></tr><tr><td>not 或 ！</td><td>非</td></tr></tbody></table><h4 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数" aria-hidden="true">#</a> 聚合函数</h4><blockquote><p>null 不参与计算</p></blockquote><ul><li><p>sum</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select sum(*) from 表名; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>avg</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select agv(age) from 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>max | min</p><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select max(age) from 表名;   select min(age) from 表名; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h4 id="分组查询" tabindex="-1"><a class="header-anchor" href="#分组查询" aria-hidden="true">#</a> 分组查询</h4><blockquote><p>分组后的列只有待分组的字段和聚合函数</p></blockquote><figure><img src="https://cdn.beink.cn/study/bwSxT-4sdgkRCKhbCV1hH.png" alt="study" tabindex="0" loading="lazy"><figcaption>study</figcaption></figure><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select sex,count(sex) from s group by sex having avg(age) &gt; 50;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="排序查询" tabindex="-1"><a class="header-anchor" href="#排序查询" aria-hidden="true">#</a> 排序查询</h4><ul><li>ASC 升序（默认）</li><li>DESC 降序</li></ul><blockquote><p>多字段排序，先按第一个排序，然后相同的按照第二个方式排序</p></blockquote><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select * from s order by age asc , id desc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select * from 表名 limit 起始索引，查询记录数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>起始索引从0开始， 起始索引 = （查询页码-1）* 每页记录数</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select * from s limit 0,10;   select * from s limit 10,10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><ul><li>字符串函数</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- concat
select concat(&quot;hello&quot;,&quot;world&quot;);
-- lower
select lower(&quot;HELLO&quot;);
-- upper
select upper(&quot;hello&quot;);
-- trim   去除首尾空格
-- substring  截取

update 表名 set name = upper(name) where id = 51;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>数值函数</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- ceil 向上取整
-- floor 向下取整
-- mod(x,y) 返回x/y的模
-- rand()  返回0-1的随机小数
-- round(x,y)  求参数x的四舍五入的值  保留y位小数  
select round(5.456871865468,3); --&gt;  5.457   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>日期函数</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>-- curdate()  返回当前日期
-- curtime()  返回当前时间
-- now()      返回当前日期和时间
-- year(date) 获得指定year的年
-- month(date)
-- day(date)
-- date_add()  返回一个日期加上某个时间后的日期
select date_add(now(),interval 110 day);
select date_add(now(),interval 110 year);

-- datediff(date1,date2)   时间间隔
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="约束" tabindex="-1"><a class="header-anchor" href="#约束" aria-hidden="true">#</a> 约束</h2><ul><li>default: 默认约束</li><li>not null: 非空约束</li><li>unique: 唯一约束</li><li>primary key: 主键约束</li><li>foreign key: 外键约束</li></ul><h4 id="外键约束" tabindex="-1"><a class="header-anchor" href="#外键约束" aria-hidden="true">#</a> 外键约束</h4><ul><li>命令</li></ul><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>b为父表   s为子表   s表的字段(b_id)外键到b表的（id） 
alter table s add constraint fk_s_b_id foreign key (b_id) references b(id);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除/更新行为 <ul><li>RESTRICT：父表数据被<code>删除/更新</code>，会阻止<code>删除/更新</code>。默认就是这一项。</li><li>NO ACTION：在MySQL中，同RESTRICT。</li><li>CASCADE：级联<code>删除/更新</code>。</li><li>SET NULL：父表数据被<code>删除/更新</code>，子表数据会设置为NULL。</li></ul></li></ul><h2 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h2><blockquote><p>笛卡尔积：两个表的所有组合 s(5个字段)，b(3个字段) s X b = 15</p><p>可以使用两个表之间的联系去除无用数据</p></blockquote><ul><li>内连接</li></ul><blockquote><p>相当与查询A,B交集部分数据</p></blockquote><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select s.name,b.name from s,b  where s.b_id = b.id;               隐式内连接
select s.name,b.name from s inner join b on s.b_id = b.id;      显式内连接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>左外连接</li></ul><blockquote><p>查询左表全部数据，以及两张表交集部分</p></blockquote><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select s.*,b.name from s left outer join b on s.b_id = b.id;
select s.*,b.name from s left join b on s.b_id = b.id;
s表的全部 以及b表的name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>右外连接</li></ul><blockquote><p>查询右表。。。。</p></blockquote><ul><li>自连接</li></ul><blockquote><p>当前表与自身的连接查询，子链接必须使用表别名</p><p>select 字段列表 from 表A 别名a join 表B 别名b on 条件 ...</p></blockquote><ul><li>联合查询</li></ul><blockquote><p>比如要求：将年龄低于50和性别为’男‘的人 全部查出来 就要用到<code>联合查询</code>了</p><p>列数必须保持一致，字段类型也一致。</p></blockquote><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>select * from s where age &lt; 50 union all select * from s where sex = &#39;男&#39; ;    不去重
select * from s where age &lt; 50 union select * from s where sex = &#39;男&#39; ;    去重
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>子查询</li></ul>`,69),v={href:"https://www.bilibili.com/video/BV1Kr4y1i7ru?p=43&vd_source=f8821730ff8a13ec89104c8629e6d42b",target:"_blank",rel:"noopener noreferrer"},b=a(`<h2 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h2><blockquote><p>MySQL的索引类型包括FULLTEXT、NORMAL（或称为BTREE）、SPATIAL和UNIQUE。它们具有不同的特点和适用场景：</p></blockquote><ol><li>FULLTEXT索引：用于全文搜索。它适用于对文本内容进行关键词搜索的场景，比如文章标题或描述的搜索。FULLTEXT索引使用特定的搜索算法来提高搜索性能，并支持关键词匹配和排名。它只能应用于MyISAM和InnoDB存储引擎。</li><li>NORMAL索引（BTREE索引）：是最常见的索引类型，也是默认的索引类型。它使用B树数据结构来加速对数据的查找。NORMAL索引适用于一般的数据查询，可以加速等值查询、范围查询和排序操作。它可以应用于大多数的数据类型和存储引擎。</li><li>SPATIAL索引：用于地理数据的空间索引。它支持对空间数据进行高效的地理位置查询，如点、线、多边形等。SPATIAL索引适用于处理地理信息系统（GIS）相关的数据。它只能应用于支持空间数据类型的存储引擎，如MyISAM和InnoDB。</li><li>UNIQUE索引：用于强制保证某列或某组列的唯一性。它确保索引列的值在表中是唯一的，不允许重复值。UNIQUE索引适用于需要唯一性约束的列，比如用户名或身份证号。它可以应用于大多数的数据类型和存储引擎。</li></ol><p><code>当对某一字段增加索引后,会减少查询耗时，空间换时间。</code></p><h2 id="视图" tabindex="-1"><a class="header-anchor" href="#视图" aria-hidden="true">#</a> 视图</h2><p>​ 视图是一个虚拟表，其内容由查询定义。同真实的表一样，视图包含一系列带有名称的列和行数据。但是，<code>数据库中只存放了视图的定义，而并没有存放视图中的数据，这些数据存放在原来的表中</code>。使用视图查询数据时，数据库系统会从原来的表中取出对应的数据。因此，视图中的数据是依赖于原来的表中的数据的。一旦表中的数据发生改变，显示在视图中的数据也会发生改变。同样对视图的更新，会影响到原来表的数据。</p><pre><code>- 使复杂的sql简单化
- 只能修改查询暴漏出来的字段
</code></pre><blockquote><p>sql 的语句中是无法区分是 表格还是 视图的。视图名和表名无法重复。</p></blockquote><p>[com] 视图名</p><h4 id="创建视图" tabindex="-1"><a class="header-anchor" href="#创建视图" aria-hidden="true">#</a> 创建视图</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>create view com  as select * from js_compet;

create view com  as select id,cc_name from js_compet where cc_name like &#39;%2%&#39;;
# 重命名
create view ali_com(iddd,ccname)  as  select id,cc_name from js_compet where cc_name like &#39;%2%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改视图" tabindex="-1"><a class="header-anchor" href="#修改视图" aria-hidden="true">#</a> 修改视图</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>alert view com  as select * from js_compet;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除视图" tabindex="-1"><a class="header-anchor" href="#删除视图" aria-hidden="true">#</a> 删除视图</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>drop view if exists com; #只会删除视图 ， 不影响表格
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看" tabindex="-1"><a class="header-anchor" href="#查看" aria-hidden="true">#</a> 查看</h4><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>desc com;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h4 id="查看curd执行频率" tabindex="-1"><a class="header-anchor" href="#查看curd执行频率" aria-hidden="true">#</a> 查看curd执行频率</h4><blockquote><p>show global status like &#39;Com_______&#39;;</p></blockquote><h4 id="慢查询日志" tabindex="-1"><a class="header-anchor" href="#慢查询日志" aria-hidden="true">#</a> 慢查询日志</h4><blockquote><p>MySQL的慢查询日志是MySQL提供的一种日志记录，它用来记录在MySQL中响应时间超过阀值的语句，具体指运行时间超过long_query_time值的SQL，则会被记录到慢查询日志中。long_query_time的默认值为 10，意思是运行10秒以上的SQL语句。</p><p>由他来查看哪些SQL超出了我们的最大忍耐时间值，比如一条sql执行超过5秒钟，我们就算慢SQL，希望能 收集超过5秒的sql，结合之前explain进行全面分析。</p></blockquote><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>SHOW VARIABLES LIKE &#39;long_query_time%&#39;;  #查询目前慢日志时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>修改配置文件my.cnf 永久生效</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[mysqld] 
slow_query_log=1 
slow_query_log_file=/var/lib/mysql/atguigu-slow.log 
long_query_time=3 
log_output=FILE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="show-profiles" tabindex="-1"><a class="header-anchor" href="#show-profiles" aria-hidden="true">#</a> show profiles</h4><blockquote><p>用来查看sql语句性能，等其他</p></blockquote><div class="language-mysql line-numbers-mode" data-ext="mysql"><pre class="language-mysql"><code>mysql&gt; select @@have_profiling;  # 是否支持
+------------------+
| @@have_profiling |
+------------------+
| YES              |
+------------------+
1 row in set (0.04 sec)

mysql&gt; select @@profiling;   #是否开启
+-------------+
| @@profiling |
+-------------+
|           0 |
+-------------+
1 row in set (0.04 sec)

mysql&gt; set profiling=1;   ## 开启
Query OK, 0 rows affected (0.00 sec)

mysql&gt; select @@profiling;
+-------------+
| @@profiling |
+-------------+
|           1 |
+-------------+
mysql&gt; show profiles;   ##查看所有的sql情况
+----------+------------+--------------------+
| Query_ID | Duration   | Query              |
+----------+------------+--------------------+
|        1 | 0.00033425 | select @@profiling |
|        2 | 0.00012275 | show profiling     |
|        3 | 0.00013375 | select * from s    |
|        4 | 0.00026325 | use text           |
|        5 | 0.00077300 | select * from s    |
+----------+------------+--------------------+

show profile for query	query_id;  #查看某个具体sql
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function h(g,p){const l=n("ExternalLinkIcon");return r(),c("div",null,[u,e("p",null,[e("a",o,[i("哔哩哔哩_bilibili"),d(l)])]),m,e("blockquote",null,[e("p",null,[e("a",v,[i("43. 基础-多表查询-子查询介绍_哔哩哔哩_bilibili"),d(l)])])]),b])}const f=s(t,[["render",h],["__file","mysql.html.vue"]]);export{f as default};
