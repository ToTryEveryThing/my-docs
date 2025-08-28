---
title: 异步编排
icon: streamline-freehand-color:fireworks-2
order: 2
description: 异步任务编排器
category:
  - work
tag:
  - 异步
---

## 工具类统一封装
```java
@Configuration
public class ThreadPoolConfig {

    /**
     * CPU 密集型线程池（计算、加解密、编解码）
     */
    @Bean("cpuExecutor")
    public ExecutorService cpuExecutor() {
        int n = Runtime.getRuntime().availableProcessors();
        ThreadPoolExecutor executor = new ThreadPoolExecutor(
                n, n, 0L, TimeUnit.MILLISECONDS,
                new LinkedBlockingQueue<>(1000),
                new ThreadFactoryBuilder().setNameFormat("cpu-%d").build(),
                new ThreadPoolExecutor.AbortPolicy()); // 队列满直接抛异常，方便早发现
        // Micrometer 监控
        Metrics.gauge("thread.pool.cpu.active", executor, ThreadPoolExecutor::getActiveCount);
        return executor;
    }

    /**
     * IO 密集型线程池（远程调用、DB、文件）
     */
    @Bean("ioExecutor")
    public ExecutorService ioExecutor() {
        ThreadPoolExecutor executor = new ThreadPoolExecutor(
                50, 200, 60L, TimeUnit.SECONDS,
                new LinkedBlockingQueue<>(5000),
                new ThreadFactoryBuilder().setNameFormat("io-%d").build(),
                new ThreadPoolExecutor.CallerRunsPolicy()); // 队列满由调用线程执行，保证不丢任务
        Metrics.gauge("thread.pool.io.active", executor, ThreadPoolExecutor::getActiveCount);
        return executor;
    }

    /**
     * Spring 优雅关闭
     */
    @PreDestroy
    public void shutdown() {
        gracefulShutdown(ioExecutor());
        gracefulShutdown(cpuExecutor());
    }

    private void gracefulShutdown(ExecutorService pool) {
        pool.shutdown();
        try {
            if (!pool.awaitTermination(10, TimeUnit.SECONDS)) {
                pool.shutdownNow();
            }
        } catch (InterruptedException e) {
            pool.shutdownNow();
            Thread.currentThread().interrupt();
        }
    }
}
```
## @Async
> @Async注解用于异步方法，异步方法调用不会阻塞当前线程，异步方法调用会返回一个Future对象，可以通过Future对象获取异步方法执行结果。
:::tip
相同类中调用async同步方法会失效， Spring 的 @Async 是靠 AOP 代理实现的，同类内部调用不走代理，注解自然失效。
:::
## CompletableFuture
***1.创建任务***
| 方法                         | 是否有返回值 | 是否可指定线程池 | 用途         |
| -------------------------- | ------ | -------- | ---------- |
| `runAsync(Runnable)`       | ❌      | ✅（可选）    | 只执行，不要结果   |
| `supplyAsync(Supplier<T>)` | ✅      | ✅（可选）    | 执行并带回结果    |
| `completedFuture(T)`       | ✅      | —        | 直接给一个现成的结果 |
```java
CompletableFuture<String> f1 = CompletableFuture.supplyAsync(() -> "hello");
```
***2.串行编排（结果传递）***
| 方法                     | 同步/异步 | 入参                         | 出参                        | 常见场景  |
| ---------------------- | ----- | -------------------------- | ------------------------- | ----- |
| `thenApply(fn)`        | 同步    | T → U                      | `CompletableFuture<U>`    | 转换结果  |
| `thenCompose(fn)`      | 异步    | T → `CompletableFuture<U>` | `CompletableFuture<U>`    | 链式调用  |
| `thenAccept(consumer)` | 同步    | T → void                   | `CompletableFuture<Void>` | 纯消费   |
| `thenRun(runnable)`    | 同步    | → void                     | `CompletableFuture<Void>` | 不关心结果 |
```java
CompletableFuture<Integer> f =
        CompletableFuture
        .supplyAsync(() -> 10)      // 10
        .thenApply(i -> i * 2)      // 20
        .thenCompose(n -> CompletableFuture.supplyAsync(() -> n + 1)); // 21
```
***3. 并行汇聚（等多任务）***
| 方法                                   | 说明          |
| ------------------------------------ | ----------- |
| `thenCombine(cf2, fn)`              | 两个都完成后合并结果  |
| `thenAcceptBoth(cf2, consumer)`      | 两个都完成后消费    |
| `runAfterBoth(cf1, cf2, runnable)`   | 两个都完成后仅执行动作 |
| `applyToEither(cf2, fn)`             | 任意一个完成就转换   |
| `acceptEither(cf2, consumer)`        | 任意一个完成就消费   |
| `runAfterEither(cf1, cf2, runnable)` | 任意一个完成就执行动作 |
| `allOf(cf...)`                       | 等全部完成，结果为空  |
| `anyOf(cf...)`                       | 任意一个完成即可    |

```java
CompletableFuture<String> f1 = CompletableFuture.supplyAsync(() -> "A");
CompletableFuture<String> f2 = CompletableFuture.supplyAsync(() -> "B");

String both = f1.thenCombine(f2, (a, b) -> a + b).join(); // AB
```
***4. 异常处理***
| 方法                       | 触发时机     | 能否返回替代值 | 备注                |
| ------------------------ | -------- | ------- | ----------------- |
| `exceptionally(fn)`      | **异常时**  | ✅       | 只补异常              |
| `handle(fn)`             | **任何结果** | ✅       | 成功/异常都会进          |
| `whenComplete(consumer)` | **任何结果** | ❌       | 类似 finally，不能改返回值 |

```java
CompletableFuture<Integer> f =
        CompletableFuture
        .supplyAsync(() -> 10 / 0)          // 异常
        .exceptionally(ex -> -1);           // 返回 -1
```
***5. 超时 & 兜底***
| 方法                                     | 说明                     |
| -------------------------------------- | ---------------------- |
| `orTimeout(time, unit)`                | 超时报 `TimeoutException` |
| `completeOnTimeout(value, time, unit)` | 超时给默认值                 |

```java
String s = CompletableFuture
           .supplyAsync(() -> heavy())
           .completeOnTimeout("timeout", 1, TimeUnit.SECONDS)
           .join();
```
***6. 获取最终值（收尾）***
| 方法                                        | 区别                     |
| ----------------------------------------- | ---------------------- |
| `get()`                                   | **抛受检异常**，必须 try-catch |
| `join()`                                  | **不抛受检异常**，直接抛运行时异常    |
| `getNow(default)`                         | 立即拿值，没好就返回 default     |
| `isDone()` / `isCompletedExceptionally()` | 状态探测                   |

- @Async常用于没有返回值的方法中
- CompletableFuture ：处理多个任务，返回一个结果
## DeferredResult、Callable、WebFlux
```java
@SneakyThrows
    public Callable<Set<String>>  asgs() {
        CompletableFuture<Map<String, Integer>> one = CompletableFuture.supplyAsync(() -> {
            try {
                Thread.sleep(4000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            return Map.of(
                    "one",1
            );
        });
        CompletableFuture<Map<String, Integer>> two =
                CompletableFuture.allOf(
                        CompletableFuture.supplyAsync(() -> {
                            try {
                                Thread.sleep(4000);
                            } catch (InterruptedException e) {
                                throw new RuntimeException(e);
                            }
                            return Map.of("tow1",21);
                        }),
                        CompletableFuture.supplyAsync(() -> {
                            try {
                                Thread.sleep(4000);
                            } catch (InterruptedException e) {
                                throw new RuntimeException(e);
                            }
                            return Map.of("tow2",22);
                        })
                ).thenApply(nil -> {
                    // 把两个结果合并
                    Map<String, Integer> m = new HashMap<>();
                    m.put("two", 2);
                    return m;
                });
        CompletableFuture<Map<String, Integer>> three = CompletableFuture.supplyAsync(() -> Map.of(
                "three",3
        ));

        return () -> CompletableFuture.allOf(one, two, three)
                .thenApply(t -> {
                    Set<String> result = new HashSet<>();
                    result.addAll(one.join().keySet());
                    result.addAll(two.join().keySet());
                    result.addAll(three.join().keySet());
                    return result;
                })
                .completeOnTimeout(Collections.singleton("超时"), 5, TimeUnit.SECONDS)
                .join();

    }
```

> 全文来自kimi-ai
> 
> 其实工作还没用到过CompletableFuture 只用过Async
> 
> 今天九点起床闹钟响一个小时硬是没叫醒我