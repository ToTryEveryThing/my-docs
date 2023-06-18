---
title: Mysql
icon: download
order: 2
category:
  - 使用指南
tag:
  - Markdown
---

# Mysql

[哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=4&vd_source=f8821730ff8a13ec89104c8629e6d42b)

`utf8mb4`: 编码格式

#### insert

- 给指定字段添加值

```mysql
insert into 表名 (字段1，字段2..) values(值1，值2..);
```

- 给指定字段批量添加值

```mysql
insert into 表名 (字段1，字段2..) values(值1，值2..),(值1，值2..),(值1，值2..);
insert into 表名  values(值1，值2..),(值1，值2..),(值1，值2..);
```

- 给全部字段添加值

```mysql
insert into 表名  values(值1，值2..);
```

#### update

```mysql
update 表名 set 字段1=值1，字段2=值2... [where 条件];
```

> 不写条件 更新所有

#### delete

```mysql
delete from 表名 [where 条件];
```

> delete from 表名   删除所有数据

## select

```mysql
select [字段列表] from [表名列表] where [条件列表] group by [分组字段列表] having [分组后条件列表] order by [排序字段列表] limit [分页]
```

> 条件查询(where)、聚合查询(count,max,min,avg,sum)、分组查询(group by)、排序查询(order by)、分页查询(limit)

### 基本查询

- 起别名

```mysql
select name as '姓名' from 表名;    或者  select name '姓名' from 表名;
```

- 不重复

```mysql
select distinct name from 表名;
```

[^distinct]: 去重
[^as]: 别名

### 条件查询

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

### 聚合函数

>  null 不参与计算

- sum

  ```mysql
  select sum(*) from 表名; 
  ```

- avg

  ```mysql
  select agv(age) from 表名;
  ```

- max | min

  ```mysql
  select max(age) from 表名;   select min(age) from 表名; 
  ```

### 分组查询

> 分组后的列只有待分组的字段和聚合函数

![study](https://images.beink.cn/study/bwSxT-4sdgkRCKhbCV1hH.png)



```mysql
select sex,count(sex) from s group by sex having avg(age) > 50;
```

### 排序查询

- ASC	升序（默认）
- DESC  降序

> 多字段排序，先按第一个排序，然后相同的按照第二个方式排序

```mysql
select * from s order by age asc , id desc;
```

### 分页查询

```mysql
select * from 表名 limit 起始索引，查询记录数
```

- 起始索引从0开始， 起始索引 = （查询页码-1）* 每页记录数

```mysql
select * from s limit 0,10;   select * from s limit 10,10;
```

----





## 函数

### 字符串函数

```mysql
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

### 数值函数

```mysql
-- ceil 向上取整
-- floor 向下取整
-- mod(x,y) 返回x/y的模
-- rand()  返回0-1的随机小数
-- round(x,y)  求参数x的四舍五入的值  保留y位小数  
select round(5.456871865468,3); -->  5.457   
```

### 日期函数

```mysql
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

----





## 约束

- default: 默认约束
- not null: 非空约束
- unique: 唯一约束
- primary key: 主键约束
- foreign key: 外键约束

### 外键约束

- 命令

```mysql
b为父表   s为子表   s表的字段(b_id)外键到b表的（id） 
alter table s add constraint fk_s_b_id foreign key (b_id) references b(id);
```

- 删除/更新行为
  - RESTRICT：父表数据被删除，会阻止删除。默认就是这一项。
  - NO ACTION：在MySQL中，同RESTRICT。
  - CASCADE：级联删除。
  - SET NULL：父表数据被删除，子表数据会设置为NULL。

---------







## 多表查询

> 笛卡尔积：两个表的所有组合  s(5个字段)，b(3个字段)    s X b  = 15
>
> 可以使用两个表之间的联系去除无用数据

### 内连接 

> 相当与查询A,B交集部分数据

```mysql
select s.name,b.name from s,b  where s.b_id = b.id;               隐式内连接
select s.name,b.name from s inner join b on s.b_id = b.id;		  显式内连接
```

### 左外连接

> 查询左表全部数据，以及两张表交集部分   

```mysql
select s.*,b.name from s left outer join b on s.b_id = b.id;
select s.*,b.name from s left join b on s.b_id = b.id;
s表的全部 以及b表的name
```

### 右外连接 

> 查询右表。。。。

### 自连接 

> 当前表与自身的连接查询，子链接必须使用表别名
>
> select 字段列表  from 表A 别名a join 表B 别名b on 条件 ...

### 联合查询

> 比如要求：将年龄低于50和性别为’男‘的人 全部查出来   就要用到``联合查询``了
>
> 列数必须保持一致，字段类型也一致。

```mysql
select * from s where age < 50 union all select * from s where sex = '男' ;    不去重
select * from s where age < 50 union select * from s where sex = '男' ;		去重
```

### 子查询

> [43. 基础-多表查询-子查询介绍_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Kr4y1i7ru?p=43&vd_source=f8821730ff8a13ec89104c8629e6d42b)

## 事务





























