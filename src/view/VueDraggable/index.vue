<template>
	<draggable v-model="myArray" v-bind="config" group="people" @start="drag = true" @end="drag = false" item-key="id">
		<template #item="{ element }">
			<div class="item">{{ element }}</div>
		</template>
	</draggable>
	<div>{{ myArray }}</div>
</template>

<script lang="ts" setup>
import draggable from "vuedraggable";

const myArray = ref([
	{
		name: "张三",
		id: 0
	},
	{
		name: "李四",
		id: 1
	},
	{
		name: "王五",
		id: 2
	},
	{
		name: "赵乾",
		id: 4
	}
]);

const drag = ref(false);

const config = ref({
	animation: 200,
	group: "description",
	disabled: false,
	ghostClass: "ghost"
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
