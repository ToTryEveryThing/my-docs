import { defineClientConfig } from "vuepress/client";
import { setupTransparentNavbar } from "vuepress-theme-hope/presets/transparentNavbar.js";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";
import { setupSnowFall } from "vuepress-theme-hope/presets/SnowFall.js";
import Commits from "./components/Commits.vue";

export default defineClientConfig({

    enhance: ({ app, router, siteData }) => {
        app.component("Commits", Commits);
    },
    setup() {
        setupTransparentNavbar({ type: "all" });
        // setupRunningTimeFooter(
        //     new Date("2023-06-07"),
        //     {
        //         "/": "已运行 :day 天 :hour 小时 :minute 分钟 :second 秒"
        //     },
        //     true,
        // );
        // 下雪
        // setupSnowFall();
    },
    layouts: {},
    rootComponents: [],




});