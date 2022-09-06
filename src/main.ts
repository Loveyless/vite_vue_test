import { createApp } from "vue";
import "./assets/globalStyle.less";
import App from "./App.vue";

import router from "./router/index";

//pinia
import { createPinia } from "pinia";
//pinia持久化
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

//unocss
import "uno.css";

//element-plus-icon 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(createPinia().use(piniaPluginPersistedstate)).use(router).mount("#app");
