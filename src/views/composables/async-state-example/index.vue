<script setup>
import { computed, ref } from 'vue'
import { useFetch } from './fetch.js'

defineOptions({ name: 'async-state-example' })

const id = ref('1')
const url = computed(() => `/data/users/user-${id.value}.json`)
const { data, error } = useFetch(url)
</script>

<template>
  <div>
    <h1>异步状态示例</h1>
    <hr />
    <select v-model="id" class="p-1 m-1 w-[100px]">
      <option v-for="n of 4" :key="n">{{ n }}</option>
    </select>
    <code v-if="data">user: {{ data }}</code>
    <code v-else-if="error">{{ error }}</code>
  </div>
</template>

<style scoped lang="less"></style>
