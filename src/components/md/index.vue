<template>
  <div class="common-layout ">
    <el-container>
      <el-aside width="200px">
        <el-tree
          style="max-width: 600px"
          :data="data"
          :props="defaultProps"
          @node-click="handleNodeClick"
      /></el-aside>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
interface Tree {
  label: string;
  children?: Tree[];
}

const handleNodeClick = (data: Tree) => {
  console.log(data);
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
</script>
  