<template>
  <div class="father_box">

    <div>father组件 红色边框</div>

    <div>father的一个ref值count {{ count }}</div>

    <Son class="son_class" @count-add="countAdd" :count="count" />

  </div>
</template>

<script lang='ts' setup>

const count = ref<number>(0)

const countAdd = (num: number) => {
  count.value += num
}

</script> 

<style lang='less' scoped>
// 父元素的盒子css
.father_box {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  place-items: center;
}

// 传给子元素的css
.son_class {
  background-color: yellow;
}
</style>