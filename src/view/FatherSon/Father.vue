<template>
	<div class="father_box">
		<h1>这个组件展示了传值 attr 触发事件</h1>

		<div>father组件 红色边框</div>

		<div>
			father的一个ref值count {{ count }} 传给了子组件
			<i-logos-vue @click="countAdd(1)" />
		</div>

		<Son class="son_class" @count-add="countAdd" :count="count" />
	</div>
</template>

<script lang="ts" setup>
const count = ref<number>(0);

const countAdd = (num: number) => {
	count.value += num;
};
</script>

<style lang="less" scoped>
// 父元素的盒子css
.father_box {
	display: flex;
	flex-direction: column;
	place-items: center;
	border: 1px solid red;
}

// 传给子元素的css
.son_class {
	background-color: yellow;
}
</style>
