---
title: Mysql
icon: logos:mysql-icon
order: 1
description: mysql简单常用基础操作
category:
  - SSM
tag:
  - mysql
---

# Mysql

[哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=4&vd_source=f8821730ff8a13ec89104c8629e6d42b)

`utf8mb4`: 编码格式

## 基础语句

#### insert

- 给指定字段添加值

```sql
insert into 表名 (字段1，字段2..) values(值1，值2..);
```

- 给指定字段批量添加值

```sql
insert into 表名 (字段1，字段2..) values(值1，值2..),(值1，值2..),(值1，值2..);
insert into 表名  values(值1，值2..),(值1，值2..),(值1，值2..);
```

- 给全部字段添加值

```sql
insert into 表名  values(值1，值2..);
```

#### update

```sql
update 表名 set 字段1=值1，字段2=值2... [where 条件];
```

> 不写条件 更新所有

#### delete

```sql
delete from 表名 [where 条件];
```

> delete from 表名   删除所有数据

### select

```sql
select [字段列表] from [表名列表] where [条件列表] group by [分组字段列表] having [分组后条件列表] order by [排序字段列表] limit [分页]
```

> 条件查询(where)、聚合查询(count,max,min,avg,sum)、分组查询(group by)、排序查询(order by)、分页查询(limit)

#### 基本查询

- 起别名

```sql
select name as '姓名' from 表名;    或者  select name '姓名' from 表名;
```

- 不重复

```sql
select distinct name from 表名;
```

<!-- [^distinct]: 去重
[^as]: 别名 -->

#### 条件查询

| 比较运算符       | 功能                               |
| ---------------- | ---------------------------------- |
| >                |                                    |
| >=               |                                    |
| <                |                                    |
| <=               |                                    |
| =                |                                    |
| <>或!=           | 不等于                             |
| between...and... | 某个范围之内   []                  |
| in(..)           | 列表中的值，多选一                 |
| like 占位符      | 模糊匹配（_单个字符、%任意个字符） |
| is null          | 为空                               |
| and 或 &&        | 并且                               |
| or或 \|\|        | 或者                               |
| not 或 ！        | 非                                 |

#### 聚合函数

>  null 不参与计算

- sum

  ```sql
  select sum(*) from 表名; 
  ```

- avg

  ```sql
  select agv(age) from 表名;
  ```

- max | min

  ```sql
  select max(age) from 表名;   select min(age) from 表名; 
  ```

#### 分组查询

> 分组后的列只有待分组的字段和聚合函数

![study](https://cdn.beink.cn/study/bwSxT-4sdgkRCKhbCV1hH.png)



```sql
select sex,count(sex) from s group by sex having avg(age) > 50;
```

#### 排序查询

- ASC 升序（默认）
- DESC  降序

> 多字段排序，先按第一个排序，然后相同的按照第二个方式排序

```sql
select * from s order by age asc , id desc;
```

#### 分页查询

```sql
select * from 表名 limit 起始索引，查询记录数
```

- 起始索引从0开始， 起始索引 = （查询页码-1）* 每页记录数

```sql
select * from s limit 0,10;   select * from s limit 10,10;
```

## 函数

- 字符串函数

```sql
-- concat
select concat("hello","world");
-- lower
select lower("HELLO");
-- upper
select upper("hello");
-- trim   去除首尾空格
-- substring  截取

update 表名 set name = upper(name) where id = 51;
```

- 数值函数

```sql
-- ceil 向上取整
-- floor 向下取整
-- mod(x,y) 返回x/y的模
-- rand()  返回0-1的随机小数
-- round(x,y)  求参数x的四舍五入的值  保留y位小数  
select round(5.456871865468,3); -->  5.457   
```

- 日期函数

```sql
-- curdate()  返回当前日期
-- curtime()  返回当前时间
-- now()      返回当前日期和时间
-- year(date) 获得指定year的年
-- month(date)
-- day(date)
-- date_add()  返回一个日期加上某个时间后的日期
select date_add(now(),interval 110 day);
select date_add(now(),interval 110 year);

-- datediff(date1,date2)   时间间隔
```

## 约束

- default: 默认约束
- not null: 非空约束
- unique: 唯一约束
- primary key: 主键约束
- foreign key: 外键约束

#### 外键约束

- 命令

```sql
b为父表   s为子表   s表的字段(b_id)外键到b表的（id） 
alter table s add constraint fk_s_b_id foreign key (b_id) references b(id);
```

- 删除/更新行为
  - RESTRICT：父表数据被`删除/更新`，会阻止`删除/更新`。默认就是这一项。
  - NO ACTION：在MySQL中，同RESTRICT。
  - CASCADE：级联`删除/更新`。
  - SET NULL：父表数据被`删除/更新`，子表数据会设置为NULL。

## 多表查询

> 笛卡尔积：两个表的所有组合  s(5个字段)，b(3个字段)    s X b  = 15
>
> 可以使用两个表之间的联系去除无用数据

- 内连接 

> 相当与查询A,B交集部分数据

```sql
select s.name,b.name from s,b  where s.b_id = b.id;               隐式内连接
select s.name,b.name from s inner join b on s.b_id = b.id;      显式内连接
```

- 左外连接

> 查询左表全部数据，以及两张表交集部分   

```sql
select s.*,b.name from s left outer join b on s.b_id = b.id;
select s.*,b.name from s left join b on s.b_id = b.id;
s表的全部 以及b表的name
```

- 右外连接 

> 查询右表。。。。

- 自连接 

> 当前表与自身的连接查询，子链接必须使用表别名
>
> select 字段列表  from 表A 别名a join 表B 别名b on 条件 ...

- 联合查询

> 比如要求：将年龄低于50和性别为’男‘的人 全部查出来   就要用到``联合查询``了
>
> 列数必须保持一致，字段类型也一致。

```sql
select * from s where age < 50 union all select * from s where sex = '男' ;    不去重
select * from s where age < 50 union select * from s where sex = '男' ;    去重
```

- 子查询

> [43. 基础-多表查询-子查询介绍_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Kr4y1i7ru?p=43&vd_source=f8821730ff8a13ec89104c8629e6d42b)

## 索引

> MySQL的索引类型包括FULLTEXT、NORMAL（或称为BTREE）、SPATIAL和UNIQUE。它们具有不同的特点和适用场景：

1. FULLTEXT索引：用于全文搜索。它适用于对文本内容进行关键词搜索的场景，比如文章标题或描述的搜索。FULLTEXT索引使用特定的搜索算法来提高搜索性能，并支持关键词匹配和排名。它只能应用于MyISAM和InnoDB存储引擎。
2. NORMAL索引（BTREE索引）：是最常见的索引类型，也是默认的索引类型。它使用B树数据结构来加速对数据的查找。NORMAL索引适用于一般的数据查询，可以加速等值查询、范围查询和排序操作。它可以应用于大多数的数据类型和存储引擎。
3. SPATIAL索引：用于地理数据的空间索引。它支持对空间数据进行高效的地理位置查询，如点、线、多边形等。SPATIAL索引适用于处理地理信息系统（GIS）相关的数据。它只能应用于支持空间数据类型的存储引擎，如MyISAM和InnoDB。
4. UNIQUE索引：用于强制保证某列或某组列的唯一性。它确保索引列的值在表中是唯一的，不允许重复值。UNIQUE索引适用于需要唯一性约束的列，比如用户名或身份证号。它可以应用于大多数的数据类型和存储引擎。

`当对某一字段增加索引后,会减少查询耗时，空间换时间。`

## 视图

​	视图是一个虚拟表，其内容由查询定义。同真实的表一样，视图包含一系列带有名称的列和行数据。但是，`数据库中只存放了视图的定义，而并没有存放视图中的数据，这些数据存放在原来的表中`。使用视图查询数据时，数据库系统会从原来的表中取出对应的数据。因此，视图中的数据是依赖于原来的表中的数据的。一旦表中的数据发生改变，显示在视图中的数据也会发生改变。同样对视图的更新，会影响到原来表的数据。

	- 使复杂的sql简单化
	- 只能修改查询暴漏出来的字段

>sql 的语句中是无法区分是 表格还是 视图的。视图名和表名无法重复。

[com] 视图名

#### 创建视图

```sql
create view com  as select * from js_compet;

create view com  as select id,cc_name from js_compet where cc_name like '%2%';
# 重命名
create view ali_com(iddd,ccname)  as  select id,cc_name from js_compet where cc_name like '%2%';
```

#### 修改视图

```sql
alert view com  as select * from js_compet;
```

#### 删除视图

```sql
drop view if exists com; #只会删除视图 ， 不影响表格
```

#### 查看

```sql
desc com;
```

| 特点      | 存储函数(Function)     | 存储过程(Procedure)           |
| ------- | ------------------ | ------------------------- |
| 返回值     | 必须返回单一值            | 可返回多个结果或无返回值              |
| 用途      | 通常用于计算、查询          | 通常用于执行复杂业务逻辑、批量处理         |
| 是否能修改数据 | 只能只读查询，不能修改数据      | 可以执行 INSERT、UPDATE、DELETE |
| 传入参数类型  | 只能输入参数 (IN)        | 支持 IN、OUT、INOUT 参数        |
| 调用方式    | 在SQL语句中直接调用（可嵌入查询） | 通过 `CALL` 语句调用            |


## 存储函数

> 只能做数据处理 **不能执行任何会更改数据库状态的语句** <br>
> 像内置函数一样调用。它接受输入参数，执行逻辑处理，并返回一个值。

### 创建函数
```sql
CREATE DEFINER=`root`@`localhost` FUNCTION `test`(in_id INT) RETURNS int
    READS SQL DATA -- 只读
    DETERMINISTIC -- 幂等
BEGIN
    DECLARE cnt INT; -- 变量

    SELECT COUNT(*) INTO cnt
    FROM `user`
    WHERE `id` = in_id;

    RETURN cnt; -- 返回
END
```
### 使用
```sql
select test(8990) as total
```
### 复杂示例

```sql
CREATE FUNCTION `days_since_registration`(in_user_id INT)
RETURNS INT
DETERMINISTIC
READS SQL DATA
BEGIN
    DECLARE reg_date DATE;
    DECLARE days_diff INT;

    -- 查询用户的注册日期
    SELECT registration_date INTO reg_date
    FROM `user`
    WHERE id = in_user_id;

    -- 如果用户不存在，返回 -1
    IF reg_date IS NULL THEN
        RETURN -1;
    END IF;

    -- 计算当前日期和注册日期的天数差
    SET days_diff = DATEDIFF(CURDATE(), reg_date);

    RETURN days_diff;
END
```

## 存储过程

```sql
CREATE DEFINER=`root`@`localhost` PROCEDURE `chen`(IN p_id INT, OUT p_name VARCHAR(255))
BEGIN
    UPDATE `user` SET `name` = 'T' WHERE `id` = p_id;
    SELECT `name` INTO p_name FROM `user` WHERE `id` = p_id;
END
```

```sql
call chen(1, @name);
select @name;
```

## 其他

#### 查看curd执行频率

> show global status like 'Com_______';

#### 慢查询日志

> MySQL的慢查询日志是MySQL提供的一种日志记录，它用来记录在MySQL中响应时间超过阀值的语句，具体指运行时间超过long_query_time值的SQL，则会被记录到慢查询日志中。long_query_time的默认值为 10，意思是运行10秒以上的SQL语句。
>
> 由他来查看哪些SQL超出了我们的最大忍耐时间值，比如一条sql执行超过5秒钟，我们就算慢SQL，希望能 收集超过5秒的sql，结合之前explain进行全面分析。

```sql
SHOW VARIABLES LIKE 'long_query_time%';  #查询目前慢日志时间
```

修改配置文件my.cnf 永久生效

```
[mysqld] 
slow_query_log=1 
slow_query_log_file=/var/lib/mysql/atguigu-slow.log 
long_query_time=3 
log_output=FILE
```

#### show profiles

> 用来查看sql语句性能，等其他

```sql
mysql> select @@have_profiling;  # 是否支持
+------------------+
| @@have_profiling |
+------------------+
| YES              |
+------------------+
1 row in set (0.04 sec)

mysql> select @@profiling;   #是否开启
+-------------+
| @@profiling |
+-------------+
|           0 |
+-------------+
1 row in set (0.04 sec)

mysql> set profiling=1;   ## 开启
Query OK, 0 rows affected (0.00 sec)

mysql> select @@profiling;
+-------------+
| @@profiling |
+-------------+
|           1 |
+-------------+
mysql> show profiles;   ##查看所有的sql情况
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
```





