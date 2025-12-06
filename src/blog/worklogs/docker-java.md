---
title: Docker-java
icon: streamline-kameleon-color:magic-wand-duo
order: 2
collapsedLines: false
description: Docker-java
category:
  - work
tag:
  - Docker-java 
---

## 依赖
```xml
<dependency>
    <groupId>com.github.docker-java</groupId>
    <artifactId>docker-java</artifactId>
    <version>3.3.6</version> <!-- 建议使用最新版 -->
</dependency>

<!-- 如果使用默认的 Apache HttpClient 传输层 -->
<dependency>
    <groupId>com.github.docker-java</groupId>
    <artifactId>docker-java-transport-httpclient5</artifactId>
    <version>3.3.6</version>
</dependency>
```

## 镜像

```java
import com.github.dockerjava.api.DockerClient;
import com.github.dockerjava.api.command.PullImageCmd;
import com.github.dockerjava.api.command.PullImageResultCallback;
import com.github.dockerjava.api.model.Image;
import com.github.dockerjava.api.model.PullResponseItem;
import com.github.dockerjava.core.DefaultDockerClientConfig;
import com.github.dockerjava.core.DockerClientImpl;
import com.github.dockerjava.httpclient5.ApacheDockerHttpClient;
import com.github.dockerjava.transport.DockerHttpClient;

import java.io.IOException;
import java.time.Duration;

/**
 * @author mishu
 * @since 2025/12/6
 */
public class DockerImagesJava {

    private static DockerClient createDockerClient() {
        DefaultDockerClientConfig config = DefaultDockerClientConfig.createDefaultConfigBuilder().build();

        DockerHttpClient httpClient = new ApacheDockerHttpClient.Builder()
                .dockerHost(config.getDockerHost())
                .sslConfig(config.getSSLConfig())
                .maxConnections(1000)
                .connectionTimeout(Duration.ofSeconds(60))
                .responseTimeout(Duration.ofMinutes(30))
                .build();

        return DockerClientImpl.getInstance(config, httpClient);
    }

    public static void main(String[] args) throws IOException {
        try (DockerClient docker = createDockerClient()) {
            boolean isExist = false;
            for (Image image : docker.listImagesCmd().exec()) {
                String[] repoTags = image.getRepoTags();
                if (repoTags != null) {
                    for (String repoTag : repoTags) {
                        if (repoTag.equals("hello-world")) {
                            isExist = true;
                            break;
                        }
                    }
                }
                if (isExist) {
                    break;
                }
            }
            if (!isExist) {
                PullImageCmd pullImageCmd = docker.pullImageCmd("hello-world:latest");
                pullImageCmd.exec(new PullImageResultCallback() {
                    @Override
                    public void onNext(PullResponseItem item) {
                        super.onNext(item);
                        System.out.println(item.getStatus());
                    }
                }).awaitCompletion();
            }
        } catch (InterruptedException e) {
            throw new RuntimeException(e);
        }
    }
}
```
## 容器

```java 
import com.github.dockerjava.api.DockerClient;
import com.github.dockerjava.api.async.ResultCallback;
import com.github.dockerjava.api.command.InspectContainerResponse;
import com.github.dockerjava.api.exception.NotFoundException;
import com.github.dockerjava.api.model.Frame;
import com.github.dockerjava.core.DefaultDockerClientConfig;
import com.github.dockerjava.core.DockerClientImpl;
import com.github.dockerjava.httpclient5.ApacheDockerHttpClient;
import com.github.dockerjava.transport.DockerHttpClient;

import java.io.Closeable;
import java.io.IOException;
import java.time.Duration;
import java.util.concurrent.CountDownLatch;

/**
 * @author mishu
 * @since 2025/12/6
 */
public class DockerContainersJava {
    private static final String IMAGE_NAME = "hello-world";
    private static final String CONTAINER_NAME = "hello-world";

    private static DockerClient createDockerClient() {
        DefaultDockerClientConfig config = DefaultDockerClientConfig.createDefaultConfigBuilder().build();

        DockerHttpClient httpClient = new ApacheDockerHttpClient.Builder()
                .dockerHost(config.getDockerHost())
                .sslConfig(config.getSSLConfig())
                .maxConnections(1000)
                .connectionTimeout(Duration.ofSeconds(60))
                .responseTimeout(Duration.ofMinutes(30))
                .build();

        return DockerClientImpl.getInstance(config, httpClient);
    }

    public static void main(String[] args) throws IOException, InterruptedException {
        try (DockerClient docker = createDockerClient()) {
            InspectContainerResponse exec = null;
            try {
                // 必须try
                exec = docker.inspectContainerCmd(CONTAINER_NAME).exec();
            } catch (NotFoundException e) {
                System.out.println("不存在");
            }
            if (exec != null) {
                if (Boolean.TRUE.equals(exec.getState().getRunning())) {
                    docker.stopContainerCmd(exec.getId()).exec();
                    System.out.println("正在运行");
                }
                System.out.println("存在" + exec.getName());
                System.out.println(exec.getId());
                docker.removeContainerCmd(exec.getId()).exec();
            }

            String id = docker.createContainerCmd(IMAGE_NAME)
                    .withName(CONTAINER_NAME)
                    // 其他配置
                    .exec()
                    .getId();

            System.out.println("创建成功id:" + id);
            docker.listContainersCmd()
                    .withShowAll(true)
                    .exec().forEach(container -> {
                        System.out.println(container.getId() + " " + container.getNames()[0]);
                    });
            // 启动
            docker.startContainerCmd(id)
                    .exec();
            //     日志
            CountDownLatch latch = new CountDownLatch(1); // 用于等待日志流结束

            docker.logContainerCmd(id)
                    .withFollowStream(true)   // 持续跟踪（-f）
                    .withStdOut(true)         // 包含 stdout
                    .withStdErr(true)         // 包含 stderr
                    .withTimestamps(false)    // 不显示时间戳
                    .exec(new ResultCallback<Frame>() {
                        @Override
                        public void close() throws IOException {
                            System.out.println("日志监听已关闭");
                        }

                        @Override
                        public void onStart(Closeable closeable) {
                            System.out.println("[日志监听已启动]");
                        }

                        @Override
                        public void onNext(Frame frame) {
                            // 实时输出每一帧日志
                            String logLine = new String(frame.getPayload());
                            System.out.print(logLine); // 注意：logLine 已包含换行符
                        }

                        @Override
                        public void onComplete() {
                            System.out.println("\n--- 日志结束 ---");
                            latch.countDown(); // 通知主线程日志已结束
                        }

                        @Override
                        public void onError(Throwable throwable) {
                            System.err.println("❌ 日志监听出错: " + throwable.getMessage());
                            latch.countDown();
                        }
                    });

            latch.await(); // 阻塞直到 onComplete 被调用

            Integer exitCode = docker.inspectContainerCmd(id).exec().getState().getExitCode();
            System.out.println("✅ 容器已退出，退出码: " + exitCode);
        }
    }
}

```
