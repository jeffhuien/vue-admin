<script setup lang="ts">
import bs from "@/components/user/b.vue";
import router from "@/router";

console.log(router.currentRoute.value.matched);
</script>

<template>
  <bs>title</bs>
</template>

<style scoped lang="scss"></style>
