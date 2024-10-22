export const typesMap = {"article":{"/":{"path":"/article/","indexes":[11,12,13,14,15,16,36,28,29,5,37,38,39,40,41,42,43,44,32,33,34,35,30,31,22,1,0,17,23,24,2,25,26,27,18,45,3,4,6,7,8,9,10,19,20,21]}},"star":{"/":{"path":"/star/","indexes":[]}},"timeline":{"/":{"path":"/timeline/","indexes":[11,12,13,14,15,16,36,28,29,5,37,38,39,40,41,42,43,44,32,33,34,35,30,31,22,1,0,17,23,24,2,25,26,27,18,45,3,4,6,7,8,9,10,19,20,21]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

