import comp from "D:/study/ToTryEveryThing/my-docs/src/.vuepress/.temp/pages/blog/worklogs/class.html.vue"
const data = JSON.parse("{\"path\":\"/blog/worklogs/class.html\",\"title\":\"class\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"class\",\"icon\":\"vscode-icons:file-type-class\",\"order\":2,\"description\":\"class\",\"category\":[\"work\"],\"tag\":[\"class\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://docs.beink.cn/blog/worklogs/class.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"class\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"class\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://beink.oss-cn-beijing.aliyuncs.com/study/Snipaste_2024-11-20_16-13-52.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-11-20T08:25:36.000Z\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"class\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-11-20T08:25:36.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"class\\\",\\\"image\\\":[\\\"https://beink.oss-cn-beijing.aliyuncs.com/study/Snipaste_2024-11-20_16-13-52.png\\\"],\\\"dateModified\\\":\\\"2024-11-20T08:25:36.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"mishu\\\",\\\"url\\\":\\\"https://github.com/ToTryEveryThing/my-docs\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"SseEmitter\",\"slug\":\"sseemitter\",\"link\":\"#sseemitter\",\"children\":[]}],\"git\":{\"createdTime\":1732091136000,\"updatedTime\":1732091136000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":0.96,\"words\":288},\"filePathRelative\":\"blog/worklogs/class.md\",\"localizedDate\":\"2024年11月20日\",\"excerpt\":\"<h2>SseEmitter</h2>\\n<blockquote>\\n<p>SseEmitter 是 Spring 框架中用于服务器发送事件（Server-Sent Events，SSE）的一个类。SSE 是一种允许服务器主动向客户端发送数据的技术，通常用于创建到服务器的单向连接，以便服务器可以在有新数据时立即推送给客户端。</p>\\n</blockquote>\\n<p>SseEmitter 类提供了一种方便的方式来发送这些事件。以下是一些基本的使用步骤：</p>\\n<ul>\\n<li>\\n<p>创建 SseEmitter 实例：在 Spring 控制器中，可以创建一个 SseEmitter 实例，并返回它。</p>\\n</li>\\n<li>\\n<p>发送数据：使用 SseEmitter 的 send 方法来发送数据给客户端。</p>\\n</li>\\n<li>\\n<p>完成或错误处理：当完成发送数据时，可以调用 SseEmitter 的 complete 方法来关闭连接。如果发生错误，可以调用 completeWithError 方法。</p>\\n</li>\\n<li>\\n<p>超时处理：可以设置超时时间，并且在超时后进行相应的处理</p>\\n</li>\\n</ul>\"}")
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
