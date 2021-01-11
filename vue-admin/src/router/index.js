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
    path: "/dashboard",
      name: "Dashboard",
      component: Layout,
      leaf: true, // 只有一个节点
      children: [
        {
          path: "/user-management",
          name: "用户管理",
          component: () => import("../views/components/user-management.vue"),
          hidden: true
        },
        {
          path: "/role-management",
          name: "问题",
          component: () => import("../views/components/role-management.vue"),
          hidden: true
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
