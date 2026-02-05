<script setup>
import { onMounted, useTemplateRef } from 'vue'
import ChildComp from './ChildComp.vue'

const childRef = useTemplateRef('childComp')

onMounted(() => {
  console.log(childRef.value.$el.textContent)
})
</script>

<template>
  <div>
    <h1>组件上的 ref</h1>
    <pre>
      模板引用也可以被用在一个子组件上。这种情况下引用中获得的值是组件实例
    </pre>
    <ChildComp ref="childComp" />
  </div>
</template>

<style scoped lang="less"></style>
