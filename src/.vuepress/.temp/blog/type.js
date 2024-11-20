export const typesMap = {"article":{"/":{"path":"/article/","indexes":[22,23,5,31,32,33,34,35,36,37,38,27,28,29,30,24,25,16,1,0,11,17,18,2,19,20,21,12,39,3,4,6,7,8,9,10,13,14,15,26]}},"star":{"/":{"path":"/star/","indexes":[]}},"timeline":{"/":{"path":"/timeline/","indexes":[22,23,5,31,32,33,34,35,36,37,38,27,28,29,30,24,25,16,1,0,11,17,18,2,19,20,21,12,39,3,4,6,7,8,9,10,13,14,15]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

