import "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import Mermaid from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import Playground from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default {
  enhance: ({ app }) => {
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    app.component("Playground", Playground);
  },
};
