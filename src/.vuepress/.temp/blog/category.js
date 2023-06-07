export const categoryMap = {"category":{"/":{"path":"/category/","map":{"使用指南":{"path":"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-6e19edb7","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53","v-e7d29956","v-870b7946","v-2bcb26fa","v-083f0e38","v-3e8a12ea","v-0232aca2","v-4229923f","v-6c8528da","v-3eed5af0"]}}}},"tag":{"/":{"path":"/tag/","map":{"禁用":{"path":"/tag/%E7%A6%81%E7%94%A8/","keys":["v-4e65ec78"]},"文章加密":{"path":"/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/","keys":["v-c151bf32"]},"Markdown":{"path":"/tag/markdown/","keys":["v-438ffe52","v-e7d29956","v-870b7946","v-2bcb26fa","v-083f0e38","v-3e8a12ea","v-0232aca2","v-4229923f","v-6c8528da","v-3eed5af0"]},"页面配置":{"path":"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","keys":["v-6e19edb7"]},"使用指南":{"path":"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-6e19edb7"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


