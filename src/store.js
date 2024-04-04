import { reactive } from 'vue'

export const store = reactive({
    urlBackend: "http://127.0.0.1:8000/",
    apiCreateEndpoint: "api/create/",
    apiGetUsersEndpoint: "api/users/",
    DeliveBoo: [
        { img: 'img-1.png' },
        { img: 'img-2.png' },
        { img: 'img-3.png' },
        { img: 'img-4.png' },
        { img: 'img-5.png' },
        { img: 'img-6.png' }
    ],
    Boolflix: [
        { img: 'bool-1.png' },
        { img: 'bool-2.png' },
        { img: 'bool-3.png' },
        { img: 'bool-4.png' },
    ],
    Boolzap: [
        { img: 'zap-1.png' },
        { img: 'zap-2.png' },
        { img: 'zap-3.png' },
        { img: 'zap-4.png' },
    ],
    Spotify: [
        { img: 'spoty-1.png' },
        { img: 'spoty-2.png' },
        { img: 'spoty-3.png' },
        { img: 'spoty-4.png' },
    ],
    Vetrina: [
        { img: 'vetrina-1.png' },
        { img: 'vetrina-2.png' },
        { img: 'vetrina-3.png' },
        { img: 'vetrina-4.png' },
        { img: 'vetrina-5.png' },
        { img: 'vetrina-6.png' },
        { img: 'vetrina-7.png' },
        { img: 'vetrina-8.png' },
        { img: 'vetrina-9.png' },
    ],
});