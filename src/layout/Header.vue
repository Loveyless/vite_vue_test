<template>
  <el-menu default-active="/layout/home" mode="horizontal" menu-trigger="click" router>

    <!-- <el-menu-item index="/layout/home">主页</el-menu-item> -->

    <el-sub-menu index="">
      <template #title>vue api</template>
      <el-menu-item v-for="item in routes" :index="'/layout/' + item.path">{{ item.name }}</el-menu-item>
      <!-- <el-menu-item index="/layout/father_son">父子之间</el-menu-item> -->
    </el-sub-menu>

  </el-menu>
</template>

<script lang='ts' setup>
import router from '@/router';
// 拿到路由表
// console.log(router.options.routes)

const routes = ref(router.options.routes[1].children)
console.log(routes.value);

</script> 

<style lang='less' scoped>
</style>