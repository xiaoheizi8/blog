import CodeTabs from "D:/ljwWorkspace/前端/smallVue3Project/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import Tabs from "D:/ljwWorkspace/前端/smallVue3Project/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/ljwWorkspace/前端/smallVue3Project/vuepress-starter/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
