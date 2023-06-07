---
title: Mybatis
icon: book
order: 2
category:
  - 使用指南
tag:
  - Markdown
---
# Mybatis
[官网](https://mybatis.org/mybatis-3/zh/getting-started.html)
[学习地址](https://www.bilibili.com/video/BV1MT4y1k7wZ?p=7&vd_source=f8821730ff8a13ec89104c8629e6d42b)

依赖
```xml
<!-- https://mvnrepository.com/artifact/org.mybatis/mybatis -->
<dependency>
    <groupId>org.mybatis</groupId>
    <artifactId>mybatis</artifactId>
    <version>3.5.5</version>
</dependency>
```
xml配置详解
![study](https://images.beink.cn/study/UL4ng9jJ1Vpg86bUFMn8K.png)
### 添加-主键返回
```java
int i = mapper.update(test1);
可以把id拿出来
```
```xml
    <insert id="update" useGeneratedKeys="true" keyProperty="id">
        insert into test1 (id, name, views, up) values
        (
        #{id},
        #{name},
        #{views},
        #{up}
        );
    </insert>
```
### 动态条件查询
-  if  
```xml
<select id="findActiveBlogLike"
     resultType="Blog">
  SELECT * FROM BLOG WHERE state = ‘ACTIVE’
  <if test="title != null">
    AND title like #{title}
  </if>
  <if test="author != null and author.name != null">
    AND author_name like #{author.name}
  </if>
</select>
```
- choose
```xml
<select id="findActiveBlogLike"
        resultType="Blog">
    SELECT * FROM BLOG WHERE state = ‘ACTIVE’
    <choose>
        <when test="title != null">
            AND title like #{title}
        </when>
        <when test="author != null and author.name != null">
            AND author_name like #{author.name}
        </when>
        <otherwise>
            AND featured = 1
        </otherwise>
    </choose>
</select>
```
- trim
```xml
<select id="findActiveBlogLike"
     resultType="Blog">
  SELECT * FROM BLOG
  WHERE
  <if test="state != null">
    state = #{state}
  </if>

  
  <if test="title != null">
    AND title like #{title}
  </if>
  <if test="author != null and author.name != null">
    AND author_name like #{author.name}
  </if>
</select>
```
