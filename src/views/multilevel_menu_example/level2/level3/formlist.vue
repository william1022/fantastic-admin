<route lang="yaml">
meta:
  title: 页面标题
</route>

<script setup lang="ts">
import TestControl from './components/TestControl/index.vue'

defineOptions({
  name: 'MultilevelMenuExampleLevel2Level3Formlist',
})
</script>

<template>
  <div>
    <!-- 布局 -->
    <FaPageMain>
      组件测试页面
      <TestControl />
    </FaPageMain>
  </div>
</template>

<style scoped>
/* 样式 */
</style>
