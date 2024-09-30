import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/SSM/quartz.html.vue"
const data = JSON.parse("{\"path\":\"/blog/SSM/quartz.html\",\"title\":\"Quartz\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Quartz\",\"icon\":\"time\",\"order\":2,\"description\":\"quartz的简单操作以及整合Spring Boot\",\"category\":[\"SSM\"],\"tag\":[\"Quartz\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://docs.beink.cn/blog/SSM/quartz.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Quartz\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"quartz的简单操作以及整合Spring Boot\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-09-26T07:24:00.000Z\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Quartz\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-09-26T07:24:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Quartz\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2024-09-26T07:24:00.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"mishu\\\",\\\"url\\\":\\\"https://github.com/ToTryEveryThing/my-docs\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"整合spring boot\",\"slug\":\"整合spring-boot\",\"link\":\"#整合spring-boot\",\"children\":[]}],\"git\":{\"createdTime\":1700019772000,\"updatedTime\":1727335440000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":5}]},\"readingTime\":{\"minutes\":6.99,\"words\":2097},\"filePathRelative\":\"blog/SSM/quartz.md\",\"localizedDate\":\"2023年11月15日\",\"excerpt\":\"\\n<p><a href=\\\"https://www.quartz-scheduler.org/documentation/quartz-2.3.0/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">官方文档</a></p>\\n<blockquote>\\n<ol>\\n<li><code>Job</code> 表示一个工作，要执行的具体内容</li>\\n<li><code>JobDetail</code> 表示一个具体的可执行的调度程序，Job 是这个可执行程调度程序所要执行的内容，另外 JobDetail 还包含了这个任务调度的方案略。</li>\\n<li><code>Trigger</code> 代表一个调度参数的配置，什么时候去调。</li>\\n<li><code>Scheduler</code> 代表一个调度容器，一个调度容器中可以注册多个 JobDetail 和 Trigger。当 Trigger 与 JobDetail 组合，就可以被 Scheduler 容器调度了。</li>\\n</ol>\\n</blockquote>\"}")
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
