---
title: 开发
icon: material-icon-theme:bicep
index: true
dir:
    order: 5
    text: Group 1
---

## 个推

> `消息推送` 为 App 提供「稳定、高效、免费」的消息下发通道

[开发文档](https://docs.getui.com/getui/server/rest_v2/introduction/)
[maven依赖](https://mvnrepository.com/artifact/com.getui.push/restful-sdk)
[代码示例](https://github.com/GetuiLaboratory/getui-pushapi-java-client-v2)

## magic-api
> `magic-api`是一个基于Java的接口快速开发框架，编写接口将通过magic-api提供的UI界面完成，自动映射为HTTP接口。 无需定义Controller、Service、Dao、Mapper、XML、VO等Java对象即可完成常见的HTTP API接口开发。


[开发文档](https://www.ssssssss.org/magic-api/pages/quick/intro/)

## 数据签名
> `数据签名`，用于防止数据被篡改
> 
> 把请求参数按规则排序后加时间戳和密钥生成哈希值，作为签名附在请求中，服务端用同样算法校验，防篡改。

前端
> // npm install crypto-js
> 放在body中一起发送
```ts
import CryptoJS from 'crypto-js';

// 与后端约定好的密钥
const SECRET = import.meta.env.VITE_SIGN_SECRET as string;

export function buildSign(data: Record<string, any>) {
    const timestamp = Date.now();
    // 1. 过滤掉 sign、timestamp 本身
    const raw = { ...data };
    delete raw.sign;
    delete raw.timestamp;

    // 2. key 升序排序后拼串
    const qs = Object.keys(raw)
        .sort()
        .map(k => `${k}=${raw[k]}`)
        .join('&');

    const str = `${qs}&timestamp=${timestamp}`;
    console.log('签名串:', str, SECRET);
    const sign = CryptoJS.HmacSHA256(str, SECRET).toString();
    return { sign, timestamp };
}
```
后端
> hutool工具包
> 
> 创建一个过滤器，在过滤器中获取请求体，并计算签名，然后与前端的签名进行比较，如果一致则继续处理请求，否则返回错误。
> 
> .addFilterBefore(signAuthFilter, UsernamePasswordAuthenticationFilter.class) 放在 Spring Security 的认证过滤器之前执行
```java
@Slf4j
@Component
public class SignAuthFilter extends OncePerRequestFilter {

    private static final long EXPIRE_MS = 60_000L;
    private static final String SECRET = "myc"; // 与前端一致

    //因为 Servlet 规范规定：请求流只能读一次，读完就没了
    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse resp, FilterChain chain) throws ServletException, IOException {
        if ("POST".equalsIgnoreCase(req.getMethod())) {
            try {
                // 1. 读取 body
                CachedBodyHttpServletRequest wrapper = new CachedBodyHttpServletRequest(req);
                String body = StreamUtils.copyToString(wrapper.getInputStream(), StandardCharsets.UTF_8);
                JSONObject json = JSONUtil.parseObj(body);

                String sign = json.getStr("sign");
                long timestamp = json.getLong("timestamp", 0L);

                if (Math.abs(System.currentTimeMillis() - timestamp) > EXPIRE_MS) {
                    log.error("签名过期:{}-{}",System.currentTimeMillis(), timestamp );
                    resp.sendError(HttpServletResponse.SC_UNAUTHORIZED, "签名过期");
                    return;
                }

                String serverSign = buildSign(json, timestamp);
                if (!serverSign.equalsIgnoreCase(sign)) {
                    log.error("签名无效:{}-{}",serverSign, sign );
                    resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "签名无效");
                    return;
                }

                req = wrapper; // 继续向下传递可读 body
            } catch (Exception e) {
                resp.sendError(HttpServletResponse.SC_BAD_REQUEST, "签名验证异常");
                return;
            }
        }
        chain.doFilter(req, resp);
    }

    private String buildSign(JSONObject json, long ts) {
        Map<String, Object> map = json.entrySet().stream()
                .filter(e -> !"timestamp".equals(e.getKey()))
                .filter(e -> !"sign".equals(e.getKey()))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));

        String qs = map.entrySet().stream()
                .sorted(Map.Entry.comparingByKey())
                .map(e -> e.getKey() + "=" + e.getValue())
                .collect(Collectors.joining("&"));
        String str 郭文贵= qs + "&timestamp=" + ts;
        log.error("签名串比较{}，{}",str, SECRET);
        return SecureUtil.hmacSha256(SECRET).digestHex(str);
    }
}
```

## 钉钉
### 部门管理2.0
[开发文档](https://open-dev.dingtalk.com/apiExplorer#/?devType=org&api=dingtalk.oapi.v2.department.listsub)

旧版maven依赖
```xml
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>alibaba-dingtalk-service-sdk</artifactId>
    <version>2.0.0</version>
</dependency>
```
## 微信
### 微信支付
#### 商家转账到用户零钱
> 新版本 必须用户同意才能转账

[开发必要参数说明](https://pay.weixin.qq.com/doc/v3/merchant/4013070756)
[发起转账](https://pay.wechatpay.cn/doc/v3/merchant/4012716434)、
