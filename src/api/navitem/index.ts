import service from "../../utils/request";

// 获取首页数据
export function getNavItem() {
  return service.get("/getNavItem");
}

// 获取项目数组
export function getProjectExperienceList(id: any) {
  return service.get("/getProjectExperienceList", {
    params: {
      id: id,
    },
  });
}

// 获取项目
export function getProjectExperience(id: any) {
  return service.get("/getProjectExperience", {
    params: {
      id: id,
    },
  });
}
