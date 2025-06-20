import comp from "D:/study/ToTryEveryThing/my-docs/src/.vuepress/.temp/pages/blog/tools/cron.html.vue"
const data = JSON.parse("{\"path\":\"/blog/tools/cron.html\",\"title\":\"cron\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"cron\",\"icon\":\"flat-color-icons:serial-tasks\",\"order\":1,\"description\":\"Cron表达式\",\"category\":[\"Tool\"],\"tag\":[\"cron\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://docs.beink.cn/blog/tools/cron.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"cron\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Cron表达式\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-10-09T01:57:56.000Z\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"cron\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-10-09T01:57:56.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"cron\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2024-10-09T01:57:56.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"mishu\\\",\\\"url\\\":\\\"https://github.com/ToTryEveryThing/my-docs\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"取值范围\",\"slug\":\"取值范围\",\"link\":\"#取值范围\",\"children\":[]},{\"level\":2,\"title\":\"连接符\",\"slug\":\"连接符\",\"link\":\"#连接符\",\"children\":[]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]}],\"git\":{\"createdTime\":1687423291000,\"updatedTime\":1728439076000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":4}]},\"readingTime\":{\"minutes\":2.33,\"words\":700},\"filePathRelative\":\"blog/tools/cron.md\",\"localizedDate\":\"2023年6月22日\",\"excerpt\":\"\\n<p><a href=\\\"https://crontab.guru/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">在线测试</a></p>\\n<blockquote>\\n<p>Cron适用于周期性执行、日常维护、在某时刻需要完成的单次任务等场景。Cron表达式是一个具有时间含义的字符串，字符串以5个空格隔开，分为6个域，格式为<code>X X X X X X</code>。其中<code>X</code>是一个域的占位符。单个域有多个取值时，使用半角逗号<code>,</code>隔开取值。每个域可以是确定的取值，也可以是具有逻辑意义的特殊字符。</p>\\n</blockquote>\"}")
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
