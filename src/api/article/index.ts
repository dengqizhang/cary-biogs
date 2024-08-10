import service from "../../utils/request";

// 获取文章类别数据
export function getArticleById(categoryId: any) {
  return service.get("/getArticleById", {
    params:{
        categoryId: categoryId
    }
  });
}
