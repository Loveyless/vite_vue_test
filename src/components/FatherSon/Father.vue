<template>
  <div class="father_box">
    红色是 father组件

    父的一个ref值 {{ count }}

    <Son class="son_class" />

  </div>
</template>

<script lang='ts' setup>

const count = ref<number>(0)

</script> 

<style lang='less' scoped>
.father_box {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  place-items: center;
}


.son_class {
  background-color: yellow;
}
</style>