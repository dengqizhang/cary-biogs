import {
  createRouter,
  createWebHashHistory,
} from "vue-router";
import main from "../components/main/index.vue";
import article from "../components/article/index.vue";
import md from "../components/md/md.vue";
const routes = [
  {
    path: "/",
    component: main,
  },
  {
    path: "/:name",
    component: article,
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
