<script setup lang="ts">
import { toast } from 'vue-sonner'
import formlistStore from '@/store/modules/formlist'

const formStore = formlistStore()

function onSubmit() {
  formStore.submit()
  toast.warning('确认提示', {
    description: '提交',
  })
}
</script>

<template>
  <div>
    <!-- 布局 -->
    <form @submit="onSubmit">
      我是子组建
      <FaAvatar src="https://fantastic-admin.hurui.me/logo.svg" />
      <ImageUpload action="http://api." width="100px" height="50px" />
      <FaSwitch />
      <FaButton size="lg" class="w-20" type="submit">
        提交
      </FaButton>
    </form>
  </div>
</template>

<style scoped>
/* 样式 */
</style>
