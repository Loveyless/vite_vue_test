<template>
  <el-menu default-active="/layout/home" mode="horizontal" router>

    <el-menu-item index="/layout/home">主页</el-menu-item>

    <el-sub-menu index="">
      <template #title>vue api</template>
      <el-menu-item index="/layout/father_son">父子之间</el-menu-item>
    </el-sub-menu>

  </el-menu>
</template>

<script lang='ts' setup>

</script> 

<style lang='less' scoped>
</style>