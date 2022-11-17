<template>
	<el-button type="primary" size="default" @click="isShow = true">打开dialog</el-button>

	<el-divider />

	<el-button type="primary" size="default" @click="rate++">增加星星</el-button>
	<el-button type="primary" size="default" @click="rate--">减少星星</el-button>

	<!-- 自己写的评分 -->
	<div>rate:{{ rate }}|rate2:{{ rate2 }}</div>
	<MyRate v-model="rate"></MyRate>

	<MyRate2 v-model="rate2">
		<template #default>
			<div>课程评分</div>
		</template>
	</MyRate2>

	<el-divider />

	<MyTransition />

	<el-divider />

	<!-- 自己写的dialog组件 -->
	<My-DiaLog :isShow="isShow" :isScroll="true" @close="isShow = false">
		<template #title>这是一个标题</template>
		<template #default>这是一个内容</template>
		<template #bottom>
			<button>这是一个按钮</button>
		</template>
	</My-DiaLog>
</template>

<script lang="ts" setup>
import MyRate from "@/components/MyRate/index.vue";
import MyTransition from "../../components/MyTransition/index.vue";
const isShow = ref<boolean>(false);

const rate = ref<number>(3);
const rate2 = ref<number>(3);
</script>

<style lang="less" scoped></style>
