<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item>Cary的网络日志</el-menu-item>
    <div class="flex-grow" />
    <template v-for="(item, index) in routerItemList" :key="item.id">
      <el-menu-item
        v-if="!item.children"
        :index="item.url"
        @click="handleSelect(item)"
      >
        {{ item.name }}
      </el-menu-item>
      <el-sub-menu v-else :index="item.id">
        <template #title>
          <span>{{ item.name }}</span>
        </template>
        <template v-for="subItem in item.children" :key="subItem.id">
          <el-menu-item :index="subItem.url" @click="subItemClick(subItem)">{{
            subItem.name
          }}</el-menu-item>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const activeIndex = ref("1");

const routerItemList = ref([
  {
    id: "2",
    name: "首页",
    url: "/",
    pid: "",
  },
  {
    id: "3",
    name: "项目经历",
    children: [
      {
        id: "10",
        pid: "3",
        name: "肉丁数联Saas平台",
        url: "/roudingSaas",
      },
      {
        pid: "3",
        id: "11",
        name: "个人博客",
        url: "/caryBiogs",
      },
    ],
    pid: "",
  },
  {
    id: "4",
    name: "技术积累",
    url: "/technology",
    pid: "",
  },
  {
    id: "5",
    name: "网络杂谈",
    url: "/tittleTattle",
    pid: "",
  },
  {
    id: "6",
    name: "工具收集",
    url: "/tool",
    pid: "",
  },
]);
/**
 * 根据导航传入的标识符导航到不同路由地址
 */
const handleSelect = (val: any) => {
  console.log(val);

  router.push({ path: `${val.url}`, query: { id: val.id } });
};
/**
 * 传递菜单对象
 */
const subItemClick = (val: any) => {
  console.log(val);
  router.push({ path: `${val.url}`, query: { id: val.id } });
};
</script>


<style>
.flex-grow {
  flex-grow: 0.9;
}
</style>



