import { createApp } from "vue";
import "./assets/globalStyle.less";
import App from "./App.vue";

import router from "./router/index";

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

app.use(router).mount("#app");
