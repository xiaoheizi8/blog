import "D:/ljwWorkspace/前端/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "D:/ljwWorkspace/前端/vuepress-starter/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "D:/ljwWorkspace/前端/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "D:/ljwWorkspace/前端/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "D:/ljwWorkspace/前端/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "D:/ljwWorkspace/前端/vuepress-starter/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
