import { hasGlobalComponent } from "D:/mishu/my-docs/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "D:/mishu/my-docs/node_modules/@vueuse/core/index.mjs";
import FontIcon from "D:/mishu/my-docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import SiteInfo from "D:/mishu/my-docs/node_modules/vuepress-plugin-components/lib/client/components/SiteInfo.js";
import PDF from "D:/mishu/my-docs/node_modules/vuepress-plugin-components/lib/client/components/PDF.js";

import "D:/mishu/my-docs/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@1`);
  },
  rootComponents: [

  ],
};
