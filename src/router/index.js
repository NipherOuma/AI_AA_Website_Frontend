import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "@/views/ContactView.vue";
import PostList from "@/views/PostList.vue";
import PostDetail from "@/views/PostDetail.vue";
import Impact from "@/views/Impact.vue";
import Involved from "@/views/Involved.vue";
import AboutView from "@/views/AboutView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/blog",
      name: "blog",
      component: PostList,
    },
    {
      path: "/blog/post/:year/:month/:day/:slug",
      name: "PostDetail",
      component: PostDetail,
      props: true,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/impact",
      name: "impact",
      component: Impact,
    },
    {
      path: "/get-involved",
      name: "get-involved",
      component: Involved,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
