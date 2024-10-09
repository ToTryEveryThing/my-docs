import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/tools/action.html.vue"
const data = JSON.parse("{\"path\":\"/blog/tools/action.html\",\"title\":\"Action\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Action\",\"icon\":\"logos:github-actions\",\"order\":3,\"description\":\"Github Action 简单操作示例\",\"category\":[\"Tool\"],\"tag\":[\"action\"],\"gitInclude\":[]},\"headers\":[],\"git\":{\"createdTime\":1690786562000,\"updatedTime\":1723793860000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":4}]},\"readingTime\":{\"minutes\":0.75,\"words\":224},\"filePathRelative\":\"blog/tools/action.md\",\"localizedDate\":\"2023年7月31日\",\"excerpt\":\"<p><a href=\\\"https://www.bilibili.com/video/BV1RE411R7Uy/?spm_id_from=333.788.recommend_more_video.1&amp;vd_source=f8821730ff8a13ec89104c8629e6d42b\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">bilibili</a></p>\\n<p><a href=\\\"https://github.com/JamesIves/github-pages-deploy-action\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">将文件推送到新的分支</a></p>\"}")
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
