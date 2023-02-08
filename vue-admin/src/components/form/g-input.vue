<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps({
  content: String,
  modelValue: String,
});
</script>

<template>
  <!-- <p>{{ props }}</p> -->

  <input
    class=""
    :placeholder="props.content ? props.content : '请输入账号'"
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped lang="scss">
input {
  @apply w-full mb-5 placeholder:text-sm border-pink-300 outline-none focus:ring-2 ring-offset-1 focus:border-white duration-200 border-2 p-1 rounded-md;
}
</style>
