<script setup></script>

<template>
  <div>
    <header v-if="$slots.header"><slot name="header"></slot></header>
    <main v-if="$slots.default"><slot></slot></main>
    <footer v-if="$slots.footer"><slot name="footer"></slot></footer>
  </div>
</template>

<style scoped lang="less"></style>
