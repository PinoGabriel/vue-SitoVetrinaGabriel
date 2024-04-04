<script>

import { computeStyles } from "@popperjs/core";
import { RouterView } from "vue-router";
import { store } from "../store.js";

export default {
    components: {
        RouterView
    },
    name: "AppHeader",
    data() {
        return {
            store,
            menuItems: [
                {
                    routeName: 'Home',
                    label: 'HOME'
                },
                {
                    routeName: 'Portfolio',
                    label: 'PORTFOLIO'
                },
                {
                    routeName: 'Impostazioni',
                    label: 'IMPOSTAZIONI'
                },
                {
                    routeName: 'Admin',
                    label: 'ADMIN'
                },
            ]
        }
    },
}
</script>

<template>
    <header class="container d-flex justify-content-center pt-3">
        <nav class="navbar navbar-expand-lg my-bg w-75">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul class="navbar-nav">
                        <li v-for="(item, index) in menuItems" :key="index" class="nav-item my-item">
                            <b><router-link :to="{ name: item.routeName }" class="nav-link text-white">
                                    {{ item.label }}
                                </router-link></b>
                        </li>
                        <!-- <li class="nav-link my_item text-white"><a class="text-white text-decoration-none"
                                :href="store.urlBackend + 'register/'" target="_blank"><b>ADMIN</b></a></li> -->
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-link text-white my-name">GABRIEL PINO</li>
                    </ul>
                    <ul class="navbar-nav">
                        <a><router-link class="nav-link text-white my-contact"
                                :class="{ clicked: $route.name == 'Contatti' }"
                                :to="{ name: 'Contatti' }">Contattami</router-link></a>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use '../styles/general.scss';
</style>

<style scoped lang="scss">
.my-name {
    font-size: 30px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-style: italic;
    letter-spacing: 2px;
}

.my-contact {
    text-decoration: none;
    border: 1px solid white;
    padding: 10px;
    border-radius: 1.2rem;
    cursor: pointer;
}

@media screen and (max-width: 991px) {
    .my-item:hover {
        width: 30%;
        transform: scale(1);
    }

    .my-contact:hover {
        transform: scale(1);
    }

    .my-contact {
        display: inline-block;
    }

    .clicked {
        transform: scale(1);
    }
}
</style>