<script setup>
import { ref, watchEffect, watch } from 'vue'
import { getUserApi } from '@/api/index.js'

defineOptions({ name: 'SideEffectCleanup_2-onCleanup' })

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

watchEffect((onCleanup) => {
  const ctrl = new AbortController()
  getUser(userId.value, ctrl.signal)
  onCleanup(() => {
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

watch(roleId, (newId, _, onCleanup) => {
  const ctrl = new AbortController()
  getRole(newId, ctrl.signal)
  onCleanup(() => {
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
    <h1>副作用清理_2: onCleanup</h1>
    <pre>
      我们可以使用 onWatcherCleanup()  API 来注册一个清理函数，当侦听器失效并准备重新运行时会被调用
    </pre>
    <pre>
      通过函数参数传递的 onCleanup 与侦听器实例相绑定，因此不受 onWatcherCleanup 的同步限制。
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
