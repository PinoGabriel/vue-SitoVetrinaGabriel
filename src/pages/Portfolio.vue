<script>
import SwiperCard from '../components/SwiperCard.vue';
import { store } from '../store';

export default {
    name: 'Portfolio',
    components: {
        SwiperCard
    },
    data() {
        return {
            store
        }
    },

}
</script>

<template>
    <section>
        <div class="container py-5">
            <h1 class="mb-5 my_color_purple">{{ $route.name }}</h1>

            <h3 class="pt-3 font-impact">1. DeliveBoo</h3>
            <p class="py-3">Clone di Deliveroo, dove gli utenti possono cercare ristoranti, visualizzare i menù ed
                effettuare ordini.
                Creato con Laravel per il backend e Vue.js per il frontend</p>
            <SwiperCard class="mb-5" :images="store.DeliveBoo" />

            <h3 class="pt-5 font-impact">2. Boolflix</h3>
            <p class="py-3">Ho guidato lo sviluppo di Boolflix, un'applicazione web che offre agli utenti la possibilità
                di esplorare e scoprire film e serie TV attraverso un'interfaccia intuitiva e ricca di funzionalità. Ho
                gestito le chiamate API per recuperare e visualizzare le informazioni sui contenuti cinematografici,
                garantendo un flusso di dati aggiornato e accurato.</p>
            <SwiperCard class="mb-5" :images="store.Boolflix" />

            <h3 class="pt-5 font-impact">3. Boolzap</h3>
            <p class="py-3">Sono stato coinvolto nella realizzazione di Boolzap, un'applicazione che simula una chat tra
                due persone con messaggi preimpostati utilizzando Vue.js. Ho lavorato per garantire un'esperienza utente
                fluida e interattiva.</p>
            <SwiperCard class="mb-5" :images="store.Boolzap" />

            <h3 class="pt-5 font-impact">4. Spotify</h3>
            <p class="py-3">Mi sono concentrato sulla progettazione e l'implementazione di interfacce utente
                accattivanti utilizzando HTML e CSS.</p>
            <SwiperCard class="mb-5" :images="store.Spotify" />

            <h3 class="pt-5 font-impact">5. Sito Vetrina</h3>
            <p class="py-3">Ho collaborato alla realizzazione di un sito vetrina che mette in mostra una varietà di
                prodotti e servizi. Questo progetto mi ha permesso di acquisire competenze nella creazione di layout
                responsive e user-friendly.</p>
            <SwiperCard class="mb-5" :images="store.Vetrina" />
        </div>
    </section>
</template>

<style scoped lang="scss">
template {
    height: 100vh;
}

.font-impact {
    font-family: 'Impact', 'Arial Narrow Bold', sans-serif;
    font-style: italic;
    letter-spacing: 2px;
}
</style>
