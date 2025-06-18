import comp from "D:/study/ToTryEveryThing/my-docs/src/.vuepress/.temp/pages/blog/other/Nginx.html.vue"
const data = JSON.parse("{\"path\":\"/blog/other/Nginx.html\",\"title\":\"Nginx\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Nginx\",\"icon\":\"vscode-icons:file-type-nginx\",\"order\":2,\"description\":\"Nginx(代理、负载均衡)\",\"category\":[\"常用操作\"],\"tag\":[\"Nginx\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://docs.beink.cn/blog/other/Nginx.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Nginx\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Nginx(代理、负载均衡)\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://cdn.beink.cn/study/image-20240820154128449.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-10-09T01:57:56.000Z\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Nginx\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-10-09T01:57:56.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Nginx\\\",\\\"image\\\":[\\\"https://cdn.beink.cn/study/image-20240820154128449.png\\\"],\\\"dateModified\\\":\\\"2024-10-09T01:57:56.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"mishu\\\",\\\"url\\\":\\\"https://github.com/ToTryEveryThing/my-docs\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"正向代理\",\"slug\":\"正向代理\",\"link\":\"#正向代理\",\"children\":[]},{\"level\":2,\"title\":\"反向代理\",\"slug\":\"反向代理\",\"link\":\"#反向代理\",\"children\":[]},{\"level\":2,\"title\":\"负载均衡\",\"slug\":\"负载均衡\",\"link\":\"#负载均衡\",\"children\":[]},{\"level\":2,\"title\":\"nginx.conf\",\"slug\":\"nginx-conf\",\"link\":\"#nginx-conf\",\"children\":[]}],\"git\":{\"createdTime\":1724144670000,\"updatedTime\":1728439076000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":3.83,\"words\":1150},\"filePathRelative\":\"blog/other/Nginx.md\",\"localizedDate\":\"2024年8月20日\",\"excerpt\":\"<p><a href=\\\"https://nginx.p2hp.com/en/download.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">nginx: 下载 (p2hp.com)</a></p>\\n<img src=\\\"https://cdn.beink.cn/study/image-20240820152120683.png\\\" alt=\\\"版本下载\\\" style=\\\"zoom: 50%;\\\">\\n<blockquote>\\n<p>docker run -d --name nginx <br>\\n-p 8080:8080 \\\\ <br>\\n-v /home/nginx/html:/etc/nginx/html <br>\\n-v /home/nginx/nginx.conf:/etc/nginx/nginx.conf \\\\ <br>\\nnginx</p>\\n</blockquote>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
