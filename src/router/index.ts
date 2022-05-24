import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../pages/LandingPage.vue"),
    },
    {
      path: "/ranking/:name",
      name: "ranking_country",
      component: () => import("../pages/RankingPage.vue"),
    },
    {
      path: "/ranking",
      name: "ranking",
      component: () => import("../pages/RankingPage.vue"),
    },
  ],
});

export default router;
