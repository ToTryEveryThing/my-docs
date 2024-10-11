import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/Software Designer/test.html.vue"
const data = JSON.parse("{\"path\":\"/blog/Software%20Designer/test.html\",\"title\":\"test\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"test\",\"icon\":\"logos:github-actions\",\"order\":3,\"description\":\"test\",\"category\":[\"软考\"],\"tag\":[\"真题\",\"解析\"],\"gitInclude\":[]},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":0.26,\"words\":78},\"filePathRelative\":\"blog/Software Designer/test.md\",\"excerpt\":\"\"}")
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
