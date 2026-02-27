<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <div>
    <h1>CSS animation</h1>
    <pre></pre>

    <hr />

    <button @click="show = !show">Toggle</button>
    <Transition name="bounce">
      <div v-show="show" style="text-align: center">Hello.</div>
    </Transition>
  </div>
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
