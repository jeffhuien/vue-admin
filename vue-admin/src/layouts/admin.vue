<script setup lang="ts">
import IMenu from "@/components/admin/menu.vue";
import NavBar from "@/components/admin/NavBar.vue";
</script>

<template>
  <div class="admin">
    <div class="left">
      <h4 class="text-center text-white text-[18px] p-5">
        <i class="fa-sharp fa-solid fa-robot text-pink-300"></i> 后台管理
      </h4>
      <IMenu></IMenu>
    </div>

    <div class="right">
      <NavBar />
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin {
  @apply flex justify-between h-screen;

  .left {
    @apply bg-gray-600  w-60 p-2;
  }
  .right {
    @apply flex-1 bg-pink-300 p-5;
  }
}
</style>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
  // console.log(route);
};
</script>
