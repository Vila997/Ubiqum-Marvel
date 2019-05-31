import Vue from "vue";
import Router from "vue-router";
import Welcome from "./views/Welcome.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import { auth } from "@/firebase";
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },
    {
      path: "/home",
      name: "Home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/about/:comic",
      name: "about",
      component: About,
      props: true,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () =>
      // import(/* webpackChunkName: "about" */ "./views/About.vue")
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/chat",
      name: "chat",
      component: () => import("./views/chat.vue"),
      meta: {
        requiresAuth: true
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (user) {
      next();
    } else {
      next({
        name: "login"
      });
    }
  } else {
    next();
  }
});

export default router;
