---
title: Mysql
icon: logos:mysql-icon
order: 1
description: mysql简单常用基础操作
category:
  - work
tag:
  - mysql
---

## 去重
[196. 删除重复的电子邮箱](https://leetcode.cn/problems/delete-duplicate-emails/description/)

```sql
delete from Person where id not in (
	select id from (
		select min(id) as id from Person group by email
	) T
)
```

```sql
delete p1 from Person  p1, Person  p2
where p1.Email = p2.Email  and  p1.id > p2.id
```

## 排名

[178. 分数排名](https://leetcode.cn/problems/rank-scores/)

> [row_number, rank(), dense_rank()的区别及具体用法示例 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/133469603)
>
> dense_rank()  1 1 2 3 4 5
>
> rank() 1 1 3 4 5 6
>
> row_number() 1 2 3 4 5 6

```sql
SELECT
  score,
  DENSE_RANK() over (
    order by
      score desc
  ) as 'rank'
FROM
  Scores;
```



