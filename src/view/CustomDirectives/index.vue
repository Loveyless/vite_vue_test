<template>
  <div>
    另一方面，自定义指令主要是为了重用涉及普通元素的底层 DOM 访问的逻辑。
    一个自定义指令由一个包含类似组件生命周期钩子的对象来定义。钩子函数会接收到指令所绑定元素作为其参数。
  </div>


  <!-- 自由拖动的自定义指令 相对于视口 -->
  <div w-10 h-10 class="bg-dark-50" v-Freedom="{x:10,y:10}"></div>


  <!-- element是div包着input -->
  <!-- <el-input v-focus></el-input> -->
  <input v-focus type="text">

  <br>

  <el-button type="primary" size="default" v-debouncer="['click',log,1000]">防抖</el-button>
  <el-button type="primary" size="default" v-debouncer2="{event:'click',fn:log,delay:1000}">防抖2</el-button>


  <img src="https://cdn.jsdelivr.net/gh/Loveyless/img-clouding/img/20221013173626.png" alt="">
  <img src="https://cdn.jsdelivr.net/gh/Loveyless/img-clouding/img/20221013173454.png" alt="">

</template>

<script lang='ts' setup>

// 外部引入也可以
import { vFocus } from "@/directives/vFocus";
import { vFreedom } from "@/directives/vFreedom";
import { vDebouncer, vDebouncer2 } from "@/directives/vDebouncer";

// 1. 直接写函数 这会在 `mounted` 和 `updated` 时都调用
// const vFocus = (el: any, binding: any) => {
//   el.focus() //element是div包着input 所以这里没办法focus
//   // el.children[0].children[0].focus()  //需要这样才能focus
//   console.log(binding);  //如果用element的input 这个自定义指令在第一次进入页面会执行两次 并不清楚原因 并且 我点击图片也会触发两次 我去什么意思
// }


// 2. 用对象 会有完整的声明周期
// 一个指令的定义对象可以提供几种钩子函数(都是可选的)
const myDirective = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode, prevVnode) { },

  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode, prevVnode) { },

  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode, prevVnode) { },

  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) { },

  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) { },

  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode, prevVnode) { },

  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode, prevVnode) { }

}
// 钩子的参数 详见图片


function log(name: 123) {
  console.log(1, arguments);
  console.log(2, this);
  console.log(3, name);
}



</script> 

<style lang='less' scoped>

</style>