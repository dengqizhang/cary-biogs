// 定义递归函数来处理深层次的数据结构
export const convertNamesToLabels = (data) => {
  for (let item of data) {
    if (item.name) {
      item.label = item.name;
      delete item.name;
    }
    if (item.children && item.children.length > 0) {
      convertNamesToLabels(item.children);
    }
  }
};
