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
## XML映射

- `resultMap` – 描述如何从数据库结果集中加载对象，是最复杂也是最强大的元素。

- `sql` – 可被其它语句引用的可重用语句块。
- `insert` – 映射插入语句。
- `update` – 映射更新语句。
- `delete` – 映射删除语句。
- `select` – 映射查询语句。

### sql

>  这个元素可以用来定义可重用的 SQL 代码片段，以便在其它语句中使用。 参数可以静态地（在加载的时候）确定下来，并且可以在不同的 include 元素中定义不同的参数值。比如：

```xml
<sql id="userColumns"> ${alias}.id,${alias}.username,${alias}.password </sql>
```

这个 SQL 片段可以在其它语句中使用，例如：

```xml
<select id="selectUsers" resultType="map">
  select
    <include refid="userColumns"><property name="alias" value="t1"/></include>,
    <include refid="userColumns"><property name="alias" value="t2"/></include>
  from some_table t1
    cross join some_table t2
</select>
```

也可以在 include 元素的 refid 属性或内部语句中使用属性值，例如：

```xml
<sql id="sometable">
  ${prefix}Table
</sql>

<sql id="someinclude">
  from
    <include refid="${include_target}"/>
</sql>

<select id="select" resultType="map">
  select
    field1, field2, field3
  <include refid="someinclude">
    <property name="prefix" value="Some"/>
    <property name="include_target" value="sometable"/>
  </include>
</select>
```

### resultMap

```xml
    <resultMap id="BaseResultMap" type="com.example.mybatis.pojo.Article">
            <id property="id" column="id" jdbcType="INTEGER"/>
            <result property="title" column="title" jdbcType="VARCHAR"/>
            <result property="content" column="content" jdbcType="VARCHAR"/>
            <result property="auther" column="auther" jdbcType="VARCHAR"/>
            <result property="time" column="time" jdbcType="TIMESTAMP"/>
    </resultMap>
```

xml配置详解
![image-20230605163139204](C:\Users\Administrator\AppData\Roaming\Typora\typora-user-images\image-20230605163139204.png)

### 属性

## 传参

###  匿名参数 顺序传递参数

```java
@ApiOperation(value = "多个参数查询_匿名顺序传参")
@GetMapping("findByParams")
public ResultMsg findByParams(Short gender,String age)
{
    List result= employeeMapper.selectByGenderAndAge(gender,age);
    return ResultMsg.getMsg(result);
}
```

mapper

```java
List<Employee> selectByGenderAndAge(Short gender,String age );
```

xml

```java
select id="selectByGenderAndAge" resultMap="BaseResultMap" >
  select * from employee where gender = #{gender} and age = #{age}
</select>
```

::: danger

注意这里按参数名去引用的话会报如下错误，mybatis错误提示很细致，这里明确给我们提示，匿名参数只能使用

arg1, arg0, param1, param2 类似的形式

这种传参方式的缺点是不够灵活，必须严格按照参数顺序来引用

:::

所以正确的引用方式如下：

```xml
  <select id="selectByGenderAndAge" resultMap="BaseResultMap" >
    select *  from employee where gender = #{param1} and age = #{param2}
  </select>
```

### 使用@Param注解

controller

```java
@ApiOperation(value = "多个参数查询_注解方式传参")
@GetMapping("findByParams2")
public ResultMsg findByParams2(Short gender,String age)
{
    List result= employeeMapper.selectByGenderAndAge2(gender,age);
    return ResultMsg.getMsg(result);
}
```

mapper

```java
List<Employee> selectByGenderAndAge( @Param("gender") Short gender,@Param("age") String age );
```

xml

```xml
<select id="selectByGenderAndAge" resultMap="BaseResultMap" >
  select * from employee where gender = #{gender} and age = #{age}
</select>
```

### 使用Map传递参数

controller

```java
@ApiOperation(value = "多个参数查询")
@GetMapping("findByMapParams")
public ResultMsg findByMapParams(Short gender,String age)
{
    Map params = new HashMap<>();
    params.put("gender",gender);
    params.put("age",age);
    List result= employeeMapper.selectByMapParams(params);
    return ResultMsg.getMsg(result);
}
```

mapper

```java
List<Employee> selectByMapParams(Map params);
```

xml

```xml
<select id="selectByMapParams" resultMap="BaseResultMap" parameterType="map">
  select * from employee where gender = #{gender} and age = #{age}
</select>
```

### 用过java bean传递多个参数

controller

```java
@ApiOperation(value = "多个参数查询_通过Java Bean传递多个参数")
@PostMapping("findByBeans")
public ResultMsg findByBeans(@RequestBody Employee employee)
{
    List result= employeeMapper.selectByBeans(employee);
    return ResultMsg.getMsg(result);
}
```

```java
List <Employee> selectByBeans(Employee employee);
```

```xml
<select id="selectByBeans" resultMap="BaseResultMap" parameterType="com.wg.demo.po.Employee">
  select
  *
  from employee where gender = #{gender} and age = #{age}
</select>
```

### 直接使用JSON传递参数

```java
@ApiOperation(value = "多个参数查询_通过JSON传递多个参数")
@PostMapping("findByJSONObject")
public ResultMsg findByJSONObject(@RequestBody JSONObject params)
{
    List result= employeeMapper.findByJSONObject(params);
    return ResultMsg.getMsg(result);
}
```

```java
List <Employee> findByJSONObject(JSONObject params);
```

```xml
<select id="findByJSONObject" resultMap="BaseResultMap" parameterType="com.alibaba.fastjson.JSONObject">
  select
  *
  from employee where gender = #{gender} and age = #{age}
</select>
```

### 传递集合类型参数List、Set、Array

```java
@ApiOperation(value = "多个参数查询_通过List、Set、Array传递多个参数")
@PostMapping("findByList")
public ResultMsg findByList(@RequestBody List<String> list)
{
    List result= employeeMapper.findByList (list);
    return ResultMsg.getMsg(result);
}
```

```java
List <Employee> findByList(List list);
```

```xml
  <select id="findByList" resultMap="BaseResultMap" >
SELECT * from employee where age in
    <foreach collection="list" open="(" separator="," close=")" item="age">
      #{age}
    </foreach>
  </select>
```

[来源](https://blog.csdn.net/bdqx_007/article/details/94836637)

## 其他

### 添加-主键返回

```java
 mapper.insert(test1);
System.out.println(test1.getId());
可以把id拿出来
```
```xml
    <insert id="insert" useGeneratedKeys="true" keyProperty="id">
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

