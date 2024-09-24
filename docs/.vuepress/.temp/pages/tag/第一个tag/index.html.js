import comp from "D:/ljwWorkspace/前端/vuepress-starter/docs/.vuepress/.temp/pages/tag/第一个tag/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/%E7%AC%AC%E4%B8%80%E4%B8%AAtag/\",\"title\":\"Tag 第一个tag\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Tag 第一个tag\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"第一个tag\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
