<script setup></script>

<template>
  <div>
    <h1>template 上的 v-for</h1>
    <ul>
      <template v-for="n of 5" :key="n">
        <li>{{ n }}</li>
        <li><hr /></li>
      </template>
    </ul>
  </div>
</template>

<style scoped lang="less"></style>
