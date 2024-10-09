import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/itheima/Netty/Netty04.html.vue"
const data = JSON.parse("{\"path\":\"/blog/itheima/Netty/Netty04.html\",\"title\":\"优化与源码\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"优化与源码\",\"icon\":\"logos:importio\",\"order\":2,\"category\":[\"itheima\"],\"tag\":[\"Netty\"],\"description\":\"四. 优化与源码 1. 优化 1.1 扩展序列化算法 序列化，反序列化主要用在消息正文的转换上 序列化时，需要将 Java 对象变为要传输的数据（可以是 byte[]，或 json 等，最终都需要变成 byte[]） 反序列化时，需要将传入的正文数据还原成 Java 对象，便于处理 目前的代码仅支持 Java 自带的序列化，反序列化机制，核心代码如下 ...\",\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"1. 优化\",\"slug\":\"_1-优化\",\"link\":\"#_1-优化\",\"children\":[{\"level\":3,\"title\":\"1.1 扩展序列化算法\",\"slug\":\"_1-1-扩展序列化算法\",\"link\":\"#_1-1-扩展序列化算法\",\"children\":[]},{\"level\":3,\"title\":\"1.2 参数调优\",\"slug\":\"_1-2-参数调优\",\"link\":\"#_1-2-参数调优\",\"children\":[]},{\"level\":3,\"title\":\"1.3 RPC 框架\",\"slug\":\"_1-3-rpc-框架\",\"link\":\"#_1-3-rpc-框架\",\"children\":[]}]},{\"level\":2,\"title\":\"2. 源码分析\",\"slug\":\"_2-源码分析\",\"link\":\"#_2-源码分析\",\"children\":[{\"level\":3,\"title\":\"2.1 启动剖析\",\"slug\":\"_2-1-启动剖析\",\"link\":\"#_2-1-启动剖析\",\"children\":[]},{\"level\":3,\"title\":\"2.2 NioEventLoop 剖析\",\"slug\":\"_2-2-nioeventloop-剖析\",\"link\":\"#_2-2-nioeventloop-剖析\",\"children\":[]},{\"level\":3,\"title\":\"2.3 accept 剖析\",\"slug\":\"_2-3-accept-剖析\",\"link\":\"#_2-3-accept-剖析\",\"children\":[]},{\"level\":3,\"title\":\"2.4 read 剖析\",\"slug\":\"_2-4-read-剖析\",\"link\":\"#_2-4-read-剖析\",\"children\":[]}]}],\"git\":{\"createdTime\":1721356358000,\"updatedTime\":1723793860000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":4}]},\"readingTime\":{\"minutes\":21.53,\"words\":6458},\"filePathRelative\":\"blog/itheima/Netty/Netty04.md\",\"localizedDate\":\"2024年7月19日\",\"excerpt\":\"\\n<!-- <iframe src=\\\"//player.bilibili.com/player.html?isOutside=true&aid=802157994&bvid=BV1py4y1E7oA&cid=311829977&p=119\\\" scrolling=\\\"no\\\" border=\\\"0\\\" frameborder=\\\"no\\\" framespacing=\\\"0\\\" allowfullscreen=\\\"true\\\"></iframe> -->\\n<h2>1. 优化</h2>\\n<h3>1.1 扩展序列化算法</h3>\\n<p>序列化，反序列化主要用在消息正文的转换上</p>\\n<ul>\\n<li>序列化时，需要将 Java 对象变为要传输的数据（可以是 byte[]，或 json 等，最终都需要变成 byte[]）</li>\\n<li>反序列化时，需要将传入的正文数据还原成 Java 对象，便于处理</li>\\n</ul>\",\"autoDesc\":true}")
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
