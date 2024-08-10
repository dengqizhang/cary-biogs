import service from "../../utils/request";

// 获取文章类别数据
export function getArticleCategory() {
  return service.get("/getArticleCategory", {});
}
