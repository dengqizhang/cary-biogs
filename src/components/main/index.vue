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
        <div v-for="(item, index) in from.projectUpdate" :key="item.index">
          <H4
            >{{ index + 1 }},<el-button type="success" link>{{
              item.title
            }}</el-button>
            {{ item.text }}
          </H4>
        </div>
      </div>
      <div>
        <h3>必看专栏:</h3>
        <div v-for="(item, index) in from.mustSee" :key="item.index">
          <H4
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

const from = ref({
  /**
   * 主页个人简介
   */
  mainText:
    "内容包含SpringBoot，Java，JVM，SpringCloud，Docker等。我的项目经历以及网络杂谈，工具收集等。",
  /**
   * 项目更新计划
   */
  projectUpdate: [
    {
      title: "parameter-log-tool",
      text: "SpringBoot日志参数记录工具插件,用于记录方法的入参出参值，并将日志打印到文档中。",
    },
    {
      title: "cary-biogs",
      text: "个人博客的前端地址，预计打造成一个动态前端，可配置化渲染页面。",
    },
    {
      title: "KAP",
      text: "面试题及知识点整理仓库。",
    },
  ],
  /**
   * 必看专栏
   */
  mustSee: [
    {
      title: "parameter-log-tool",
      text: "SpringBoot日志参数记录工具插件,用于记录方法的入参出参值，并将日志打印到文档中。",
    },
  ],
  github: "https://github.com/dengqizhang",
  email: "2435563017@qq.com",
  wechat:
    "https://th.bing.com/th/id/R.6b5df1bfe0e4778a44dba0753cd169c8?rik=QRQIMqvjWRCO5Q&riu=http%3a%2f%2fpic39.nipic.com%2f20140321%2f8857347_232251363165_2.jpg&ehk=7oAaMo6LCHJc%2bqpQ0IPvcH7v69jGRQhb2vDz%2fOd5720%3d&risl=&pid=ImgRaw&r=0",
});
onMounted(() => {});
</script>

<style scoped>
.marginTopMainStyle {
  margin-top: 60px;
}
</style>