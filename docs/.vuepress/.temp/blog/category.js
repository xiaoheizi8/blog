export const categoriesMap = {"category":{"/":{"path":"/category/","map":{"java":{"path":"/category/java/","indexes":[0,1]},"History":{"path":"/category/history/","indexes":[2]},"一朝风雨":{"path":"/category/%E4%B8%80%E6%9C%9D%E9%A3%8E%E9%9B%A8/","indexes":[3]},"CategoryA":{"path":"/category/categorya/","indexes":[4,5,6,7,8,9,10,11,12,13]},"CategoryB":{"path":"/category/categoryb/","indexes":[4,5,6,7,8,9,10,11,12,13]},"CategoryC":{"path":"/category/categoryc/","indexes":[14,15]}}}},"tag":{"/":{"path":"/tag/","map":{"WWI":{"path":"/tag/wwi/","indexes":[1]},"WWII":{"path":"/tag/wwii/","indexes":[2]},"第一个tag":{"path":"/tag/%E7%AC%AC%E4%B8%80%E4%B8%AAtag/","indexes":[3]},"第二个":{"path":"/tag/%E7%AC%AC%E4%BA%8C%E4%B8%AA/","indexes":[3]},"tagnew":{"path":"/tag/tagnew/","indexes":[13]},"tag C":{"path":"/tag/tag-c/","indexes":[4,5,6,11,12]},"tag D":{"path":"/tag/tag-d/","indexes":[4,5,6,11,12]},"test":{"path":"/tag/test/","indexes":[0]},"tag A":{"path":"/tag/tag-a/","indexes":[7,8,9,10]},"tag B":{"path":"/tag/tag-b/","indexes":[7,8,9,10]},"tag E":{"path":"/tag/tag-e/","indexes":[14,15]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

