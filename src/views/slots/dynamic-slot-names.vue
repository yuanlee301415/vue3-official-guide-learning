<script setup>
import ChildC from './ChildC.vue'
import { ref } from 'vue'

const dynamicSlotName = ref('')

function setSlotName() {
  dynamicSlotName.value = ['header', 'default', 'footer'][(Math.random() * 3) | 0]
}
</script>

<template>
  <div>
    <h1>动态插槽名</h1>

    <hr />
    <button @click="setSlotName">Set slot name</button>
    <ChildC>
      <template #[dynamicSlotName]>
        <h2>{{ dynamicSlotName }}</h2>
      </template>
    </ChildC>
  </div>
</template>

<style scoped lang="less"></style>
