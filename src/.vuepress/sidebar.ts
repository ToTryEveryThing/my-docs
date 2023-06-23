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
    "slides",
  ],
});
