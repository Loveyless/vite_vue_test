<template>
	<div class="content">
		<WangEditor height="700px"></WangEditor>
		<div class="box">
			<el-button type="primary" plain @click="showHtml">预览</el-button>
			<el-button type="primary" plain @click="submitForm">发布</el-button>
		</div>
	</div>
</template>

<script lang="ts" setup name="wangeditor">
// 有时，你可能需要为一个子组件添加一个模板引用，以便调用它公开的方法。举例来说，我们有一个 MyModal 子组件，它有一个打开模态框的方法：
import WangEditor from "@/components/WangEditor/index.vue";
const editorRef = ref<InstanceType<typeof WangEditor> | null>(null);

const global = GlobalStore();

//编辑器实例
// const editorRef = ref<any>('')

//预览
function showHtml() {
	alert(editorRef.value?.valueHtml);
}

function setHtml() {
	editorRef.value?.setEditorHtml("修改后的内容");
}

onMounted(() => {
	console.log(1);
});

//发布
async function submitForm() {
	//发送请求
	// const { data } = await http.post('/editor', {
	//   user_id: global.Id,
	//   content: editorRef.value.valueHtml,
	// })
	// if (data.status == 200) {
	//   editorRef.value.setEditorHtml("")
	// }
}

onMounted(() => {
	console.log(9);
});
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
