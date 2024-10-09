import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/worklogs/mysql.html.vue"
const data = JSON.parse("{\"path\":\"/blog/worklogs/mysql.html\",\"title\":\"Mysql\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Mysql\",\"icon\":\"logos:mysql-icon\",\"order\":1,\"description\":\"mysql简单常用基础操作\",\"category\":[\"work\"],\"tag\":[\"mysql\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"去重\",\"slug\":\"去重\",\"link\":\"#去重\",\"children\":[]},{\"level\":2,\"title\":\"排名\",\"slug\":\"排名\",\"link\":\"#排名\",\"children\":[]}],\"git\":{\"createdTime\":1727335440000,\"updatedTime\":1727661246000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":2}]},\"readingTime\":{\"minutes\":0.45,\"words\":136},\"filePathRelative\":\"blog/worklogs/mysql.md\",\"localizedDate\":\"2024年9月26日\",\"excerpt\":\"<h2>去重</h2>\\n<p><a href=\\\"https://leetcode.cn/problems/delete-duplicate-emails/description/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">196. 删除重复的电子邮箱</a></p>\\n<div class=\\\"language-sql line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"sql\\\" data-title=\\\"sql\\\" style=\\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes github-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\\">delete</span><span style=\\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\\"> from</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\"> Person </span><span style=\\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\\">where</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\"> id </span><span style=\\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\\">not</span><span style=\\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\\"> in</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\"> (</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\\">\\tselect</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\"> id </span><span style=\\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\\">from</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\"> (</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\\">\\t\\tselect</span><span style=\\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\\"> min</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">(id) </span><span style=\\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\\">as</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\"> id </span><span style=\\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\\">from</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\"> Person </span><span style=\\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\\">group by</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\"> email</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">\\t) T</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">)</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
