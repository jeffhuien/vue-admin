<template>
  <div class="menu">
    <div class="menu-header" @click="toggleMenu">
      <i :class="['icon', isOpen ? 'icon-chevron-up' : 'icon-chevron-down']"></i>
      {{ title }}
    </div>
    <div class="menu-container" v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Menu",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style>
.menu {
  margin-bottom: 16px;
}
.menu-header {
  display: flex;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
}
.icon {
  margin-right: 8px;
}
.menu-container {
  padding-left: 16px;
}
</style>
