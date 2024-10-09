export const typesMap = {"article":{"/":{"path":"/article/","indexes":[16,17,5,30,31,32,33,34,35,36,37,26,27,28,29,18,19,20,1,0,11,21,22,2,23,24,25,12,38,3,4,6,7,8,9,10,13,14,15]}},"star":{"/":{"path":"/star/","indexes":[]}},"timeline":{"/":{"path":"/timeline/","indexes":[16,17,5,30,31,32,33,34,35,36,37,26,27,28,29,18,19,20,1,0,11,21,22,2,23,24,25,12,38,3,4,6,7,8,9,10,13,14,15]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

