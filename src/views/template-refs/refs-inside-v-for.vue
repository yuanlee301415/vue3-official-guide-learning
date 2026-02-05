<script setup>
import { onMounted, useTemplateRef } from 'vue'

const items = [1, 2, 3]
const itemRefs = useTemplateRef('itemRef')

onMounted(() => {
  itemRefs.value.forEach((_) => {
    console.log(_.textContent)
  })
})
</script>

<template>
  <div>
    <h1>v-for 中的模板引用</h1>
    <pre>
      当在 v-for 中使用模板引用时，对应的 ref 中包含的值是一个数组，它将在元素被挂载后包含对应整个列表的所有元素
    </pre>

    <hr />
    <ul>
      <li v-for="n of items" :key="n" ref="itemRef">Item-{{ n }}</li>
    </ul>
  </div>
</template>

<style scoped lang="less"></style>
