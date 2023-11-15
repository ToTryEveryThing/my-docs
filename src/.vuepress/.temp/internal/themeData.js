export const themeData = JSON.parse("{\"encrypt\":{\"config\":{\"/demo/encrypt.html\":[\"$2a$10$szJ.Ot7b4B7JZ1z7QbxiKerfvVJBy9uVQw1qNcrQFjIIhblHUIh0O\"]}},\"repoLabel\":\"GitHub\",\"repo\":\"ToTryEveryThing/my-docs\",\"repoDisplay\":true,\"author\":{\"name\":\"米叔\",\"url\":\"https://beink.cn/\"},\"darkmode\":\"toggle\",\"logo\":\"https://beink.cn/ink.png\",\"docsDir\":\"src\",\"lastUpdated\":true,\"displayFooter\":true,\"navbarLayout\":{\"start\":[\"Brand\"],\"end\":[\"Outlook\",\"Search\",\"Links\"]},\"locales\":{\"/\":{\"lang\":\"zh-CN\",\"navbarLocales\":{\"langName\":\"简体中文\",\"selectLangAriaLabel\":\"选择语言\"},\"metaLocales\":{\"author\":\"作者\",\"date\":\"写作日期\",\"origin\":\"原创\",\"views\":\"访问量\",\"category\":\"分类\",\"tag\":\"标签\",\"readingTime\":\"阅读时间\",\"words\":\"字数\",\"toc\":\"此页内容\",\"prev\":\"上一页\",\"next\":\"下一页\",\"lastUpdated\":\"上次编辑于\",\"contributors\":\"贡献者\",\"editLink\":\"编辑此页\",\"print\":\"打印\"},\"outlookLocales\":{\"themeColor\":\"主题色\",\"darkmode\":\"外观\",\"fullscreen\":\"全屏\"},\"encryptLocales\":{\"iconLabel\":\"文章已加密\",\"placeholder\":\"输入密码\",\"remember\":\"记住密码\",\"errorHint\":\"请输入正确的密码\"},\"routeLocales\":{\"skipToContent\":\"跳至主要內容\",\"notFoundTitle\":\"页面不存在\",\"notFoundMsg\":[\"这里什么也没有\",\"我们是怎么来到这儿的？\",\"这 是 四 零 四 !\",\"看起来你访问了一个失效的链接\"],\"back\":\"返回上一页\",\"home\":\"带我回家\",\"openInNewWindow\":\"Open in new window\"},\"navbar\":[{\"text\":\"主站\",\"icon\":\"lightbulb\",\"link\":\"https://beink.cn/\"},{\"text\":\"Github\",\"icon\":\"blog\",\"link\":\"https://github.com/ToTryEveryThing/my-docs\"}],\"sidebar\":{\"/\":[\"\",{\"text\":\"文档\",\"icon\":\"lightbulb\",\"collapsible\":true,\"prefix\":\"blog/other/\",\"children\":\"structure\"},{\"text\":\"SSM\",\"icon\":\"leaf\",\"collapsible\":true,\"prefix\":\"blog/SSM/\",\"children\":\"structure\"},{\"text\":\"微服务\",\"icon\":\"network-wired\",\"collapsible\":true,\"prefix\":\"blog/Microservices/\",\"children\":\"structure\"},{\"text\":\"工具\",\"icon\":\"puzzle-piece\",\"collapsible\":true,\"prefix\":\"blog/tool/\",\"children\":\"structure\"}]}}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
