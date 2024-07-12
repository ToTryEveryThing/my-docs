import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "", 
    {
      text: "文档",
      icon: "gdoc",
      collapsible: true,
      prefix: "blog/other/",
      children: "structure",
    },
    {
      text: "SSM",
      icon: "spring",
      collapsible: true,
      prefix: "blog/SSM/",
      children: "structure"
    },
    {
      text: "微服务",
      icon: "weifuwu1",
      collapsible: true,
      prefix: "blog/Microservices/",
      children: "structure"
    },
    {
      text: "工具",
      icon: "guanligongju",
      collapsible: true,
      prefix: "blog/tools/",
      children: "structure"
    },
    // {
    //   text: "xmind",
    //   icon: "link",
    //   collapsible: true,
    //   prefix: "blog/markmap/",
    //   children: "structure"
    // },
    {
      text: "开发",
      icon: "wangzhankaifa",
      collapsible: true,
      prefix: "blog/worklogs/",
      children: "structure"
    },
  ],
});
