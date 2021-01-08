import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '../layout/index'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "login"
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/index.vue")
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Layout
  },
  {
    path: '/user',
    name: 'User',
    component: () => import("../views/components/users.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
