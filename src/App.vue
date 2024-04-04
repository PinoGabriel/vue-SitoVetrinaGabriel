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
      currentTheme: localStorage.getItem('theme-color') || 'theme-purple',
      showThemeOptions: false
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
    document.body.className = this.currentTheme || 'theme-purple';
    if (this.$route.path === '/impostazioni') {
      this.showThemeOptions = true;
    }
  },
  watch: {
    '$route'(to, from) {
      // Controlla se la rotta corrente è "impostazioni" e imposta showThemeOptions su true
      if (to.path === '/impostazioni') {
        this.showThemeOptions = true;
      } else {
        this.showThemeOptions = false;
      }
    }
  }

}


</script>

<template>
  <div id="app" :class="currentTheme">
    <AppHeader />
    <main>
      <div class="container d-flex justify-content-center mt-5" v-if="showThemeOptions">
        <div class="theme-options my-bg">
          <section class="d-flex align-items-center">
            <p class="fw-bold">Cambia Tema</p>
            <div id="theme-purple" :class="{ 'active': currentTheme === 'theme-purple' }"
              @click="switchTheme('theme-purple')">
            </div>
            <div id="theme-orange" :class="{ 'active': currentTheme === 'theme-orange' }"
              @click="switchTheme('theme-orange')"></div>
            <div id="theme-green" :class="{ 'active': currentTheme === 'theme-green' }"
              @click="switchTheme('theme-green')">
            </div>
          </section>
        </div>
      </div>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>

<style scoped lang="scss">
@media screen and (max-width: 1680px) {
  .theme-options {
    display: inline-block;
  }

}
</style>
