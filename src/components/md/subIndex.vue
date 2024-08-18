<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <h4>介绍</h4>
        <el-tree
          style="max-width: 600px"
          :data="data"
          node-key="id"
          :default-expanded-keys="[2]"
          :default-checked-keys="[3]"
          :props="defaultProps"
          @node-click="handleNodeClick"
          highlight-current="true"
          :default-expand-all="defaultExpand"
      /></el-aside>
      <el-main><md :mainId="mainId" /></el-main>
    </el-container>
  </div>
</template>
  <script lang="ts" setup>
import { getArticleCategory } from "../../api/articlecategory/index.ts";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import md from "./md.vue";

const route = useRoute();
const mainId = ref();
interface Tree {
  label: string;
  children?: Tree[];
}
const handleNodeClick = async (data: Tree) => {
  console.log(data);
  if (data.children == null) {
    mainId.value = data.categoryId;
  }
};
//树状结构是否展开
const defaultExpand = ref(true);
/**树状控件数组 */
const data = ref([]);
/**树状控件默认展开数组 */
const expandedData = ref([]);
const defaultProps = {
  children: "children",
  label: "label",
};
/**
 * 获取文章类别
 */
const getfetch = async (navitemId: any, type: any) => {
  const res = await getArticleCategory(navitemId);
  // 调用函数进行转换
  convertNamesToLabels(res);

  data.value = res;
  mainId.value = res[0].children[0].categoryId;
};
// 定义递归函数来处理深层次的数据结构
const convertNamesToLabels = (data: any) => {
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
onMounted(() => {
  getfetch(route.query.id, route.query.type);
  watch(
    () => route.query,
    (newQuery) => {
      getfetch(newQuery.id, newQuery.type);
    }
  );
});
</script>
    