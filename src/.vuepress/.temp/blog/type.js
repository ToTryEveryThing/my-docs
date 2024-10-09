export const typesMap = {"article":{"/":{"path":"/article/","indexes":[22,23,1,30,31,32,33,34,35,36,37,26,27,28,29,24,25,16,12,0,7,17,18,13,19,20,21,8,38,2,3,4,5,6,9,10,11,14,15]}},"star":{"/":{"path":"/star/","indexes":[]}},"timeline":{"/":{"path":"/timeline/","indexes":[22,23,1,30,31,32,33,34,35,36,37,26,27,28,29,24,25,16,12,0,7,17,18,13,19,20,21,8,38,2,3,4,5,6,9,10,11,14,15]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

