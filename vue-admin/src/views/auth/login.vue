<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  account: "188999",
  password: "aaaa",
});
</script>

<template>
  <div
    class="flex justify-center items-center h-screen bg-cover bg-pink-200 md:bg-[url('/public/img/pexels-photo-3408744.jpeg')] bg-[url('/public/img/flower.jpeg')]"
  >
    <div
      class="overflow-hidden w-[720px] max-h-96 bg-none md:grid grid-cols-2 rounded-md m-3"
    >
      <!-- 左 -->
      <div class="p-5 g-boxShadow">
        <div>
          <h1 class="text-center m-7 text-xl text-cyan-400">会员注册</h1>
        </div>
        <div>
          <g-input v-model="form.account" />
          <g-input
            content="请输入密码"
            type="password"
            v-model="form.password"
          />
          <!-- <gInput /> -->
          <g-check />
          <g-button />
          <!-- <gButton /> -->
          <div class="links">
            <!-- <ul> -->
            <a href="">主页</a>
            <a href="">找回密码</a>
            <a href="">注册</a>
            <a href=""></a>
            <!-- </ul> -->
          </div>
        </div>
      </div>
      <!-- 右 -->
      <div class="hidden md:block">
        <img src="/public/img/pexels-photo-4220967.jpeg" alt="" class="" />
      </div>
    </div>
  </div>
  <!-- <h2 class="text-blue-500">login..</h2> -->
</template>

<style scoped lang="scss">
// div {
//   input {
//     @apply w-full mb-5 placeholder:text-sm border-pink-300 outline-none focus:ring-2 ring-offset-1 focus:border-white duration-200 border-2 p-1 rounded-md;
//   }
// }

.links {
  @apply mt-3;
  a {
    @apply text-sm mr-3 hover:text-blue-400 duration-300;
  }
}

.g-boxShadow {
  // background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(2px);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
}
</style>
