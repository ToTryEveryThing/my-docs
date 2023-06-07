export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-6e19edb7","v-2e3eac9e","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53","v-e7d29956","v-870b7946","v-2bcb26fa","v-083f0e38","v-3e8a12ea","v-0232aca2","v-4229923f","v-6c8528da","v-3eed5af0"]}},"star":{"/":{"path":"/star/","keys":["v-6e19edb7"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-6e19edb7"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

