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
      { path: "home", name: "主页", component: () => import("@v/Home/index.vue") },
      { path: "father_son", name: "父子之间", component: () => import("@v/FatherSon/Father.vue") },
      { path: "show_images", name: "图片插件+封装图片组件", component: () => import("@v/ShowImages/index.vue") },
      { path: "slot", name: "插槽", component: () => import("@v/Slot/FatherSlot.vue") },
      { path: "wangeditor", name: "富文本", component: () => import("@v/WangEditor/index.vue") },
      { path: "list_wuhu", name: "列表测试", component: () => import("@v/TestTemplate/ListWuhu!.vue") },
      { path: "test_demo", name: "测试demo", component: () => import("@v/TestDemo/index.vue") },
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
