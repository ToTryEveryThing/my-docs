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

`distinct`: 去重  `as`: 别名

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

## 函数































