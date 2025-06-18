import comp from "D:/study/ToTryEveryThing/my-docs/src/.vuepress/.temp/pages/blog/log.html.vue"
const data = JSON.parse("{\"path\":\"/blog/log.html\",\"title\":\"提交记录\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"提交记录\",\"icon\":\"logos:github-actions\",\"order\":1,\"gitInclude\":[]},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":0.05,\"words\":15},\"filePathRelative\":\"blog/log.md\",\"excerpt\":\"\"}")
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
