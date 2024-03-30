<script>
import axios from 'axios';
import { store } from "../store.js";
import { reactive } from 'vue';

export default {
    name: 'Contatti',
    data() {
        return {
            store,
            formData: reactive({
                name: '',
                email: '',
                message: '',
            }),
            formSubmitted: false,
            submitError: false,
            submitSuccess: false,
            inviaClicked: false,
        };
    },
    methods: {
        async VueSubmitForm(event) {
            let url = this.store.urlBackend + this.store.apiCreateEndpoint;
            event.preventDefault();
            this.formSubmitted = true;
            this.submitError = false;
            if (this.inviato()) {
                this.inviaClicked = true;
            }
            try {
                const response = await axios.post(url, this.formData);
                console.log(response.data);
                // Se la risposta indica il successo dell'operazione, mostra il popup di successo
                this.submitSuccess = true;
                // Ripristina il modulo se necessario
                this.resetForm();
            } catch (error) {
                console.error(error);
                this.submitError = true;
                console.log('Submiterrore: ', this.submitError, 'SubmitSuccess: ', this.submitSuccess, 'Form submitted: ', this.formSubmitted);
                console.log('inviato: ', this.inviato());
                console.log('inviaClicked: ', this.inviaClicked);
            }
        },

        resetForm() {
            this.formData = {
                name: '',
                email: '',
                message: ''
            }
        },

        isValidEmail(email) {
            // Utilizza un'espressione regolare per validare il formato dell'email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // Controlla se l'email ha un dominio valido con almeno due caratteri alfabetici
            const domainRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
            return emailRegex.test(email) && domainRegex.test(email);
        },

        inviato() {
            return this.formData.name.length >= 3 &&
                this.formData.name.length <= 255 &&
                this.isValidEmail(this.formData.email) &&
                this.formData.email.length <= 255 &&
                this.formData.message.length <= 2000;
        },

        closePopupError() {
            this.formSubmitted = false;
            this.submitError = false;
            this.inviaClicked = false;
        },

        closePopupSuccess() {
            this.formSubmitted = false;
            this.submitSuccess = false;
            this.inviaClicked = false;
            this.$router.push('/');
        }
    }
}
</script>

<template>
    <section>
        <div class="container d-flex flex-column justify-content-center pt-10" :class="{
            'blur-effect': inviaClicked && (submitSuccess || (submitError && inviato()))
        }">
            <h5 class="my_color_purple">Compila il form per mandarmi un messaggio:</h5>
            <form class="mt-5" @submit.prevent="VueSubmitForm" method="post">
                <div class="mb-3">
                    <label for="name" class="form-label">Nome*</label>
                    <input type="text" class="form-control w-50" id="username" name="name" v-model="formData.name"
                        required>
                    <div v-if="formSubmitted && formData.name.length < 3 && inviato()" class="text-danger">Il nome deve
                        essere di almeno 3 caratteri</div>
                    <div v-if="formSubmitted && formData.name.length > 255 && inviato()" class="text-danger">Il nome non
                        può superare
                        i 255 caratteri</div>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email*</label>
                    <input type="email" name="email" class="form-control w-50" id="userEmail"
                        aria-describedby="emailHelp" v-model="formData.email" required>
                    <div v-if="formSubmitted && formData.email.length > 255 && inviato()" class="text-danger">L'email
                        non può
                        superare
                        i 255 caratteri</div>
                    <div v-if="formSubmitted && !isValidEmail(formData.email) && inviato()" class="text-danger">L'email
                        non è valida
                    </div>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Messaggio</label>
                    <textarea class="form-control w-50" id="userMessage" rows="5" name="message"
                        v-model="formData.message" required></textarea>
                    <div v-if="formSubmitted && formData.message.length > 2000" class="text-danger">Il messaggio non può
                        superare
                        i 2000 caratteri</div>
                </div>
                <button type="submit" class="btn btn-primary" @click="inviato()">Invia</button>
            </form>
        </div>
        <div v-if="formSubmitted && submitError && inviaClicked" class="myPopup">
            <div class="cookiesContent" id="cookiesPopup">
                <button @click="closePopupError" class="close">✖</button>
                <img src="https://www.freeiconspng.com/thumbs/error-icon/error-icon-4.png" alt="cookies-img" />
                <p>Mi spiace ma in questo momento non è possibile inviare il tuo messaggio.</p>
                <button @click="closePopupError" class="accept">Torna indietro</button>
            </div>
        </div>
        <div v-if="formSubmitted && submitSuccess && inviaClicked" class="myPopup">
            <div class="cookiesContent" id="cookiesPopup">
                <button @click="closePopupSuccess" class="close">✖</button>
                <img src="https://cdn-icons-png.freepik.com/256/190/190411.png" alt="cookies-img" />
                <p>Il suo messaggio è andato a buon fine! Riceverai una risposta il prima possibile</p>
                <button @click="closePopupSuccess" class="accept-green">Torna indietro</button>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.container {
    height: 90vh;
}

.blur-effect {
    filter: blur(8px);
}

.myPopup {

    .cookiesContent {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        backdrop-filter: blur(10px);
        width: 320px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
        color: #000;
        text-align: center;
        border-radius: 20px;
        padding: 30px 30px 70px;

        button.close {
            width: 30px;
            font-size: 20px;
            color: #c0c5cb;
            align-self: flex-end;
            background-color: transparent;
            border: none;
            margin-bottom: 10px;
        }

        img {
            width: 82px;
            margin-bottom: 15px;
        }

        p {
            margin-bottom: 40px;
            font-size: 18px;
        }

        button.accept {
            background-color: #ed6755;
            border: none;
            border-radius: 5px;
            width: 200px;
            padding: 14px;
            font-size: 16px;
            color: white;
            box-shadow: 0px 6px 18px -5px rgba(237, 103, 85, 1);
        }

        button.accept-green {
            background-color: #32BA7C;
            border: none;
            border-radius: 5px;
            width: 200px;
            padding: 14px;
            font-size: 16px;
            color: white;
            box-shadow: 0px 6px 18px -5px #32BA7C;
        }
    }
}
</style>