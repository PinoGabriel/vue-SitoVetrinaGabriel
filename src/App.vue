<script>
import AppHeader from './components/AppHeader.vue'
import { computeStyles } from "@popperjs/core";
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
    AppHeader,
  }
}

</script>

<template>
  <AppHeader />
  <router-view></router-view>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

<style scoped lang="scss"></style>
