<script setup lang="ts">
import { defineRule, configure, useField, useForm } from "vee-validate";
import { email, required } from "@vee-validate/rules";
import { localize } from "@vee-validate/i18n";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
import * as yup from "yup";

defineRule("email", email);
defineRule("required", required);
// const { errorMessage: userEmailError, value: userEmailValue } = useField(
//   "userEmail",
//   { email: true }
// );

configure({
  generateMessage: localize("zh-CN", zh_CN),
});
const { handleSubmit, errors } = useForm({
  initialValues: { userEmail: "jeff-hui@qq.com", password: "admin" },
  // validationSchema: {
  //   userEmail: { email: true, required: true },
  //   password: { required: true },
  // },

  //yup的使用
  validationSchema: {
    userEmail: yup.string().email().required(),
    password: yup.string().required(),
  },
});

const { value: userEmailValue } = useField("userEmail", {});
const { value: userPasswordValue } = useField("password");

const sss = handleSubmit(values => {
  console.log(values);
});
</script>

<template>
  <div>
    <form action="" @submit="sss">
      <input type="text" v-model="userEmailValue" />
      <span>{{ errors.userEmail }}</span>
      <hr />
      <input type="text" v-model="userPasswordValue" />
      <span>{{ errors.password }}</span>
      <hr />
      <button class="border-red-500 border-2 p-2 w-36 bg-pink-200">提交</button>
    </form>
  </div>
</template>

<style scoped lang="scss">
div {
  input {
    @apply border-4 border-emerald-400 outline-none p-2;
  }
}
</style>
