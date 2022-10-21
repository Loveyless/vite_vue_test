<template>
  <div class="content">

    <!-- menu -->
    <div class="list1" ref="list1">
      <div class="menu">list1</div>
      <div @mousedown="Down" class="scorll"></div>
    </div>

    <!-- 弹出层 -->
    <div class="list2" ref="list2">list2</div>

    <div class="main">
      <el-button type="primary" plain @click="btn">弹出</el-button>
    </div>

  </div>

  <div>实现这个需求</div>
  <div>
    <video src="./video/wuhu.mp4" controls></video>
  </div>
  <div>
    <video src="./video/lan.mp4" controls></video>
  </div>

</template>

<script lang='ts' setup>

const list1IsView = ref<boolean>(false)
const list1 = ref<HTMLDivElement>()
const list2 = ref<HTMLDivElement>()

//鼠标按下
function Down(e: MouseEvent) {

  function handle(event: MouseEvent) {
    //pageX返回的相对于整个文档的 x（水平）坐标以像素为单位的只读属性。
    let X: string = event.pageX - 10 + "px"
    list1.value!.style.width = X
  }
  const throttleHandle = throttle(handle, 50)
  //鼠标移动
  document.addEventListener("mousemove", throttleHandle)
  //释放鼠标
  document.onmouseup = (e: MouseEvent) => {
    localStorage.setItem("list1Width", e.pageX + "px")
    document.removeEventListener("mousemove", throttleHandle)
  }

}

function btn() {
  if (list1IsView.value) {
    list1.value!.style.transform = "translateX(-110%)"
    list2.value!.style.transform = "translateX(0)";
    list1IsView.value = false
  } else {
    // list1.value!.style.width = localStorage.getItem("list1Width") || "200px"
    list1.value!.style.transform = "translateX(0)";
    list2.value!.style.transform = "translateX(-110%)"
    list1IsView.value = true
  }
}
onMounted(() => {
  btn()
})
</script> 

<style lang='less' scoped>
.content {
  position: relative;
  display: flex;
  width: 100%;
  height: 500px;
  overflow: hidden;
  background-color: #008c8c;
  .list1 {
    position: absolute;
    display: flex;
    width: 100px;
    height: 100%;
    background-color: yellow;
    transition: transform 0.5s;
    .menu {
      flex: 1;
      width: 200px;
      height: 100%;
      background-color: lightsteelblue;
    }
    .scorll {
      width: 10px;
      height: 100%;
      cursor: col-resize;
      background-color: #cccccc;
    }
  }
  .list2 {
    position: absolute;
    width: 200px;
    height: 100%;
    background-color: lightblue;
    transition: transform 0.5s;
  }
  .main {
    flex: 1;
    background-color: lightcoral;
  }
}
</style>