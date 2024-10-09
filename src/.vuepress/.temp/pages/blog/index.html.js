import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/\",\"title\":\"blog\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"blog\",\"icon\":\"logos:blogger\",\"gitInclude\":[]},\"headers\":[],\"git\":{\"createdTime\":1686126382000,\"updatedTime\":1727661246000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":6}]},\"readingTime\":{\"minutes\":0.02,\"words\":7},\"filePathRelative\":\"blog/README.md\",\"localizedDate\":\"2023年6月7日\",\"excerpt\":\"\"}")
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
