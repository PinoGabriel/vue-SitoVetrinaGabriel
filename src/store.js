import { reactive } from 'vue'

export const store = reactive({
    urlBackend: "http://127.0.0.1:8000/api/",
    apiCreateEndpoint: "create/",
});