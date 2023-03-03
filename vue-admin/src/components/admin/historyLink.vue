<script setup lang="ts">
import { ref } from "vue";
const data = ref([
  { title: "首页", close: false },
  { title: "首页", close: false },
  { title: "首页", close: false },
  { title: "首页", close: false },
  { title: "111", close: false },
]);
</script>

<template>
  <div class="flex">
    <template v-for="(Item, index) of data" :key="index">
      <div class="bg-white cursor-pointer mr-1 px-4 py-1 rounded-md transition duration-500 ease-in-out" v-if="!Item.close">
        {{ Item.title }}
        <i class="fa-solid fa-xmark" @click="Item.close = true"></i>
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss"></style>
