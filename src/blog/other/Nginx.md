---
title: Nginx
icon: Nginx
order: 2
description: Nginx(代理、负载均衡)
category:
  - 常用操作
tag:
  - Nginx
---

[nginx: 下载 (p2hp.com)](https://nginx.p2hp.com/en/download.html)

<img src="https://cdn.beink.cn/study/image-20240820152120683.png" alt="版本下载" style="zoom: 50%;" />

> docker run -d --name nginx \
> -p 8080:8080 \ 
> -v /home/nginx/html:/etc/nginx/html \
> -v /home/nginx/nginx.conf:/etc/nginx/nginx.conf \ 
> nginx

## 正向代理

- 正向代理是代理客户端的代理服务器，客户端通过正向代理服务器发送请求到目标服务器。
- 正向代理通常是客户端的代理，客户端通过正向代理访问互联网上的内容。
- 正向代理可以隐藏客户端的真实IP地址，因为请求是通过代理服务器发出的。
- 使用场景：访问控制、缓存、过滤等。

> 代理客户端

<img src="https://cdn.beink.cn/study/c69fd6a0789678740e9e904150bee30e.png" alt="正向代理" style="zoom: 50%;" />



## 反向代理

- 反向代理是代理服务器，它接收客户端的请求，然后将请求转发到后端的服务器集群中的一个或多个服务器上。
- 客户端通常不知道反向代理的存在，它们直接与反向代理通信，而反向代理再将请求转发到后端服务器。
- 反向代理可以提供负载均衡、SSL终端、缓存、压缩、请求/响应修改等功能。
- 使用场景：提高网站性能和安全性、隐藏后端服务器的细节、提供负载均衡等。

> 代理服务端

<img src="https://cdn.beink.cn/study/b7517511d51ecdd8c055c2c26c93703f.png" alt="反向代理" style="zoom:50%;" />

配置

> 只需要添加代理地址，当访问localhost:80时，会代理到http://127.0.0.1:9090
>
> 在这个过程中，不知道请求被转发到了哪个后端服务器，所有的交互都通过Nginx进行

```nginx
server {
    listen       80;
    server_name  localhost;

    #charset koi8-r;

    #access_log  logs/host.access.log  main;

    location / {
        proxy_pass http://127.0.0.1:9090;
        root   html;
        index  index.html index.htm;
    }
```

## 负载均衡

启动两台实例

![image-20240820154128449](https://cdn.beink.cn/study/image-20240820154128449.png)

配置

```nginx
upstream serverList{
    server 127.0.0.1:9090;
    server 127.0.0.1:9091;
}

server {
    listen       80;
    server_name  127.0.0.1;

    location / {
        proxy_pass http://serverList;
        index  index.html index.htm;
    }
```

> 访问 [127.0.0.1/test](http://127.0.0.1/test)

<img src="https://cdn.beink.cn/study/image-20240820155440975.png" alt="负载均衡效果图"/>



## nginx.conf

```nginx
# 定义配置文件的全局块，可以设置一些影响 Nginx 服务器整体运行的指令
user  nginx;  # 定义运行 Nginx 服务的用户
worker_processes  auto;  # 定义工作进程数，auto 表示与CPU核心数相同

# 错误日志定义，可以指定日志文件的存放路径和日志级别
error_log  /var/log/nginx/error.log warn;

# 进程文件，定义了 Nginx 启动时的 PID 文件存放位置
pid        /var/run/nginx.pid;

# 定义一个 events 块，设置与客户端连接相关的参数
events {
    worker_connections  1024;  # 定义每个工作进程可以同时处理的连接数
}

# 定义一个 http 块，设置与 HTTP 服务相关的指令
http {
    include       /etc/nginx/mime.types;  # 定义文件扩展名与 MIME 类型映射
    default_type  application/octet-stream;  # 默认的 MIME 类型

    # 日志格式定义，可以自定义日志格式
    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    # 定义日志文件的存放路径和使用的日志格式
    # access_log  /var/log/nginx/access.log  main;

    # 定义发送文件的缓冲区大小
    sendfile        on;  # 开启高效文件传输模式
    # tcp_nopush     on;  # 关闭 TCP 推送，可以提高网络效率

    # 定义连接超时时间
    keepalive_timeout  65;

    # 定义 gzip 压缩，提高传输效率
    gzip  on;
    gzip_types  text/plain application/xml application/xhtml+xml text/css
                 application/javascript application/x-javascript;

    # 包含其他配置文件，如默认的 server 配置
    # include /etc/nginx/conf.d/*.conf;
    # include /etc/nginx/sites-enabled/*;

    # 负载均衡列表
    upstream serverList{
        server 127.0.0.1:9090;
        server 127.0.0.1:9091;
    }
    
    # 定义一个 server 块，设置与特定虚拟主机相关的指令
    server {
        listen       80;  # 监听 80 端口
        server_name  localhost;  # 定义服务器名

        # 定义 location 块，设置 URL 匹配规则和处理方式
        location / {
            # 负载均衡
            # proxy_pass http://serverList;
            
            # 定义服务器的根目录
            root   /usr/share/nginx/html;
            index  index.html index.htm;
        }

        # 定义静态文件的处理规则
        location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
            expires 30d;  # 设置静态文件的缓存时间
        }

        # 定义错误页面的处理规则
        error_page   404 /404.html;
        location = /404.html {
            internal;  # 定义内部重定向
        }
    }
    
    server {
        listen 443 ssl;  # 监听 443 端口，并启用 SSL
        server_name example.com www.example.com;  # 定义服务器名

        # SSL 证书和私钥文件路径
        ssl_certificate /etc/ssl/certs/nginx.crt;  # 证书文件路径
        ssl_certificate_key /etc/ssl/private/nginx.key;  # 私钥文件路径

        # SSL 协议设置
        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;  # 启用的 SSL 协议版本
        ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:AES128+EECDH:AES256+EECDH';  # 优先使用的加密套件
        ssl_prefer_server_ciphers on;  # 优先使用服务器端的加密套件

        # 其他 SSL 相关设置
        ssl_session_cache shared:SSL:10m;  # 定义 SSL 会话缓存
        ssl_session_timeout 5m;  # SSL 会话超时时间

        # OCSP Stapling 配置
        ssl_stapling on;  # 开启 OCSP Stapling
        ssl_stapling_verify on;  # 开启 OCSP Stapling 验证

        # 配置 HSTS（HTTP Strict Transport Security）
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;

        # ... 其他配置 ...
    }
    
    
}
```





















