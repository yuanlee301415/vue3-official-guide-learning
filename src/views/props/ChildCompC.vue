<script setup>
defineProps({
  id: String,
  title: String,
})
</script>

<template>
  <div>
    <h6>ChildCompC</h6>
    <p>Id: {{ id }}</p>
    <p>Title: {{ title }}</p>
  </div>
</template>

<style scoped lang="less"></style>
