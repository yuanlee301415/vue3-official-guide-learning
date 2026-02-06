<script setup>
import ChildC from './ChildC.vue'
import { reactive } from 'vue'

const user = reactive({
  firstName: 'First',
  lastName: 'Last',
})
</script>

<template>
  <div>
    <h1>多个 v-model 的绑定</h1>
    <pre>
      可以在单个组件实例上创建多个 v-model 双向绑定。

      组件上的每一个 v-model 都会同步不同的 prop，而无需额外的选项
    </pre>

    <hr />
    FirstName: <input v-model="user.firstName" /> LastName: <input v-model="user.lastName" />

    <hr />
    <ChildC v-model:first-name="user.firstName" v-model:last-name="user.lastName" />
  </div>
</template>

<style scoped lang="less"></style>
