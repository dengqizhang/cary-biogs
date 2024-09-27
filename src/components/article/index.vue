<!-- 文章类别导航页面 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside
        width="200px"
        style="border-right: 1px #dddddd solid; margin-top: 20px; height: 80vh"
      >
        <h4>列表</h4>
        <el-tree
          empty-text="暂无数据"
          style="max-width: 600px"
          :data="data"
          node-key="id"
          @node-click="handleNodeClick"
          :highlight-current="true"
          :default-expand-all="true"
      /></el-aside>
      <el-main><md :mainId="mainId" /></el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { LocationQueryValue, useRoute } from "vue-router";
import { articleData } from "../../localData/article/index";
import { articleTree } from "../../localData/article/types";
import md from "./../md/md.vue";
const route = useRoute();
const data = ref<any>([]);
const paramId = ref<string | LocationQueryValue[]>();
const mainId = ref<number | string>();

/**
 * 模拟请求网络数据
 */
const getdata = () => {
  //转换格式
  data.value = articleData
    .map((item) => ({
      label: item.articleName,
      ...item,
    }))
    .filter((item) => item.navId == paramId.value); //筛选符合导航项的文章
  //在页面初始请求数据时，传递一次默认项给文章
  mainId.value = data.value[0].id;
};
/**
 * 树节点点击事件
 */
const handleNodeClick = (val: articleTree) => {
  mainId.value = val.id;
};
onMounted(() => {});
watch(
  () => route.query.id,
  (newValue) => {
    //接受路由传参
    paramId.value = newValue || "";
    getdata();
  },
  { immediate: true }
);
</script>
    