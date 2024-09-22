<template>
  <div v-html="mainData"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, watch } from "vue";
import { articleData } from "../../localData/article/index";

const mainData = ref<string>();
//接受父组件传过来的参数
const props = defineProps({
  mainId: {
    type: [Number, String],
  },
});
//根据id获取文章
const getfetch = (id: number | string) => {
  //根据树传递的文章id，渲染对应文章内容
  const article = articleData.find((item) => item.id === id);
  if (article) {
    mainData.value = article.main;
  }
};
onMounted(() => {});
watch(
  () => props.mainId,
  (newId, oldId) => {
    if (newId) {
      getfetch(newId);
    }
  },
  { immediate: true }
);
</script>

