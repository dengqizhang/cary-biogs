import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import main from "../components/main/index.vue";
import technologyfrom from "../components/technology/index.vue";
import projectExperience from "../components/rouding/index.vue";
const routes = [
  {
    path: "/",
    component: main,
  },
  {
    path: "/caryBiogs",
    component: projectExperience,
  },
  {
    path: "/roudingSaas",
    component: projectExperience,
  },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;
