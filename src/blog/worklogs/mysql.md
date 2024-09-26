---
title: Mysql
icon: Mysql
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