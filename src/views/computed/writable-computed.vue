<script setup>
import { computed, ref } from 'vue'

const firstName = ref('zhang')
const lastName = ref('san')

const fullName = computed({
  get() {
    return [firstName.value, lastName.value].join(' ')
  },
  set(val) {
    ;[firstName.value, lastName.value] = val.split(' ')
  },
})

function setFullName() {
  fullName.value = 'Li si'
}
</script>

<template>
  <div>
    <h1>可写计算属性</h1>
    <button @click="setFullName">赋值计算属性</button>
    <code>firstName: {{ firstName }}</code>
    <code>lastName: {{ lastName }}</code>
    <code>fullName: {{ fullName }}</code>
  </div>
</template>

<style scoped lang="less"></style>
