<template>
  <div>
    <div class="marginTopMainStyle" style="text-align: center">
      <img
        src="../../assets/img/20201224164300_1b3d4.jpeg"
        style="width: 50%"
      />
      <h2>hello，我是Cary，这是我的技术博客。</h2>
      <h4>{{ from.mainText }}</h4>
    </div>

    <div
      class="marginTopMainStyle"
      style="display: flex; justify-content: center; flex-wrap: wrap"
    >
      <el-button type="success" style="width: 150px; height: 50px"
        ><span>项目经历</span> -></el-button
      >
      <el-button type="success" style="width: 150px; height: 50px" plain
        >技术栈</el-button
      >
      <el-button type="success" style="width: 150px; height: 50px" plain
        >好玩的工具</el-button
      >
      <el-button type="success" style="width: 150px; height: 50px" plain
        >网络杂谈</el-button
      >
    </div>
    <div
      class="marginTopMainStyle"
      style="margin-left: 20%; word-wrap: break-word"
    >
      <div>
        <h3>更新计划:</h3>
        <div v-for="(item, index) in from.projectList" :key="item.index">
          <H4 v-if="item.projectType == 1"
            >{{ index + 1 }},<el-button type="success" link>{{
              item.title
            }}</el-button>
            {{ item.text }}
          </H4>
        </div>
      </div>
      <div>
        <h3>必看专栏:</h3>
        <div v-for="(item, index) in from.projectList" :key="item.index">
          <H4 v-if="item.projectType == 2"
            >{{ index + 1 }},<el-button type="success" link>{{
              item.title
            }}</el-button>
            {{ item.text }}
          </H4>
        </div>
      </div>
      <div class="marginTopMainStyle">
        <h3>关于我：</h3>
        <h4>Github:</h4>
        {{ from.github }}
      </div>
      <div>
        <h4>邮箱:</h4>
        {{ from.email }}
      </div>
      <div>
        <div style="display: flex">
          <h4>联系方式：</h4>
        </div>
        <img :src="from.wechat" style="width: 10%" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getHome } from "../../api/home/index.ts";

//页面数据对象
const from = ref({});
/**
 * 获取首页数据
 */
const getHomeChange = async () => {
  const res = await getHome();
  console.log(res);
  from.value = res;
};


onMounted(() => {
  getHomeChange();

});
</script>

<style scoped>
.marginTopMainStyle {
  margin-top: 60px;
}
</style>