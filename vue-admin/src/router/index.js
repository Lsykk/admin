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
          path: "/system/user",
          name: "用户管理",
          component: () => import("../views/system/user/index.vue"),
          hidden: true
        },
        {
          path: "/system/role",
          name: "角色管理",
          component: () => import("../views/system/role/index.vue"),
          hidden: true
        },
        {
          path: "/system/menu",
          name: "菜单管理",
          component: () => import("../views/system/menu/index.vue"),
          hidden: true
        },
        {
          path: "/system/dept",
          name: "部门管理",
          component: () => import("../views/system/dept/index.vue"),
          hidden: true
        },
        {
          path: "/system/job",
          name: "岗位管理",
          component: () => import("../views/system/job/index.vue"),
          hidden: true
        },
        {
          path: "/system/dict",
          name: "字典管理",
          component: () => import("../views/system/dict/index.vue"),
          hidden: true
        },
        {
          path: "/system/timing",
          name: "任务调度",
          component: () => import("../views/system/timing/index.vue"),
          hidden: true
        }
    ]
  }
];

// const router = new VueRouter({
//   routes
// });

// export default router;
export default new VueRouter({
  // mode: 'hash',
  mode: 'history',
  routes
})
