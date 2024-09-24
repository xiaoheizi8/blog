import comp from "D:/ljwWorkspace/前端/vuepress-starter/docs/.vuepress/.temp/pages/tag/第二个/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/%E7%AC%AC%E4%BA%8C%E4%B8%AA/\",\"title\":\"Tag 第二个\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Tag 第二个\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"第二个\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
