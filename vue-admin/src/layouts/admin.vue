<!--
 * @Author: GAO GAO
 * @Date: 2023-02-06 15:12:49
-->
<script setup lang="ts">
import IMenu from "@/components/admin/IMenu.vue";
import NavBar from "@/components/admin/NavBar.vue";
import historyLink from "@/components/admin/historyLink.vue";
import headImg from "@/components/admin/headImg.vue";

function close() {
  const close = document.querySelector(".closeLeft")!;

  close.classList.toggle("open");

  const a = document.querySelector(".left")!;
  a.classList.toggle("animate__fadeOutLeft");
  a.classList.toggle("animate__fadeInLeft");
  setTimeout(() => {
    a.classList.toggle("notActive");
  }, 500);
}
// console.log(a);
</script>
<template>
  <div class="admin transition ease-in-out duration-600">
    <div class="left animate__animated animate__fadeInLeft">
      <h4 class="text-center text-white text-[18px] p-5">
        <i class="fa-sharp fa-solid fa-robot text-pink-300"></i>
        <router-link :to="{ name: 'admin.home' }"> 后台管理 </router-link>
      </h4>
      <IMenu></IMenu>
    </div>

    <div class="right transition ease-in-out duration-200">
      <div class="flex items-center bg-white p-2 mb-2 rounded-md">
        <div class="closeLeft" @click="close()">
          <i class="fa-solid fa-square-caret-down"></i>
        </div>
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
  @apply flex justify-between min-h-screen overflow-hidden bg-pink-300;

  .left {
    @apply bg-gray-600  w-60 p-2 relative;
  }

  .right {
    @apply flex-1  p-5 flex flex-col;
    main {
      @apply bg-white my-2 rounded-md h-full mb-1 flex-1 overflow-hidden;
    }
    .closeLeft {
      @apply absolute rotate-90 top-5 text-xl text-purple-400;
    }
    .open {
      i {
        @apply rotate-180;
      }
    }
  }
}

.notActive {
  @apply hidden;
}

@media screen and (max-width: 500px) {
  .left {
    @apply hidden;
  }
}
</style>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
};
</script>
