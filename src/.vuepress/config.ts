import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from "vuepress";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import theme from "./theme.js";

export default defineUserConfig({
  // base: '/my-docs/',
  base: '/',
  lang: "zh-CN",
  plugins: [
    docsearchPlugin({
      // 配置项
      appId: 'YFHDW2CZWH',
      apiKey: 'bdc344cc78ce33e2a92faa9e82bb5d07',
      indexName: 'beink',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清空查询',
                resetButtonAriaLabel: '清空查询',
                cancelButtonText: '返回',
                cancelButtonAriaLabel: '返回',
                searchInputLabel: '搜索',
              },
              startScreen: {
                recentSearchesTitle: '最近',
                noRecentSearchesText: '没有最近的搜索',
                saveRecentSearchButtonTitle: '保存此搜索',
                removeRecentSearchButtonTitle: '从历史记录中删除此搜索',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏夹中删除此搜索',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '您可能需要检查您的网络连接。',
              },
              footer: {
                selectText: '选择',
                selectKeyAriaLabel: 'Enter key',
                navigateText: '切换',
                navigateUpKeyAriaLabel: 'Arrow up',
                navigateDownKeyAriaLabel: 'Arrow down',
                closeText: '关闭',
                closeKeyAriaLabel: 'Escape key',
                searchByText: 'Search by',
              },
              noResultsScreen: {
                noResultsText: '没有结果',
                suggestedQueryText: '尝试搜索',
                reportMissingResultsText: '相信这个查询应该返回结果吗？',
                reportMissingResultsLinkText: '让我们知道。',
              },
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
      })(window, document, "clarity", "script", "nnxp8qqiry");
      `,
    ]
  ],

  theme,

  // Enable it with pwa
  shouldPrefetch: false,
});
