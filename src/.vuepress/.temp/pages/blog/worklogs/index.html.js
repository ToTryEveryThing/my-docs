import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/worklogs/index.html.vue"
const data = JSON.parse("{\"path\":\"/blog/worklogs/\",\"title\":\"开发\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"开发\",\"icon\":\"icon-park:workbench\",\"index\":false,\"dir\":{\"order\":5,\"text\":\"Group 1\"},\"gitInclude\":[]},\"headers\":[],\"git\":{\"createdTime\":1723541325000,\"updatedTime\":1727661246000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":5}]},\"readingTime\":{\"minutes\":0.06,\"words\":17},\"filePathRelative\":\"blog/worklogs/README.md\",\"localizedDate\":\"2024年8月13日\",\"excerpt\":\"\"}")
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
