<script setup>
import { reactive, watch } from 'vue'

const state = reactive({
  user: {
    name: 'Tom',
    age: 20,
  },
})

/**
 * 嵌套的属性变更时都会被触发
 */
watch(state, (newVal) => {
  console.log('state:', newVal)
})

function updateAge() {
  state.user.age++
}

/**
 * 仅在 `state.user` 本身被重新赋值时，才触发回调
 */
watch(
  () => state.user,
  (newVal) => {
    console.log('new user:', newVal)
  },
)

/**
 * 显式地加上 deep 选项，强制转成深层侦听器
 */
watch(
  () => state.user,
  (newVal) => {
    console.log('new deep user:', newVal)
  },
  {
    deep: true,
  },
)

function setUser() {
  state.user = {
    name: 'Jon',
    age: 30,
  }
}
</script>

<template>
  <div>
    <h1>深层侦听器</h1>
    <pre>
      直接给 watch() 传入一个响应式对象，会隐式地创建一个深层侦听器——该回调函数在所有嵌套的属性变更时都会被触发
    </pre>

    <hr />

    <button @click="updateAge">更新 `state.user.age`</button>
    <code>state: {{ state }}</code>

    <hr />

    <pre>
      相比之下，一个返回响应式对象的 getter 函数，只有在返回不同的对象时，才会触发回调
    </pre>
    <button @click="setUser">设置 `user`</button>
    <code>user: {{ state.user }}</code>

    <hr />
    <pre>
      在 Vue 3.5+ 中，deep 选项还可以是一个数字，表示最大遍历深度——即 Vue 应该遍历对象嵌套属性的级数。
    </pre>
  </div>
</template>

<style scoped lang="less"></style>
