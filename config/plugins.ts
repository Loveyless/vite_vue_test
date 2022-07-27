import vue from "@vitejs/plugin-vue";

// https://github.com/antfu/unplugin-auto-import
// 记得 ts.config.json文件引入声明文件: include中引入auto-imports.d.ts 要不然编辑器报错
import AutoImport from "unplugin-auto-import/vite";

// https://github.com/antfu/unplugin-vue-components
import Components from "unplugin-vue-components/vite";

// element-plus
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// 我的vscode没有shell 用不了操
// https://github.com/webfansplz/vite-plugin-vue-inspector
import Inspector from "vite-plugin-vue-inspector";

// https://github.com/antfu/unplugin-icons 图标地址 https://icon-sets.iconify.design https://github.com/iconify/iconify
import Icons from "unplugin-icons/vite";
// 这个结合 unplugin-vue-components 使用
import IconsResolver from "unplugin-icons/resolver";

const pluginList = [
  vue(),
  Icons({
    autoInstall: true,
    compiler: "vue3",
  }),
  Inspector({
    // 没有shell 用不了 哈哈 默认按键ctrl+shift
    enabled: false,
  }),
  AutoImport({
    dts: true,
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
      /\.md$/, // .md
    ],
    // global imports to register
    imports: [
      // presets
      "vue",
      "vue-router",
      // custom 这里官网有很多例子 还可以去看
      {
        axios: [
          // default imports
          ["default", "axios"], // import { default as axios } from 'axios',
        ],
      },
    ],
    // Auto import for module exports under directories
    // by default it only scan one level of modules under the directory
    // 这个好像是导出自己的模块
    dirs: [
      // "./router/index.ts",
      // './hooks',
      // './composables' // only root modules
      // './composables/**', // all nested modules
      // ...
    ],
    resolvers: [
      // IconsResolver()
      ElementPlusResolver(),
    ],
  }),
  Components({
    // enabled by default if `typescript` is installed
    dts: true,
    // relative paths to the directory to search for components.
    dirs: ["src/layout", "src/components"],
    // RouterLink RouterView 是全局的 但是是ts不友好的所以这里声明一下
    types: [
      {
        from: "vue-router",
        names: ["RouterLink", "RouterView"],
      },
    ],
    resolvers: [
      IconsResolver({
        // 非前缀模式 写icon的时候不用前缀
        // 会和element-plus的icon冲突
        // prefix: false,
      }),
      ElementPlusResolver(),
    ],
  }),
];

export { pluginList };
