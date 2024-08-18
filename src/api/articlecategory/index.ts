import service from "../../utils/request";

// 获取文章类别数据
export function getArticleCategory(navItemId: number) {
  return service.get("/getArticleCategory", {
    params: {
      navItemId: navItemId,
    },
  });
}
