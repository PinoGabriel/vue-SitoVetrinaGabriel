<script>
import AppHeader from './components/AppHeader.vue'
import { computeStyles } from "@popperjs/core";
import { RouterView } from "vue-router";

export default {
  components: {
    RouterView,
    AppHeader,
  },
  data() {
    return {
      currentTheme: localStorage.getItem('theme-color')
    }
  },
  methods: {
    switchTheme(theme) {
      localStorage.setItem('theme-color', theme);
      this.currentTheme = localStorage.getItem('theme-color')
      document.body.className = ''; // Rimuovi tutte le classi dal body
      document.body.classList.add(theme); // Aggiungi solo la classe del tema selezionato
    }
  },
  created() {
    document.body.className = this.currentTheme;
  }
}


</script>

<template>
  <div id="app" :class="currentTheme">
    <AppHeader />
    <div class="theme-options my-bg">
      <p class="fw-bold">Cambia Tema</p>
      <div id="theme-purple" :class="{ 'active': currentTheme === 'theme-purple' }"
        @click="switchTheme('theme-purple')">
      </div>
      <div id="theme-orange" :class="{ 'active': currentTheme === 'theme-orange' }"
        @click="switchTheme('theme-orange')"></div>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

<style scoped lang="scss"></style>
