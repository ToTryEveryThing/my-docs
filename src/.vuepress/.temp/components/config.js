import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "D:/mishu/my-docs/node_modules/.store/vuepress-shared@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "D:/mishu/my-docs/node_modules/.store/@vueuse+core@10.11.1/node_modules/@vueuse/core/index.mjs";
import Badge from "D:/mishu/my-docs/node_modules/.store/vuepress-plugin-components@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "D:/mishu/my-docs/node_modules/.store/vuepress-plugin-components@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "D:/mishu/my-docs/node_modules/.store/vuepress-plugin-components@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "D:/mishu/my-docs/node_modules/.store/vuepress-plugin-components@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useStyleTag(`\
@import url("https://at.alicdn.com/t/c/font_4618431_gb92n24tlxt.css");
`);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
