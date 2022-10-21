<template>
	<div>“组合式函数”(Composables) 是一个利用 Vue 的组合式 API 来封装和复用有状态逻辑的函数。</div>
	<div>组合式函数则侧重于有状态的逻辑</div>

	<div v-if="data">{{ (data, error) }}</div>

	<div v-else>Loading...</div>
</template>

<script setup lang="ts">
// Composable 异步组合式函数 插槽哪里也有使用(在只装了插槽的方法里)

// 下面这个模拟的异步请求
// 如果在每个需要获取数据的组件中都要重复这种模式，那就太繁琐了。让我们把它抽取成一个组合式函数：
// 在./httpRequest.ts中
// const data = ref<string | null>(null);
// const error = ref<string | null>(null);
// http.get("https://jsonplaceholder.typicode.com/todos/1", {
//   headers: {
//     loading: 1
//   }
// }).then((result) => {
//   setTimeout(() => {
//     data.value = result.data;
//   }, 1500);
//   setTimeout(() => {
//     error.value = 'Error';
//   }, 3000);
// }).catch((err) => {
//   setTimeout(() => {
//     error.value = 'Error';
//   }, 3000);
// });

//组合式函数
import { useHttp, useHttp2 } from "./httpRequest";

// 单次请求
// const { data, error } = useHttp("https://jsonplaceholder.typicode.com/todos/1");

// 每次url改变就重新请求
const url = ref<string>("https://jsonplaceholder.typicode.com/todos/1");
const { data, error } = useHttp2(url);

//5秒后在变一下值 模拟数据改变时重新走组合式函数 因为setup只执行一次 所以组合式函数里用了watchEffect 传入ref数据时自动effect
setTimeout(() => {
	url.value = "https://jsonplaceholder.typicode.com/todos/99";
}, 4000);
</script>
