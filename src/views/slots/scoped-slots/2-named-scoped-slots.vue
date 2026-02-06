<script setup>
import ChildE from '../ChildE.vue'
</script>

<template>
  <div>
    <h1>作用域插槽_2-具名插槽</h1>
    <pre>
      具名作用域插槽的工作方式也是类似的，插槽 props 可以作为 v-slot 指令的值被访问到
    </pre>

    <pre>
      如果你同时使用了具名插槽与默认插槽，则需要为默认插槽使用显式的 template 标签。尝试直接为组件添加 v-slot 指令将导致编译错误。这是为了避免因默认插槽的 props 的作用域而困惑。
    </pre>

    <hr />
    <ChildE>
      <template #header="{ appName }">
        <h2 class="text-2xl">{{ appName }}</h2>
      </template>

      <template #default="{ time }">
        <time>{{ time.getHours() }}:{{ time.getMinutes() }}:{{ time.getSeconds() }}</time>
      </template>

      <template #footer="{ copyright }">
        <b>&copy;{{ copyright }}</b>
      </template>
    </ChildE>
  </div>
</template>

<style scoped lang="less"></style>
