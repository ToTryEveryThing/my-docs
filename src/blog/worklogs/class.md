---
title: class
icon: vscode-icons:file-type-class
order: 2
description: class
category:
  - work
tag:
  - class 
---

## SseEmitter

>SseEmitter 是 Spring 框架中用于服务器发送事件（Server-Sent Events，SSE）的一个类。SSE 是一种允许服务器主动向客户端发送数据的技术，通常用于创建到服务器的单向连接，以便服务器可以在有新数据时立即推送给客户端。

SseEmitter 类提供了一种方便的方式来发送这些事件。以下是一些基本的使用步骤：

- 创建 SseEmitter 实例：在 Spring 控制器中，可以创建一个 SseEmitter 实例，并返回它。

- 发送数据：使用 SseEmitter 的 send 方法来发送数据给客户端。

- 完成或错误处理：当完成发送数据时，可以调用 SseEmitter 的 complete 方法来关闭连接。如果发生错误，可以调用 completeWithError 方法。

- 超时处理：可以设置超时时间，并且在超时后进行相应的处理

```java
@GetMapping("/stream")
public SseEmitter stream() throws IOException {
    final SseEmitter emitter = new SseEmitter();

    new Thread(() -> {
        try {
            for (int i = 0; i < 10000; i++) {
                emitter.send(SseEmitter.event().data("Message " + i));
                Thread.sleep(100);
            }
            emitter.complete();
        } catch (Exception ex) {
            emitter.completeWithError(ex);
        }
    }).start();
    return emitter;
}
```

![web](https://beink.oss-cn-beijing.aliyuncs.com/study/Snipaste_2024-11-20_16-13-52.png)


