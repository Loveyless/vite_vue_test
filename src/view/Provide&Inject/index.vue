<template>
  普通注入
  {{count}}
  <button @click="count++">+1</button>

  <br>

  reactive注入
  {{info}}

  <br>

  响应式注入
  {{reactivity}}
  <button @click="reactivity++">+1</button>

  <br>
  --------------------------
  <br>

  <Child></Child>

</template>

<script lang='ts' setup name="provide&inject">
// 普通注入
const count = ref<number>(12)


const info = reactive({
  name: "张三",
  age: 19
})

// 响应式注入
let reactivity = ref<number>(999)


provide("count", count.value)
provide("info", info)
provide("reactivity", computed(() => reactivity))

</script>