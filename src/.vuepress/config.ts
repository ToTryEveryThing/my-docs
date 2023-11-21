import path from "path";
import { defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { hopeTheme } from "vuepress-theme-hope";
import { gitPlugin } from "@vuepress/plugin-git";
import theme from "./theme.js";

export default ({
  base: '/my-docs/',
  lang: "zh-CN",
  plugins: [
    gitPlugin({
      // 配置项
      contributors:true
    }),
    registerComponentsPlugin({
      // 配置项
      componentsDir: path.resolve(__dirname, './components')
    }),
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
    }),
  ],



  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
