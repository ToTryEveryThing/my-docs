import comp from "D:/study/ToTryEveryThing/my-docs/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"fluent-color:home-48\",\"home\":true,\"welcome\":\"\",\"portfolio\":true,\"titles\":[\"Hello World\",\"你好 世界\"],\"bgImage\":\"https://cdn.beink.cn/background/back.jpg\",\"description\":\"记录、学习\",\"gitInclude\":[]},\"headers\":[],\"git\":{\"createdTime\":1686126382000,\"updatedTime\":1728439076000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":17}]},\"readingTime\":{\"minutes\":0.2,\"words\":61},\"filePathRelative\":\"README.md\",\"localizedDate\":\"2023年6月7日\",\"excerpt\":\"<figure><img src=\\\"https://raw.githubusercontent.com/ToTryEveryThing/ToTryEveryThing/output/github-contribution-grid-snake.svg\\\" alt=\\\"\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption></figcaption></figure>\\n<p><a href=\\\"https://img.shields.io\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img src=\\\"https://img.shields.io/badge/Tool-badge-blue\\\" alt=\\\"\\\" loading=\\\"lazy\\\"></a><br>\\n<a href=\\\"https://mvnrepository.com/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img src=\\\"https://img.shields.io/badge/Tool-Maven-red\\\" alt=\\\"\\\" loading=\\\"lazy\\\"></a><br>\\n<a href=\\\"https://ohmyposh.dev/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img src=\\\"https://img.shields.io/badge/Theme-OhMyPosh-orange\\\" alt=\\\"\\\" loading=\\\"lazy\\\"></a><br>\\n<a href=\\\"https://icon-sets.iconify.design/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img src=\\\"https://img.shields.io/badge/icon-iconify-white\\\" alt=\\\"\\\" loading=\\\"lazy\\\"></a></p>\"}")
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
