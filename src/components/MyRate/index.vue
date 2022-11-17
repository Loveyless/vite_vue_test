<template>
	<div class="box">
		{{ rateCount }}
		<span v-for="num in 5" :key="num">☆</span>
		<div class="box_bottom">
			<span v-for="num in 5" :key="num">★</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
//  只是一种简单的实现 复杂实现见2
//  一种牛逼的思路
//  rate 是 1 到 5 的整数，通过 slice 方法，我们直接渲染出对应数量的星星即可。
//  "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate)
let props = withDefaults(
	defineProps<{
		modelValue: number;
	}>(),
	{
		modelValue: 3
	}
);
let rateCount = computed(() => {
	if (props.modelValue > 5) {
		return "★★★★★";
	} else if (props.modelValue < 1) {
		return "☆☆☆☆☆";
	}
	return "★★★★★☆☆☆☆☆".slice(5 - props.modelValue, 10 - props.modelValue);
});
</script>

<style lang="less" scoped>
.box {
	position: relative;
	width: 100px;
	height: 20px;
	& > span {
		position: absolute;
		top: 0;
		left: 0;
		font-size: 20px;
		color: #cccccc;
	}
	.box_bottom {
		position: absolute;
		top: 0;
		left: 0;
		overflow: hidden;
		width: 100px;
		height: 20px;
		& > span {
			position: absolute;
			top: 0;
			left: 0;
			font-size: 20px;
			color: #ff6600;
		}
	}
}
</style>
