import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/Microservices/rabbitmq.html.vue"
const data = JSON.parse("{\"path\":\"/blog/Microservices/rabbitmq.html\",\"title\":\"RabbitMQ\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"RabbitMQ\",\"icon\":\"devicon:rabbitmq\",\"description\":\"分布式消息中间件\",\"order\":2,\"category\":[\"微服务\"],\"tag\":[\"RabbitMQ\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"基础部分\",\"slug\":\"基础部分\",\"link\":\"#基础部分\",\"children\":[{\"level\":3,\"title\":\"simple简单模式\",\"slug\":\"simple简单模式\",\"link\":\"#simple简单模式\",\"children\":[]},{\"level\":3,\"title\":\"任务模型\",\"slug\":\"任务模型\",\"link\":\"#任务模型\",\"children\":[]},{\"level\":3,\"title\":\"广播\",\"slug\":\"广播\",\"link\":\"#广播\",\"children\":[]},{\"level\":3,\"title\":\"路由模型\",\"slug\":\"路由模型\",\"link\":\"#路由模型\",\"children\":[]}]},{\"level\":2,\"title\":\"spring boot 整合\",\"slug\":\"spring-boot-整合\",\"link\":\"#spring-boot-整合\",\"children\":[]},{\"level\":2,\"title\":\"高级\",\"slug\":\"高级\",\"link\":\"#高级\",\"children\":[{\"level\":3,\"title\":\"发送者的可靠性\",\"slug\":\"发送者的可靠性\",\"link\":\"#发送者的可靠性\",\"children\":[]},{\"level\":3,\"title\":\"MQ的可靠性\",\"slug\":\"mq的可靠性\",\"link\":\"#mq的可靠性\",\"children\":[]},{\"level\":3,\"title\":\"消费者的可靠性\",\"slug\":\"消费者的可靠性\",\"link\":\"#消费者的可靠性\",\"children\":[]},{\"level\":3,\"title\":\"延迟队列\",\"slug\":\"延迟队列\",\"link\":\"#延迟队列\",\"children\":[]}]}],\"git\":{\"createdTime\":1686126382000,\"updatedTime\":1724832063000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":8}]},\"readingTime\":{\"minutes\":22.28,\"words\":6683},\"filePathRelative\":\"blog/Microservices/rabbitmq.md\",\"localizedDate\":\"2023年6月7日\",\"excerpt\":\"\\n<blockquote>\\n<p>安装地址 <a href=\\\"https://www.cnblogs.com/Aamir-Ye/p/16832374.html\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Docker安装RabbitMQ详细步骤 - 逊老头 - 博客园 (cnblogs.com)</a><br>\\n学习地址 <a href=\\\"https://www.bilibili.com/video/BV1dE411K7MG?p=7&amp;vd_source=f8821730ff8a13ec89104c8629e6d42b\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">MQ的引言和不同MQ的特点_哔哩哔哩_bilibili</a><br>\\n<a href=\\\"https://blog.csdn.net/weixin_44467567/article/details/136713078\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">完美解决 RabbitMQ可视化界面Overview不显示折线图和队列不显示Messages</a></p>\\n</blockquote>\"}")
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
