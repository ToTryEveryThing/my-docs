import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "toc",
    icon: "fxemoji:christmastree",
    prefix: "/blog/",
    children: ["other/README.md", "SSM/README.md", "tools/README.md", "worklogs/README.md", "itheima/README.md", "Microservices/README.md"]
  },

]);
