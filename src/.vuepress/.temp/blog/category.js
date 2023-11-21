export const categoryMap = {"category":{"/":{"path":"/category/","map":{"使用指南":{"path":"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-00404208","v-62533046","v-4d91c61a","v-72d40a42","v-515b615c","v-14596a62","v-0b42c94d","v-3325177c","v-145ac574","v-e7d29956","v-870b7946","v-2bcb26fa","v-083f0e38","v-9e67bfbe"]},"Tool":{"path":"/category/tool/","keys":["v-ac0d9bb4","v-35bc9840","v-befb9404","v-4a3181d5","v-095629c8"]}}}},"tag":{"/":{"path":"/tag/","map":{"Markdown":{"path":"/tag/markdown/","keys":["v-00404208","v-62533046","v-4d91c61a","v-72d40a42","v-515b615c","v-14596a62","v-0b42c94d","v-3325177c","v-e7d29956","v-870b7946","v-2bcb26fa","v-083f0e38","v-9e67bfbe"]},"action":{"path":"/tag/action/","keys":["v-35bc9840"]},"cron":{"path":"/tag/cron/","keys":["v-095629c8"]},"Jenkins":{"path":"/tag/jenkins/","keys":["v-ac0d9bb4"]},"Puppeteer":{"path":"/tag/puppeteer/","keys":["v-befb9404"]},"regex":{"path":"/tag/regex/","keys":["v-4a3181d5"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


