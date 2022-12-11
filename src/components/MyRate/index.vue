<template>
	<div class="box">
		{{ rateCount }}
	</div>
</template>

<script lang="ts" setup>
//  只是一种简单的实现 复杂实现见2
//  一种牛逼的思路
//  rate 是 1 到 5 的整数，通过 slice 方法，我们直接渲染出对应数量的星星即可。
//  "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate)
let props = withDefaults(defineProps<{ modelValue: number }>(), { modelValue: 3 });
let emit = defineEmits(["update:modelValue"]);

let rateCount = computed(() => {
	if (props.modelValue > 5) {
		return "★★★★★";
	} else if (props.modelValue < 1) {
		return "☆☆☆☆☆";
	}
	return "★★★★★☆☆☆☆☆".slice(5 - props.modelValue, 10 - props.modelValue);
});

// 星星最大为5 最小为1
watch(
	() => props.modelValue,
	(newVal: number, _oldVal) => {
		if (newVal > 5) {
			emit("update:modelValue", 5);
		} else if (newVal < 1) {
			emit("update:modelValue", 1);
		}
	},
	{ immediate: true }
);
</script>

<style lang="less" scoped>
.box {
	position: relative;
	margin: auto;
	width: 100px;
	height: 20px;
}
</style>
