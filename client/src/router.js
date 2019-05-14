import Vue from "vue";
import Router from "vue-router";
import LayoutsDefault from "@/layouts/default";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: LayoutsDefault
    }
  ]
});
