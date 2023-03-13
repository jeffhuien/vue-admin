<script setup lang="ts">
import IMenu from "@/components/admin/IMenu.vue";
import NavBar from "@/components/admin/NavBar.vue";
import historyLink from "@/components/admin/historyLink.vue";
import headImg from "@/components/admin/headImg.vue";
</script>

<template>
  <div class="admin">
    <div class="left">
      <h4 class="text-center text-white text-[18px] p-5">
        <i class="fa-sharp fa-solid fa-robot text-pink-300"></i>
        后台管理
      </h4>
      <IMenu></IMenu>
    </div>

    <div class="right">
      <div class="flex items-center bg-white p-2 mb-2 rounded-md">
        <NavBar class="flex-1 !p-[10px]" />
        <headImg />
      </div>
      <historyLink class="" />
      <main>
        <router-view #default="{ Component }">
          <Transition appear enter-active-class="animate__animated animate__fadeInRight">
            <component :is="Component" />
          </Transition>
        </router-view>
      </main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.admin {
  @apply flex justify-between min-h-screen overflow-hidden;

  .left {
    @apply bg-gray-600  w-60 p-2;
  }
  .right {
    @apply flex-1 bg-pink-300 p-5 flex flex-col;
    main {
      @apply bg-white my-2 rounded-md h-full mb-1 flex-1 overflow-hidden;
    }
  }
}
</style>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
  // console.log(route);
};
</script>
