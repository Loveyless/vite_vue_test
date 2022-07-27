<template>
  <div class="common-layout">
    <el-container>

      <el-header>
        <Header />
      </el-header>


      <el-main>
        <router-view></router-view>
      </el-main>


    </el-container>
  </div>
</template>

<script lang='ts' setup>
import Header from "./Header.vue";

</script> 

<style lang='less' scoped>
</style>