<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-tree
          style="max-width: 600px"
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
      /></el-aside>
      <el-main><md :main="maintext" /></el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { getArticleCategory } from "../../api/articlecategory/index.ts";
import { getArticleById } from "../../api/article/index.ts";
import { ref, onMounted } from "vue";
import { ElMessage } from "element-plus";
import md from "./md.vue";

const maintext = ref("");
interface Tree {
  label: string;
  children?: Tree[];
}

const handleNodeClick = async (data: Tree) => {
  console.log(data);
  if (data.children == null) {
    //发起网络请求,根据文章id获取文章
    const res = await getArticleById(data.categoryId);
    maintext.value = res.main;
    console.log(maintext.value);

    console.log(res);
  }
};

const data = ref([]);

const defaultProps = {
  children: "children",
  label: "label",
};
/**
 * 获取文章类别
 */
const getfetch = async () => {
  const res = await getArticleCategory();
  // 调用函数进行转换
  convertNamesToLabels(res);
  data.value = res;
  console.log(res);
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
  getfetch();
});
</script>
  