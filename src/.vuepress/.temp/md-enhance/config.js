import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "D:/mishu/my-docs/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import { useContainer } from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/composables/container.js";
import "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Playground from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("Playground", Playground);
  },
  setup: () => {
useContainer();
  }
});
