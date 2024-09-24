import comp from "D:/ljwWorkspace/前端/vuepress-starter/docs/.vuepress/.temp/pages/tag/tagnew/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/tagnew/\",\"title\":\"Tag tagnew\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Tag tagnew\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"tagnew\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
