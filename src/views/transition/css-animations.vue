<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <div>
    <h1>CSS animation</h1>
    <pre>
      原生 CSS 动画和 CSS transition 的应用方式基本上是相同的，只有一点不同，那就是 *-enter-from 不是在元素插入后立即移除，而是在一个 animationend 事件触发时被移除。

      对于大多数的 CSS 动画，我们可以简单地在 *-enter-active 和 *-leave-active class 下声明它们。
    </pre>

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
