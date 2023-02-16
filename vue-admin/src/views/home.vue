<script setup lang="ts"></script>

<template>
  <div
    class="bg-purple-800 flex flex-col justify-center items-center p-10 h-screen"
  >
    <h1 class="bg-pink-500 absolute left-0 top-0 w-full">home.vue</h1>

    <img
      src="/img/head.jpg"
      alt=""
      class="w-52 rounded-full h-52 object-cover"
    />
    <div class="btns">
      <router-link to="admin.home " class="g-button">管理页面</router-link>
      <router-link to="admin.home " class="g-button ml-5 !bg-red-400"
        >用户注册</router-link
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
.btns {
  @apply mt-8;
}
</style>
