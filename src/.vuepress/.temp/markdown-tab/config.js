import CodeTabs from "D:/mishu/my-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import "D:/mishu/my-docs/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
  },
};
