export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"","i":"home"} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/index.html.js"), meta: {"t":"blog","i":"boke"} }],
  ["/blog/itheima/", { loader: () => import(/* webpackChunkName: "blog_itheima_index.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/itheima/index.html.js"), meta: {"t":"黑马","i":"heimabang","O":6} }],
  ["/blog/markmap/main.html", { loader: () => import(/* webpackChunkName: "blog_markmap_main.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/markmap/main.html.js"), meta: {"t":"xmind","i":"person-chalkboard","O":2,"I":false} }],
  ["/blog/markmap/", { loader: () => import(/* webpackChunkName: "blog_markmap_index.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/markmap/index.html.js"), meta: {"t":""} }],
  ["/blog/Microservices/ElasticSearch.html", { loader: () => import(/* webpackChunkName: "blog_Microservices_ElasticSearch.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/Microservices/ElasticSearch.html.js"), meta: {"t":"ElasticSearch","i":"ESpeizhi","O":3} }],
  ["/blog/Microservices/rabbitmq.html", { loader: () => import(/* webpackChunkName: "blog_Microservices_rabbitmq.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/Microservices/rabbitmq.html.js"), meta: {"t":"RabbitMQ","i":"rabbitmq","O":2} }],
  ["/blog/Microservices/", { loader: () => import(/* webpackChunkName: "blog_Microservices_index.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/Microservices/index.html.js"), meta: {"t":"微服务","i":"weifuwu1","O":3} }],
  ["/blog/Microservices/redis.html", { loader: () => import(/* webpackChunkName: "blog_Microservices_redis.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/Microservices/redis.html.js"), meta: {"t":"Redis","i":"Redis","O":1} }],
  ["/blog/Microservices/SpringCloud.html", { loader: () => import(/* webpackChunkName: "blog_Microservices_SpringCloud.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/Microservices/SpringCloud.html.js"), meta: {"t":"Spring Cloud","i":"springcloud","O":4} }],
  ["/blog/other/alioss.html", { loader: () => import(/* webpackChunkName: "blog_other_alioss.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/other/alioss.html.js"), meta: {"t":"aliyun OSS","i":"ossduixiangcunchuOSS","O":4} }],
  ["/blog/other/book.html", { loader: () => import(/* webpackChunkName: "blog_other_book.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/other/book.html.js"), meta: {"t":"书本","i":"book","O":2} }],
  ["/blog/other/Git.html", { loader: () => import(/* webpackChunkName: "blog_other_Git.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/other/Git.html.js"), meta: {"t":"Git","i":"git","O":1} }],
  ["/blog/other/linux.html", { loader: () => import(/* webpackChunkName: "blog_other_linux.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/other/linux.html.js"), meta: {"t":"Linux","i":"linux","O":2} }],
  ["/blog/other/Maven.html", { loader: () => import(/* webpackChunkName: "blog_other_Maven.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/other/Maven.html.js"), meta: {"t":"Maven","i":"pluginIcon","O":3} }],
  ["/blog/other/Nginx.html", { loader: () => import(/* webpackChunkName: "blog_other_Nginx.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/other/Nginx.html.js"), meta: {"t":"Nginx","i":"Nginx","O":2} }],
  ["/blog/other/", { loader: () => import(/* webpackChunkName: "blog_other_index.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/other/index.html.js"), meta: {"t":"文档","i":"gdoc","O":4} }],
  ["/blog/SSM/Mybatis.html", { loader: () => import(/* webpackChunkName: "blog_SSM_Mybatis.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/SSM/Mybatis.html.js"), meta: {"t":"Mybatis","i":"MYBATIS","O":3} }],
  ["/blog/SSM/MybatisPlus.html", { loader: () => import(/* webpackChunkName: "blog_SSM_MybatisPlus.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/SSM/MybatisPlus.html.js"), meta: {"t":"Mybatis Plus","i":"mybatisplus","O":4} }],
  ["/blog/SSM/mysql.html", { loader: () => import(/* webpackChunkName: "blog_SSM_mysql.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/SSM/mysql.html.js"), meta: {"t":"Mysql","i":"Mysql","O":1} }],
  ["/blog/SSM/quartz.html", { loader: () => import(/* webpackChunkName: "blog_SSM_quartz.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/SSM/quartz.html.js"), meta: {"t":"Quartz","i":"time","O":2} }],
  ["/blog/SSM/", { loader: () => import(/* webpackChunkName: "blog_SSM_index.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/SSM/index.html.js"), meta: {"t":"SSM","i":"spring","O":1} }],
  ["/blog/SSM/ssm.html", { loader: () => import(/* webpackChunkName: "blog_SSM_ssm.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/SSM/ssm.html.js"), meta: {"t":"Spring SpringMVC","i":"spring","O":5} }],
  ["/blog/tools/action.html", { loader: () => import(/* webpackChunkName: "blog_tools_action.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/tools/action.html.js"), meta: {"t":"Action","i":"liushuixian","O":3} }],
  ["/blog/tools/cron.html", { loader: () => import(/* webpackChunkName: "blog_tools_cron.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/tools/cron.html.js"), meta: {"t":"cron","i":"crontab","O":1} }],
  ["/blog/tools/jasypt.html", { loader: () => import(/* webpackChunkName: "blog_tools_jasypt.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/tools/jasypt.html.js"), meta: {"t":"Jasypt","i":"jiami","O":3} }],
  ["/blog/tools/Jenkins.html", { loader: () => import(/* webpackChunkName: "blog_tools_Jenkins.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/tools/Jenkins.html.js"), meta: {"t":"Jenkins","i":"jenkins","O":4} }],
  ["/blog/tools/Puppeteer.html", { loader: () => import(/* webpackChunkName: "blog_tools_Puppeteer.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/tools/Puppeteer.html.js"), meta: {"t":"Puppeteer","i":"puppeteer","O":5} }],
  ["/blog/tools/", { loader: () => import(/* webpackChunkName: "blog_tools_index.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/tools/index.html.js"), meta: {"t":"工具","i":"guanligongju","O":2} }],
  ["/blog/tools/regex.html", { loader: () => import(/* webpackChunkName: "blog_tools_regex.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/tools/regex.html.js"), meta: {"t":"regex","i":"-regexpreplace","O":2} }],
  ["/blog/itheima/Netty/Netty01-nio.html", { loader: () => import(/* webpackChunkName: "blog_itheima_Netty_Netty01-nio.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/itheima/Netty/Netty01-nio.html.js"), meta: {"t":"Netty-Nio","i":"Netty","O":2} }],
  ["/blog/itheima/Netty/Netty02.html", { loader: () => import(/* webpackChunkName: "blog_itheima_Netty_Netty02.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/itheima/Netty/Netty02.html.js"), meta: {"t":"Netty 入门","i":"Netty","O":2} }],
  ["/blog/itheima/Netty/Netty03.html", { loader: () => import(/* webpackChunkName: "blog_itheima_Netty_Netty03.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/itheima/Netty/Netty03.html.js"), meta: {"t":"Netty 进阶","i":"Netty","O":2} }],
  ["/blog/itheima/Netty/Netty04.html", { loader: () => import(/* webpackChunkName: "blog_itheima_Netty_Netty04.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/itheima/Netty/Netty04.html.js"), meta: {"t":"优化与源码","i":"Netty","O":2} }],
  ["/blog/itheima/Netty/", { loader: () => import(/* webpackChunkName: "blog_itheima_Netty_index.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/itheima/Netty/index.html.js"), meta: {"t":"Netty","i":"Netty","O":6} }],
  ["/blog/worklogs/mysql.html", { loader: () => import(/* webpackChunkName: "blog_worklogs_mysql.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/worklogs/mysql.html.js"), meta: {"t":"Mysql","i":"Mysql","O":1} }],
  ["/blog/worklogs/pdf.html", { loader: () => import(/* webpackChunkName: "blog_worklogs_pdf.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/worklogs/pdf.html.js"), meta: {"t":"导出pdf","i":"PDF","O":2} }],
  ["/blog/worklogs/principle.html", { loader: () => import(/* webpackChunkName: "blog_worklogs_principle.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/worklogs/principle.html.js"), meta: {"t":"principle","i":"book","O":3} }],
  ["/blog/worklogs/", { loader: () => import(/* webpackChunkName: "blog_worklogs_index.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/worklogs/index.html.js"), meta: {"t":"开发","i":"wangzhankaifa","O":5} }],
  ["/blog/worklogs/xml.html", { loader: () => import(/* webpackChunkName: "blog_worklogs_xml.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/worklogs/xml.html.js"), meta: {"t":"解析xml","i":"xml1","O":2} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/mishu/my-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
