import { createRouter, createWebHistory } from 'vue-router';

import { store } from './store.js';
import Home from './pages/Home.vue'
import Portfolio from './pages/Portfolio.vue'
import Contatti from './pages/Contatti.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
        },
        {
            path: '/contatti',
            name: 'contatti',
            component: Contatti,
        },
        {
            path: '/admin',
            name: 'admin',
            component: () => import('./pages/Home.vue')
        }
    ]
});

router.afterEach((to) => {
    // Verifica se il link cliccato è quello per l'amministrazione
    if (to.name === 'admin') {
        // Apre il link in una nuova finestra
        window.open(store.urlBackend + 'register/', '_blank');
    }
});

export { router };
