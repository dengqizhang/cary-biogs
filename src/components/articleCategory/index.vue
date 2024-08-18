<!-- 文章类别导航页面 -->
<template>
  <div class="common-layout">
    <item v-if="route.query.type == 0" :articleCategoryId="articleCategoryId" />
    <subItem
      v-if="route.query.type == 1"
      :articleCategoryId="articleCategoryId"
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import item from "./item/index.vue";
import subItem from "./subItem/index.vue";
const route = useRoute();
const articleCategoryId = ref();
onMounted(() => {
  console.log(route.query);
  articleCategoryId.value = route.query.id;
  watch(
    () => route.query.id,
    (newId, oldId) => {
      articleCategoryId.value = route.query.id;
    }
  );
});
</script>
    