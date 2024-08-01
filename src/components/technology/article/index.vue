<template>
  <div class="centerDiv backgroundColorItem">
    <div class="centerDivItem">
      <div style="padding: 30px">
        <h2 style="text-align: center">{{ form.title }}</h2>
        <div>
          <h2>一、{{ form.title1 }}</h2>
          <p class="ptextStyle">{{ form.title1Text }}</p>
          <div v-for="(item, index) in form.title1Images" :key="index">
            <img :src="item.image" width="100%" />
          </div>
        </div>
        <div>
          <h2>二、{{ form.title2 }}</h2>
          <p class="ptextStyle">{{ form.title1Text }}</p>
          <div v-for="(item, index) in form.title1Images" :key="index">
            <img :src="item.image" width="100%" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

const form = ref({
  title: "关于Java的线程池",
  title1: "前言",
  title1Text: "xxx",
  title1Images: [
    {
      image:
        "https://th.bing.com/th/id/R.9de53f9726576696b318a8d95c0946cb?rik=sWB3V9KSxHbThw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f9995_1.jpg&ehk=GcPUjJED69TBvg9XxQr2klzDzfRsQWhAfLKlIAUWHJQ%3d&risl=&pid=ImgRaw&r=0",
    },
  ],
  title2: "线程池的使用",
  title2Text: "xxx",
  title2Images: [
    {
      image:
        "https://th.bing.com/th/id/R.9de53f9726576696b318a8d95c0946cb?rik=sWB3V9KSxHbThw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f9995_1.jpg&ehk=GcPUjJED69TBvg9XxQr2klzDzfRsQWhAfLKlIAUWHJQ%3d&risl=&pid=ImgRaw&r=0",
    },
  ],
  title3: "模拟业务场景",
  title3Text: "xxx",
  title3Images: [
    {
      image:
        "https://th.bing.com/th/id/R.9de53f9726576696b318a8d95c0946cb?rik=sWB3V9KSxHbThw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f9995_1.jpg&ehk=GcPUjJED69TBvg9XxQr2klzDzfRsQWhAfLKlIAUWHJQ%3d&risl=&pid=ImgRaw&r=0",
    },
  ],
  title4: "代码实现",
  title4Text: "xxx",
  title4Images: [
    {
      image:
        "https://th.bing.com/th/id/R.9de53f9726576696b318a8d95c0946cb?rik=sWB3V9KSxHbThw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f9995_1.jpg&ehk=GcPUjJED69TBvg9XxQr2klzDzfRsQWhAfLKlIAUWHJQ%3d&risl=&pid=ImgRaw&r=0",
    },
  ],
  title5: "总结",
  title5Text: "xxx",
  title5Images: [
    {
      image:
        "https://th.bing.com/th/id/R.9de53f9726576696b318a8d95c0946cb?rik=sWB3V9KSxHbThw&riu=http%3a%2f%2fpic.bizhi360.com%2fbbpic%2f95%2f9995_1.jpg&ehk=GcPUjJED69TBvg9XxQr2klzDzfRsQWhAfLKlIAUWHJQ%3d&risl=&pid=ImgRaw&r=0",
    },
  ],
});
watchEffect(() => {
  let menuId = route.query.id;
  console.log(menuId);
  //根据菜单id获取对应的配置
});
</script>

<style>
@import url("../../../style.css");
</style>