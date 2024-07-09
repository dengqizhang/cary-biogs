import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import main from "../components/main/index.vue";
import technologyfrom from "../components/technology/index.vue";
const routes = [
  {
    path: "/",
    component: main,
  },
  {
    path: "/technology",
    component: technologyfrom,
  },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;
