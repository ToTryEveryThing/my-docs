export const data = JSON.parse("{\"key\":\"v-deaea8ac\",\"path\":\"/blog/itheima/Netty/Netty01-nio.html\",\"title\":\"aliyun OSS\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"aliyun OSS\",\"icon\":\"Netty\",\"order\":2,\"category\":[\"itheima\"],\"tag\":[\"Netty\"],\"description\":\"non-blocking io 非阻塞 IO 1. 三大组件 1.1 Channel & Buffer channel 有一点类似于 stream，它就是读写数据的双向通道，可以从 channel 将数据读入 buffer，也可以将 buffer 的数据写入 channel，而之前的 stream 要么是输入，要么是输出，channel 比 strea...\"},\"headers\":[{\"level\":2,\"title\":\"1. 三大组件\",\"slug\":\"_1-三大组件\",\"link\":\"#_1-三大组件\",\"children\":[{\"level\":3,\"title\":\"1.1 Channel & Buffer\",\"slug\":\"_1-1-channel-buffer\",\"link\":\"#_1-1-channel-buffer\",\"children\":[]},{\"level\":3,\"title\":\"1.2 Selector\",\"slug\":\"_1-2-selector\",\"link\":\"#_1-2-selector\",\"children\":[]}]},{\"level\":2,\"title\":\"2. ByteBuffer\",\"slug\":\"_2-bytebuffer\",\"link\":\"#_2-bytebuffer\",\"children\":[{\"level\":3,\"title\":\"2.1  ByteBuffer 正确使用姿势\",\"slug\":\"_2-1-bytebuffer-正确使用姿势\",\"link\":\"#_2-1-bytebuffer-正确使用姿势\",\"children\":[]},{\"level\":3,\"title\":\"2.2 ByteBuffer 结构\",\"slug\":\"_2-2-bytebuffer-结构\",\"link\":\"#_2-2-bytebuffer-结构\",\"children\":[]},{\"level\":3,\"title\":\"2.3 ByteBuffer 常见方法\",\"slug\":\"_2-3-bytebuffer-常见方法\",\"link\":\"#_2-3-bytebuffer-常见方法\",\"children\":[]},{\"level\":3,\"title\":\"2.4 Scattering Reads\",\"slug\":\"_2-4-scattering-reads\",\"link\":\"#_2-4-scattering-reads\",\"children\":[]},{\"level\":3,\"title\":\"2.5 Gathering Writes\",\"slug\":\"_2-5-gathering-writes\",\"link\":\"#_2-5-gathering-writes\",\"children\":[]},{\"level\":3,\"title\":\"2.6 练习\",\"slug\":\"_2-6-练习\",\"link\":\"#_2-6-练习\",\"children\":[]}]},{\"level\":2,\"title\":\"3. 文件编程\",\"slug\":\"_3-文件编程\",\"link\":\"#_3-文件编程\",\"children\":[{\"level\":3,\"title\":\"3.1 FileChannel\",\"slug\":\"_3-1-filechannel\",\"link\":\"#_3-1-filechannel\",\"children\":[]},{\"level\":3,\"title\":\"3.2 两个 Channel 传输数据\",\"slug\":\"_3-2-两个-channel-传输数据\",\"link\":\"#_3-2-两个-channel-传输数据\",\"children\":[]},{\"level\":3,\"title\":\"3.3 Path\",\"slug\":\"_3-3-path\",\"link\":\"#_3-3-path\",\"children\":[]},{\"level\":3,\"title\":\"3.4 Files\",\"slug\":\"_3-4-files\",\"link\":\"#_3-4-files\",\"children\":[]}]},{\"level\":2,\"title\":\"4. 网络编程\",\"slug\":\"_4-网络编程\",\"link\":\"#_4-网络编程\",\"children\":[{\"level\":3,\"title\":\"4.1 非阻塞 vs 阻塞\",\"slug\":\"_4-1-非阻塞-vs-阻塞\",\"link\":\"#_4-1-非阻塞-vs-阻塞\",\"children\":[]},{\"level\":3,\"title\":\"4.2 Selector\",\"slug\":\"_4-2-selector\",\"link\":\"#_4-2-selector\",\"children\":[]},{\"level\":3,\"title\":\"4.3 处理 accept 事件\",\"slug\":\"_4-3-处理-accept-事件\",\"link\":\"#_4-3-处理-accept-事件\",\"children\":[]},{\"level\":3,\"title\":\"4.4 处理 read 事件\",\"slug\":\"_4-4-处理-read-事件\",\"link\":\"#_4-4-处理-read-事件\",\"children\":[]},{\"level\":3,\"title\":\"4.5 处理 write 事件\",\"slug\":\"_4-5-处理-write-事件\",\"link\":\"#_4-5-处理-write-事件\",\"children\":[]},{\"level\":3,\"title\":\"4.6 更进一步\",\"slug\":\"_4-6-更进一步\",\"link\":\"#_4-6-更进一步\",\"children\":[]},{\"level\":3,\"title\":\"4.7 UDP\",\"slug\":\"_4-7-udp\",\"link\":\"#_4-7-udp\",\"children\":[]}]},{\"level\":2,\"title\":\"5. NIO vs BIO\",\"slug\":\"_5-nio-vs-bio\",\"link\":\"#_5-nio-vs-bio\",\"children\":[{\"level\":3,\"title\":\"5.1 stream vs channel\",\"slug\":\"_5-1-stream-vs-channel\",\"link\":\"#_5-1-stream-vs-channel\",\"children\":[]},{\"level\":3,\"title\":\"5.2 IO 模型\",\"slug\":\"_5-2-io-模型\",\"link\":\"#_5-2-io-模型\",\"children\":[]},{\"level\":3,\"title\":\"5.3 零拷贝\",\"slug\":\"_5-3-零拷贝\",\"link\":\"#_5-3-零拷贝\",\"children\":[]},{\"level\":3,\"title\":\"5.3 AIO\",\"slug\":\"_5-3-aio\",\"link\":\"#_5-3-aio\",\"children\":[]}]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":31.91,\"words\":9573},\"filePathRelative\":\"blog/itheima/Netty/Netty01-nio.md\",\"autoDesc\":true}")

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
