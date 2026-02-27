<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <button @click="open = true">Open</button>

  <Teleport to="body">
    <div v-if="open" class="modal">
      <div>Modal content.</div>
      <button @click="open = false">Close</button>
    </div>
  </Teleport>
</template>

<style scoped lang="less">
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  box-shadow: 0 4px 16px #00000026;
  background-color: #1a1a1a;
  border-radius: 8px;
  padding: 30px;
}
</style>
