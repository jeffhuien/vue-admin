<script setup lang="ts">
import menuStore from "@/stores/menuStore";
import { useRoute } from "@/router";
import { IMenu } from "#/menu";
const data = menuStore().historyMenu;

function del(item: IMenu) {
  item.close = true;
  menuStore().delHistoryMenu(item);
}
</script>

<template>
  <div class="flex overflow-x-auto py-2">
    <template v-for="(Item, index) of data" :key="index">
      <div class="bg-white cursor-pointer mr-1 px-4 py-1 rounded-md transition duration-500 ease-in-out" :class="{ active: useRoute().meta.menu?.title === Item.title }" v-if="!Item.close">
        <router-link :to="{ name: Item.name }"> {{ Item?.title }} </router-link>
        <i class="fa-solid fa-xmark translate-x-1" @click="del(Item)"></i>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.active {
  @apply bg-green-500 text-white;
}
</style>
