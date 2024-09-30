import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/itheima/Netty/Netty03.html.vue"
const data = JSON.parse("{\"path\":\"/blog/itheima/Netty/Netty03.html\",\"title\":\"Netty 进阶\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Netty 进阶\",\"icon\":\"Netty\",\"order\":2,\"category\":[\"itheima\"],\"tag\":[\"Netty\"],\"description\":\"三. Netty 进阶 bilibili 1. 粘包与半包 1.1 粘包现象 服务端代码 客户端代码希望发送 10 个消息，每个消息是 16 字节 服务器端的某次输出，可以看到一次就接收了 160 个字节，而非分 10 次接收 1.2 半包现象 客户端代码希望发送 1 个消息，这个消息是 160 字节，代码改为 为现象明显，服务端修改一下接收缓冲区，其...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://docs.beink.cn/blog/itheima/Netty/Netty03.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Netty 进阶\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"三. Netty 进阶 bilibili 1. 粘包与半包 1.1 粘包现象 服务端代码 客户端代码希望发送 10 个消息，每个消息是 16 字节 服务器端的某次输出，可以看到一次就接收了 160 个字节，而非分 10 次接收 1.2 半包现象 客户端代码希望发送 1 个消息，这个消息是 160 字节，代码改为 为现象明显，服务端修改一下接收缓冲区，其...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-08-16T07:37:40.000Z\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Netty\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-08-16T07:37:40.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Netty 进阶\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2024-08-16T07:37:40.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"mishu\\\",\\\"url\\\":\\\"https://github.com/ToTryEveryThing/my-docs\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1. 粘包与半包\",\"slug\":\"_1-粘包与半包\",\"link\":\"#_1-粘包与半包\",\"children\":[{\"level\":3,\"title\":\"1.1 粘包现象\",\"slug\":\"_1-1-粘包现象\",\"link\":\"#_1-1-粘包现象\",\"children\":[]},{\"level\":3,\"title\":\"1.2 半包现象\",\"slug\":\"_1-2-半包现象\",\"link\":\"#_1-2-半包现象\",\"children\":[]},{\"level\":3,\"title\":\"1.3 现象分析\",\"slug\":\"_1-3-现象分析\",\"link\":\"#_1-3-现象分析\",\"children\":[]},{\"level\":3,\"title\":\"1.4 解决方案\",\"slug\":\"_1-4-解决方案\",\"link\":\"#_1-4-解决方案\",\"children\":[]}]},{\"level\":2,\"title\":\"2. 协议设计与解析\",\"slug\":\"_2-协议设计与解析\",\"link\":\"#_2-协议设计与解析\",\"children\":[{\"level\":3,\"title\":\"2.1 为什么需要协议？\",\"slug\":\"_2-1-为什么需要协议\",\"link\":\"#_2-1-为什么需要协议\",\"children\":[]},{\"level\":3,\"title\":\"2.2 redis 协议举例\",\"slug\":\"_2-2-redis-协议举例\",\"link\":\"#_2-2-redis-协议举例\",\"children\":[]},{\"level\":3,\"title\":\"2.3 http 协议举例\",\"slug\":\"_2-3-http-协议举例\",\"link\":\"#_2-3-http-协议举例\",\"children\":[]},{\"level\":3,\"title\":\"2.4 自定义协议要素\",\"slug\":\"_2-4-自定义协议要素\",\"link\":\"#_2-4-自定义协议要素\",\"children\":[]}]},{\"level\":2,\"title\":\"3. 聊天室案例\",\"slug\":\"_3-聊天室案例\",\"link\":\"#_3-聊天室案例\",\"children\":[{\"level\":3,\"title\":\"3.1 聊天室业务介绍\",\"slug\":\"_3-1-聊天室业务介绍\",\"link\":\"#_3-1-聊天室业务介绍\",\"children\":[]},{\"level\":3,\"title\":\"3.2 聊天室业务-登录\",\"slug\":\"_3-2-聊天室业务-登录\",\"link\":\"#_3-2-聊天室业务-登录\",\"children\":[]},{\"level\":3,\"title\":\"3.3 聊天室业务-单聊\",\"slug\":\"_3-3-聊天室业务-单聊\",\"link\":\"#_3-3-聊天室业务-单聊\",\"children\":[]},{\"level\":3,\"title\":\"3.4 聊天室业务-群聊\",\"slug\":\"_3-4-聊天室业务-群聊\",\"link\":\"#_3-4-聊天室业务-群聊\",\"children\":[]},{\"level\":3,\"title\":\"3.5 聊天室业务-退出\",\"slug\":\"_3-5-聊天室业务-退出\",\"link\":\"#_3-5-聊天室业务-退出\",\"children\":[]},{\"level\":3,\"title\":\"3.6 聊天室业务-空闲检测\",\"slug\":\"_3-6-聊天室业务-空闲检测\",\"link\":\"#_3-6-聊天室业务-空闲检测\",\"children\":[]}]}],\"git\":{\"createdTime\":1721356358000,\"updatedTime\":1723793860000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":4}]},\"readingTime\":{\"minutes\":29.57,\"words\":8872},\"filePathRelative\":\"blog/itheima/Netty/Netty03.md\",\"localizedDate\":\"2024年7月19日\",\"excerpt\":\"\\n<p><a href=\\\"https://www.bilibili.com/video/BV1py4y1E7oA?p=91&amp;vd_source=f8821730ff8a13ec89104c8629e6d42b\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">bilibili</a></p>\\n<!-- <iframe src=\\\"//player.bilibili.com/player.html?isOutside=true&aid=802157994&bvid=BV1py4y1E7oA&cid=311805996&p=91\\\" scrolling=\\\"no\\\" border=\\\"0\\\" frameborder=\\\"no\\\" framespacing=\\\"0\\\" allowfullscreen=\\\"true\\\"></iframe> -->\",\"autoDesc\":true}")
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
