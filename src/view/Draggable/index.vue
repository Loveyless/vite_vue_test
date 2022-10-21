<template>

  <div ref="main" class="flex justify-center border border-black">

    <div data-index="0" class="img w-120px h-120px bg-red-300"></div>
    <div data-index="1" class="img w-120px h-120px bg-blue-200"></div>
    <div data-index="2" class="img w-120px h-120px bg-yellow-300"></div>
    <div ref="zw" class="w-120px h-120px bg-dark-50 hidden"></div>

  </div>


</template>

<script lang='ts' setup>

let main = ref<any>(null)
let zw = ref<any>(null) // 占位元素
let imgs; // 图片元素
// onMounted(() => {
// })

let index; // 对应内部的data-index 0 1 2
let isDragging = false; // 推拽开关
let py = { x: 0, y: 0 } // 鼠标位置

function move(el: any, x: number, y: number) {
  el.setAttribute('style', `pointer-events: none;position: absolute; left:${x}px; top:${y}px;`)
}

onMounted(() => {

  imgs = document.querySelectorAll('.img') as unknown as HTMLElement // 图片元素

  // 鼠标按下
  document.addEventListener('mousedown', (e: any) => {
    index = e.target.dataset.index
    // 如果index存在，说明点击的是内部的div 并且 推拽开关是关闭的
    if (index && !isDragging) {
      // 计算鼠标偏移
      py.x = e.pageX - imgs[index].offsetLeft
      py.y = e.pageY - imgs[index].offsetTop
      // 显示展位元素
      zw.value.style.display = 'block'
      // 插入在当前元素之前
      main.value.insertBefore(zw.value, imgs[index])
      move(imgs[index], e.pageX - py.x, e.pageY - py.y)
    }
    isDragging = true
  })

  // 鼠标移动
  document.addEventListener('mousemove', (e: any) => {
    if (isDragging && index) {
      move(imgs[index], e.pageX - py.x, e.pageY - py.y)
    }
  })

  // 鼠标抬起
  document.addEventListener('mouseup', (e: any) => {

    isDragging = false
    zw.value.style.display = 'none'

    if (imgs[index]) {
      imgs[index].setAttribute('style', 'position: none;')
      main.value.insertBefore(imgs[index], zw.value)
    }

  })

  imgs.forEach(item => {
    // 鼠标进入 这里为了拿到目前元素 移入别的元素时的事件 但是这里触发不到 需要在css中设置事件穿透 pointer-event: none;
    item.addEventListener('mouseenter', (e: any) => {
      if (isDragging) {
        const list = [...main.value.children]
        // 获取当前元素的dom
        const imgIndex = list.findIndex(el => item == el)
        // 获取占位元素的dom
        const zwIndex = list.findIndex(el => zw.value == el)
        if (zwIndex < imgIndex) {
          main.value.insertBefore(item, zw.value)
        } else {
          main.value.insertBefore(zw.value, item)
        }
      }
    })
  });

})

</script> 

<style lang='less' scoped>
@import "./index.less";
</style>