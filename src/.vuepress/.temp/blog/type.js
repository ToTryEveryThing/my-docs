export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-6cb33ee0","v-8daa1a0e","v-2e3eac9e","v-145ac574","v-0232aca2","v-b324bab0","v-4229923f","v-6c8528da","v-3eed5af0","v-e7d29956","v-870b7946","v-2bcb26fa","v-083f0e38","v-9e67bfbe","v-60223b4a","v-75f5fc4b","v-3c8012ee"]}},"star":{"/":{"path":"/star/","keys":["v-6cb33ee0"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-6cb33ee0"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

