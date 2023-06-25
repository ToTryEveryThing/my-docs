import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "E:/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "E:/my-docs/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "E:/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "E:/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "E:/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "E:/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "E:/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import "E:/my-docs/node_modules/reveal.js/dist/reveal.css";
import Presentation from "E:/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import { injectRevealConfig } from "E:/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Playground from "E:/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import "E:/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    injectRevealConfig(app);
    app.component("Presentation", Presentation);
    app.component("Playground", Playground);
  },
  setup: () => {

  }
});
