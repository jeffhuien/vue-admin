<script setup lang="ts"></script>

<template>
  <div class="w-full flex justify-between">
    <input class="!w-3/5" placeholder="请输入验证码" type="text" />
    <img
      src=""
      alt=""
      class="bg-red-400 ml-3 p-1 w-2/5 inline h-full rounded-md"
    />
  </div>
</template>

<style scoped lang="scss">
input {
  @apply w-full mb-5 placeholder:text-sm border-pink-300 outline-none focus:ring-2 ring-offset-1 focus:border-white duration-200 border-2 p-1 rounded-md;
}
</style>
