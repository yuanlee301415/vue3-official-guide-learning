<script setup>
import { computed, ref } from 'vue'

defineOptions({ name: 'GetPrevious' })

const count = ref(0)

function inc() {
  count.value += 2
}

const alwaysSmall = computed((previous) => {
  if (count.value <= 5) return count.value
  return previous
})

const alwaysBig = computed({
  get(previous) {
    if (count.value >= 5) return count.value
    return previous
  },
  set(val) {
    count.value = val
  },
})
</script>

<template>
  <div>
    <h1>获取上一个值</h1>
    <pre>
      可以通过访问计算属性的 getter 的第一个参数来获取计算属性返回的上一个值
    </pre>
    <button @click="inc">更新 `count`</button>
    <code>count: {{ count }}</code>
    <code>alwaysSmall: {{ alwaysSmall }}</code>
    <code>alwaysBig: {{ alwaysBig }}</code>
  </div>
</template>

<style scoped lang="less"></style>
