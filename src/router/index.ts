import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

//布局容器
import Layout from "@/layout/index.vue";

// const metaRouters: any = import.meta.glob("./modules/*.ts", { eager: true });
// // * 处理路由
// export const AllRoute: RouteRecordRaw[] = [];
// Object.keys(metaRouters).forEach((item) => {
//   Object.keys(metaRouters[item]).forEach((key: any) => {
//     AllRoute.push(...metaRouters[item][key]);
//   });
// });

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/layout",
  },
  {
    path: "/layout",
    component: Layout,
    redirect: "/layout/home",
    children: [
      { path: "home", name: "主页", component: () => import("@c/home/index.vue") },
      { path: "father_son", name: "父子之间", component: () => import("@c/FatherSon/Father.vue") },
      { path: "show_images", name: "图片插件+封装图片组件", component: () => import("@c/ShowImages/index.vue") },
    ],
  },
  // {
  //   path: "/404",
  //   component: () => import("@/components/404.vue"),
  // },
  // {
  //   path: "/:pathMatch(.*)*", //匹配没匹上的所有路由到404
  //   redirect: "/404",
  // },
];

//hash路由
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // 切换页面，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach(() => {});

router.afterEach(() => {});

export default router;
