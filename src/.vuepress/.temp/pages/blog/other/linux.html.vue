<template><div><h2 id="查找命令" tabindex="-1"><a class="header-anchor" href="#查找命令"><span>查找命令</span></a></h2>
<h4 id="find" tabindex="-1"><a class="header-anchor" href="#find"><span>find</span></a></h4>
<p>作用: 在指定目录下查找文件<br>
语法: <code v-pre>find dirName -option fileName</code><br>
举例:</p>
<ul>
<li><code v-pre>find  .  –name &quot;*.java&quot;</code>			在当前目录及其子目录下查找.java结尾文件</li>
<li><code v-pre>find  /itcast  -name &quot;*.java&quot;</code>	在/itcast目录及其子目录下查找.java结尾的文</li>
</ul>
<h4 id="grep" tabindex="-1"><a class="header-anchor" href="#grep"><span>grep</span></a></h4>
<p>作用: 从指定文件中查找指定的文本内容<br>
语法: <code v-pre>grep word fileName</code><br>
举例:</p>
<ul>
<li><code v-pre>grep Hello HelloWorld.java</code>	查找HelloWorld.java文件中出现的Hello字符串的位置</li>
<li><code v-pre>grep hello *.java</code>			查找当前目录中所有.java结尾的文件中包含hello字符串的位置</li>
</ul>
<h2 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>docker</span></a></h2>
<h3 id="数据卷" tabindex="-1"><a class="header-anchor" href="#数据卷"><span>数据卷</span></a></h3>
<p><code v-pre>数据卷（volume）</code>是一个虚拟目录，是容器内目录与宿主机目录之间映射的桥梁。<br>
以Nginx为例，我们知道Nginx中有两个关键的目录：</p>
<ul>
<li>html：放置一些静态资源</li>
<li>conf：放置配置文件</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">提示</p>
<p>如果我们要让Nginx代理我们的静态资源，最好是放到html目录；如果我们要修改Nginx的配置，最好是找到conf下的nginx.conf文件。<br>
但遗憾的是，容器运行的Nginx所有的文件都在容器内部，读写都非常不方便。所以我们通常会利用数据卷将两个目录与宿主机目录关联，</p>
</div>
<h4 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令"><span>基本命令</span></a></h4>
<table>
<thead>
<tr>
<th>命令</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>docker volume create</td>
<td>创建数据卷</td>
</tr>
<tr>
<td>docker volume ls</td>
<td>查看所有的数据卷</td>
</tr>
<tr>
<td>docker volume rm</td>
<td>删除指定的数据卷</td>
</tr>
<tr>
<td>docker volume inspect</td>
<td>查看某个数据卷的详情</td>
</tr>
<tr>
<td>docker volume prune</td>
<td>清除数据卷</td>
</tr>
</tbody>
</table>
<p><code v-pre>-v html:/usr/share/nignx/html</code> 挂载目录</p>
<p><code v-pre>-v /home/test/mysql/mysql:/usr/mysql/mysql</code>  映射宿主机上</p>
<h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h4>
<p><img src="@source/.vuepress/public/assets/image/Snipaste_2023-12-30_11-02-02.png" alt="" loading="lazy"><br>
<img src="@source/.vuepress/public/assets/image/Snipaste_2023-12-30_11-04-37.png" alt="" loading="lazy"></p>
<p>之后就可以随意修改了</p>
<h3 id="自定义镜像" tabindex="-1"><a class="header-anchor" href="#自定义镜像"><span>自定义镜像</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker build -t docker-demo:1.0 .</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>命令说明：</p>
<ul>
<li><code v-pre>docker build</code> : 就是构建一个docker镜像</li>
<li><code v-pre>-t docker-demo:1.0 </code>：-t参数是指定镜像的名称（repository和tag）</li>
<li><code v-pre>.</code> : 最后的点是指构建时Dockerfile所在路径，由于我们进入了demo目录，所以指定的是.代表当前目录，也可以直接指定Dockerfile目录：<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker build -t docker-demo:1.0 /root/demo</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></li>
</ul>
<h3 id="dockercompose" tabindex="-1"><a class="header-anchor" href="#dockercompose"><span>DockerCompose</span></a></h3>
<p>docker-compose.yml</p>
<div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">version</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"3.8"</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75"> services</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">  mysql</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">mysql:5.7.25</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">     MYSQL_ROOT_PASSWORD</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">123</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"/tmp/mysql/data:/var/lib/mysql"</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"/tmp/mysql/conf/hmy.cnf:/etc/mysql/conf.d/hmy.cnf"</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">  web</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">    build</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">     - </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"8090:8090"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>基本命令</p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 执行当前目录下的docker-compose.yml文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> up</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 后台启动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> compose</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> -d</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 使用特定的配置文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> compose</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> /home/docker-compose.yml</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> -d</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 类似 docker ps </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> ps</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> status</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> [配置中的一个服务]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> pause</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> [配置中的一个服务]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> unpause</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> [配置中的一个服务]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379"> restart</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> [配置中的一个服务]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>为了避免每次使用docker命令都需要加上sudo权限，可以将当前用户加入安装中自动创建的docker用户组<br>
<a href="https://linux.cn/article-14871-1.html#:~:text=%E5%9C%A8%20Ubuntu%2022.04%20LTS%20%E4%B8%AD%E5%AE%89%E8%A3%85%20Docker%201%201%E3%80%81%E6%9B%B4%E6%96%B0,%EF%BC%88%E9%80%89%E5%81%9A%EF%BC%89%20%E9%BB%98%E8%AE%A4%E6%83%85%E5%86%B5%E4%B8%8B%EF%BC%8CDocker%20%E5%AE%88%E6%8A%A4%E8%BF%9B%E7%A8%8B%E7%BB%91%E5%AE%9A%E5%88%B0%20Unix%20%E5%A5%97%E6%8E%A5%E5%AD%97%E8%80%8C%E4%B8%8D%E6%98%AF%20TCP%20%E7%AB%AF%E5%8F%A3%E3%80%82%20" target="_blank" rel="noopener noreferrer">如何在 Ubuntu 22.04 LTS 中安装 Docker 和 Docker Compose</a></p>
</blockquote>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>sudo usermod -aG docker $USER</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="基操" tabindex="-1"><a class="header-anchor" href="#基操"><span>基操</span></a></h3>
<h4 id="镜像-images" tabindex="-1"><a class="header-anchor" href="#镜像-images"><span>镜像（images）</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker pull ubuntu:20.04：拉取一个镜像</span></span>
<span class="line"><span>docker images：列出本地所有镜像</span></span>
<span class="line"><span>docker image rm ubuntu:20.04 或 docker rmi ubuntu:20.04：删除镜像ubuntu:20.04</span></span>
<span class="line"><span>docker [container] commit CONTAINER IMAGE_NAME:TAG：创建某个container的镜像</span></span>
<span class="line"><span>docker save -o ubuntu_20_04.tar ubuntu:20.04：将镜像ubuntu:20.04导出到本地文件ubuntu_20_04.tar中</span></span>
<span class="line"><span>docker load -i ubuntu_20_04.tar：将镜像ubuntu:20.04从本地文件ubuntu_20_04.tar中加载出来</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="容器-container" tabindex="-1"><a class="header-anchor" href="#容器-container"><span>容器(container)</span></a></h4>
<div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" data-title="" style="--vp-collapsed-lines:20;--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>docker [container] create -it ubuntu:20.04：利用镜像ubuntu:20.04创建一个容器。</span></span>
<span class="line"><span>docker ps -a：查看本地的所有容器</span></span>
<span class="line"><span>docker [container] start CONTAINER：启动容器</span></span>
<span class="line"><span>docker [container] stop CONTAINER：停止容器</span></span>
<span class="line"><span>docker [container] restart CONTAINER：重启容器</span></span>
<span class="line"><span>docker [contaienr] run -itd ubuntu:20.04：创建并启动一个容器</span></span>
<span class="line"><span>docker [container] attach CONTAINER：进入容器</span></span>
<span class="line"><span>先按Ctrl-p，再按Ctrl-q可以挂起容器</span></span>
<span class="line"><span>docker [container] exec CONTAINER COMMAND：在容器中执行命令</span></span>
<span class="line"><span>docker [container] rm CONTAINER：删除容器</span></span>
<span class="line"><span>docker container prune：删除所有已停止的容器</span></span>
<span class="line"><span>docker export -o xxx.tar CONTAINER：将容器CONTAINER导出到本地文件xxx.tar中</span></span>
<span class="line"><span>docker import xxx.tar image_name:tag：将本地文件xxx.tar导入成镜像，并将镜像命名为image_name:tag</span></span>
<span class="line"><span>docker export/import与docker save/load的区别：</span></span>
<span class="line"><span>export/import会丢弃历史记录和元数据信息，仅保存容器当时的快照状态</span></span>
<span class="line"><span>save/load会保存完整记录，体积更大</span></span>
<span class="line"><span>docker top CONTAINER：查看某个容器内的所有进程</span></span>
<span class="line"><span>docker stats：查看所有容器的统计信息，包括CPU、内存、存储、网络等信息</span></span>
<span class="line"><span>docker cp xxx CONTAINER:xxx 或 docker cp CONTAINER:xxx xxx：在本地和容器间复制文件</span></span>
<span class="line"><span>docker rename CONTAINER1 CONTAINER2：重命名容器</span></span>
<span class="line"><span>docker update CONTAINER --memory 500MB：修改容器限制</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h4 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h4>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>创建 运行镜像</span></span>
<span class="line"><span>docker run -p 20000:22 --name my_docker_server -itd docker_lesson:1.0</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>mysql</span></a></h2>
<h3 id="导出完整数据库" tabindex="-1"><a class="header-anchor" href="#导出完整数据库"><span>导出完整数据库</span></a></h3>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>用mysqldump命令导出数据库（此命令的路径即mysql的安装路径）</span></span>
<span class="line"><span>mysqldump -u用户名 -p 数据库名 > 数据库名.sql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>例如</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>/usr/local/mysql/bin</span></span>
<span class="line"><span>mysqldump -uroot -p aaa > aaa.sql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>2、只导出表结构<br>
如果只需要导出表结构</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>mysqldump -u用户名 -p -d 数据库名 > 数据库名.sql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>例如</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>mysqldump -uroot -p -d aaa >aaa.sql</span></span>
<span class="line"><span>可以使用以下命令找到导出的数据库</span></span>
<span class="line"><span>find / -name 数据库名.sql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="导入数据库" tabindex="-1"><a class="header-anchor" href="#导入数据库"><span>导入数据库</span></a></h3>
<p>1、使用mysql命令导入<br>
mysql -u用户名 -p 数据库名 &lt; 数据库名.sql<br>
例如</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>mysql -uroot -p aaa &#x3C; aaa.sql</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>2、使用sources命令导入<br>
先进入到mysql中</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>mysql> create databases aaa;      #创建新的数据库</span></span>
<span class="line"><span>mysql> use aaa;                   #使用已创建的数据库</span></span>
<span class="line"><span>mysql> set names utf-8;           #设置编码</span></span>
<span class="line"><span>mysql> source /aaa.sql            #导入sql文件，注意sql的路径</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vim" tabindex="-1"><a class="header-anchor" href="#vim"><span>vim</span></a></h2>
<div class="language- line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="" data-title="" style="--vp-collapsed-lines:20;--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>(1) i：进入编辑模式</span></span>
<span class="line"><span>    (2) ESC：进入一般命令模式</span></span>
<span class="line"><span>    (3) h 或 左箭头键：光标向左移动一个字符</span></span>
<span class="line"><span>    (4) j 或 向下箭头：光标向下移动一个字符</span></span>
<span class="line"><span>    (5) k 或 向上箭头：光标向上移动一个字符</span></span>
<span class="line"><span>    (6) l 或 向右箭头：光标向右移动一个字符</span></span>
<span class="line"><span>    (7) n&#x3C;Space>：n表示数字，按下数字后再按空格，光标会向右移动这一行的n个字符</span></span>
<span class="line"><span>    (8) 0 或 功能键[Home]：光标移动到本行开头</span></span>
<span class="line"><span>    (9) $ 或 功能键[End]：光标移动到本行末尾</span></span>
<span class="line"><span>    (10) G：光标移动到最后一行</span></span>
<span class="line"><span>    (11) :n 或 nG：n为数字，光标移动到第n行</span></span>
<span class="line"><span>    (12) gg：光标移动到第一行，相当于1G</span></span>
<span class="line"><span>    (13) n&#x3C;Enter>：n为数字，光标向下移动n行</span></span>
<span class="line"><span>    (14) /word：向光标之下寻找第一个值为word的字符串。</span></span>
<span class="line"><span>    (15) ?word：向光标之上寻找第一个值为word的字符串。</span></span>
<span class="line"><span>    (16) n：重复前一个查找操作</span></span>
<span class="line"><span>    (17) N：反向重复前一个查找操作</span></span>
<span class="line"><span>    (18) :n1,n2s/word1/word2/g：n1与n2为数字，在第n1行与n2行之间寻找word1这个字符串，并将该字符串替换为word2</span></span>
<span class="line"><span>    (19) :1,$s/word1/word2/g：将全文的word1替换为word2</span></span>
<span class="line"><span>    (20) :1,$s/word1/word2/gc：将全文的word1替换为word2，且在替换前要求用户确认。</span></span>
<span class="line"><span>    (21) v：选中文本</span></span>
<span class="line"><span>    (22) d：删除选中的文本</span></span>
<span class="line"><span>    (23) dd: 删除当前行</span></span>
<span class="line"><span>    (24) y：复制选中的文本</span></span>
<span class="line"><span>    (25) yy: 复制当前行</span></span>
<span class="line"><span>    (26) p: 将复制的数据在光标的下一行/下一个位置粘贴</span></span>
<span class="line"><span>    (27) u：撤销</span></span>
<span class="line"><span>    (28) Ctrl + r：取消撤销</span></span>
<span class="line"><span>    (29) 大于号 >：将选中的文本整体向右缩进一次</span></span>
<span class="line"><span>    (30) 小于号 &#x3C;：将选中的文本整体向左缩进一次</span></span>
<span class="line"><span>    (31) :w 保存</span></span>
<span class="line"><span>    (32) :w! 强制保存</span></span>
<span class="line"><span>    (33) :q 退出</span></span>
<span class="line"><span>    (34) :q! 强制退出</span></span>
<span class="line"><span>    (35) :wq 保存并退出</span></span>
<span class="line"><span>    (36) :set paste 设置成粘贴模式，取消代码自动缩进</span></span>
<span class="line"><span>    (37) :set nopaste 取消粘贴模式，开启代码自动缩进</span></span>
<span class="line"><span>    (38) :set nu 显示行号</span></span>
<span class="line"><span>    (39) :set nonu 隐藏行号</span></span>
<span class="line"><span>    (40) gg=G：将全文代码格式化</span></span>
<span class="line"><span>    (41) :noh 关闭查找关键词高亮</span></span>
<span class="line"><span>    (42) Ctrl + q：当vim卡死时，可以取消当前正在执行的命令</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h2 id="ssh-免密登录" tabindex="-1"><a class="header-anchor" href="#ssh-免密登录"><span>ssh 免密登录</span></a></h2>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>ssh-keygen            先生成一对密钥</span></span>
<span class="line"><span>ssh-keygen -R 127.0.0.1   清除公钥信息</span></span>
<span class="line"><span>ssh-copy-id  127.0.0.1    发送公钥</span></span>
<span class="line"><span>/.ssh 下创建config文件</span></span>
<span class="line"><span>Host 别名</span></span>
<span class="line"><span>        Hostname  127.0.0.1</span></span>
<span class="line"><span>        User 登录名</span></span>
<span class="line"><span>最后即可使用ssh 别名登录</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


