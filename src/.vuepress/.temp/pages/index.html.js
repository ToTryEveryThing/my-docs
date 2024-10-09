import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"home\",\"home\":true,\"welcome\":\"\",\"portfolio\":true,\"titles\":[\"Hello World\",\"你好 世界\"],\"bgImage\":\"https://cdn.beink.cn/background/back.jpg\",\"description\":\"记录、学习\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://docs.beink.cn/\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"记录、学习\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://raw.githubusercontent.com/ToTryEveryThing/ToTryEveryThing/output/github-contribution-grid-snake.svg\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-09-30T01:54:06.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-09-30T01:54:06.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"\\\",\\\"description\\\":\\\"记录、学习\\\"}\"]]},\"headers\":[],\"git\":{\"createdTime\":1686126382000,\"updatedTime\":1727661246000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":15}]},\"readingTime\":{\"minutes\":0.17,\"words\":51},\"filePathRelative\":\"README.md\",\"localizedDate\":\"2023年6月7日\",\"excerpt\":\"<figure><img src=\\\"https://raw.githubusercontent.com/ToTryEveryThing/ToTryEveryThing/output/github-contribution-grid-snake.svg\\\" alt=\\\"\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption></figcaption></figure>\\n<p><a href=\\\"https://img.shields.io\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img src=\\\"https://img.shields.io/badge/Tool-badge-blue\\\" alt=\\\"\\\" loading=\\\"lazy\\\"></a><br>\\n<a href=\\\"https://mvnrepository.com/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img src=\\\"https://img.shields.io/badge/Tool-Maven-red\\\" alt=\\\"\\\" loading=\\\"lazy\\\"></a><br>\\n<a href=\\\"https://ohmyposh.dev/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><img src=\\\"https://img.shields.io/badge/Theme-OhMyPosh-orange\\\" alt=\\\"\\\" loading=\\\"lazy\\\"></a></p>\"}")
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
