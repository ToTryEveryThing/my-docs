export const typesMap = {"article":{"/":{"path":"/article/","indexes":[17,18,1,30,31,32,33,34,35,36,37,26,27,28,29,19,20,11,7,0,21,12,13,8,14,15,16,22,38,2,3,4,5,6,9,10,23,24,25]}},"star":{"/":{"path":"/star/","indexes":[]}},"timeline":{"/":{"path":"/timeline/","indexes":[17,18,1,30,31,32,33,34,35,36,37,26,27,28,29,19,20,11,7,0,21,12,13,8,14,15,16,22,38,2,3,4,5,6,9,10,23,24,25]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

