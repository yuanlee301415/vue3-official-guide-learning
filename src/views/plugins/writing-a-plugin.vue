<script setup>
import { inject } from 'vue'
import { I18N_INJECTION_KEY } from '@/constants/tokens.js'

const i18n = inject(I18N_INJECTION_KEY)
</script>

<template>
  <div>
    <h1>编写一个插件</h1>

    <hr />
    <div>$t: {{ $t('greetings.hello') }}</div>

    <hr />
    <div>i18n: {{ i18n.greetings.hello }}</div>
  </div>
</template>

<style scoped lang="less"></style>
