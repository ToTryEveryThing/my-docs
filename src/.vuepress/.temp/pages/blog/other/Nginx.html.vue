<template><div><p><a href="https://nginx.p2hp.com/en/download.html" target="_blank" rel="noopener noreferrer">nginx: 下载 (p2hp.com)</a></p>
<img src="https://cdn.beink.cn/study/image-20240820152120683.png" alt="版本下载" style="zoom: 50%;" />
<blockquote>
<p>docker run -d --name nginx <br>
-p 8080:8080 \ <br>
-v /home/nginx/html:/etc/nginx/html <br>
-v /home/nginx/nginx.conf:/etc/nginx/nginx.conf \ <br>
nginx</p>
</blockquote>
<h2 id="正向代理" tabindex="-1"><a class="header-anchor" href="#正向代理"><span>正向代理</span></a></h2>
<ul>
<li>正向代理是代理客户端的代理服务器，客户端通过正向代理服务器发送请求到目标服务器。</li>
<li>正向代理通常是客户端的代理，客户端通过正向代理访问互联网上的内容。</li>
<li>正向代理可以隐藏客户端的真实IP地址，因为请求是通过代理服务器发出的。</li>
<li>使用场景：访问控制、缓存、过滤等。</li>
</ul>
<blockquote>
<p>代理客户端</p>
</blockquote>
<img src="https://cdn.beink.cn/study/c69fd6a0789678740e9e904150bee30e.png" alt="正向代理" style="zoom: 50%;" />
<h2 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理"><span>反向代理</span></a></h2>
<ul>
<li>反向代理是代理服务器，它接收客户端的请求，然后将请求转发到后端的服务器集群中的一个或多个服务器上。</li>
<li>客户端通常不知道反向代理的存在，它们直接与反向代理通信，而反向代理再将请求转发到后端服务器。</li>
<li>反向代理可以提供负载均衡、SSL终端、缓存、压缩、请求/响应修改等功能。</li>
<li>使用场景：提高网站性能和安全性、隐藏后端服务器的细节、提供负载均衡等。</li>
</ul>
<blockquote>
<p>代理服务端</p>
</blockquote>
<img src="https://cdn.beink.cn/study/b7517511d51ecdd8c055c2c26c93703f.png" alt="反向代理" style="zoom:50%;" />
<p>配置</p>
<blockquote>
<p>只需要添加代理地址，当访问localhost:80时，会代理到<a href="http://127.0.0.1:9090" target="_blank" rel="noopener noreferrer">http://127.0.0.1:9090</a></p>
<p>在这个过程中，不知道请求被转发到了哪个后端服务器，所有的交互都通过Nginx进行</p>
</blockquote>
<div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">      80</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> localhost;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    #charset koi8-r;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    #access_log  logs/host.access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">http://127.0.0.1:9090;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        root </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">  html;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        index </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡"><span>负载均衡</span></a></h2>
<p>启动两台实例</p>
<figure><img src="https://cdn.beink.cn/study/image-20240820154128449.png" alt="image-20240820154128449" tabindex="0" loading="lazy"><figcaption>image-20240820154128449</figcaption></figure>
<p>配置</p>
<div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF"> serverList</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> 127.0.0.1:9090;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> 127.0.0.1:9091;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">      80</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    server_name </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 127.0.0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        proxy_pass </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">http://serverList;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        index </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    }</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>访问 <a href="http://127.0.0.1/test" target="_blank" rel="noopener noreferrer">127.0.0.1/test</a></p>
</blockquote>
<img src="https://cdn.beink.cn/study/image-20240820155440975.png" alt="负载均衡效果图"/>
<h2 id="nginx-conf" tabindex="-1"><a class="header-anchor" href="#nginx-conf"><span>nginx.conf</span></a></h2>
<div class="language-nginx line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--vp-collapsed-lines:20;--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 定义配置文件的全局块，可以设置一些影响 Nginx 服务器整体运行的指令</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">user </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> nginx;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 定义运行 Nginx 服务的用户</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">worker_processes </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> auto;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 定义工作进程数，auto 表示与CPU核心数相同</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 错误日志定义，可以指定日志文件的存放路径和日志级别</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">error_log </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> /var/log/nginx/error.log </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">warn</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 进程文件，定义了 Nginx 启动时的 PID 文件存放位置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">pid </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">       /var/run/nginx.pid;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 定义一个 events 块，设置与客户端连接相关的参数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">events</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    worker_connections </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 定义每个工作进程可以同时处理的连接数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 定义一个 http 块，设置与 HTTP 服务相关的指令</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">http</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    include </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">      /etc/nginx/mime.types;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 定义文件扩展名与 MIME 类型映射</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    default_type </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> application/octet-stream;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 默认的 MIME 类型</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    # 日志格式定义，可以自定义日志格式</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    #                  '$status $body_bytes_sent "$http_referer" '</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    #                  '"$http_user_agent" "$http_x_forwarded_for"';</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    # 定义日志文件的存放路径和使用的日志格式</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    # access_log  /var/log/nginx/access.log  main;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    # 定义发送文件的缓冲区大小</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    sendfile </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">       on</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 开启高效文件传输模式</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    # tcp_nopush     on;  # 关闭 TCP 推送，可以提高网络效率</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    # 定义连接超时时间</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    keepalive_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> 65</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    # 定义 gzip 压缩，提高传输效率</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    gzip </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    gzip_types </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> text/plain application/xml application/xhtml+xml text/css</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">                 application/javascript application/x-javascript;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    # 包含其他配置文件，如默认的 server 配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    # include /etc/nginx/conf.d/*.conf;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    # include /etc/nginx/sites-enabled/*;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    # 负载均衡列表</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    upstream</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF"> serverList</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> 127.0.0.1:9090;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> 127.0.0.1:9091;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">    # 定义一个 server 块，设置与特定虚拟主机相关的指令</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">      80</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 监听 80 端口</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> localhost;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 定义服务器名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        # 定义 location 块，设置 URL 匹配规则和处理方式</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        location</span><span style="--shiki-light:#6F42C1;--shiki-dark:#ABB2BF"> / </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">            # 负载均衡</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">            # proxy_pass http://serverList;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">            </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">            # 定义服务器的根目录</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">            root </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">  /usr/share/nginx/html;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">            index </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> index.html index.htm;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        # 定义静态文件的处理规则</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        location</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF"> ~*</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75"> \.(jpg|jpeg|png|gif|ico|css|js)$ </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">            expires </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">30d</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 设置静态文件的缓存时间</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        # 定义错误页面的处理规则</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        error_page </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">  404</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> /404.html;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        location</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#E06C75"> /404.html </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">{</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">            internal</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 定义内部重定向</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">    server</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        listen </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">443</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> ssl;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 监听 443 端口，并启用 SSL</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        server_name </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">example.com www.example.com;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 定义服务器名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        # SSL 证书和私钥文件路径</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        ssl_certificate </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">/etc/ssl/certs/nginx.crt;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 证书文件路径</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        ssl_certificate_key </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">/etc/ssl/private/nginx.key;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 私钥文件路径</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        # SSL 协议设置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        ssl_protocols </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">TLSv1 TLSv1.1 TLSv1.2;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 启用的 SSL 协议版本</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        ssl_ciphers </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">'ECDHE-RSA-AES128-GCM-SHA256:AES128+EECDH:AES256+EECDH'</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 优先使用的加密套件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        ssl_prefer_server_ciphers </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">on</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 优先使用服务器端的加密套件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        # 其他 SSL 相关设置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        ssl_session_cache </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">shared:SSL:10m;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 定义 SSL 会话缓存</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        ssl_session_timeout </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">5m</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># SSL 会话超时时间</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        # OCSP Stapling 配置</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        ssl_stapling </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">on</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 开启 OCSP Stapling</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        ssl_stapling_verify </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66">on</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic"># 开启 OCSP Stapling 验证</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        # 配置 HSTS（HTTP Strict Transport Security）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD">        add_header </span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">Strict-Transport-Security </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379">"max-age=31536000; includeSubDomains"</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF"> always;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">        # ... 其他配置 ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></div></template>


