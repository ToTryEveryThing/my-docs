import { hasGlobalComponent } from "D:/mishu/my-docs/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "D:/mishu/my-docs/node_modules/@vueuse/core/index.mjs";
import Badge from "D:/mishu/my-docs/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "D:/mishu/my-docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "D:/mishu/my-docs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useScriptTag(`https://at.alicdn.com/t/c/font_4618431_zu8qu0uispt.js`);
  },
  rootComponents: [

  ],
};
