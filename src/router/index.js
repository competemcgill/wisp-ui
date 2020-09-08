import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Index";
import About from "../views/About/Index";
import Login from "../views/Login/Index";
import SignUp from "../views/SignUp/Index";
import Settings from "../views/Settings/Index";
import Profile from "../views/Profile/Index";
import Dashboard from "../views/Dashboard/Index";
import ProblemSets from "../views/ProblemSets/Index";
import Problems from "../views/Problems/Index";
import Admin from "../views/Admin/Index";
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
    path: "/problemSets/",
    component: ProblemSets,
    meta: {
      guest: true
    },
    children: [
      {
        path: "",
        name: "ProblemSetsIndex",
        component: () => import("@/views/ProblemSets/pages/Index")
      },
      {
        path: ":id",
        name: "ProblemSetsShow",
        component: () => import("@/views/ProblemSets/pages/Show")
      }
    ]
  },
  {
    path: "/problems/",
    component: Problems,
    meta: {
      guest: false
    },
    children: [
      {
        path: "",
        name: "ProblemsIndex",
        component: () => import("@/views/Problems/pages/Index")
      },
      {
        path: ":id",
        name: "ProblemsShow",
        component: () => import("@/views/Problems/pages/Show")
      }
    ]
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
      !store.state.user.isLoggedIn) ||
    (to.matched.some(record => record.meta.admin) &&
      store.state.user.data.role !== "ADMIN")
  ) {
    next({
      name: "Login"
    });
  } else {
    next();
  }
});

export default router;
false;
