import comp from "D:/mishu/my-docs/src/.vuepress/.temp/pages/blog/SSM/ssm.html.vue"
const data = JSON.parse("{\"path\":\"/blog/SSM/ssm.html\",\"title\":\"Spring SpringMVC\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Spring SpringMVC\",\"icon\":\"openmoji:hot-springs\",\"description\":\"Spring框架基础及其在Web开发中的应用。\",\"order\":5,\"category\":[\"SSM\"],\"tag\":[\"Spring SpringMVC\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Spring\",\"slug\":\"spring\",\"link\":\"#spring\",\"children\":[{\"level\":3,\"title\":\"IoC\",\"slug\":\"ioc\",\"link\":\"#ioc\",\"children\":[]},{\"level\":3,\"title\":\"注解开发\",\"slug\":\"注解开发\",\"link\":\"#注解开发\",\"children\":[]},{\"level\":3,\"title\":\"反射\",\"slug\":\"反射\",\"link\":\"#反射\",\"children\":[]},{\"level\":3,\"title\":\"AOP\",\"slug\":\"aop\",\"link\":\"#aop\",\"children\":[]},{\"level\":3,\"title\":\"切入点表达式\",\"slug\":\"切入点表达式\",\"link\":\"#切入点表达式\",\"children\":[]}]},{\"level\":2,\"title\":\"SpringMVC\",\"slug\":\"springmvc\",\"link\":\"#springmvc\",\"children\":[{\"level\":3,\"title\":\"创建使用\",\"slug\":\"创建使用\",\"link\":\"#创建使用\",\"children\":[]},{\"level\":3,\"title\":\"Rest风格\",\"slug\":\"rest风格\",\"link\":\"#rest风格\",\"children\":[]},{\"level\":3,\"title\":\"注解说明\",\"slug\":\"注解说明\",\"link\":\"#注解说明\",\"children\":[]}]},{\"level\":2,\"title\":\"其他\",\"slug\":\"其他\",\"link\":\"#其他\",\"children\":[{\"level\":3,\"title\":\"自定义注解为属性赋值\",\"slug\":\"自定义注解为属性赋值\",\"link\":\"#自定义注解为属性赋值\",\"children\":[]},{\"level\":3,\"title\":\"拦截器\",\"slug\":\"拦截器\",\"link\":\"#拦截器\",\"children\":[]},{\"level\":3,\"title\":\"过滤器\",\"slug\":\"过滤器\",\"link\":\"#过滤器\",\"children\":[]},{\"level\":3,\"title\":\"枚举\",\"slug\":\"枚举\",\"link\":\"#枚举\",\"children\":[]}]}],\"git\":{\"createdTime\":1686126382000,\"updatedTime\":1728439076000,\"contributors\":[{\"name\":\"mishu\",\"email\":\"riceuncle@outlook.com\",\"commits\":8}]},\"readingTime\":{\"minutes\":8.14,\"words\":2441},\"filePathRelative\":\"blog/SSM/ssm.md\",\"localizedDate\":\"2023年6月7日\",\"excerpt\":\"<h2>Spring</h2>\\n<p><a href=\\\"https://www.bilibili.com/video/BV1Fi4y1S7ix?p=3&amp;vd_source=f8821730ff8a13ec89104c8629e6d42b\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Spring-01-初识Spring_哔哩哔哩_bilibili</a></p>\\n<h3>IoC</h3>\\n<blockquote>\\n<p><strong>Ioc—Inversion of Control</strong></p>\\n<p>一种思想。 创建对象、管理对象</p>\\n<p>一般对象都是直接通过new出来 ，交由IoC管理后，IoC容器来控制对象的创建</p>\\n<p>配置实在是多</p>\\n</blockquote>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
