import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text:"工具",
    icon:"star",
    children:["../blog/tool/cron"]
  },
  {
    text: "主站",
    icon: "lightbulb",
    link: "https://beink.cn/",
  },
  {
    text: "Github",
    icon: "github",
    link: "https://github.com/ToTryEveryThing/my-docs",
  },
]);
