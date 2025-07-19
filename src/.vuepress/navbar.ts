import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "Toc",
    icon: "MaterialSymbols10mp",
    prefix: "/blog/",
    children: ["other/README.md", "SSM/README.md", "tools/README.md", "worklogs/README.md", "itheima/README.md", "Microservices/README.md"]
  },
  // {
  //   text: "log",
  //   icon: "material-icon-theme:credits",
  //   prefix: "/blog/",
  //   link: "/blog/commits.md"
  // },

]);
