<script setup lang="ts">
import menuStore from "@/stores/menuStore";
import { useRoute } from "@/router";
import { RouteRecordNormalized } from "vue-router";

const MenuStore = menuStore();
MenuStore.getMenus();
function handle(menu: RouteRecordNormalized) {
  menu.meta.show = !menu.meta.show;
  console.log(menu.meta.show);
  console.log(menu);
}

// handle(menuStore().menus[0]);
</script>

<template>
  <!-- admin/home -->
  <!-- <div class="admin"> -->
  <section class="p-2">
    <section class="item" v-for="(menu, index) of MenuStore.menus" :key="index">
      <h4 class="item_title" @click="handle(menu)">
        <!-- 切换菜单组操作 -->
        <div>
          <i :class="menu.meta.menu?.icon"></i>
          {{ menu.meta.menu?.title }}
        </div>
        <i class="fa-solid fa-angle-down text-white" :class="{ close: !menu.meta?.show }"></i>
      </h4>
      <dl v-show="menu.meta?.show" v-for="(cmenu, index) of menu.children" :key="index">
        <dt :class="{ active: useRoute().meta.menu?.title === cmenu.meta?.menu?.title }">
          <router-link :to="{ name: cmenu?.name }" class="w-full block">
            {{ cmenu.meta?.menu?.title }}
          </router-link>
        </dt>
      </dl>
    </section>
  </section>
</template>

<style scoped lang="scss">
.item {
  @apply mb-4;
  .item_title {
    @apply text-base mb-2 flex justify-between;
    .close {
      @apply rotate-180;
    }
  }
  dl {
    @apply px-4;
    dt {
      @apply mb-3 p-2 text-sm text-white rounded-md hover:bg-purple-600 duration-500;
      &.active {
        @apply bg-purple-600;
      }
    }
  }
}
</style>
