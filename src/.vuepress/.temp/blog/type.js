export const typesMap = {"article":{"/":{"path":"/article/","indexes":[22,23,24,25,26,5,33,34,35,36,37,38,39,40,29,30,31,32,27,28,11,0,4,17,12,13,1,14,15,16,18,41,2,3,6,7,8,9,10,19,20,21,42]}},"star":{"/":{"path":"/star/","indexes":[]}},"timeline":{"/":{"path":"/timeline/","indexes":[22,23,24,25,26,5,33,34,35,36,37,38,39,40,29,30,31,32,27,28,11,0,4,17,12,13,1,14,15,16,18,41,2,3,6,7,8,9,10,19,20,21]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

