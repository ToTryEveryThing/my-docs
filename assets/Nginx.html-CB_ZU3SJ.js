import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as l,c as p,a as n,d as s,b as e,e as i}from"./app-DrP46SP8.js";const o={},d={href:"https://nginx.p2hp.com/en/download.html",target:"_blank",rel:"noopener noreferrer"},r=i('<img src="https://cdn.beink.cn/study/image-20240820152120683.png" alt="版本下载" style="zoom:50%;"><blockquote><p>docker run -d --name nginx <br> -p 8080:8080 \\ <br> -v /home/nginx/html:/etc/nginx/html <br> -v /home/nginx/nginx.conf:/etc/nginx/nginx.conf \\ <br> nginx</p></blockquote><h2 id="正向代理" tabindex="-1"><a class="header-anchor" href="#正向代理" aria-hidden="true">#</a> 正向代理</h2><ul><li>正向代理是代理客户端的代理服务器，客户端通过正向代理服务器发送请求到目标服务器。</li><li>正向代理通常是客户端的代理，客户端通过正向代理访问互联网上的内容。</li><li>正向代理可以隐藏客户端的真实IP地址，因为请求是通过代理服务器发出的。</li><li>使用场景：访问控制、缓存、过滤等。</li></ul><blockquote><p>代理客户端</p></blockquote><img src="https://cdn.beink.cn/study/c69fd6a0789678740e9e904150bee30e.png" alt="正向代理" style="zoom:50%;"><h2 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理" aria-hidden="true">#</a> 反向代理</h2><ul><li>反向代理是代理服务器，它接收客户端的请求，然后将请求转发到后端的服务器集群中的一个或多个服务器上。</li><li>客户端通常不知道反向代理的存在，它们直接与反向代理通信，而反向代理再将请求转发到后端服务器。</li><li>反向代理可以提供负载均衡、SSL终端、缓存、压缩、请求/响应修改等功能。</li><li>使用场景：提高网站性能和安全性、隐藏后端服务器的细节、提供负载均衡等。</li></ul><blockquote><p>代理服务端</p></blockquote><img src="https://cdn.beink.cn/study/b7517511d51ecdd8c055c2c26c93703f.png" alt="反向代理" style="zoom:50%;"><p>配置</p>',11),v={href:"http://127.0.0.1:9090",target:"_blank",rel:"noopener noreferrer"},u=n("p",null,"在这个过程中，不知道请求被转发到了哪个后端服务器，所有的交互都通过Nginx进行",-1),k=i(`<div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>

    <span class="token comment">#charset koi8-r;</span>

    <span class="token comment">#access_log  logs/host.access.log  main;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:9090</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">root</span>   html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="负载均衡" tabindex="-1"><a class="header-anchor" href="#负载均衡" aria-hidden="true">#</a> 负载均衡</h2><p>启动两台实例</p><figure><img src="https://cdn.beink.cn/study/image-20240820154128449.png" alt="image-20240820154128449" tabindex="0" loading="lazy"><figcaption>image-20240820154128449</figcaption></figure><p>配置</p><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">upstream</span> serverList</span><span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:9090</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:9091</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">server_name</span>  127.0.0.1</span><span class="token punctuation">;</span>

    <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">proxy_pass</span> http://serverList</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),m={href:"http://127.0.0.1/test",target:"_blank",rel:"noopener noreferrer"},b=i(`<img src="https://cdn.beink.cn/study/image-20240820155440975.png" alt="负载均衡效果图"><h2 id="nginx-conf" tabindex="-1"><a class="header-anchor" href="#nginx-conf" aria-hidden="true">#</a> nginx.conf</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token comment"># 定义配置文件的全局块，可以设置一些影响 Nginx 服务器整体运行的指令</span>
<span class="token directive"><span class="token keyword">user</span>  nginx</span><span class="token punctuation">;</span>  <span class="token comment"># 定义运行 Nginx 服务的用户</span>
<span class="token directive"><span class="token keyword">worker_processes</span>  auto</span><span class="token punctuation">;</span>  <span class="token comment"># 定义工作进程数，auto 表示与CPU核心数相同</span>

<span class="token comment"># 错误日志定义，可以指定日志文件的存放路径和日志级别</span>
<span class="token directive"><span class="token keyword">error_log</span>  /var/log/nginx/error.log warn</span><span class="token punctuation">;</span>

<span class="token comment"># 进程文件，定义了 Nginx 启动时的 PID 文件存放位置</span>
<span class="token directive"><span class="token keyword">pid</span>        /var/run/nginx.pid</span><span class="token punctuation">;</span>

<span class="token comment"># 定义一个 events 块，设置与客户端连接相关的参数</span>
<span class="token directive"><span class="token keyword">events</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">worker_connections</span>  <span class="token number">1024</span></span><span class="token punctuation">;</span>  <span class="token comment"># 定义每个工作进程可以同时处理的连接数</span>
<span class="token punctuation">}</span>

<span class="token comment"># 定义一个 http 块，设置与 HTTP 服务相关的指令</span>
<span class="token directive"><span class="token keyword">http</span></span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">include</span>       /etc/nginx/mime.types</span><span class="token punctuation">;</span>  <span class="token comment"># 定义文件扩展名与 MIME 类型映射</span>
    <span class="token directive"><span class="token keyword">default_type</span>  application/octet-stream</span><span class="token punctuation">;</span>  <span class="token comment"># 默认的 MIME 类型</span>

    <span class="token comment"># 日志格式定义，可以自定义日志格式</span>
    <span class="token comment">#log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;</span>
    <span class="token comment">#                  &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;</span>
    <span class="token comment">#                  &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;</span>

    <span class="token comment"># 定义日志文件的存放路径和使用的日志格式</span>
    <span class="token comment"># access_log  /var/log/nginx/access.log  main;</span>

    <span class="token comment"># 定义发送文件的缓冲区大小</span>
    <span class="token directive"><span class="token keyword">sendfile</span>        <span class="token boolean">on</span></span><span class="token punctuation">;</span>  <span class="token comment"># 开启高效文件传输模式</span>
    <span class="token comment"># tcp_nopush     on;  # 关闭 TCP 推送，可以提高网络效率</span>

    <span class="token comment"># 定义连接超时时间</span>
    <span class="token directive"><span class="token keyword">keepalive_timeout</span>  <span class="token number">65</span></span><span class="token punctuation">;</span>

    <span class="token comment"># 定义 gzip 压缩，提高传输效率</span>
    <span class="token directive"><span class="token keyword">gzip</span>  <span class="token boolean">on</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">gzip_types</span>  text/plain application/xml application/xhtml+xml text/css
                 application/javascript application/x-javascript</span><span class="token punctuation">;</span>

    <span class="token comment"># 包含其他配置文件，如默认的 server 配置</span>
    <span class="token comment"># include /etc/nginx/conf.d/*.conf;</span>
    <span class="token comment"># include /etc/nginx/sites-enabled/*;</span>

    <span class="token comment"># 负载均衡列表</span>
    <span class="token directive"><span class="token keyword">upstream</span> serverList</span><span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:9090</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">server</span> 127.0.0.1:9091</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment"># 定义一个 server 块，设置与特定虚拟主机相关的指令</span>
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span>       <span class="token number">80</span></span><span class="token punctuation">;</span>  <span class="token comment"># 监听 80 端口</span>
        <span class="token directive"><span class="token keyword">server_name</span>  localhost</span><span class="token punctuation">;</span>  <span class="token comment"># 定义服务器名</span>

        <span class="token comment"># 定义 location 块，设置 URL 匹配规则和处理方式</span>
        <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
            <span class="token comment"># 负载均衡</span>
            <span class="token comment"># proxy_pass http://serverList;</span>
            
            <span class="token comment"># 定义服务器的根目录</span>
            <span class="token directive"><span class="token keyword">root</span>   /usr/share/nginx/html</span><span class="token punctuation">;</span>
            <span class="token directive"><span class="token keyword">index</span>  index.html index.htm</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># 定义静态文件的处理规则</span>
        <span class="token directive"><span class="token keyword">location</span> ~* \\.(jpg|jpeg|png|gif|ico|css|js)$</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">expires</span> <span class="token number">30d</span></span><span class="token punctuation">;</span>  <span class="token comment"># 设置静态文件的缓存时间</span>
        <span class="token punctuation">}</span>

        <span class="token comment"># 定义错误页面的处理规则</span>
        <span class="token directive"><span class="token keyword">error_page</span>   <span class="token number">404</span> /404.html</span><span class="token punctuation">;</span>
        <span class="token directive"><span class="token keyword">location</span> = /404.html</span> <span class="token punctuation">{</span>
            <span class="token directive"><span class="token keyword">internal</span></span><span class="token punctuation">;</span>  <span class="token comment"># 定义内部重定向</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token directive"><span class="token keyword">server</span></span> <span class="token punctuation">{</span>
        <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl</span><span class="token punctuation">;</span>  <span class="token comment"># 监听 443 端口，并启用 SSL</span>
        <span class="token directive"><span class="token keyword">server_name</span> example.com www.example.com</span><span class="token punctuation">;</span>  <span class="token comment"># 定义服务器名</span>

        <span class="token comment"># SSL 证书和私钥文件路径</span>
        <span class="token directive"><span class="token keyword">ssl_certificate</span> /etc/ssl/certs/nginx.crt</span><span class="token punctuation">;</span>  <span class="token comment"># 证书文件路径</span>
        <span class="token directive"><span class="token keyword">ssl_certificate_key</span> /etc/ssl/private/nginx.key</span><span class="token punctuation">;</span>  <span class="token comment"># 私钥文件路径</span>

        <span class="token comment"># SSL 协议设置</span>
        <span class="token directive"><span class="token keyword">ssl_protocols</span> TLSv1 TLSv1.1 TLSv1.2</span><span class="token punctuation">;</span>  <span class="token comment"># 启用的 SSL 协议版本</span>
        <span class="token directive"><span class="token keyword">ssl_ciphers</span> <span class="token string">&#39;ECDHE-RSA-AES128-GCM-SHA256:AES128+EECDH:AES256+EECDH&#39;</span></span><span class="token punctuation">;</span>  <span class="token comment"># 优先使用的加密套件</span>
        <span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>  <span class="token comment"># 优先使用服务器端的加密套件</span>

        <span class="token comment"># 其他 SSL 相关设置</span>
        <span class="token directive"><span class="token keyword">ssl_session_cache</span> shared:SSL:10m</span><span class="token punctuation">;</span>  <span class="token comment"># 定义 SSL 会话缓存</span>
        <span class="token directive"><span class="token keyword">ssl_session_timeout</span> <span class="token number">5m</span></span><span class="token punctuation">;</span>  <span class="token comment"># SSL 会话超时时间</span>

        <span class="token comment"># OCSP Stapling 配置</span>
        <span class="token directive"><span class="token keyword">ssl_stapling</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>  <span class="token comment"># 开启 OCSP Stapling</span>
        <span class="token directive"><span class="token keyword">ssl_stapling_verify</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>  <span class="token comment"># 开启 OCSP Stapling 验证</span>

        <span class="token comment"># 配置 HSTS（HTTP Strict Transport Security）</span>
        <span class="token directive"><span class="token keyword">add_header</span> Strict-Transport-Security <span class="token string">&quot;max-age=31536000; includeSubDomains&quot;</span> always</span><span class="token punctuation">;</span>

        <span class="token comment"># ... 其他配置 ...</span>
    <span class="token punctuation">}</span>
    
    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function g(h,y){const a=c("ExternalLinkIcon");return l(),p("div",null,[n("p",null,[n("a",d,[s("nginx: 下载 (p2hp.com)"),e(a)])]),r,n("blockquote",null,[n("p",null,[s("只需要添加代理地址，当访问localhost:80时，会代理到"),n("a",v,[s("http://127.0.0.1:9090"),e(a)])]),u]),k,n("blockquote",null,[n("p",null,[s("访问 "),n("a",m,[s("127.0.0.1/test"),e(a)])])]),b])}const w=t(o,[["render",g],["__file","Nginx.html.vue"]]);export{w as default};
