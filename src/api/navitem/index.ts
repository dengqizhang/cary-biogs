import service from "../../utils/request";

// 获取首页数据
export function getNavItem() {
  return service.get("/getNavItem");
}
