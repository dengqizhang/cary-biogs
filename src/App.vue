<script setup lang="ts">
import heder from "./components/header/index.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header> <heder /></el-header>
      <el-main><RouterView /></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>


<style scoped>
.el-main {
  --el-main-padding: 0px;
}
</style>
