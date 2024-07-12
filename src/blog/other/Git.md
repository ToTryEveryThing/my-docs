---
title: Git
icon: git
order: 2
category:
  - 使用指南
tag:
  - Markdown
---
### 一、git安装后-指定名称和邮箱

```git
# 全局配置
git config --global user.name "Your Name"
git config --global user.email "email@example.com"

# 某个项目配置
git config  user.name "Your Name"
git config  user.email "email@example.com"
```

### 二、分支管理
```git
git branch    #查看分支
git chenkout xxx  #切换为分支xxx 
git checkout -b xxx  #新建分支xxx 并且切换过去
git branch -d xxx  # 删除本地分支xxx
git branch -D xxx  #忽略修改 仍然删除分支xxx
git fetch origin xxx #拉取远程分支xxx
git push origin yyy  # 把新建的分支yyy上传
git checkout -b first origin/first ##新建本地分支  和远程分支连接起来
```



### 二、创建版本库

```git
$ mkdir learngit	//创建
$ cd learngit	//使用
$ pwd	//查看当前目录
$ git init	//初始化，生成.git文件(若该文件隐藏，则使用ls -ah)
```

### 三、把文件添加add和提交commit到版本库

```git
$ git add test.txt	//添加
$ git commit -m "wrote a test file"	//提交
$ git commit -m "add 3 files."		//一次性提交多个文件
```

### 四、版本控制

```
$ git log	//查看提交历史记录，从最近到最远，可以看到3次
$ git log --pretty=oneline	//加参，简洁查看
$ git reflog	//查看每一次修改历史
$ cat test.txt	//查看文件内容
$ git status	//查看工作区中文件当前状态
$ git reset --hard HEAD^（HEAD~100）（commit id）	//回退版本
$ git checkout -- test.txt	//丢弃工作区的修改，即撤销修改
$ git reset HEAD test.txt	//丢弃暂存区的修改（若已提交，则回退）
```

### 五、删除文件/缓存

```
清空git缓存
git rm -r --cached .
git add .
git commit -m 'update .gitignore'

$ rm test.txt
//直接删除
$ git rm test.txt
$ git commit -m "remove test.txt"
//删错了，恢复
$ git checkout -- test.txt
```

### 六、远程仓库

```
$ ssh-keygen -t rsa -C "youremail@example.com"	//创建SSH Key
$ git remote add origin git@github.com:Daisy/AKgit.git	//关联
$ git push -u origin master	//将本地内容推送到远程仓库（第一次）
$ git push origin master	//将本地内容推送到远程仓库（之后）
$ git remote -v        //查看远程仓库信息
$ git remote rm origin	//删除远程仓库（解绑）
$ git clone git@github.com: Daisy/AKgit.git	//克隆远程仓库
//克隆之后使用和查看
$ cd gitskills
$ ls
$ git remote	//查看远程库的信息
$ git remote -v	//查看远程库的详细信息
```

