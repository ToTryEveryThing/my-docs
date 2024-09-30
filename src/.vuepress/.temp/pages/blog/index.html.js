import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/\",\"title\":\"blog\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"blog\",\"icon\":\"boke\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://docs.beink.cn/blog/\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"blog\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"og:updated_time\",\"content\":\"2024-09-26T07:24:00.000Z\"}],[\"meta\",{\"property\":\"article:modified_time\",\"content\":\"2024-09-26T07:24:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"blog\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":\\\"2024-09-26T07:24:00.000Z\\\",\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"mishu\\\",\\\"url\\\":\\\"https://github.com/ToTryEveryThing/my-docs\\\"}]}\"]]},\"headers\":[],\"git\":{\"createdTime\":1686126382000,\"updatedTime\":1727335440000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":5}]},\"readingTime\":{\"minutes\":0.02,\"words\":6},\"filePathRelative\":\"blog/README.md\",\"localizedDate\":\"2023年6月7日\",\"excerpt\":\"\"}")
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
