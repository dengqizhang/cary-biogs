<template>
  <el-container>
    <el-aside>
      <el-tree
        style="max-width: 600px"
        :data="data"
        :props="defaultProps"
        accordion
        @node-click="handleNodeClick"
    /></el-aside>
    <el-main
      ><div style="overflow-y: scroll; height: 100vh">
        <router-view></router-view></div
    ></el-main>
  </el-container>
</template>
  
  <script lang="ts" setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
interface Tree {
  id: number;
  label: string;
  children?: Tree[];
}

const handleNodeClick = (data: Tree) => {
  console.log(data);
  if (!data.children) {
    router.push({ path: "/article", query: { id: data.id } });
    console.log("发送网络请求");
  }
};

const data: Tree[] = [
  {
    id: 1,
    label: "Springboot",
    children: [
      {
        id: 2,
        label: "文章1",
      },
    ],
  },
  {
    id: 3,
    label: "Java",
    children: [
      {
        id: 4,
        label: "文章1",
      },
    ],
  },
  {
    id: 5,
    label: "Mybatis",
    children: [
      {
        id: 6,
        label: "文章1",
      },
    ],
  },
];
const defaultProps = {
  children: "children",
  label: "label",
};

onMounted(() => {
  router.push({ path: "/article", query: { id: 1 } });
});
</script>

<style>
/* 确保其他部分不滚动 */
el-container,
el-aside {
  overflow: hidden;
}
</style>
  