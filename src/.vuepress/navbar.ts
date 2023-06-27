import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text:"工具",
    icon:"puzzle-piece",
    children:[
      {
        text:"cron",
        link:"/blog/tool/cron.md",
        icon:"clock",
      },
      {
        text:"regex",
        link:"/blog/tool/regex.md",
        icon:"wand-magic-sparkles",
      },
      {
        text:"Puppeteer",
        link:"/blog/tool/Puppeteer.md",
        icon:"image",
      }
    ]
  },
  {
    text: "主站",
    icon: "lightbulb",
    link: "https://beink.cn/",
  },
  {
    text: "Github",
    icon: "blog",
    link: "https://github.com/ToTryEveryThing/my-docs",
  },
]);
