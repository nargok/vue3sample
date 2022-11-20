import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/item",
      name: "item",
      component: () => import("../views/item/ItemView.vue"),
    },
    {
      path: "/item/register",
      name: "itemRegister",
      component: () => import("../views/item/RegisterView.vue"),
    },
    {
      path: "/item/:id",
      name: "itemEdit",
      component: () => import("../views/item/EditView.vue"),
    },
  ],
});

export default router;
