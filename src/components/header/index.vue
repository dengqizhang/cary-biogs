<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="0">
      <span>Cary的网络日志</span>
    </el-menu-item>
    <div class="flex-grow" />

    <el-menu-item index="1">首页</el-menu-item>
    <el-sub-menu index="2">
      <template #title>项目经历</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3">技术积累</el-menu-item>
    <el-menu-item index="4">网络杂谈</el-menu-item>
    <el-menu-item index="5">工具收集</el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const activeIndex = ref("1");
/**
 * 根据导航传入的标识符导航到不同路由地址
 */
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
  if (key == "1") {
    router.push("/");
  } else if (key == "3") {
    router.push("/technology");
  }
};
</script>


<style>
.flex-grow {
  flex-grow: 0.9;
}
</style>
