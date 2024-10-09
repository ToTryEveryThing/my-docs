import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/tools/jasypt.html.vue"
const data = JSON.parse("{\"path\":\"/blog/tools/jasypt.html\",\"title\":\"Jasypt\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Jasypt\",\"icon\":\"material-symbols-light:password\",\"order\":3,\"description\":\"适用于spirng项目中配置文件的敏感数据\",\"category\":[\"Tool\"],\"tag\":[\"jasypt\"],\"gitInclude\":[]},\"headers\":[],\"git\":{\"createdTime\":1702971377000,\"updatedTime\":1723793860000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":3}]},\"readingTime\":{\"minutes\":0.78,\"words\":235},\"filePathRelative\":\"blog/tools/jasypt.md\",\"localizedDate\":\"2023年12月19日\",\"excerpt\":\"\\n<blockquote>\\n<p>Jasypt Spring Boot 为 spring boot 应用程序中的属性源提供加密支持，出于安全考虑，Spring boot 配置文件中的敏感信息通常需要对它进行加密/脱敏处理，尽量不使用明文，要实现这一点，办法有很多，自己手动对敏感信息进行加解密也是可以的</p>\\n</blockquote>\\n<p>依赖</p>\\n<div class=\\\"language-xml line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"xml\\\" data-title=\\\"xml\\\" style=\\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes github-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">    &lt;</span><span style=\\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\\">dependency</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">&gt;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">        &lt;</span><span style=\\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\\">groupId</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">&gt;com.github.ulisesbocchio&lt;/</span><span style=\\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\\">groupId</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">&gt;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">        &lt;</span><span style=\\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\\">artifactId</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">&gt;jasypt-spring-boot-starter&lt;/</span><span style=\\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\\">artifactId</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">&gt;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">        &lt;</span><span style=\\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\\">version</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">&gt;---&lt;/</span><span style=\\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\\">version</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">&gt;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">    &lt;/</span><span style=\\\"--shiki-light:#22863A;--shiki-dark:#E06C75\\\">dependency</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">&gt;</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
