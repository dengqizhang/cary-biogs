<template>
  <div>
    <div class="marginTopMainStyle" style="text-align: center">
      <img
        src="../../assets/img/20201224164300_1b3d4.jpeg"
        style="width: 50%"
      />
      <h2>hello，我是Cary，这是我的技术博客。</h2>
      <h4>{{ blogsHomeData.mainText }}</h4>
    </div>

    <div
      class="marginTopMainStyle"
      style="display: flex; justify-content: center; flex-wrap: wrap"
    >
      <el-button
        @click="homeNavItemFunc(1)"
        type="success"
        style="width: 150px; height: 50px"
        ><span>项目经历</span> -></el-button
      >
      <el-button
        @click="homeNavItemFunc(2)"
        type="success"
        style="width: 150px; height: 50px"
        plain
        >技术栈</el-button
      >
      <el-button
        @click="homeNavItemFunc(3)"
        type="success"
        style="width: 150px; height: 50px"
        plain
        >好玩的工具</el-button
      >
      <el-button
        @click="homeNavItemFunc(4)"
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
        <div
          v-for="(item, index) in blogsHomeData.projectList"
          :key="item.index"
        >
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
        <div
          v-for="(item, index) in blogsHomeData.projectList"
          :key="item.index"
        >
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
        {{ blogsHomeData.github }}
        <h4>Gitee:</h4>
        {{ blogsHomeData.gitee }}
      </div>
      <div>
        <h4>邮箱:</h4>
        {{ blogsHomeData.email }}
      </div>
      <div>
        <div style="display: flex">
          <h4>联系方式：</h4>
        </div>
        <img src="../../assets/img/wechat.jpg" style="width: 10%" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { blogsHomeData } from "../../localData/main/index";
import { headerNavData } from "../../localData/heder";
const router = useRouter();

/**
 * 主页导航项
 */
const homeNavItemFunc = (type: number | string) => {
  if (type == null || undefined) {
    return null;
  }
  if (type == 1 && headerNavData) {
    router.push({
      path: `${headerNavData[1].url}`,
      query: { id: headerNavData[1].id },
    });
  }
  if (type == 2 && headerNavData) {
    router.push({
      path: `${headerNavData[2].url}`,
      query: { id: headerNavData[2].id },
    });
  }
  if (type == 3 && headerNavData) {
    router.push({
      path: `${headerNavData[3].url}`,
      query: { id: headerNavData[3].id },
    });
  }
  if (type == 4 && headerNavData) {
    router.push({
      path: `${headerNavData[4].url}`,
      query: { id: headerNavData[4].id },
    });
  }
};
onMounted(() => {});
</script>

<style scoped>
.marginTopMainStyle {
  margin-top: 60px;
}
</style>