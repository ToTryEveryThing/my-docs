import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as i,c as t,a as n,d as l,b as c,e as o}from"./app-BcMwX9mu.js";const r={},d=o(`<h3 id="一、git安装后-指定名称和邮箱" tabindex="-1"><a class="header-anchor" href="#一、git安装后-指定名称和邮箱" aria-hidden="true">#</a> 一、git安装后-指定名称和邮箱</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 全局配置</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;Your Name&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;email@example.com&quot;</span>

<span class="token comment"># 某个项目配置</span>
<span class="token function">git</span> config  user.name <span class="token string">&quot;Your Name&quot;</span>
<span class="token function">git</span> config  user.email <span class="token string">&quot;email@example.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、分支管理" tabindex="-1"><a class="header-anchor" href="#二、分支管理" aria-hidden="true">#</a> 二、分支管理</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> branch    <span class="token comment">#查看分支</span>
<span class="token function">git</span> chenkout xxx  <span class="token comment">#切换为分支xxx </span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> xxx  <span class="token comment">#新建分支xxx 并且切换过去</span>
<span class="token function">git</span> branch <span class="token parameter variable">-d</span> xxx  <span class="token comment"># 删除本地分支xxx</span>
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> xxx  <span class="token comment">#忽略修改 仍然删除分支xxx</span>
<span class="token function">git</span> fetch origin xxx <span class="token comment">#拉取远程分支xxx</span>
<span class="token function">git</span> push origin yyy  <span class="token comment"># 把新建的分支yyy上传</span>
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> first origin/first <span class="token comment">##新建本地分支  和远程分支连接起来</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="二、创建版本库" tabindex="-1"><a class="header-anchor" href="#二、创建版本库" aria-hidden="true">#</a> 二、创建版本库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> learngit	//创建
$ <span class="token builtin class-name">cd</span> learngit	//使用
$ <span class="token builtin class-name">pwd</span>	//查看当前目录
$ <span class="token function">git</span> init	//初始化，生成.git文件<span class="token punctuation">(</span>若该文件隐藏，则使用ls -ah<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、把文件添加add和提交commit到版本库" tabindex="-1"><a class="header-anchor" href="#三、把文件添加add和提交commit到版本库" aria-hidden="true">#</a> 三、把文件添加add和提交commit到版本库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> <span class="token function">add</span> test.txt	//添加
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;wrote a test file&quot;</span>	//提交
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;add 3 files.&quot;</span>		//一次性提交多个文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、版本控制" tabindex="-1"><a class="header-anchor" href="#四、版本控制" aria-hidden="true">#</a> 四、版本控制</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">git</span> log	//查看提交历史记录，从最近到最远，可以看到3次
$ <span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>oneline	//加参，简洁查看
$ <span class="token function">git</span> reflog	//查看每一次修改历史
$ <span class="token function">cat</span> test.txt	//查看文件内容
$ <span class="token function">git</span> status	//查看工作区中文件当前状态
$ <span class="token function">git</span> reset <span class="token parameter variable">--hard</span> HEAD^（HEAD~100）（commit id）	//回退版本
$ <span class="token function">git</span> checkout -- test.txt	//丢弃工作区的修改，即撤销修改
$ <span class="token function">git</span> reset HEAD test.txt	//丢弃暂存区的修改（若已提交，则回退）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、删除文件-缓存" tabindex="-1"><a class="header-anchor" href="#五、删除文件-缓存" aria-hidden="true">#</a> 五、删除文件/缓存</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>清空git缓存
<span class="token function">git</span> <span class="token function">rm</span> <span class="token parameter variable">-r</span> <span class="token parameter variable">--cached</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&#39;update .gitignore&#39;</span>

$ <span class="token function">rm</span> test.txt
//直接删除
$ <span class="token function">git</span> <span class="token function">rm</span> test.txt
$ <span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;remove test.txt&quot;</span>
//删错了，恢复
$ <span class="token function">git</span> checkout -- test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="六、远程仓库" tabindex="-1"><a class="header-anchor" href="#六、远程仓库" aria-hidden="true">#</a> 六、远程仓库</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;youremail@example.com&quot;</span>	//创建SSH Key
$ <span class="token function">git</span> remote <span class="token function">add</span> origin git@github.com:Daisy/AKgit.git	//关联
$ <span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master	//将本地内容推送到远程仓库（第一次）
$ <span class="token function">git</span> push origin master	//将本地内容推送到远程仓库（之后）
$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>        //查看远程仓库信息
$ <span class="token function">git</span> remote <span class="token function">rm</span> origin	//删除远程仓库（解绑）
$ <span class="token function">git</span> clone git@github.com: Daisy/AKgit.git	//克隆远程仓库
//克隆之后使用和查看
$ <span class="token builtin class-name">cd</span> gitskills
$ <span class="token function">ls</span>
$ <span class="token function">git</span> remote	//查看远程库的信息
$ <span class="token function">git</span> remote <span class="token parameter variable">-v</span>	//查看远程库的详细信息
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="七、批量修改提交人信息" tabindex="-1"><a class="header-anchor" href="#七、批量修改提交人信息" aria-hidden="true">#</a> 七、批量修改提交人信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> filter-branch <span class="token parameter variable">-f</span> --env-filter <span class="token string">&#39;
CORRECT_NAME=&quot;mishu&quot;
CORRECT_EMAIL=&quot;riceuncle@outlook.com&quot;
if [ &quot;$GIT_COMMITTER_EMAIL&quot; != &quot;$CORRECT_EMAIL&quot; ]
then
    export GIT_COMMITTER_NAME=&quot;$CORRECT_NAME&quot;
    export GIT_COMMITTER_EMAIL=&quot;$CORRECT_EMAIL&quot;
fi
if [ &quot;$GIT_AUTHOR_EMAIL&quot; != &quot;$CORRECT_EMAIL&quot; ]
then
    export GIT_AUTHOR_NAME=&quot;$CORRECT_NAME&quot;
    export GIT_AUTHOR_EMAIL=&quot;$CORRECT_EMAIL&quot;
fi
&#39;</span> --tag-name-filter <span class="token function">cat</span> -- <span class="token parameter variable">--branches</span> <span class="token parameter variable">--tags</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),p=n("p",null,"// 拒绝合并不相关的历史",-1),u={href:"https://blog.csdn.net/Eternalyii/article/details/119643754",target:"_blank",rel:"noopener noreferrer"};function m(v,b){const s=e("ExternalLinkIcon");return i(),t("div",null,[d,n("blockquote",null,[p,n("p",null,[n("a",u,[l("https://blog.csdn.net/Eternalyii/article/details/119643754"),c(s)])])])])}const h=a(r,[["render",m],["__file","Git.html.vue"]]);export{h as default};
