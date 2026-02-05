<script setup>
import { ref, watchEffect, onWatcherCleanup, watch } from 'vue'
import { getUserApi } from '@/api/index.js'

defineOptions({ name: 'SideEffectCleanup_1-onWatcherCleanup' })

/*------------------------user------------------------*/
const userId = ref(1)
const user = ref(null)
const userTimer = setInterval(() => {
  if (userId.value >= 4) {
    clearInterval(userTimer)
    return
  }
  userId.value++
})

/**
 * 自动跟踪回调的响应式依赖
 */
watchEffect(() => {
  const ctrl = new AbortController()
  getUser(userId.value, ctrl.signal)
  onWatcherCleanup(() => {
    ctrl.abort(`Abort userId: ${userId.value}`)
  })
})

async function getUser(userId, signal) {
  user.value = await getUserApi(userId, { signal })
  console.log('user:', user.value)
}

/*------------------------role------------------------*/
const roleId = ref(0)
const role = ref(null)
const roleTimer = setInterval(() => {
  if (roleId.value >= 4) {
    clearInterval(roleTimer)
    return
  }
  roleId.value++
})

watch(roleId, (newId) => {
  const ctrl = new AbortController()
  getRole(newId, ctrl.signal)
  onWatcherCleanup(() => {
    ctrl.abort(`Abort roleId: ${newId}`)
  })
})

async function getRole(roleId, signal) {
  const res = await fetch(`/data/roles/role-${roleId}.json`, { signal })
  role.value = await res.json()
  console.log('role:', role.value)
}
</script>

<template>
  <div>
    <h1>副作用清理_1: onWatcherCleanup</h1>
    <pre>
      我们可以使用 onWatcherCleanup()  API 来注册一个清理函数，当侦听器失效并准备重新运行时会被调用
    </pre>
    <pre>
      onWatcherCleanup 仅在 Vue 3.5+ 中支持，并且必须在 watchEffect 效果函数或 watch 回调函数的同步执行期间调用：你不能在异步函数的 await 语句之后调用它
    </pre>
    <hr />
    <code>
      userId: {{ userId }}
      <br />
      user: {{ user }}
    </code>

    <hr />
    <code>
      roleId: {{ roleId }}
      <br />
      role: {{ role }}
    </code>
  </div>
</template>

<style scoped lang="less"></style>
