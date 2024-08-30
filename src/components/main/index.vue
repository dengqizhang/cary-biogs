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
      <el-button
        @click="projectExperienceFunc()"
        type="success"
        style="width: 150px; height: 50px"
        ><span>项目经历</span> -></el-button
      >
      <el-button
        @click="technologysFunc()"
        type="success"
        style="width: 150px; height: 50px"
        plain
        >技术栈</el-button
      >
      <el-button
        @click="toolFunc()"
        type="success"
        style="width: 150px; height: 50px"
        plain
        >好玩的工具</el-button
      >
      <el-button
        @click="networkChatterFunc()"
        type="success"
        style="width: 150px; height: 50px"
        plain
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
            >{{ index + 1 }},<el-button type="success" link>
              <el-link :href="item.url" type="success">{{
                item.title
              }}</el-link>
            </el-button>
            {{ item.text }}
          </H4>
        </div>
      </div>
      <div>
        <h3>必看专栏:</h3>
        <div v-for="(item, index) in from.projectList" :key="item.index">
          <H4 v-if="item.projectType == 2"
            >{{ index + 1 }},<el-button type="success" link>
              <el-link :href="item.url" type="success">
                {{ item.title }}
              </el-link>
            </el-button>
            {{ item.text }}
          </H4>
        </div>
      </div>
      <div class="marginTopMainStyle">
        <h3>关于我：</h3>
        <h4>Github:</h4>
        {{ from.github }}
        <h4>Gitee:</h4>
        {{ from.gitee }}
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
import {
  getProjectExperienceList,
  getProjectExperience,
} from "../../api/navitem/index.ts";
import { useRouter } from "vue-router";
//页面数据对象
const from = ref({});
const router = useRouter();
/**
 * 获取首页数据
 */
const getHomeChange = async () => {
  const res = await getHome();
  console.log(res);
  from.value = res;
};
/**项目经历点击事件 */
const projectExperienceFunc = async () => {
  const res = await getProjectExperienceList(2);
  //跳转到项目经历数组第一个页面
  router.push({
    path: res[0].url,
    query: { id: res[0].id, type: 1 },
  });
};
/**技术栈点击事件 */
const technologysFunc = async () => {
  const res = await getProjectExperience(5);
  router.push({
    path: res.url,
    query: { id: res.id, type: 0 },
  });
};
/**工具点击事件 */
const toolFunc = async () => {
  const res = await getProjectExperience(7);
  router.push({
    path: res.url,
    query: { id: res.id, type: 0 },
  });
};
/**网络杂谈事件 */
const networkChatterFunc = async () => {
  const res = await getProjectExperience(6);
  router.push({
    path: res.url,
    query: { id: res.id, type: 0 },
  });
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