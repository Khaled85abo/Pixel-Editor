import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import PixelTable from "../views/PixelTable";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/table",
    name: "table",
    component: PixelTable,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
