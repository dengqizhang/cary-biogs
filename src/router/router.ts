import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import main from "../components/main/index.vue";
import projectExperience from "../components/rouding/index.vue";
import technology from "../components/technology/index.vue";
import article from "../components/technology/article/index.vue";
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
  {
    path: "/technology",
    component: technology,
    children: [
      {
        path: "/article",
        component: article,
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
