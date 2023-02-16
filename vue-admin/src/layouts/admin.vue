<script setup lang="ts"></script>

<template>
  <h2>admin.vue</h2>

  <router-view></router-view>
</template>

<style scoped></style>

<script lang="ts">
export default {
  route: { meta: { auth: true } },
  // console.log(route);
};
</script>
