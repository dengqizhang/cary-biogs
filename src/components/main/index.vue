<template>
  <div>
    <div class="marginTopMainStyle" style="text-align: center">
      <img
        src="../../assets/img/20201224164300_1b3d4.jpeg"
        style="width: 50%"
      />
      <h2>hello，我是Cary，这是我的技术博客。</h2>
      <h4>{{ mainText }}</h4>
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
        <!-- <h4>关于我：</h4>
        Java全栈开发方向，参与多个政府项目的开发工作。积极学习，积累博客，积累项目经验。 -->
      </div>
      <div>
        <h3>关于我：</h3>
        <h4>Github:</h4>
        https://github.com/dengqizhang
      </div>
      <div>
        <h4>简书:</h4>
        https://www.jianshu.com/u/b6fbcecdbe0e
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
import { ref } from "vue";
/**
 * 主页个人简介
 */
const mainText = ref(
  "内容包含SpringBoot，Java，JVM，SpringCloud，Docker等。我的项目经历以及网络杂谈，工具收集等。"
);
</script>

<style scoped>
.marginTopMainStyle {
  margin-top: 60px;
}
</style>