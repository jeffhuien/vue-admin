<script setup lang="ts">
import { ref } from "vue";

interface IMenItem {
  title: string;
  icon?: string;
  active?: boolean;
}

interface IMenu extends IMenItem {
  children?: IMenItem[];
  active: boolean;
}

const menus = ref<IMenu[]>([
  {
    title: "错误页面",
    icon: "fa-solid fa-bug",
    children: [
      { title: "404", active: true },
      { title: "405" },
      { title: "500" },
    ],
    active: true,
  },
  {
    title: "编辑器",
    icon: "fa-solid fa-file-word",
    children: [{ title: "markdown", active: true }, { title: "富文本编辑器" }],
    active: false,
  },
]);

const restart = () => {
  menus.value.forEach(M => {
    M.active = false;
  });
};

const handle = (pmenu: IMenu) => {
  restart();
  pmenu.active = true;
  // if (true) {
  //   pmenu.children[0].active = true;
  // }
};
</script>

<template>
  <!-- admin/home -->

  <!-- <div class="admin"> -->

  <section class="p-2">
    <section class="item" v-for="(menu, index) of menus" :key="index">
      <h4 class="item_title" @click="handle(menu)">
        <div>
          <i :class="menu.icon"></i>
          {{ menu.title }}
        </div>
        <i class="fa-solid fa-angle-down"></i>
      </h4>

      <dl v-show="menu.active" v-for="(cmenu, j) of menu.children" :key="j">
        <dt :class="{ active: cmenu.active }">{{ cmenu.title }}</dt>
      </dl>
    </section>

    <!--  -->
  </section>

  <!-- <div class="right">right</div> -->
  <!-- </div> -->
</template>

<style scoped lang="scss">
// .admin {
//   @apply flex justify-between h-screen;

.item {
  @apply mb-4;
  .item_title {
    @apply text-base mb-2 flex justify-between;
  }
  dl {
    @apply px-4;
    dt {
      @apply mb-3 p-2 text-sm text-white rounded-md hover:bg-purple-600 duration-500;
      &.active {
        @apply bg-purple-600;
      }
    }
  }
}
</style>
