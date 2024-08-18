<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <h4>介绍</h4>
        <el-tree
          empty-text="暂无数据"
          style="max-width: 600px"
          :data="data"
          node-key="id"
          @node-click="handleNodeClick"
          :highlight-current="true"
          :default-expand-all="true"
          :current-node-key="defaultNode"
      /></el-aside>
      <el-main><md :mainId="mainId" /></el-main>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, watch } from "vue";
import { getArticleCategory } from "../../../api/articlecategory/index";
import { convertNamesToLabels } from "../../../utils/convertNamesToLabels.js";
import md from "../../md/md.vue";
//接受父组件传过来的参数
const props = defineProps({
  articleCategoryId: {
    type: Number,
  },
});
/**树状控件数组 */
const data = ref([]);
/**文章id */
const mainId = ref();
/**
 * 获取文章类别
 */
const getfetch = async (navitemId: any) => {
  const res = await getArticleCategory(navitemId);
  console.log(res);
  // 调用函数进行转换
  convertNamesToLabels(res);
  data.value = res;
  mainId.value = res[0].categoryId;
};
/**树状组件节点点击事件 */
const handleNodeClick = async (data: Tree) => {
  console.log(data);
  mainId.value = data.categoryId;
};
onMounted(() => {
  getfetch(props.articleCategoryId);
  watch(
    () => props.articleCategoryId,
    (newId, oldId) => {
      getfetch(props.articleCategoryId);
    }
  );
});
</script>
<style>
</style>