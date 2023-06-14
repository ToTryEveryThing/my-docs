import { defineClientConfig } from "@vuepress/client";

import { Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "E:/my-docs/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { HopeIcon } from "E:/my-docs/node_modules/vuepress-theme-hope/lib/bundle/export.js";
import { defineAutoCatalogIconComponent } from "E:/my-docs/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import { GlobalEncrypt, LocalEncrypt } from "E:/my-docs/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "E:/my-docs/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"
import Slide from "E:/my-docs/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "E:/my-docs/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,
    Slide,
  }
});