import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,f as a}from"./app-j3V8CGJ4.js";const s={},t=a(`<h3 id="一、git安装后-指定名称和邮箱" tabindex="-1"><a class="header-anchor" href="#一、git安装后-指定名称和邮箱" aria-hidden="true">#</a> 一、git安装后-指定名称和邮箱</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token comment"># 全局配置</span>
git config --global user.name <span class="token string">&quot;Your Name&quot;</span>
git config --global user.email <span class="token string">&quot;email@example.com&quot;</span>

<span class="token comment"># 某个项目配置</span>
git config  user.name <span class="token string">&quot;Your Name&quot;</span>
git config  user.email <span class="token string">&quot;email@example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、分支管理" tabindex="-1"><a class="header-anchor" href="#二、分支管理" aria-hidden="true">#</a> 二、分支管理</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>git branch    #查看分支
git chenkout xxx  #切换为分支xxx 
git checkout -b xxx  #新建分支xxx 并且切换过去
git branch -d xxx  # 删除本地分支xxx
git branch -D xxx  #忽略修改 仍然删除分支xxx
git fetch origin xxx #拉取远程分支xxx
git push origin yyy  # 把新建的分支yyy上传
git checkout -b first origin/first ##新建本地分支  和远程分支连接起来
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、创建版本库" tabindex="-1"><a class="header-anchor" href="#二、创建版本库" aria-hidden="true">#</a> 二、创建版本库</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code>$ mkdir learngit	//创建
$ cd learngit	//使用
$ pwd	//查看当前目录
<span class="token command">$ git init	//初始化，生成.git文件(若该文件隐藏，则使用ls<span class="token parameter"> -ah</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、把文件添加add和提交commit到版本库" tabindex="-1"><a class="header-anchor" href="#三、把文件添加add和提交commit到版本库" aria-hidden="true">#</a> 三、把文件添加add和提交commit到版本库</h3><div class="language-git line-numbers-mode" data-ext="git"><pre class="language-git"><code><span class="token command">$ git add test.txt	//添加</span>
<span class="token command">$ git commit<span class="token parameter"> -m</span> </span><span class="token string">&quot;wrote a test file&quot;</span>	//提交
<span class="token command">$ git commit<span class="token parameter"> -m</span> </span><span class="token string">&quot;add 3 files.&quot;</span>		//一次性提交多个文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、版本控制" tabindex="-1"><a class="header-anchor" href="#四、版本控制" aria-hidden="true">#</a> 四、版本控制</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ git log	//查看提交历史记录，从最近到最远，可以看到3次
$ git log --pretty=oneline	//加参，简洁查看
$ git reflog	//查看每一次修改历史
$ cat test.txt	//查看文件内容
$ git status	//查看工作区中文件当前状态
$ git reset --hard HEAD^（HEAD~100）（commit id）	//回退版本
$ git checkout -- test.txt	//丢弃工作区的修改，即撤销修改
$ git reset HEAD test.txt	//丢弃暂存区的修改（若已提交，则回退）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、删除文件-缓存" tabindex="-1"><a class="header-anchor" href="#五、删除文件-缓存" aria-hidden="true">#</a> 五、删除文件/缓存</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>清空git缓存
git rm -r --cached .
git add .
git commit -m &#39;update .gitignore&#39;

$ rm test.txt
//直接删除
$ git rm test.txt
$ git commit -m &quot;remove test.txt&quot;
//删错了，恢复
$ git checkout -- test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="六、远程仓库" tabindex="-1"><a class="header-anchor" href="#六、远程仓库" aria-hidden="true">#</a> 六、远程仓库</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ ssh-keygen -t rsa -C &quot;youremail@example.com&quot;	//创建SSH Key
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),d=[t];function l(r,c){return e(),n("div",null,d)}const u=i(s,[["render",l],["__file","Git.html.vue"]]);export{u as default};
