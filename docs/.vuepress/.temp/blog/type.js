export const typesMap = {"article":{"/":{"path":"/article/","indexes":[14,15,11,12,13,4,5,6,7,8,9,10,3]}},"timeline":{"/":{"path":"/timeline/","indexes":[11,12,13,4,5,6,7,8,9,10,3,15,14,2]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typesMap);
  });

