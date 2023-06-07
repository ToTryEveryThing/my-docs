import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "", 
    {
      text: "文档",
      icon: "splotch",
      prefix: "blog/other/",
      children: "structure",
    },
    {
      text: "SpringBoot",
      icon: "book",
      prefix: "blog/springboot/",
      children: "structure"
    },
    {
      text: "其他",
      icon: "ellipsis",
      prefix: "blog/oother/",
      children: "structure"
    },
    "slides",
  ],
});
