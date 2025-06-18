---
title: 工作流
icon: hugeicons:flow
order: 2
description: 工作流
category:
  - work
tag:
  - flowable
---

[activiti工作流核心java api使用，activiti退回、跳过、强制结束实现，BpmnModel模型操作，运行中流程图、获取流程变量、候选人操作](https://blog.csdn.net/a771664696/article/details/118358296?spm=1001.2014.3001.5506)

```idea插件画图```
![alt text](image.png)

```maven```

```xml
        <!-- https://mvnrepository.com/artifact/org.flowable/flowable-spring-boot-starter -->
        <dependency>
            <groupId>org.flowable</groupId>
            <artifactId>flowable-spring-boot-starter</artifactId>
            <version>6.7.0</version>
        </dependency>
```
手动下载数据库，下载后，执行里面的database脚本即可
https://github.com/flowable/flowable-engine/releases/tag/flowable-6.7.0

`有了流程图 需要先发布才能使用`
```java
    @Test
    void contextLoads() {
        Deployment deployment = repositoryService.createDeployment()
                .addClasspathResource("static/test.bpmn20.xml")
                .deploy();
        ProcessDefinition processDefinition = repositoryService.createProcessDefinitionQuery()
                .deploymentId(deployment.getId())
                .singleResult();
        System.out.println("流程定义已部署：" + processDefinition.getName());

    }
```
