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
import Admin from "../views/Admin";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      guest: true
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      guest: true
    }
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
    meta: {
      guest: true
    }
  },
  {
    path: "/settings",
    name: "Settings",
    component: Settings,
    meta: {
      guest: false
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
    meta: {
      guest: false
    }
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      guest: false
    }
  },
  {
    path: "/problemSets",
    name: "ProblemSets",
    component: ProblemSets,
    meta: {
      guest: false
    }
  },
  {
    path: "/problemSets/:id",
    name: "ProblemSet",
    component: ProblemSet,
    meta: {
      guest: false
    }
  },
  {
    path: "/problems",
    name: "Problems",
    component: Problems,
    meta: {
      guest: false
    }
  },
  {
    path: "/problems/:id",
    name: "Problem",
    component: Problem,
    meta: {
      guest: false
    }
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
    meta: {
      guest: false,
      admin: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (
    (to.matched.some(record => !record.meta.guest) &&
      !store.state.isLoggedIn) ||
    (to.matched.some(record => record.meta.admin) &&
      store.state.user.role !== "ADMIN")
  ) {
    router.push("/login");
    next();
  } else {
    next();
  }
});

export default router;
