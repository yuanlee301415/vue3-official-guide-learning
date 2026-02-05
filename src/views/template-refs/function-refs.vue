<script setup>
import { ref } from 'vue'

const key = ref(0)
setTimeout(() => {
  key.value++
}, 500)
</script>

<template>
  <div>
    <h1>函数模板引用</h1>
    <pre>
      除了使用字符串值作名字，ref attribute 还可以绑定为一个函数，会在每次组件更新时都被调用。该函数会收到元素引用作为其第一个参数
    </pre>
    <pre>
      注意我们这里需要使用动态的 :ref 绑定才能够传入一个函数。当绑定的元素被卸载时，函数也会被调用一次，此时的 el 参数会是 null。你当然也可以绑定一个组件方法而不是内联函数。
    </pre>
    <hr />

    <input :key="key" :ref="(el) => el?.focus()" />
  </div>
</template>

<style scoped lang="less"></style>
