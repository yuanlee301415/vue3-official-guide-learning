<script setup>
import { reactive } from 'vue'

const set = reactive(new Set([1, 2]))

function updateSet() {
  set.add(Date.now())
}

let state = reactive({ count: 1 })

function updateState() {
  /**
   * 重新赋值 state，失去响应性
   */
  state = reactive({ count: 2 })
}

const state2 = reactive({ count: 1 })
let { count } = state2

function updateLetCount() {
  /**
   * 更新解构后的属性，失去响应性
   */
  count++
}

function updateState2Count(count) {
  /**
   * 更新传递给函数的属性，失去响应式
   */
  count++
  console.log(count)
}
</script>

<template>
  <div>
    <h1>reactive() 的局限性</h1>

    <pre>
      有限的值类型：它只能用于对象类型 (对象、数组和如 Map、Set 这样的集合类型)。它不能持有如 string、number 或 boolean 这样的原始类型。
    </pre>
    <button @click="updateSet">更新 Set 类型数据</button>
    <code>set: {{ set }}</code>

    <hr />
    <pre>
      不能替换整个对象：由于 Vue 的响应式跟踪是通过属性访问实现的，因此我们必须始终保持对响应式对象的相同引用。这意味着我们不能轻易地“替换”响应式对象，因为这样的话与第一个引用的响应性连接将丢失
    </pre>
    <button @click="updateState">重新赋值 `state`</button>
    <code>state: {{ state }}</code>

    <hr />
    <pre>
      对解构操作不友好：当我们将响应式对象的原始类型属性解构为本地变量时，或者将该属性传递给函数时，我们将丢失响应性连接
    </pre>
    <button @click="updateLetCount">更新解构后的 `count`</button>
    <code>count: {{ count }}</code>
    <button @click="updateState2Count(state2.count)">更新传递给函数的属性</button>
    <code>state2.count {{ state2.count }}</code>
  </div>
</template>

<style scoped lang="less"></style>
