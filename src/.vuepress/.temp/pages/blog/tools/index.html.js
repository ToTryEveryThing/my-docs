import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/tools/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/tools/\",\"title\":\"工具\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"工具\",\"icon\":\"icon-park:toolkit\",\"index\":false,\"dir\":{\"order\":2},\"gitInclude\":[]},\"headers\":[],\"git\":{\"createdTime\":1723541325000,\"updatedTime\":1727335440000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":4}]},\"readingTime\":{\"minutes\":0.05,\"words\":14},\"filePathRelative\":\"blog/tools/README.md\",\"localizedDate\":\"2024年8月13日\",\"excerpt\":\"\"}")
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
