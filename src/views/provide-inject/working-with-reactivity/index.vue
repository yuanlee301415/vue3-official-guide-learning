<script setup>
import { provide, ref } from 'vue'
import RootComp from './modules/RootComp.vue'

defineOptions({ name: 'working-with-reactivity' })

const location = ref('North Pole')
function updateLocation() {
  location.value = 'South Pole'
}

provide('location', { location, updateLocation })
</script>

<template>
  <div>
    <h1>和响应式数据配合使用</h1>
    <pre>
      当提供 / 注入响应式的数据时，建议尽可能将任何对响应式状态的变更都保持在供给方组件中。这样可以确保所提供状态的声明和变更操作都内聚在同一个组件内，使其更容易维护。
    </pre>
    <pre>
      有的时候，我们可能需要在注入方组件中更改数据。在这种情况下，我们推荐在供给方组件内声明并提供一个更改数据的方法函数
    </pre>
    <hr />

    <RootComp />
  </div>
</template>

<style scoped lang="less"></style>
