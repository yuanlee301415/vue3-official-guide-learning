<script setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <div>
    <h1>深层级过渡与显式过渡时长</h1>

    <pre>
      尽管过渡 class 仅能应用在 Transition 的直接子元素上，我们还是可以使用深层级的 CSS 选择器，在深层级的元素上触发过渡效果
    </pre>

    <pre>
      然而，这会带来一个小问题。默认情况下，Transition 组件会通过监听过渡根元素上的第一个 transitionend 或者 animationend 事件来尝试自动判断过渡何时结束。而在嵌套的过渡中，期望的行为应该是等待所有内部元素的过渡完成。

      在这种情况下，你可以通过向 Transition 组件传入 duration prop 来显式指定过渡的持续时间 (以毫秒为单位)。总持续时间应该匹配延迟加上内部元素的过渡持续时间
    </pre>

    <hr />

    <button @click="show = !show">Toggle</button>
    <Transition name="nested">
      <div v-show="show" class="outer" style="border: 1px solid lightcoral; padding: 1rem">
        <div class="inner" style="border: 1px solid lightgreen; padding: 1rem">Hello.</div>
      </div>
    </Transition>

    <Transition name="nested" :duration="1000">
      <div v-show="show" class="outer" style="border: 1px solid lightcoral; padding: 1rem">
        <div class="inner" style="border: 1px solid lightgreen; padding: 1rem">Hello.</div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}
</style>
