<script setup>
const vExample = {
  // 在绑定元素的 attribute 前
  // 或事件监听器应用前调用
  created(el, binding, vnode) {
    console.warn('created')
    console.log({ el, binding, vnode })
  },

  // 在元素被插入到 DOM 前调用
  beforeMount(el, binding, vnode) {
    console.warn('beforeMount')
    console.log({ el, binding, vnode })
  },

  // 在绑定元素的父组件
  // 及他自己的所有子节点都挂载完成后调用
  mounted(el, binding, vnode) {
    console.warn('mounted')
    console.log({ el, binding, vnode })
  },

  // 绑定元素的父组件更新前调用
  beforeUpdate(el, binding, vnode, prevVnode) {
    console.warn('beforeUpdate')
    console.log({ el, binding, vnode, prevVnode })
  },

  // 在绑定元素的父组件
  // 及他自己的所有子节点都更新后调用
  updated(el, binding, vnode, prevVnode) {
    console.warn('update')
    console.log({ el, binding, vnode, prevVnode })
  },

  // 绑定元素的父组件卸载前调用
  beforeUnmount(el, binding, vnode) {
    console.warn('beforeUnmount')
    console.log({ el, binding, vnode })
  },
  // 绑定元素的父组件卸载后调用
  unmounted(el, binding, vnode) {
    console.warn('unmounted')
    console.log({ el, binding, vnode })
  },
}
</script>

<template>
  <div>
    <h1>指令钩子</h1>
    <hr />
    <div v-example:foo.bar="'baz'">示例</div>
  </div>
</template>

<style scoped lang="less"></style>
