---
title: ElasticSearch
icon: magnifying-glass
order: 2
category:
  - 使用指南
tag:
  - Markdown
---
# ElasticSearch

[old-ElasticSearchbilibili](https://www.bilibili.com/video/BV1np4y1C7Yf?p=102&vd_source=f8821730ff8a13ec89104c8629e6d42b)
[new-ElasticSearchbilibili](https://www.bilibili.com/video/BV1hh411D7sb/?p=20&spm_id_from=pageDriver&vd_source=f8821730ff8a13ec89104c8629e6d42b)


[安装](https://www.cnblogs.com/hualess/p/11540477.html)      [报错](https://blog.csdn.net/qq_17229141/article/details/123106584)      [官方文档](https://elasticsearch.bookhub.tech/getting_started/esindex.html#批量索引文档)    [基本查询，结果过滤，高级查询，过滤，排序](https://blog.csdn.net/qq_41879343/article/details/107376190)

[创建索引 - ElasticSearch (apifox.com)](https://apifox.com/apidoc/shared-f3e304ee-a95c-4dd0-b6a7-5a83abb6ff2c)

:::tip 介绍
Elasticsearch 是一个分布式的、开源的搜索分析引擎，支持各种数据类型，包括文本、数字、地理、结构化、非结构化。

可以很好地存储和查询文档，用于应用程序搜索、企业搜索和网站搜索。
:::


> 对比数据库

| 索引（indices）  | Databases 数据库 |
| ---------------- | ---------------- |
| 类型（type）     | Table 数据表     |
| 文档（Document） | Row 行           |
| 字段（Field）    | Columns 列       |

## 基础操作

### _cat

> method: GET

- /_cat/nodes 查看所有的节点
- /_cat/health 健康状态
- /_cat/master
- /_cat/indices 查看索引  show databases;

### 索引

- 创建索引

```sh
PUT  /shopping
```

- 查看索引

```sh
GET /shopping
```

- 删除索引

```sh
DELETE /shopping
```

### 文档

- 创建文档(会覆盖原有的数据）

```sh
PUT/POST  /myindex/_doc/1
{
  "name": "Tom"
}
## 不加id 则会自动生成id
POST  /myindex/_doc
{
  "name": "Tom"
}
```
- 修改文档（在原来的数据上修改）

```sh
POST /shopping/_update/23
{
    "doc":{
        "school":"666"
    }
}
```

- 查询

```sh
GET  /myindex/_doc/1
```

- 查询索引下所有文档

```sh
GET /shopping/_search
```

- 删除

```sh
DELETE  /myindex/_doc/1
```

### 高级查询

- 匹配

> `match_phrase`不拆分、 `match`拆分后模糊查询、`match_all`查询所有

```sh
GET /shopping/_search
{
    "query":{
        "match":{ ## 匹配
			"name":"Tom"
        }
    },
}
```

- 分页+排序

```sh
GET /shopping/_search
{
    "query":{
        "match_all":{ ## 匹配

        }
    },
    "from":0, ## 第几条开始
    "size":2,  ## 一页几条数据
    "_source":["name"], ## 只要的字段
    "sort": { ##排序
    	"name.keyword":{ ##排序的字段
    		"order":"desc" ## 升降序
    	}
    }
}
```

- 多条件查询

> `bool`把各种其它查询通过`must`（与）、`must_not`（非）、`should`（或）的方式进行组合

```sh
GET /shopping/_search
{
    "query":{
        "bool":{    ## 多添加查询
            "should":[ 
                {
                    "match":{ ##匹配
                        "name":"Tom"  ##name字段
                    }
                },
                {
                    "match":{
                        "school":"汤姆" ## school字段
                    }
                }
            ]
        }
    }
}
```

- 范围查询

> `gt`-大于   `gte`-大于等于   lt`-小于  `lte`-小于等于

```sh
GET /shopping/_search
{
    "query":{
        "range": {
            "amount": {
                "gt":  12
            }
    	}
    }
}

```

- 高亮

```sh
GET /shopping/_search
{
    "query":{
        "match":{
            "name":"Tom"
        }
    },
    "highlight":{
        "fields":{
            "name":{}
        }
    }
}
```

- 聚合
- 映射

> **Mapping（映射）**： 是用来定义文档和它所包含的字段是如何被存储和索引的。

```sh
PUT /shopping/_mapping
{
    "properties":{ 
        "name" : { ## 字段
            "type" : "text", ## 可以被分词查询
            "index" : true ## 可以被索引
        },
        "sex" : {
            "type" : "text",
            "index": true
        },
        "tell" : { 
            "type" : "keyword", ## 必须是个完整的词
            "index" : false ## 不能被索引
        }
    }
}
```

## JAVA操作

