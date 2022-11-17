<template>
	<div class="box">
		<el-button type="primary" size="default" @click="addItem">随机位置随机添加</el-button>
		<el-button type="primary" size="default" @click="subItem">随机位置删除</el-button>
		<el-button type="primary" size="default" @click="removeList">列表换位</el-button>
		<ul>
			<TransitionGroup name="list">
				<li v-for="(item, index) in list" :key="item">{{ item }} <span @click="deleteOne(index)">✖</span></li>
			</TransitionGroup>
		</ul>
	</div>
</template>

<script lang="ts" setup>
// 如果每次都是末尾动画 就是li>key的问题
import { RandomNumBoth } from "@/utils/randomNum";
let list = ref<number[]>([1, 2, 3, 4]);

// 随机位置随机添加
function addItem() {
	list.value.splice(RandomNumBoth(0, list.value.length - 1), 0, list.value.length + 1);
}

// 随机位置删除
function subItem() {
	list.value.splice(RandomNumBoth(0, list.value.length - 1), 1);
}

// 随机位置删除
function deleteOne(index: number) {
	list.value.splice(index, 1);
}

// 重做列表
function removeList() {
	for (let index = 0; index < list.value.length; index++) {
		let index1 = RandomNumBoth(0, list.value.length - 1);
		let index2 = RandomNumBoth(0, list.value.length - 1);
		let temp: number;
		temp = list.value[index1];
		list.value[index1] = list.value[index2];
		list.value[index2] = temp;
	}
}
</script>

<style lang="less" scoped>
.box {
	overflow: hidden;
	text-align: left;
}

/* 对移动中的元素应用的过渡 */
.list-move {
	transition: transform 0.8s ease;
}
.list-enter-active,
.list-leave-active {
	transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}

/* 确保将离开的元素从布局流中删除
  以便能够正确地计算移动的动画。 */
.list-leave-active {
	position: absolute;
}
</style>
