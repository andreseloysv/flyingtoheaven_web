import { createRouter, createWebHistory } from "vue-router";
import Landing from "../pages/lading.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => Landing,
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: () => import("../pages/ProfilePage.vue"),
    },
  ],
});

export default router;
