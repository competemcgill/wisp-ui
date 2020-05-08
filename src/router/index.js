import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Dashboard from "../views/Dashboard";
import ProblemSets from "../views/ProblemSets/Index";
import ProblemSet from "../views/ProblemSets/Show";
import Problems from "../views/Problems/Index";
import Problem from "../views/Problems/Show";

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
    path: "/problemSets",
    name: "ProblemSets",
    component: ProblemSets
  },
  {
    path: "/problemSets/:id",
    name: "ProblemSet",
    component: ProblemSet
  },
  {
    path: "/problems",
    name: "Problems",
    component: Problems
  },
  {
    path: "/problems/:id",
    name: "Problem",
    component: Problem
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
