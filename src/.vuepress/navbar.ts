import { navbar } from "vuepress-theme-hope";

export default navbar([
  {
    text: "微服务",
    icon: "weifuwu1",
    // link: "blog/Microservices/"
    children:["/blog/Microservices/redis.md","/blog/Microservices/rabbitmq.md","/blog/Microservices/ElasticSearch.md","/blog/Microservices/SpringCloud.md"]
  },
  {
    text: "文档",
    icon: "gdoc",
    children: ["/blog/other/Git.md","/blog/other/book.md","/blog/other/linux.md","/blog/other/Maven.md","/blog/other/alioss.md"]
  },
  {
    text: "SSM",
    icon: "spring",
    prefix: "/blog/SSM/",
    children: ["mysql.md","quartz.md","Mybatis.md","MybatisPlus.md","ssm"]
  },
  // {
  //   text: "工具",
  //   icon: 'guanligongju',
  //   prefix: "/blog/tools/",
  //   children:["action.md","cron","jasypt","Jenkins","Puppeteer","regex"]
  // },
  // {
  //   text: "开发",
  //   icon: "wangzhankaifa",
  //   prefix: "/blog/worklogs/",
  //   children: ["xml"]
  // },

]);
