<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item>Cary的网络日志</el-menu-item>
    <div class="flex-grow" />
    <template v-for="item in headerNavData" :key="item.id">
      <el-menu-item :index="item.url" @click="handleSelect(item)">
        {{ item.name }}
      </el-menu-item>
    </template>
  </el-menu>
</template>
<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { headerNavData } from "../../localData/heder/index";
import { headerNav } from "../../localData/heder/types";
const router = useRouter();
const activeIndex = ref("1");
/**
 * 根据导航传入的标识符导航到不同路由地址并传递参数
 * @param val 当前路由对象
 * @param type 当前菜单项是否有二级菜单
 */
const handleSelect = (val: headerNav) => {
  router.push({ path: `${val.url}`, query: { id: val.id} });
};
onMounted(() => {
  console.log(headerNavData);
});
</script>
<style>
.flex-grow {
  flex-grow: 0.9;
}
</style>



