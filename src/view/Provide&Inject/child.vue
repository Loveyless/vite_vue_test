<template>
	我是后代组件 注入的数据

	<br />

	普通接收 count->{{ count1 }}
	<button @click="count1++">+1</button>

	<br />

	ref接收 count->{{ count2 }}
	<button @click="count2++">+1</button>

	<br />

	reactive注入
	{{ info }}

	<br />

	响应式注入
	{{ reactivity }}
	<button @click="reactivity++">+1</button>

	<br />
	--------------------------
	<br />
	<img src="https://cdn.jsdelivr.net/gh/Loveyless/img-clouding/img/20220913224831.png" />
</template>

<script lang="ts" setup>
// 普通接收 不响应注入 本组件不可响应 修改未知(毕竟不是响应式 还是不改了)
const count1: any = inject("count");

// ref接收 不响应注入 本组件可响应 可修改
const count2: any = ref(inject("count"));

// 未测试
const info: any = inject("info");

// 响应式注入 响应式 不可修改
const reactivity: any = inject("reactivity");
</script>
