<template>
	<!-- 首先，我们用 props 属性传递的方式，通过传递的 value 属性去决定显示的星星数量，这也是设计组件的时候首先就要考虑的。
一个组件库首先要实现的，就是通过 props 属性渲染内容，而在 Rate 组件里，我们可以根据 value 属性去渲染显示了几颗星星。
然后为了让用户可以点击评分，我们优化了显示的方式，每个★包裹一个 span 标签，并且绑定了 mouseover 和 mouseout 事件显示鼠标悬停的样式，
最后在★标签的 click 事件上，对外通知事件，告知父组件数据的变化。
对于这个通知机制，我们使用 defineEmits 定义的方式来实现，这也是 Vue 组件中重要的数据交换机制。
emits 配合 props，这样我们在使用一个组件的时候，就实现了给组件传递数据，并且我们也能够监听组件内部数据的变化。
最后我们通过规范 props 和 emit 的名字，实现了直接在自定义的组件之上使用 v-model。
当然，这个组件开发到这里，依然是比较精简，但实际上我们要考虑的问题更多。
比如在下一讲，我会给你讲解如何在 Vue 中加上一些简单的动画。
字符★显示的效果可能也不符合你所在公司的设计规范，所以你可能就需要使用图片替换五角星样式等。
更加完备的 Rate 组件，你可以去看Element3 评级组件的实现，在这里我们先初步感受一个组件的完整设计过程，它包含着交互的小细节，比如键盘事件、自定义 icon 等等。
Rate 组件写完，Vue 的组件化你就算入门了，在课程第三部分中，我们会对更多场景的组件化进行实战开发，在那里我会给你详细说说更多组件进阶和扩展的用法 -->

	<div>
		<slot></slot>
		<div class="rate" @mouseout="mouseOut">
			<span @mouseover="mouseOver(num)" v-for="num in 5" :key="num">☆</span>
			<span class="hollow" :style="fontwidth">
				<span @click="clickRate(num)" @mouseover="mouseOver(num)" v-for="num in 5" :key="num">★</span>
			</span>
		</div>
	</div>
</template>
<script lang="ts" setup>
// 自定义组件来说，v-model 是传递属性和接收组件事件两个写法的简写。
// 属性名修改成 modelValue，通过 update:modelValue 这个 emit 事件修改 modelValue 的值。
let props = withDefaults(
	defineProps<{
		modelValue: number;
	}>(),
	{
		modelValue: 3
	}
);
let emits = defineEmits(["update:modelValue"]);

// 评分数/这里也当了蒙层的宽度
let width = ref<number>(props.modelValue);

// 星星图层的宽度
const fontwidth = computed<string>(() => `width:${width.value}em;`);

//指针移入事件
function mouseOver(i: number) {
	width.value = i;
}

//指针移出事件 复位星星 除非点击后
function mouseOut() {
	width.value = props.modelValue;
}

function clickRate(num: number) {
	emits("update:modelValue", num);
}
</script>

<style scoped>
.rate {
	display: inline-block;
	position: relative;
	color: orange;
	cursor: pointer;
}
.rate > span.hollow {
	display: inline-block;
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
	width: 0;
}
</style>
