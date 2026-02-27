<script setup></script>

<template>
  <div>
    <h1>多个 Teleport 共享目标</h1>
    <pre>
      多个 Teleport 组件可以将其内容挂载在同一个目标元素上，而顺序就是简单的顺次追加，后挂载的将排在目标元素下更后面的位置上，但都在目标元素中。
    </pre>
    <hr />

    <Teleport to="#modals-container">
      <div>Modal-A</div>
    </Teleport>

    <Teleport to="#modals-container">
      <div>Modal-B</div>
    </Teleport>

    <Teleport to="#modals-container">
      <div>Modal-C</div>
    </Teleport>
  </div>
</template>

<style scoped lang="less"></style>
