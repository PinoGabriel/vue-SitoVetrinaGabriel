import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';

// importo bootstrap (js)
import * as bootstrap from 'bootstrap'
window.vue = {};
window.vue.App = createApp(App)
    .use(router)
    .mount('#app');