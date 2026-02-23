<script setup>
import { inject } from 'vue'

class Message {
  constructor() {
    console.warn('Default message.')
    this.message = 'Default message.'
  }
}

/**
 * 第三个参数表示默认值应该被当作一个工厂函数。
 */
const message = inject('message', () => new Message(), true)
</script>

<template>
  <details open class="m-2 p-4 border border-green-950">
    <summary>Side Comp</summary>
    <code>message: {{ message }}</code>
  </details>
</template>

<style scoped lang="less"></style>
