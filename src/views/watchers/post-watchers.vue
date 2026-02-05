<script setup>
import { ref, watch } from 'vue'

/*--------------------前置刷新（默认配置）--------------------*/
const preCount = ref(0)
const preRef = ref(null)

watch(preCount, () => {
  console.log('pre textContent:', preRef.value?.textContent) // undefined
})

preCount.value++
preCount.value++
preCount.value++

/*--------------------后置刷新--------------------*/
const postCount = ref(0)
const postRef = ref(null)

watch(
  postCount,
  () => {
    console.log('post textContent:', postRef.value?.textContent) // postCount: 3
  },
  { flush: 'post' },
)

postCount.value++
postCount.value++
postCount.value++
</script>

<template>
  <div>
    <h1>后置刷新</h1>
    <pre>
      如果想在侦听器回调中能访问被 Vue 更新之后的所属组件的 DOM，你需要指明 flush: 'post' 选项
    </pre>
    <code ref="preRef">preCount: {{ preCount }}</code>
    <code ref="postRef">postCount: {{ postCount }}</code>
  </div>
</template>

<style scoped lang="less"></style>
