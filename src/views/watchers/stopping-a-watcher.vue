<script setup>
import { onUnmounted, ref, watchEffect } from 'vue'

const count = ref(0)
let unwatch

setInterval(() => {
  count.value++
}, 1000)

setTimeout(() => {
  unwatch = watchEffect(() => {
    console.warn(count.value, new Date())
  })
})

onUnmounted(() => {
  unwatch()
})
</script>

<template>
  <div>
    <h1>停止侦听器</h1>
    <pre>
      在 setup 中用同步语句创建的侦听器，会自动绑定到宿主组件实例上，并且会在宿主组件卸载时自动停止。因此，在大多数情况下，你无需关心怎么停止一个侦听器。

      一个关键点是，侦听器必须用同步语句创建：如果用异步回调创建一个侦听器，那么它不会绑定到当前组件上，你必须手动停止它，以防内存泄漏。
    </pre>
  </div>
</template>

<style scoped lang="less"></style>
