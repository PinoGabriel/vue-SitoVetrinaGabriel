import { createRouter, createWebHistory } from 'vue-router';

import { store } from './store.js';
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import Contatti from './pages/Contatti.vue';
import Impostazioni from './pages/Impostazioni.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio,
        },
        {
            path: '/contatti',
            name: 'Contatti',
            component: Contatti,
        },
        {
            path: '/impostazioni',
            name: 'Impostazioni',
            component: Impostazioni
        },
        {
            path: '/admin',
            name: 'Admin',
            component: () => import('./pages/Home.vue')
        }
    ]
});

router.afterEach((to) => {
    // Verifica se il link cliccato è quello per l'amministrazione
    if (to.name === 'Admin') {
        // Apre il link in una nuova finestra
        window.open(store.urlBackend + 'register/', '_blank');
    }
});

export { router };
