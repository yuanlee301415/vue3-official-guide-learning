<script setup>
import { onUnmounted, ref } from 'vue'

const APP_NAME = 'Vue3'
const COPYRIGHT = '2026'
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
      <slot name="header" :app-name="APP_NAME"></slot>
    </header>
    <main>
      <slot :time="time"></slot>
    </main>
    <footer>
      <slot name="footer" :copyright="COPYRIGHT"></slot>
    </footer>
  </div>
</template>

<style scoped lang="less"></style>
