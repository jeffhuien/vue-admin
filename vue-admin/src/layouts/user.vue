<script setup lang="ts">
import router from "@/router";

console.log(router.currentRoute.value.matched);
</script>

<template>
  user/
  <router-view />
</template>

<style scoped lang="scss"></style>
