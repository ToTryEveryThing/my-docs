export const typesMap = {"article":{"/":{"path":"/article/","indexes":[22,23,12,30,31,32,33,34,35,36,37,26,27,28,29,24,25,6,18,0,1,7,8,19,9,10,11,2,38,3,4,5,13,14,15,16,17,20,21]}},"star":{"/":{"path":"/star/","indexes":[]}},"timeline":{"/":{"path":"/timeline/","indexes":[22,23,12,30,31,32,33,34,35,36,37,26,27,28,29,24,25,6,18,0,1,7,8,19,9,10,11,2,38,3,4,5,13,14,15,16,17,20,21]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

