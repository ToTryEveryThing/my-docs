const t=JSON.parse('{"key":"v-3724b34f","path":"/blog/itheima/Netty/Netty03.html","title":"Netty 进阶","lang":"zh-CN","frontmatter":{"title":"Netty 进阶","icon":"Netty","order":2,"category":["itheima"],"tag":["Netty"],"description":"1. 粘包与半包 1.1 粘包现象 服务端代码 客户端代码希望发送 10 个消息，每个消息是 16 字节 服务器端的某次输出，可以看到一次就接收了 160 个字节，而非分 10 次接收 1.2 半包现象 客户端代码希望发送 1 个消息，这个消息是 160 字节，代码改为 为现象明显，服务端修改一下接收缓冲区，其它代码不变 服务器端的某次输出，可以看到接...","head":[["meta",{"property":"og:url","content":"https://totryeverything.github.io/blog/itheima/Netty/Netty03.html"}],["meta",{"property":"og:title","content":"Netty 进阶"}],["meta",{"property":"og:description","content":"1. 粘包与半包 1.1 粘包现象 服务端代码 客户端代码希望发送 10 个消息，每个消息是 16 字节 服务器端的某次输出，可以看到一次就接收了 160 个字节，而非分 10 次接收 1.2 半包现象 客户端代码希望发送 1 个消息，这个消息是 160 字节，代码改为 为现象明显，服务端修改一下接收缓冲区，其它代码不变 服务器端的某次输出，可以看到接..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://totryeverything.github.io/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-19T02:43:35.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Netty 进阶"}],["meta",{"property":"article:author","content":"ToTryEveryThing"}],["meta",{"property":"article:tag","content":"Netty"}],["meta",{"property":"article:modified_time","content":"2024-07-19T02:43:35.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Netty 进阶\\",\\"image\\":[\\"https://totryeverything.github.io/\\"],\\"dateModified\\":\\"2024-07-19T02:43:35.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ToTryEveryThing\\",\\"url\\":\\"https://beink.cn/\\"}]}"]]},"headers":[{"level":2,"title":"1. 粘包与半包","slug":"_1-粘包与半包","link":"#_1-粘包与半包","children":[{"level":3,"title":"1.1 粘包现象","slug":"_1-1-粘包现象","link":"#_1-1-粘包现象","children":[]},{"level":3,"title":"1.2 半包现象","slug":"_1-2-半包现象","link":"#_1-2-半包现象","children":[]},{"level":3,"title":"1.3 现象分析","slug":"_1-3-现象分析","link":"#_1-3-现象分析","children":[]},{"level":3,"title":"1.4 解决方案","slug":"_1-4-解决方案","link":"#_1-4-解决方案","children":[]}]},{"level":2,"title":"2. 协议设计与解析","slug":"_2-协议设计与解析","link":"#_2-协议设计与解析","children":[{"level":3,"title":"2.1 为什么需要协议？","slug":"_2-1-为什么需要协议","link":"#_2-1-为什么需要协议","children":[]},{"level":3,"title":"2.2 redis 协议举例","slug":"_2-2-redis-协议举例","link":"#_2-2-redis-协议举例","children":[]},{"level":3,"title":"2.3 http 协议举例","slug":"_2-3-http-协议举例","link":"#_2-3-http-协议举例","children":[]},{"level":3,"title":"2.4 自定义协议要素","slug":"_2-4-自定义协议要素","link":"#_2-4-自定义协议要素","children":[]}]},{"level":2,"title":"3. 聊天室案例","slug":"_3-聊天室案例","link":"#_3-聊天室案例","children":[{"level":3,"title":"3.1 聊天室业务介绍","slug":"_3-1-聊天室业务介绍","link":"#_3-1-聊天室业务介绍","children":[]},{"level":3,"title":"3.2 聊天室业务-登录","slug":"_3-2-聊天室业务-登录","link":"#_3-2-聊天室业务-登录","children":[]},{"level":3,"title":"3.3 聊天室业务-单聊","slug":"_3-3-聊天室业务-单聊","link":"#_3-3-聊天室业务-单聊","children":[]},{"level":3,"title":"3.4 聊天室业务-群聊","slug":"_3-4-聊天室业务-群聊","link":"#_3-4-聊天室业务-群聊","children":[]},{"level":3,"title":"3.5 聊天室业务-退出","slug":"_3-5-聊天室业务-退出","link":"#_3-5-聊天室业务-退出","children":[]},{"level":3,"title":"3.6 聊天室业务-空闲检测","slug":"_3-6-聊天室业务-空闲检测","link":"#_3-6-聊天室业务-空闲检测","children":[]}]}],"git":{"createdTime":1721356358000,"updatedTime":1721357015000,"contributors":[{"name":"mishu","email":"riceuncle@outlook.com","commits":2}]},"readingTime":{"minutes":29.47,"words":8841},"filePathRelative":"blog/itheima/Netty/Netty03.md","localizedDate":"2024年7月19日","autoDesc":true,"excerpt":""}');export{t as data};