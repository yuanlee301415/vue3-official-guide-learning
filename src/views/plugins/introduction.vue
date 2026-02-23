<script setup>
defineOptions({ name: 'plugins_introduction' })
</script>

<template>
  <div>
    <h1>介绍</h1>

    <pre>
      插件 (Plugins) 是一种能为 Vue 添加全局功能的工具代码。
    </pre>

    <pre>
      插件没有严格定义的使用范围，但是插件发挥作用的常见场景主要包括以下几种：

        通过 app.component() 和 app.directive() 注册一到多个全局组件或自定义指令。

        通过 app.provide() 使一个资源可被注入进整个应用。

        向 app.config.globalProperties 中添加一些全局实例属性或方法
    </pre>
  </div>
</template>

<style scoped lang="less"></style>
