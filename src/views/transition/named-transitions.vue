<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <div>
    <h1>为过滤效果命名</h1>

    <pre>
      我们可以给 Transition 组件传一个 name prop 来声明一个过渡效果名
    </pre>

    <hr />
    <button @click="show = !show">Toggle</button>
    <Transition name="fade">
      <div v-show="show">Hello.</div>
    </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
