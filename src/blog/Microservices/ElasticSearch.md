---
title: ElasticSearch
icon: ESpeizhi
description: Elasticsearch可以很好地存储和查询文档，用于应用程序搜索、企业搜索和网站搜索。
order: 3
category:
  - 微服务
tag:
  - ElasticSearch
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

安装
> 限制内存大小 `ES_JAVA_OPTS="-Xms64m -Xmx512m"`
```sh 
docker pull elasticsearch:7.6.2
docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e ES_JAVA_OPTS="-Xms64m -Xmx512m" elasticsearch:7.6.2
```

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

## springboot
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-elasticsearch</artifactId>
    <version>2.7.9</version>
</dependency>
```
```yml
spring:
  elasticsearch:
    uris: 127.0.0.1:9200
```
实体类
```java
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(indexName = "mytest")
public class mytest {

    @Id
    private Long id;
    @Field
    private String name;
    //不可被索引 不可被分开的词查询
    @Field(index = false,type = FieldType.Keyword)
    private String address;
    @Field
    private Integer age;

}
```
### 索引
```java
    @Test
    void indexops(){
        // 创建索引
        es.indexOps(mytest.class).create();
        // 删除索引
        es.indexOps(mytest.class).delete();
    }
```
### 文档
```java
    @Test
    void contextLoads() {
        mytest mytest = new mytest(102L,"ggg","gasd",12);

        // 删除文档
        String delete = es.delete("102", mytest.class);
        // 添加文档
        es.save(mytest);
        //添加多个
//      es.save(List<mytest>)
        //查询文档
        es.get("101",mytest.getClass());

    }
```
### 高级查询

::: code-tabs#shell

@tab 匹配查询

```java
    @Test
    public void search(){
        NativeSearchQueryBuilder query = new NativeSearchQueryBuilder();
        query.withQuery(QueryBuilders.matchQuery("name","tmo"));
        SearchHits<mytest> search = es.search(query.build(), mytest.class);
        search.forEach(System.out::println);
    }
```

@tab 查询多个值

```java
    @Test
    public void sss(){
        NativeSearchQueryBuilder query = new NativeSearchQueryBuilder();
        List<String> list = Arrays.asList("tom","ggg");
        query.withQuery(QueryBuilders.termQuery("name", list));
        SearchHits<mytest> search = es.search(query.build(), mytest.class);
        search.forEach(System.out::println);
    }
```

@tab 布尔查询

```java
    @Test
    public void fsdf(){
        NativeSearchQueryBuilder query = new NativeSearchQueryBuilder();
        //must
        query.withQuery(
                QueryBuilders.boolQuery()
                        .must(QueryBuilders.matchQuery("name","tom"))
                        .must(QueryBuilders.matchQuery("address","sSH"))
        );
        //should
//        QueryBuilders.boolQuery()
//                .should(QueryBuilders.matchQuery("title", searchTerm1))
//                .should(QueryBuilders.matchQuery("content", searchTerm2))
//                .minimumShouldMatch(1) // 设置至少满足一个should条件
//        );
        SearchHits<mytest> search = es.search(query.build(), mytest.class);
        search.forEach(System.out::println);
    }
```
@tab 分页
```java
    @Test
    public void hasdf(){
        NativeSearchQueryBuilder query = new NativeSearchQueryBuilder();
        PageRequest of = PageRequest.of(0, 10);//分页设置
        query.withPageable(of);
        SearchHits<mytest> search = es.search(query.build(), mytest.class);
        search.forEach(System.out::println);
    }
```

@tab 排序
```java
    @Test
    public void hhfsh(){
        NativeSearchQueryBuilder query = new NativeSearchQueryBuilder();
        query.withSort(Sort.by("age").ascending());
        SearchHits<mytest> search = es.search(query.build(), mytest.class);
        search.forEach(System.out::println);
    }
```
@tab 过滤
```java
    @Test
    public void hhhhhh(){
        NativeSearchQueryBuilder query = new NativeSearchQueryBuilder();
        // 添加过滤条件
        query.withFilter(
            FilterBuilders.boolFilter()
                .must(FilterBuilders.termFilter("category", "电子产品"))
                .must(FilterBuilders.rangeFilter("price").gte(1000).lte(5000))
        );
        SearchHits<mytest> search = es.search(query.build(), mytest.class);
        search.forEach(System.out::println);
    }
```

@tab 高亮
```java
    @Test
    public void  gasdg(){
        NativeSearchQueryBuilder query = new NativeSearchQueryBuilder();
        query.withQuery(QueryBuilders.matchQuery("name","tom"));
        // 添加高亮信息到查询
        HighlightBuilder highlightBuilder = new HighlightBuilder();
        highlightBuilder.field("name"); // 指定需要高亮的字段
        highlightBuilder.preTags("<em>"); // 设置高亮前缀
        highlightBuilder.postTags("</em>"); // 设置高亮后缀
        query.withHighlightBuilder(highlightBuilder);
        SearchHits<mytest> search = es.search(query.build(), mytest.class);
        search.forEach(System.out::println);

        // 处理高亮结果
        List<mytest> blogs = new ArrayList<>();
        for (SearchHit<mytest> searchHit : search) {
            mytest blog = searchHit.getContent();
            // 从高亮结果中获取需要高亮的字段内容
            Map<String, List<String>> highlightFields = searchHit.getHighlightFields();
            if (highlightFields.containsKey("name")) {
                List<String> titleHighlights = highlightFields.get("name");
                // 获取高亮的标题内容
                String highlightedTitle = titleHighlights.get(0); // 假设只有一个高亮片段
                blog.setName(highlightedTitle);
            }
            blogs.add(blog);
        }

    }
```
@tab 大杂烩
> 
```java
import org.elasticsearch.index.query.BoolQueryBuilder;
import org.elasticsearch.index.query.QueryBuilders;
import org.elasticsearch.index.query.FilterBuilders;
import org.elasticsearch.search.fetch.subphase.highlight.HighlightBuilder;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.elasticsearch.core.ElasticsearchRestTemplate;
import org.springframework.data.elasticsearch.core.query.NativeSearchQueryBuilder;
import org.springframework.data.elasticsearch.core.query.SearchHits;

// 定义分页信息
int pageNumber = 0; // 第一页，页码从0开始
int pageSize = 10;  // 每页显示10条数据
Pageable pageable = PageRequest.of(pageNumber, pageSize, Sort.by("price").ascending());

// 创建NativeSearchQueryBuilder对象
NativeSearchQueryBuilder queryBuilder = new NativeSearchQueryBuilder();

// 添加查询条件，使用should操作
String searchTerm = "手机";
queryBuilder.withQuery(QueryBuilders.boolQuery()
        .should(QueryBuilders.matchQuery("name", searchTerm))
        .should(QueryBuilders.matchQuery("category", searchTerm))
);

// 添加过滤条件
queryBuilder.withFilter(
    FilterBuilders.boolFilter()
        .must(FilterBuilders.termFilter("category", "电子产品"))
        .must(FilterBuilders.rangeFilter("price").gte(1000).lte(5000))
);

// 添加高亮信息到查询
HighlightBuilder highlightBuilder = new HighlightBuilder();
highlightBuilder.field("name"); // 指定需要高亮的字段
highlightBuilder.preTags("<em>"); // 设置高亮前缀
highlightBuilder.postTags("</em>"); // 设置高亮后缀
queryBuilder.withHighlightBuilder(highlightBuilder);

// 添加分页信息到查询
queryBuilder.withPageable(pageable);

// 添加排序信息到查询
queryBuilder.withSort(Sort.by("price").ascending());

// 执行查询并获取分页结果
SearchHits<Product> searchHits = elasticsearchRestTemplate.search(queryBuilder.build(), Product.class);

// 处理高亮结果和排序结果
List<Product> products = new ArrayList<>();
for (SearchHit<Product> searchHit : searchHits) {
    Product product = searchHit.getContent();
    // 从高亮结果中获取需要高亮的字段内容
    Map<String, List<String>> highlightFields = searchHit.getHighlightFields();
    if (highlightFields.containsKey("name")) {
        List<String> nameHighlights = highlightFields.get("name");
        // 获取高亮的名称内容
        String highlightedName = nameHighlights.get(0); // 假设只有一个高亮片段
        product.setName(highlightedName);
    }
    products.add(product);
}

// 返回分页结果
return new PageImpl<>(products, pageable, searchHits.getTotalHits());

```
:::

:::tip 大杂烩
在上述例子中，
我们结合使用查询、过滤、分页、高亮、排序和should操作。
我们使用`QueryBuilders.boolQuery`来创建一个布尔查询，使用should操作指定至少满足一个条件的情况：name字段包含搜索词"手机"，或category字段包含搜索词"手机"。
然后，我们使用`FilterBuilders.boolFilter`来创建一个布尔过滤器，使用must操作添加category字段必须等于"电子产品"，price字段必须在1000到5000之间的过滤条件。
接着，我们按照前述分页方式和排序方式添加分页和排序信息到查询。通过`elasticsearchRestTemplate.search()`执行查询，并获取查询结果的SearchHits对象。接着，我们从SearchHits中获取查询结果列表，并遍历每个结果，从高亮结果中获取需要高亮的字段内容，并设置到对应的实体对象中。
最后，我们使用PageImpl将结果封装成Page<`Product`>对象，其中包含了分页信息、查询结果列表和总记录数。
:::
