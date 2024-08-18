import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import main from "../components/main/index.vue";
import articleCategory from "../components/articleCategory/index.vue";
import md from "../components/md/md.vue";
const routes = [
  {
    path: "/",
    component: main,
  },
  {
    path: "/:name",
    component: articleCategory,
    children: [
      {
        path: "/:name",
        component: md,
      },
    ],
  },
];

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
});

export default router;
