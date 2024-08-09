import { defineClientConfig } from "@vuepress/client";
import { setupPWA } from "D:/mishu/my-docs/node_modules/.store/vuepress-plugin-pwa2@2.0.0-rc.0/node_modules/vuepress-plugin-pwa2/lib/client/composables/setup.js";
import SWUpdatePopup from "D:/mishu/my-docs/node_modules/.store/vuepress-plugin-pwa2@2.0.0-rc.0/node_modules/vuepress-plugin-pwa2/lib/client/components/SWUpdatePopup.js";


export default defineClientConfig({
  setup: () => {
    setupPWA();
  },
  rootComponents: [
    SWUpdatePopup,
    
  ],
});
