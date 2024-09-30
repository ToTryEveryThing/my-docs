import path from "path";
import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { hopeTheme } from "vuepress-theme-hope";
import { catalogPlugin } from '@vuepress/plugin-catalog'
import theme from "./theme.js";

export default defineUserConfig({
  // base: '/my-docs/',
  base: '/',
  lang: "zh-CN",
  plugins: [
    // registerComponentsPlugin({
    //   // 配置项
    //   componentsDir: path.resolve(__dirname, './components')
    // }),
    docsearchPlugin({
      // 配置项
      appId: 'GTPYHRH7GU',
      apiKey: '918b433328b9828b7156977a294134a2',
      indexName: 'beink',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
          },
        },
      }
    }),
  ],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    [

      "script",
      {},
      `\
      (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "nc4947ht6p");
      `,
    ]
  ],

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
