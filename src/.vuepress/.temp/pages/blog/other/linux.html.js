import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/other/linux.html.vue"
const data = JSON.parse("{\"path\":\"/blog/other/linux.html\",\"title\":\"Linux\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Linux\",\"icon\":\"flat-color-icons:linux\",\"order\":2,\"description\":\"Linux基础知识，docker、mysql、vim\",\"category\":[\"常用操作\"],\"tag\":[\"Linux\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"查找命令\",\"slug\":\"查找命令\",\"link\":\"#查找命令\",\"children\":[]},{\"level\":2,\"title\":\"docker\",\"slug\":\"docker\",\"link\":\"#docker\",\"children\":[{\"level\":3,\"title\":\"数据卷\",\"slug\":\"数据卷\",\"link\":\"#数据卷\",\"children\":[]},{\"level\":3,\"title\":\"自定义镜像\",\"slug\":\"自定义镜像\",\"link\":\"#自定义镜像\",\"children\":[]},{\"level\":3,\"title\":\"DockerCompose\",\"slug\":\"dockercompose\",\"link\":\"#dockercompose\",\"children\":[]},{\"level\":3,\"title\":\"基操\",\"slug\":\"基操\",\"link\":\"#基操\",\"children\":[]}]},{\"level\":2,\"title\":\"mysql\",\"slug\":\"mysql\",\"link\":\"#mysql\",\"children\":[{\"level\":3,\"title\":\"导出完整数据库\",\"slug\":\"导出完整数据库\",\"link\":\"#导出完整数据库\",\"children\":[]},{\"level\":3,\"title\":\"导入数据库\",\"slug\":\"导入数据库\",\"link\":\"#导入数据库\",\"children\":[]}]},{\"level\":2,\"title\":\"vim\",\"slug\":\"vim\",\"link\":\"#vim\",\"children\":[]},{\"level\":2,\"title\":\"ssh 免密登录\",\"slug\":\"ssh-免密登录\",\"link\":\"#ssh-免密登录\",\"children\":[]}],\"git\":{\"createdTime\":1686126382000,\"updatedTime\":1725001838000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":5},{\"name\":\"mishu\",\"email\":\"849299509@qq.com\",\"commits\":1}]},\"readingTime\":{\"minutes\":6.93,\"words\":2078},\"filePathRelative\":\"blog/other/linux.md\",\"localizedDate\":\"2023年6月7日\",\"excerpt\":\"<h2>查找命令</h2>\\n<h4>find</h4>\\n<p>作用: 在指定目录下查找文件<br>\\n语法: <code>find dirName -option fileName</code><br>\\n举例:</p>\\n<ul>\\n<li><code>find  .  –name \\\"*.java\\\"</code>\\t\\t\\t在当前目录及其子目录下查找.java结尾文件</li>\\n<li><code>find  /itcast  -name \\\"*.java\\\"</code>\\t在/itcast目录及其子目录下查找.java结尾的文</li>\\n</ul>\\n<h4>grep</h4>\\n<p>作用: 从指定文件中查找指定的文本内容<br>\\n语法: <code>grep word fileName</code><br>\\n举例:</p>\"}")
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
