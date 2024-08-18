<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item>Cary的网络日志</el-menu-item>
    <div class="flex-grow" />
    <template v-for="(item, index) in routerItemList" :key="item.id">
      <el-menu-item
        v-if="!item.children"
        :index="item.url"
        @click="handleSelect(item, 0)"
      >
        {{ item.name }}
      </el-menu-item>
      <el-sub-menu v-else :index="item.id">
        <template #title>
          <span>{{ item.name }}</span>
        </template>
        <template v-for="subItem in item.children" :key="subItem.id">
          <el-menu-item
            :index="subItem.url"
            @click="handleSelect(subItem, 1)"
            >{{ subItem.name }}</el-menu-item
          >
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>


<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getNavItem } from "../../api/navitem/index.ts";
const router = useRouter();
const activeIndex = ref("1");

const routerItemList: any = ref([]);

/**
 * 获取导航项
 */
const getNavItemChange = async () => {
  const res = await getNavItem();
  routerItemList.value = res;
  console.log(res);
};
/**
 * 根据导航传入的标识符导航到不同路由地址并传递参数
 * @param val 当前路由对象
 * @param type 当前菜单项是否有二级菜单
 */
const handleSelect = (val: any, type: any) => {
  console.log(val);
  router.push({ path: `${val.url}`, query: { id: val.id, type: type } });
};
onMounted(() => {
  getNavItemChange();
});
</script>
<style>
.flex-grow {
  flex-grow: 0.9;
}
</style>



