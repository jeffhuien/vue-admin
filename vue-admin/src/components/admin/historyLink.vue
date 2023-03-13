<script setup lang="ts">
import menuStore from "@/stores/menuStore";
const data = menuStore().historyMenu;
</script>

<template>
  <div class="flex overflow-x-auto py-2">
    <template v-for="(Item, index) of data" :key="index">
      <div class="bg-white cursor-pointer mr-1 px-4 py-1 rounded-md transition duration-500 ease-in-out" v-if="!Item.close">
        <router-link :to="{ name: Item.name }"> {{ Item?.title }} </router-link>
        <i class="fa-solid fa-xmark" @click="Item.close = true"></i>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
