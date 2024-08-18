<template>
  <div class="backgroundColorItem">
    <div class="centerDivItem">
      <div
        v-if="mainText != ''"
        style="text-align: left"
        v-html="mainText"
      ></div>
      <div v-else>暂无数据</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, watch } from "vue";
import { getArticleById } from "../../api/article/index.ts";
const mainText = ref("");
//接受父组件传过来的参数
const props = defineProps({
  mainId: {
    type: Number,
  },
});
//根据id获取文章
const getfetch = async (id: any) => {
  const res = await getArticleById(id);
  mainText.value = res.main;
  console.log(res);
};
onMounted(() => {
  getfetch(props.mainId);
  // 监听 route.query.id 的变化
  watch(
    () => props.mainId,
    (newId, oldId) => {
      getfetch(props.mainId);
    }
  );
});
</script>

