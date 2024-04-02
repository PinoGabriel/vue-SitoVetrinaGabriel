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
        <nav class="navbar navbar-expand-lg my_bg w-75">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
                    <ul class="navbar-nav">
                        <li v-for="(item, index) in menuItems" :key="index" class="nav-item my_item">
                            <b><router-link :to="{ name: item.routeName }" class="nav-link text-white">
                                    {{ item.label }}
                                </router-link></b>
                        </li>
                        <!-- <li class="nav-link my_item text-white"><a class="text-white text-decoration-none"
                                :href="store.urlBackend + 'register/'" target="_blank"><b>ADMIN</b></a></li> -->
                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-link text-white my_name">GABRIEL PINO</li>
                    </ul>
                    <ul class="navbar-nav">
                        <a><router-link class="nav-link text-white my_contact"
                                :class="{ active: $route.name == 'Contatti' }"
                                :to="{ name: 'Contatti' }">Contattami</router-link></a>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <main>

    </main>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use '../styles/general.scss';
</style>

<style scoped lang="scss">
.my_bg {
    background-color: #06091880;
    border: 2px solid #6629b6;
    border-radius: 2rem;
}

.navbar-toggler {
    background-color: #6629b6 !important;
    border-radius: 2rem;
}

.my_name {
    font-size: 30px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-style: italic;
    letter-spacing: 2px;
}

.my_contact {
    text-decoration: none;
    border: 1px solid white;
    padding: 10px;
    border-radius: 1.2rem;
    cursor: pointer;
}

.my_contact:hover {
    background-color: #784adb;
    border: 1px solid #784adb;
    transform: scale(1.1);
}

.active {
    background-color: #784adb;
    border: 1px solid #784adb;
    transform: scale(1.1);
}



.my_item:hover {
    border-bottom: 3px solid #784adb;
    transform: scale(1.1);
}

@media screen and (max-width: 991px) {
    .my_item:hover {
        width: 30%;
        transform: scale(1);
    }

    .my_contact:hover {
        transform: scale(1);
    }

    .my_contact {
        display: inline-block;
    }

    .active {
        transform: scale(1);
    }
}
</style>