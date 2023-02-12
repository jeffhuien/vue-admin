<script setup lang="ts">
import v from "@/plugins/validate";
// const { useForm, useField } = v;

const { handleSubmit, errors } = v.useForm({
  initialValues: { userEmail: "jeff-hui@qq.com", password: "admin" },
  // validationSchema: {
  //   userEmail: { email: true, required: true },
  //   password: { required: true },
  // },

  //yup的使用
  validationSchema: {
    userEmail: v.yup.string().email().required(),
    password: v.yup.string().required(),
  },
});

const { value: userEmailValue } = v.useField("userEmail", {});
const { value: userPasswordValue } = v.useField("password");

const OnSubmit = handleSubmit(values => {
  console.log(values);
});
</script>

<template>
  <div>
    <form @submit="OnSubmit">
      <input v-model="userEmailValue" />
      <!-- <p>{{ userEmailValue }}</p> -->
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
