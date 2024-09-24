import comp from "D:/ljwWorkspace/前端/vuepress-starter/docs/.vuepress/.temp/pages/posts/article2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article2.html\",\"title\":\"Archive Article1\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-9-23\",\"category\":[\"java\"],\"tag\":[\"test\"],\"archive\":true},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"git\":{\"updatedTime\":1727149242000,\"contributors\":[{\"name\":\"ljw\",\"email\":\"Spring_Dev_Ljw@163.com\",\"commits\":3}]},\"filePathRelative\":\"posts/article2.md\",\"excerpt\":\"\\n<p>Java</p>\\n<h2>Heading 2</h2>\\n<p>Java是一门面向对象编程的语言</p>\\n<h3>Heading 3</h3>\\n<p>包学Java的啊</p>\\n\"}")
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
