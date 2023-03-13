<script setup lang="ts">
import user from "@/stores/user";
import util from "@/utils";
const userStore = user();
</script>

<template>
  <div class="head">
    <div class="relative flex flex-col justify-center items-center group">
      <img :src="userStore.info?.img" class="w-10 h-10 rounded-full object-cover" alt="" />
      <span class="translate-y-1 text-sm text-blue-700 border-b-2 border-blue-700">{{ userStore.info?.name }}</span>

      <div class="h-link absolute -right-7 z-10 top-7 group-hover:block pt-9 duration-500 hidden">
        <span class="block left-10 w-4 h-4 relative top-2 bg-white rounded-sm rotate-45"></span>
        <ul class="">
          <li><a href="">首页</a></li>
          <li><a href="">关于我</a></li>
          <li><a href="">修改密码</a></li>
          <li @click="util.user.logout()"><a href="">退出登录</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.head {
  @apply mr-5 pl-5;
  .h-link {
    ul {
      @apply bg-white shadow-md w-36 rounded-md p-1;
      li {
        @apply border-b border-blue-600;
      }
    }
  }
}
</style>
