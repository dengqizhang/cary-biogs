<template>
  <div class="centerDiv backgroundColorItem">
    <div class="centerDivItem">
      <div style="padding: 30px">
        <h2 style="text-align: center">{{ form.title }}</h2>
      </div>
      <div style="padding: 30px">
        <div>
          <p>作者：{{ form.descuser }}</p>
        </div>
        <div>
          <p>项目状态：{{ form.pjtype }}</p>
        </div>
        <div>
          <p>线上地址：{{ form.ipAddress }}</p>
        </div>
      </div>
      <div style="padding: 30px">
        <div>
          <h2>一、项目介绍</h2>
          <div>
            <p style="text-indent: 3em; line-height: 2.5em">
              {{ form.projectIntroduction }}
            </p>
            <div v-for="(item, index) in form.pjDescImages" :key="index">
              <img :src="item.image" width="100%" />
            </div>
          </div>

          <div>
            <h2>1, 业务核心流程</h2>
            <p style="text-indent: 3em; line-height: 2.5em">
              {{ form.flowText }}
            </p>
            <div v-for="(item, index) in form.flowCharts" :key="index">
              <img :src="item.image" width="100%" />
            </div>
          </div>

          <div>
            <h2>2, 项目结构规范</h2>
            <p style="text-indent: 3em; line-height: 2.5em">
              {{ form.pjText }}
            </p>
            <div v-for="(item, index) in form.pjCsr" :key="index">
              <img :src="item.image" width="100%" />
            </div>
          </div>

          <div>
            <h2>3，项目参与度</h2>
            <p style="text-indent: 3em; line-height: 2.5em">
              {{ form.pjParticipationText }}
            </p>
            <div style="display: flex">
              <div
                ref="myChart"
                id="myChart"
                :style="{ width: '50%', height: '400px' }"
              ></div>
              <div
                ref="myChart1"
                id="myChart1"
                :style="{ width: '50%', height: '400px' }"
              ></div>
            </div>
          </div>
          <div>
            <h2>4, 代码展示部分</h2>
            <p style="text-indent: 3em; line-height: 2.5em">
              {{ form.codeText }}
            </p>
            <div v-for="(item, index) in form.pjCsr" :key="index">
              <img :src="item.image" width="100%" />
            </div>
          </div>
          <div>
            <h2>5，代码仓库</h2>
            {{ form.codeRepositories }}
          </div>
        </div>
        <div></div>
      </div>
    </div>

    <!-- <hr /> -->
  </div>
</template>
<script lang="ts" setup>
import { getCurrentInstance, onMounted, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
// 通过 internalInstance.appContext.config.globalProperties 获取全局属性或方法
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;
let echarts1 = internalInstance.appContext.config.globalProperties.$echarts;

const form = ref({
  title: "肉丁数联Saas平台",
  descuser: "Cary",
  pjtype: "未上线",
  ipAddress: "xx",
  projectIntroduction:
    " 本项目是肉丁数联公司内部对外销售的Saas平台产品，主要的产品有水泥搅拌站。水泥搅拌站的主要功能有生产数据记录、生产任务记录、材料管理、混合料管理等。所用框架为若依框架，基于若依项目模块化的基础上，完成业务的代码逻辑并使用websocket完成消息通知。 使用了若依的租户功能完成Saas平台的商户端和管理端的切换。",

  pjDescImages: [
    {
      image:
        "https://th.bing.com/th/id/R.9de53f9726576696b318a8d95c0946cb?rik=sWB3V9KSxHbThw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f9995_1.jpg&ehk=GcPUjJED69TBvg9XxQr2klzDzfRsQWhAfLKlIAUWHJQ%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      image:
        "https://th.bing.com/th/id/R.6b5df1bfe0e4778a44dba0753cd169c8?rik=QRQIMqvjWRCO5Q&riu=http%3a%2f%2fpic39.nipic.com%2f20140321%2f8857347_232251363165_2.jpg&ehk=7oAaMo6LCHJc%2bqpQ0IPvcH7v69jGRQhb2vDz%2fOd5720%3d&risl=&pid=ImgRaw&r=0",
    },
  ],
  flowText:
    "图片部分描述了项目的业务核心流程，通过硬件在胶凝仓的传感器，上传数据到数据库。后端提供接口在插入数据方法中，记录生产数据等信息。",
  flowCharts: [
    {
      image:
        "https://th.bing.com/th/id/R.9de53f9726576696b318a8d95c0946cb?rik=sWB3V9KSxHbThw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f9995_1.jpg&ehk=GcPUjJED69TBvg9XxQr2klzDzfRsQWhAfLKlIAUWHJQ%3d&risl=&pid=ImgRaw&r=0",
    },
  ],
  pjText: "展示了Saas平台的租户代码规范，根据包名不同区分不同的定制化开发。",
  pjCsr: [
    {
      image:
        "https://th.bing.com/th/id/R.9de53f9726576696b318a8d95c0946cb?rik=sWB3V9KSxHbThw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f9995_1.jpg&ehk=GcPUjJED69TBvg9XxQr2klzDzfRsQWhAfLKlIAUWHJQ%3d&risl=&pid=ImgRaw&r=0",
    },
  ],
  codeText: "一些业务逻辑的处理，Sql语句的查询等。",
  codeImges: [
    {
      image:
        "https://th.bing.com/th/id/R.9de53f9726576696b318a8d95c0946cb?rik=sWB3V9KSxHbThw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f9995_1.jpg&ehk=GcPUjJED69TBvg9XxQr2klzDzfRsQWhAfLKlIAUWHJQ%3d&risl=&pid=ImgRaw&r=0",
    },
  ],
  codeRepositories: "xxxx",
  pjParticipationText: "在项目中的开发占比及所用技术占比。",
});
watchEffect(() => {
  let menuId = route.query.id;
  console.log(menuId);
  //根据菜单id获取对应的配置
});
onMounted(() => {
  const dom = document.getElementById("myChart");
  const dom1 = document.getElementById("myChart1");
  const myChart = echarts.init(dom); // 初始化echarts实例
  const myChart1 = echarts1.init(dom1); // 初始化echarts实例
  const option = {
    title: {
      text: "项目模块参与占比%",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "4%",
      left: "center",
    },
    series: [
      {
        name: "项目模块参与占比",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 100, name: "预警人员模块" },
          { value: 100, name: "材料模块" },
          { value: 100, name: "混合料模块" },
          { value: 100, name: "设备模块" },
          { value: 100, name: "预警信息模块" },
          { value: 100, name: "预警人员模块" },
          { value: 100, name: "生产配合比模块" },
          { value: 100, name: "生产任务模块" },
          { value: 100, name: "生产数据模块" },
        ],
      },
    ],
  };
  const option1 = {
    title: {
      text: "项目开发所用技术%",
      left: "center",
    },
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 30, name: "SpringBoot" },
          { value: 5, name: "Redis" },
          { value: 10, name: "Git" },
          { value: 10, name: "Mysql" },
          { value: 10, name: "MyBatis" },
          { value: 10, name: "SpringMvc" },
          { value: 10, name: "Vue3技术栈" },
          { value: 5, name: "Websocket" },
        ],
      },
    ],
  };
  // 设置实例参数
  myChart.setOption(option);
  // 设置实例参数
  myChart1.setOption(option1);
});
</script>

<style>
@import url("../../style.css");
</style>