<script setup>
import { useMouse } from './mouse.js'

defineOptions({ name: 'mouse-tracker-example' })
const { x, y } = useMouse()
</script>

<template>
  <div>
    <h1>鼠标示例器</h1>
    <hr />
    <code>Mouse position is: {{ x }}, {{ y }}</code>
  </div>
</template>

<style scoped lang="less"></style>
