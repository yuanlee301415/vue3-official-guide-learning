<script setup>
import { onMounted, useTemplateRef } from 'vue'

const inputRef = useTemplateRef('myInput')

onMounted(() => {
  inputRef.value.focus()
})
</script>

<template>
  <div>
    <h1>访问模板引用</h1>
    <pre>
      要在组合式 API 中获取引用，我们可以使用辅助函数 useTemplateRef()
    </pre>
    <input type="text" ref="myInput" />
  </div>
</template>

<style scoped lang="less"></style>
