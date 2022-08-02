<template>
  <slot :x="x" :y="y" />
</template>

<script lang='ts' setup>

const x = ref<number>(0)
const y = ref<number>(0)

const update = (e: any) =>  {
  x.value = e.pageX
  y.value = e.pageY
}

onMounted(() => window.addEventListener('mousemove', update))
onUnmounted(() => window.removeEventListener('mousemove', update))

</script> 
