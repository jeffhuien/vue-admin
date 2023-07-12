<template>
  <!-- 面包屑组件 -->
  <div class="p-2 bg-white rounded-md flex">
    <el-icon class="mr-1"><Location /></el-icon>
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <template v-for="item in ls" :key="item.name">
        <el-breadcrumb-item :to="{ name: 'item.name' }">{{ item.title }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
import { Location } from "@element-plus/icons-vue";
import router from "@/router";
import { RouteRecordName } from "vue-router";
import { ref, watch } from "vue";
const route = router.currentRoute;

let ls = ref<{ name: RouteRecordName | undefined; title: string | undefined }[]>([]);
watch(
  () => route.value.path,
  (newPath, oldPath) => {
    if (route.value.matched.length > 1) {
      ls.value = [];
      route.value.matched.forEach(i => ls.value.push({ name: i.name, title: i.meta?.menu.title }));
    }
    console.log(newPath, route.value.name);
  }
);
</script>
