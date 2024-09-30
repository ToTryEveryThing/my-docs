import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/SSM/mysql.html.vue"
const data = JSON.parse("{\"path\":\"/blog/SSM/mysql.html\",\"title\":\"Mysql\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Mysql\",\"icon\":\"Mysql\",\"order\":1,\"description\":\"mysql简单常用基础操作\",\"category\":[\"SSM\"],\"tag\":[\"mysql\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"基础语句\",\"slug\":\"基础语句\",\"link\":\"#基础语句\",\"children\":[{\"level\":3,\"title\":\"select\",\"slug\":\"select\",\"link\":\"#select\",\"children\":[]}]},{\"level\":2,\"title\":\"函数\",\"slug\":\"函数\",\"link\":\"#函数\",\"children\":[]},{\"level\":2,\"title\":\"约束\",\"slug\":\"约束\",\"link\":\"#约束\",\"children\":[]},{\"level\":2,\"title\":\"多表查询\",\"slug\":\"多表查询\",\"link\":\"#多表查询\",\"children\":[]},{\"level\":2,\"title\":\"索引\",\"slug\":\"索引\",\"link\":\"#索引\",\"children\":[]},{\"level\":2,\"title\":\"视图\",\"slug\":\"视图\",\"link\":\"#视图\",\"children\":[]},{\"level\":2,\"title\":\"其他\",\"slug\":\"其他\",\"link\":\"#其他\",\"children\":[]}],\"git\":{\"createdTime\":1686739667000,\"updatedTime\":1727335440000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":7}]},\"readingTime\":{\"minutes\":7.3,\"words\":2191},\"filePathRelative\":\"blog/SSM/mysql.md\",\"localizedDate\":\"2023年6月14日\",\"excerpt\":\"\\n<p><a href=\\\"https://www.bilibili.com/video/BV1Kr4y1i7ru/?p=4&amp;vd_source=f8821730ff8a13ec89104c8629e6d42b\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">哔哩哔哩_bilibili</a></p>\\n<p><code>utf8mb4</code>: 编码格式</p>\\n<h2>基础语句</h2>\\n<h4>insert</h4>\\n<ul>\\n<li>给指定字段添加值</li>\\n</ul>\\n<div class=\\\"language-sql line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"sql\\\" data-title=\\\"sql\\\" style=\\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes github-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\\">insert into</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\"> 表名 (字段1，字段2..) </span><span style=\\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\\">values</span><span style=\\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\\">(值1，值2..);</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\"}")
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
