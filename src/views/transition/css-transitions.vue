<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <div>
    <h1>基于 CSS 的过滤效果</h1>
    <pre>
      Transition 一般都会搭配原生 CSS 过渡一起使用。这个 transition CSS 属性是一个简写形式，使我们可以一次定义一个过渡的各个方面，包括需要执行动画的属性、持续时间和速度曲线。
    </pre>

    <hr />
    <button @click="show = !show">Toggle</button>
    <Transition name="slide-fade">
      <div v-show="show">Hello.</div>
    </Transition>
  </div>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
