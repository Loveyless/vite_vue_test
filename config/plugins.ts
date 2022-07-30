//vite/vue插件
import vue from "@vitejs/plugin-vue";

// 自动引入api插件 https://github.com/antfu/unplugin-auto-import
// 记得 ts.config.json文件引入声明文件: include中引入auto-imports.d.ts 要不然编辑器报错
import AutoImport from "unplugin-auto-import/vite";

// 自动引入组件插件 https://github.com/antfu/unplugin-vue-components
import Components from "unplugin-vue-components/vite";

// element-plus自动引入组件插件 element-plus
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// 点哪里打开代码哪里 https://github.com/webfansplz/vite-plugin-vue-inspector 我的vscode没有shell 用不了操
import Inspector from "vite-plugin-vue-inspector";

// 图标库 https://github.com/antfu/unplugin-icons 图标地址 https://icon-sets.iconify.design https://github.com/iconify/iconify
import Icons from "unplugin-icons/vite";
// 图标库自动引入 这个结合 unplugin-vue-components 使用
import IconsResolver from "unplugin-icons/resolver";



// 原子化css https://github.com/unocss/unocss
import Unocss from "unocss/vite";
// 原子化css 第一个是工具类预设，第二个是属性化模式支持，第三个是icon支持 还有别的预设
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import unocssRule from "./unocss";


// 使vue脚本设置语法支持name属性 https://github.com/chenxch/unplugin-vue-setup-extend-plus
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'


// 自动引入图片 https://github.com/sampullman/vite-plugin-vue-images
// 注意！如果变量（道具、数据）与图像名称冲突 它们将在模板中被破坏 在模板中使用图像而无需import通过data 直接写图像名称 目前不支持重复的图像名称。目前，或必须使用v-bind:src速记。:src
import ViteImages from "vite-plugin-vue-images";


// 打包时显示进度条 https://github.com/jeddygong/vite-plugin-progress
import progress from "vite-plugin-progress";


export default [
  vue(),
  Unocss({
    presets: [
      //unocss默认预设
      // presetUno(), //使用自定义 不用预设
      presetAttributify(),
      presetIcons(),
    ],
    rules: unocssRule as any,
  }),
  vueSetupExtend({
    mode: "relativeName", //自动读取相对路径名
  }),
  ViteImages({
    dirs: ["src/assets/imgs"],
    // dirs: ["src/assets/imgs", "src/assets/xxx"], //可以配多个
    extensions: ["jpg", "jpeg", "png", "svg", "webp"],
  }),
  Icons({
    autoInstall: true,
    compiler: "vue3",
  }),
  Inspector({
    // 我的编辑器没有shell 用不了 哈哈 默认按键ctrl+shift
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
      "pinia",
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
      // IconsResolver() //这个去Components里写
      ElementPlusResolver(),
    ],
  }),
  Components({
    // enabled by default if `typescript` is installed
    dts: true,
    // relative paths to the directory to search for components.
    dirs: ["src/layout", "src/components", "src/hooks"],
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
  progress(),
] as any;
