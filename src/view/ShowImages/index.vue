<template>

  <div>测试vite-plugin-vue-images插件和自己的MyImg</div>

  <!-- 这里用了vite-plugin-vue-images插件所以不用引入 图像名称转为大驼峰 -->
  <!-- 这里用了自定义unocss -->
  <img mr-20 :src="Banner1" alt="">
  <img :src="Banner2" alt="">

  <!-- 不能和自动导入包一起用 除非写是路径 错误src可以捕获 -->
  <!-- <MyImg :src="Banner100" :errSrc="Bg" /> -->
  <MyImg class="mt--10" src="./xxx" :errSrc="Bg" alt="图片" />

</template>

<script lang='ts' setup>


</script> 

<style lang='less' scoped>

</style>