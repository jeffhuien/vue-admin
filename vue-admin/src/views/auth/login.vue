<script setup lang="ts">
import v from "@/plugins/validate";
import util from "@/utils";

const { useForm, useField } = v;

const { handleSubmit, errors } = useForm({
  validationSchema: {
    username: v.yup.string().required(),
    password: v.yup.string().min(3).max(9).required(),
  },
  initialValues: {
    username: "jeff-hui@qq.com",
    password: "admin",
  },
});

const { value: username } = useField("username", {});
const { value: password } = useField("password", {});

const s = handleSubmit(async (values: any) => {
  util.user.login(values);
});
</script>

<template>
  <div class="flex justify-center items-center h-screen bg-cover bg-pink-200 md:bg-[url('/img/pexels-photo-3408744.jpeg')] bg-[url('/img/flower.jpeg')]">
    <div class="overflow-hidden w-[720px] max-h-96 bg-none md:grid grid-cols-2 rounded-md m-3">
      <!-- 左 -->
      <div class="p-5 g-boxShadow">
        <div>
          <h1 class="text-center m-4 text-xl text-cyan-400">会员登录</h1>
        </div>
        <div>
          <form action="" @submit="s">
            <div class="item">
              <input v-model="username" placeholder="请输入账号" />
              <p>{{ errors.username }}</p>
            </div>
            <div class="item">
              <input placeholder="请输入密码" type="password" v-model="password" />
              <p>{{ errors.password }}</p>
            </div>
            <!-- <gInput /> -->
            <div class="item check">
              <g-check />
              <p>默认不需要验证码</p>
            </div>
            <g-button />
          </form>
          <!-- <gButton /> -->
          <div class="links">
            <!-- <ul> -->
            <a href="">主页</a>
            <a href="">找回密码</a>
            <span> 还没有账号？</span>
            <router-link class="text-blue-700" :to="{ name: 'Register' }">去注册</router-link>
          </div>
        </div>
      </div>
      <!-- 右 -->
      <div class="hidden md:block">
        <img src="/img/pexels-photo-4220967.jpeg" alt="" class="" />
      </div>
    </div>
  </div>
  <!-- <h2 class="text-blue-500">login..</h2> -->
</template>

<style scoped lang="scss">
// div {
//   input {
//     @apply w-full mb-5 placeholder:text-sm border-pink-300 outline-none focus:ring-2 ring-offset-1 focus:border-white duration-200 border-2 p-1 rounded-md;
//   }
// }

.links {
  @apply mt-3;
  a {
    @apply text-sm mr-3 hover:text-blue-400 duration-300;
  }
}

.g-boxShadow {
  // background: rgba(255, 255, 255, 0.2);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(2px);
  box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.2);
}
.item {
  position: relative;
  input {
    @apply w-full mt-4 mb-2 placeholder:text-sm border-pink-300 outline-none focus:ring-2 ring-offset-1 focus:border-white duration-200 border-2 p-1 rounded-md;
  }
  p {
    @apply absolute text-red-400 text-sm mb-1 -bottom-4;
  }
}

.check {
  @apply mt-4 mb-2;
  p {
    @apply -bottom-6;
  }
}
</style>

<script lang="ts">
// export default {
//   route: { name: "login", meta: { guest: true } },
// };
</script>
