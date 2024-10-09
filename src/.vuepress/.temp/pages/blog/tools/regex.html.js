import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/tools/regex.html.vue"
const data = JSON.parse("{\"path\":\"/blog/tools/regex.html\",\"title\":\"regex\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"regex\",\"icon\":\"skill-icons:regex-light\",\"order\":2,\"description\":\"正则表达式示例以及介绍\",\"category\":[\"Tool\"],\"tag\":[\"regex\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"插件\",\"slug\":\"插件\",\"link\":\"#插件\",\"children\":[]},{\"level\":2,\"title\":\"java\",\"slug\":\"java\",\"link\":\"#java\",\"children\":[]},{\"level\":2,\"title\":\"元字符\",\"slug\":\"元字符\",\"link\":\"#元字符\",\"children\":[]},{\"level\":2,\"title\":\"简写字符集\",\"slug\":\"简写字符集\",\"link\":\"#简写字符集\",\"children\":[]},{\"level\":2,\"title\":\"标志\",\"slug\":\"标志\",\"link\":\"#标志\",\"children\":[{\"level\":3,\"title\":\"忽略大小写\",\"slug\":\"忽略大小写\",\"link\":\"#忽略大小写\",\"children\":[]},{\"level\":3,\"title\":\"全局搜索\",\"slug\":\"全局搜索\",\"link\":\"#全局搜索\",\"children\":[]}]}],\"git\":{\"createdTime\":1687513481000,\"updatedTime\":1723793860000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":5}]},\"readingTime\":{\"minutes\":3.33,\"words\":1000},\"filePathRelative\":\"blog/tools/regex.md\",\"localizedDate\":\"2023年6月23日\",\"excerpt\":\"\\n<h2>插件</h2>\\n\\n<h2>java</h2>\\n\\n<h2>元字符</h2>\\n\\n<h2>简写字符集</h2>\\n<table>\\n<thead>\\n<tr>\\n<th style=\\\"text-align:center\\\">简写</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td style=\\\"text-align:center\\\">.</td>\\n<td>除换行符外的所有字符</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">\\\\w</td>\\n<td>匹配所有字母数字，等同于 <code>[a-zA-Z0-9]</code></td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">\\\\W</td>\\n<td>匹配所有非字母数字，即符号，等同于： <code>[^\\\\w]</code></td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">\\\\d</td>\\n<td>匹配数字： <code>[0-9]</code></td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">\\\\D</td>\\n<td>匹配非数字： <code>[^\\\\d]</code></td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">\\\\s</td>\\n<td>匹配所有空格字符，等同于： <code>[\\\\t\\\\n\\\\f\\\\r\\\\p{Z}]</code></td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">\\\\S</td>\\n<td>匹配所有非空格字符： <code>[^\\\\s]</code></td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">\\\\f</td>\\n<td>匹配一个换页符</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">\\\\n</td>\\n<td>匹配一个换行符</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">\\\\r</td>\\n<td>匹配一个回车符</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">\\\\t</td>\\n<td>匹配一个制表符</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">\\\\v</td>\\n<td>匹配一个垂直制表符</td>\\n</tr>\\n<tr>\\n<td style=\\\"text-align:center\\\">\\\\p</td>\\n<td>匹配 CR/LF（等同于 <code>\\\\r\\\\n</code>），用来匹配 DOS 行终止符</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
