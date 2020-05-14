import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import Settings from "../views/Settings";
import Profile from "../views/Profile";
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
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
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
