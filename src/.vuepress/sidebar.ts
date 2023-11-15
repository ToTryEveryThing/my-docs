import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "", 
    {
      text: "文档",
      icon: "lightbulb",
      collapsible: true,
      prefix: "blog/other/",
      children: "structure",
    },
    {
      text: "SSM",
      icon: "leaf",
      collapsible: true,
      prefix: "blog/SSM/",
      children: "structure"
    },
    {
      text: "微服务",
      icon: "network-wired",
      collapsible: true,
      prefix: "blog/Microservices/",
      children: "structure"
    },
    {
      text: "工具",
      icon: "puzzle-piece",
      collapsible: true,
      prefix: "blog/tool/",
      children: "structure"
    },
  ],
});
