<template><div><h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> Mysql</h1>
<p><a href="https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=4&amp;vd_source=f8821730ff8a13ec89104c8629e6d42b" target="_blank" rel="noopener noreferrer">哔哩哔哩_bilibili<ExternalLinkIcon/></a></p>
<p><code v-pre>utf8mb4</code>: 编码格式</p>
<h4 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> insert</h4>
<ul>
<li>给指定字段添加值</li>
</ul>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>insert into 表名 (字段1，字段2..) values(值1，值2..);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>给指定字段批量添加值</li>
</ul>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>insert into 表名 (字段1，字段2..) values(值1，值2..),(值1，值2..),(值1，值2..);
insert into 表名  values(值1，值2..),(值1，值2..),(值1，值2..);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>给全部字段添加值</li>
</ul>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>insert into 表名  values(值1，值2..);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>update 表名 set 字段1=值1，字段2=值2... [where 条件];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>不写条件 更新所有</p>
</blockquote>
<h4 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> delete</h4>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>delete from 表名 [where 条件];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>delete from 表名   删除所有数据</p>
</blockquote>
<h2 id="select" tabindex="-1"><a class="header-anchor" href="#select" aria-hidden="true">#</a> select</h2>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>select [字段列表] from [表名列表] where [条件列表] group by [分组字段列表] having [分组后条件列表] order by [排序字段列表] limit [分页]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote>
<p>条件查询(where)、聚合查询(count,max,min,avg,sum)、分组查询(group by)、排序查询(order by)、分页查询(limit)</p>
</blockquote>
<h3 id="基本查询" tabindex="-1"><a class="header-anchor" href="#基本查询" aria-hidden="true">#</a> 基本查询</h3>
<ul>
<li>起别名</li>
</ul>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>select name as '姓名' from 表名;    或者  select name '姓名' from 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>不重复</li>
</ul>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>select distinct name from 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h3>
<table>
<thead>
<tr>
<th>比较运算符</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>&gt;</td>
<td></td>
</tr>
<tr>
<td>&gt;=</td>
<td></td>
</tr>
<tr>
<td>&lt;</td>
<td></td>
</tr>
<tr>
<td>&lt;=</td>
<td></td>
</tr>
<tr>
<td>=</td>
<td></td>
</tr>
<tr>
<td>&lt;&gt;或!=</td>
<td>不等于</td>
</tr>
<tr>
<td>between...and...</td>
<td>某个范围之内   []</td>
</tr>
<tr>
<td>in(..)</td>
<td>列表中的值，多选一</td>
</tr>
<tr>
<td>like 占位符</td>
<td>模糊匹配（_单个字符、%任意个字符）</td>
</tr>
<tr>
<td>is null</td>
<td>为空</td>
</tr>
<tr>
<td>and 或 &amp;&amp;</td>
<td>并且</td>
</tr>
<tr>
<td>or或 ||</td>
<td>或者</td>
</tr>
<tr>
<td>not 或 ！</td>
<td>非</td>
</tr>
</tbody>
</table>
<h3 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数" aria-hidden="true">#</a> 聚合函数</h3>
<blockquote>
<p>null 不参与计算</p>
</blockquote>
<ul>
<li>
<p>sum</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>select sum(*) from 表名; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>avg</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>select agv(age) from 表名;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
<li>
<p>max | min</p>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>select max(age) from 表名;   select min(age) from 表名; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="分组查询" tabindex="-1"><a class="header-anchor" href="#分组查询" aria-hidden="true">#</a> 分组查询</h3>
<blockquote>
<p>分组后的列只有待分组的字段和聚合函数</p>
</blockquote>
<figure><img src="https://images.beink.cn/study/bwSxT-4sdgkRCKhbCV1hH.png" alt="study" tabindex="0" loading="lazy"><figcaption>study</figcaption></figure>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>select sex,count(sex) from s group by sex having avg(age) &gt; 50;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="排序查询" tabindex="-1"><a class="header-anchor" href="#排序查询" aria-hidden="true">#</a> 排序查询</h3>
<ul>
<li>ASC	升序（默认）</li>
<li>DESC  降序</li>
</ul>
<blockquote>
<p>多字段排序，先按第一个排序，然后相同的按照第二个方式排序</p>
</blockquote>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>select * from s order by age asc , id desc;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h3>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>select * from 表名 limit 起始索引，查询记录数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul>
<li>起始索引从0开始， 起始索引 = （查询页码-1）* 每页记录数</li>
</ul>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>select * from s limit 0,10;   select * from s limit 10,10;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr>
<h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2>
<h3 id="字符串函数" tabindex="-1"><a class="header-anchor" href="#字符串函数" aria-hidden="true">#</a> 字符串函数</h3>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>-- concat
select concat(&quot;hello&quot;,&quot;world&quot;);
-- lower
select lower(&quot;HELLO&quot;);
-- upper
select upper(&quot;hello&quot;);
-- trim   去除首尾空格
-- substring  截取

update 表名 set name = upper(name) where id = 51;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数值函数" tabindex="-1"><a class="header-anchor" href="#数值函数" aria-hidden="true">#</a> 数值函数</h3>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>-- ceil 向上取整
-- floor 向下取整
-- mod(x,y) 返回x/y的模
-- rand()  返回0-1的随机小数
-- round(x,y)  求参数x的四舍五入的值  保留y位小数  
select round(5.456871865468,3); --&gt;  5.457   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日期函数" tabindex="-1"><a class="header-anchor" href="#日期函数" aria-hidden="true">#</a> 日期函数</h3>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>-- curdate()  返回当前日期
-- curtime()  返回当前时间
-- now()      返回当前日期和时间
-- year(date) 获得指定year的年
-- month(date)
-- day(date)
-- date_add()  返回一个日期加上某个时间后的日期
select date_add(now(),interval 110 day);
select date_add(now(),interval 110 year);

-- datediff(date1,date2)   时间间隔
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="约束" tabindex="-1"><a class="header-anchor" href="#约束" aria-hidden="true">#</a> 约束</h2>
<ul>
<li>default: 默认约束</li>
<li>not null: 非空约束</li>
<li>unique: 唯一约束</li>
<li>primary key: 主键约束</li>
<li>foreign key: 外键约束</li>
</ul>
<h3 id="外键约束" tabindex="-1"><a class="header-anchor" href="#外键约束" aria-hidden="true">#</a> 外键约束</h3>
<ul>
<li>命令</li>
</ul>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>b为父表   s为子表   s表的字段(b_id)外键到b表的（id） 
alter table s add constraint fk_s_b_id foreign key (b_id) references b(id);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>删除/更新行为
<ul>
<li>RESTRICT：父表数据被删除，会阻止删除。默认就是这一项。</li>
<li>NO ACTION：在MySQL中，同RESTRICT。</li>
<li>CASCADE：级联删除。</li>
<li>SET NULL：父表数据被删除，子表数据会设置为NULL。</li>
</ul>
</li>
</ul>
<hr>
<h2 id="多表查询" tabindex="-1"><a class="header-anchor" href="#多表查询" aria-hidden="true">#</a> 多表查询</h2>
<blockquote>
<p>笛卡尔积：两个表的所有组合  s(5个字段)，b(3个字段)    s X b  = 15</p>
<p>可以使用两个表之间的联系去除无用数据</p>
</blockquote>
<h3 id="内连接" tabindex="-1"><a class="header-anchor" href="#内连接" aria-hidden="true">#</a> 内连接</h3>
<blockquote>
<p>相当与查询A,B交集部分数据</p>
</blockquote>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>select s.name,b.name from s,b  where s.b_id = b.id;               隐式内连接
select s.name,b.name from s inner join b on s.b_id = b.id;		  显式内连接
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="左外连接" tabindex="-1"><a class="header-anchor" href="#左外连接" aria-hidden="true">#</a> 左外连接</h3>
<blockquote>
<p>查询左表全部数据，以及两张表交集部分</p>
</blockquote>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>select s.*,b.name from s left outer join b on s.b_id = b.id;
select s.*,b.name from s left join b on s.b_id = b.id;
s表的全部 以及b表的name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="右外连接" tabindex="-1"><a class="header-anchor" href="#右外连接" aria-hidden="true">#</a> 右外连接</h3>
<blockquote>
<p>查询右表。。。。</p>
</blockquote>
<h3 id="自连接" tabindex="-1"><a class="header-anchor" href="#自连接" aria-hidden="true">#</a> 自连接</h3>
<blockquote>
<p>当前表与自身的连接查询，子链接必须使用表别名</p>
<p>select 字段列表  from 表A 别名a join 表B 别名b on 条件 ...</p>
</blockquote>
<h3 id="联合查询" tabindex="-1"><a class="header-anchor" href="#联合查询" aria-hidden="true">#</a> 联合查询</h3>
<blockquote>
<p>比如要求：将年龄低于50和性别为’男‘的人 全部查出来   就要用到<code v-pre>联合查询</code>了</p>
<p>列数必须保持一致，字段类型也一致。</p>
</blockquote>
<div class="language-mysql line-numbers-mode" data-ext="mysql"><pre v-pre class="language-mysql"><code>select * from s where age &lt; 50 union all select * from s where sex = '男' ;    不去重
select * from s where age &lt; 50 union select * from s where sex = '男' ;		去重
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="子查询" tabindex="-1"><a class="header-anchor" href="#子查询" aria-hidden="true">#</a> 子查询</h3>
<blockquote>
<p><a href="https://www.bilibili.com/video/BV1Kr4y1i7ru?p=43&amp;vd_source=f8821730ff8a13ec89104c8629e6d42b" target="_blank" rel="noopener noreferrer">43. 基础-多表查询-子查询介绍_哔哩哔哩_bilibili<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="事务" tabindex="-1"><a class="header-anchor" href="#事务" aria-hidden="true">#</a> 事务</h2>
</div></template>


