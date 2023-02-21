<template>
  <div class="p-2 bg-white rounded-md flex">
    <el-icon class="mr-1"><Location /></el-icon>
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts" setup>
import { ArrowRight } from "@element-plus/icons-vue";
import { Location } from "@element-plus/icons-vue";
</script>
