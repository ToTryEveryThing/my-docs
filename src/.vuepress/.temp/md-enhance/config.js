import { defineClientConfig } from "@vuepress/client";
import ChartJS from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "D:/mishu/my-docs/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import { useContainer } from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/composables/container.js";
import "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import ECharts from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import { injectEchartsConfig } from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import Playground from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/katex/dist/katex.min.css";
import "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";
import { injectVuePlaygroundConfig } from "D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("ECharts", ECharts);
    injectEchartsConfig(app);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    injectVuePlaygroundConfig(app);
    app.component("VuePlayground", defineAsyncComponent(() => import("D:/mishu/my-docs/node_modules/vuepress-theme-hope/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
  },
  setup: () => {
useContainer();
  }
});
