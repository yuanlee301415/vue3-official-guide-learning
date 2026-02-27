<script setup></script>

<template>
  <div>
    <h1>延迟解析的 Teleport</h1>
    <pre>
      使用 defer prop 推迟 Teleport 的目标解析，直到应用的其他部分挂载。
    </pre>
    <hr />

    <Teleport to="#late-container" defer>
      <div>Modal-A</div>
    </Teleport>

    <Teleport to="#late-container" defer>
      <div>Modal-B</div>
    </Teleport>

    <Teleport to="#late-container" defer>
      <div>Modal-C</div>
    </Teleport>

    <div id="late-container"></div>
  </div>
</template>

<style scoped lang="less"></style>
