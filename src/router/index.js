import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import ProblemSets from "../views/ProblemSets/Index";
import ProblemSet from "../views/ProblemSets/Show";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/problemSets/:id",
    name: "ProblemSet",
    component: ProblemSet
  },
  {
    path: "/problemSets",
    name: "ProblemSets",
    component: ProblemSets
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
