---
title: Action
icon: route
category:
  - Tool
tag:
  - action 
---
[b](https://www.bilibili.com/video/BV1RE411R7Uy/?spm_id_from=333.788.recommend_more_video.1&vd_source=f8821730ff8a13ec89104c8629e6d42b)

[将文件推送到新的分支](https://github.com/JamesIves/github-pages-deploy-action)
```yml
# 程序名字
name: CI

# 触发时机
on:
######### schedule和push只能用一个
# 定时执行
#  schedule:
#   - cron: '0 10 *  * *'

# main分支变动时  触发
  push:
    branches: 
      - main
# 某个文件发生变化  也可以！！    
#    paths:
#      - src/*
    

# 里面有多个任务
jobs:

# 任务名字
  build:
  
  # 运行的系统下
    runs-on: ubuntu-latest

    # 步骤
    steps:
    
      # 拉取代码
      # 使用别人现成的action完成需要的操作
      - uses: actions/checkout@v3

      # 步骤名称
      - name: Run a one-line script
        run: echo Hello, world!

      # 步骤名称
      # Runs a set of commands using the runners shell
      - name: Run a multi-line script
        run: |
          echo Add other actions to build,
          echo test, and deploy your project.
          
      # 步骤名称
      - name: metoo
        run: |
          echo "\n Hello World" >> ./README.md
          
      # 重新提交到githu   
      - name: Push to GitHub
        uses: EndBug/add-and-commit@v7.2.1
        # 携带参数
        with:
          branch: main
          message: 'Add content'
```