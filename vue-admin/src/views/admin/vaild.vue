<script setup lang="ts">
import { defineRule, configure, useField, useForm } from "vee-validate";
import { email } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";

defineRule("email", email);
configure({
  generateMessage: localize("zh_CN", zh_CN),
});

defineRule("email", email);
const { handleSubmit, errors } = useForm();
const { errorMessage: usernameError, value: usernameValue } = useField(
  "userEmail",
  { email: true },
  { label: "用户邮箱" }
);

const OnSubmit = handleSubmit(values => {
  console.log(values);
});
</script>

<template>
  <div>
    <form @submit="OnSubmit">
      <input v-model="usernameValue" />
      <p>{{ usernameError }}</p>
      {{ errors.userEmail }}
      <button>ttt</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
div {
  @apply flex justify-center items-center border-pink-400 border-4 w-screen h-screen;
  input {
    @apply border-4 border-emerald-400 outline-none p-2;
  }
}
</style>
