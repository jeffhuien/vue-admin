<script setup lang="ts">
import { Form, Field, defineRule, configure } from "vee-validate";
import { email } from "@vee-validate/rules";
import { ref } from "vue";
import { localize } from "@vee-validate/i18n";
import zh_CN from "@vee-validate/i18n/dist/locale/zh_CN.json";
import { required } from "@vee-validate/rules";

defineRule("email", email);
configure({
  // Generates an English message locale generator
  generateMessage: localize("zh_CN", zh_CN),
});

defineRule("email", email);

const OnSubmit = (values: any) => {
  console.log(values);
};
const account = ref("");
</script>

<template>
  <div
    class="flex justify-center items-center border-pink-400 border-4 w-screen h-screen"
  >
    <Form @submit="OnSubmit">
      <Field
        #default="{ field, errorMessage }"
        label="账号"
        name="account"
        :rules="email"
      >
        <input v-bind="field" v-model="account" />
        <p>{{ errorMessage }}</p>
        {{ field }}
      </Field>
      <button>提交</button>
    </Form>
  </div>
</template>

<style scoped lang="scss">
div {
  input {
    @apply border-4 border-emerald-400 outline-none p-2;
  }
}
</style>
