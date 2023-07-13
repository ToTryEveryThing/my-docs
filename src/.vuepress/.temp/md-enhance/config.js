import { defineClientConfig } from "@vuepress/client";
import CodeTabs from "D:/study/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "D:/study/my-docs/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "D:/study/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "D:/study/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import "D:/study/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import "D:/study/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/study/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import "D:/study/my-docs/node_modules/reveal.js/dist/reveal.css";
import Presentation from "D:/study/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Presentation.js";
import { injectRevealConfig } from "D:/study/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Playground from "D:/study/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import "D:/study/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

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
