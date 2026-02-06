<script setup>
import { onUnmounted, ref } from 'vue'

const time = ref(new Date())
const timer = setInterval(() => {
  time.value = new Date()
}, 1000)

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div>
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot :time="time"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped lang="less"></style>
