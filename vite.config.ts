import { defineConfig } from "vite";

import { fileURLToPath, URL } from "url";

import { pluginList } from "./config/plugins";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: pluginList,
  resolve: {
    alias: {
      //    转为字符串      生成新的连接    后续连接         当前连接
      //https://developer.mozilla.org/zh-CN/docs/Web/API/URL/URL
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@c": fileURLToPath(new URL("./src/components", import.meta.url)),
    },

    //另一种写法
    // alias: [
    //   { find: "@/", replacement: fileURLToPath(new URL("./src", import.meta.url)) },
    //   { find: "@c/", replacement: fileURLToPath(new URL("./src/components", import.meta.url)) }
    // ]
  },
});
