import comp from "D:/ljwWorkspace/前端/vuepress-starter/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"博客主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"博客主页\",\"heroImage\":\"https://reactjs.org/logo-og.png\",\"actions\":[{\"text\":\"快速启动\",\"link\":\"/getting-started.html\",\"type\":\"primary\"},{\"text\":\"VuePress文档\",\"link\":\"https://vuejs.press/guide/introduction.html\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"简单为先\",\"details\":\"以Markdown为核心的最小化设置结构，帮助你专注于写作。\"},{\"title\":\"基于Vue\",\"details\":\"享受Vue的开发体验，在Markdown中使用Vue组件，并使用Vue开发自定义主题。\"},{\"title\":\"高性能\",\"details\":\"VuePress为每个页面生成预渲染的静态HTML，页面加载后作为SPA运行。\"},{\"title\":\"主题\",\"details\":\"提供开箱即用的默认主题。你也可以选择社区主题或创建自己的主题。\"},{\"title\":\"插件\",\"details\":\"灵活的插件API，允许插件为你的网站提供许多即插即用的功能。\"},{\"title\":\"打包工具\",\"details\":\"默认打包工具是Vite，同时也支持Webpack。选择你喜欢的！\"}],\"footer\":\"MIT许可 | 版权所有 © 2018-至今 VuePress社区\"},\"headers\":[],\"git\":{\"updatedTime\":1727149242000,\"contributors\":[{\"name\":\"ljw\",\"email\":\"Spring_Dev_Ljw@163.com\",\"commits\":3}]},\"filePathRelative\":\"README.md\"}")
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
