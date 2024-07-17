<template><div>Springboot</div></template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
watchEffect(() => {
  let menuId = route.query.id;
  console.log(menuId);
  //根据菜单id获取对应的配置
});
</script>