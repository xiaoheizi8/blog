export const siteData = JSON.parse("{\"base\":\"/blog/\",\"lang\":\"zh-CN\",\"title\":\"一朝风月的博客\",\"description\":\"面向注解面向卿,终无解释再无你\",\"head\":[],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
