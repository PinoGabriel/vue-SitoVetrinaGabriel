<script>

export default {
	name: 'AppHeader',
	data() {
		return {
			exp: [
				{
					title: "Boolean - Full Stack Web Developer Trainee (Set 2023 - Mar 2024)",
					description: "Ho sviluppato progetti di replica di siti web e layout di webapp esistenti come Netflix e WhatsApp Web. Inoltre, ho creato siti vetrina utilizzando framework all'avanguardia come Vue.js, garantendo un'esperienza utente moderna."
				},
				{
					title: "YouTube - Grafico/Assistente/Editor/Gestore (Mar 2022 - Ago 2023)",
					description: "Ho collaborato con un noto Youtuber del settore criptovalute, gestendo la ricerca di tendenze di mercato, la creazione di grafiche, l&apos;editing di video brevi(reels/tiktok), l'interazione e la gestione della community."
				},
				{
					title: "Blacksmith Italia - Designer grafico (Ott 2020 - Mar 2022)",
					description: "Ho guidato la creazione di materiali di marketing di alto livello, compresi cataloghi informativi e grafiche per stand fieristici. Ho anche svolto un ruolo chiave nella progettazione e nell'ottimizzazione delle grafiche per il sito web e le pagine social dell'azienda"
				},
			],
			education: [
				{
					title: "Boolean - Full Stack Web Developer (Set 2023 - Mar 2024)",
					description: `Corso Full-Time di programmazione (700+ ore) della durata di 6 mesi. Il percorso formativo ha previsto esercizi quotidiani, per il post lezione. Per questi ultimi esercizi si sono riprodotti siti web e layout di webapp realmente esistenti ( es. Netflix, WhatsappWeb) Durante questa esperienza ho avuto modo di apprendere ed utilizzare le seguenti tecnologie: • HTML • CSS • SASS • Bootstrap • JavaScript • Vue.js • PHP • PHPMYADMIN • MySQL • LARAVEL.
          Obiettivo del corso è dare delle solide basi allo studente sia lato Frontend che Backend, sviluppo del pensiero algoritmico e autonomia nell'apprendimento di ulteriori linguaggi e di nuove tecnologie.`
				},
				{
					title: "ISIS Zenale e Butinone - Grafico pubblicitario (Set 2015 - Lug 2020)",
					description: "Diploma di Specializzazione di 1° livello DS1, Grafico pubblicitario e comunicazione"
				},
			]
		}
	}
}
</script>

<template>
	<section class="py-5">
		<div class="container-fluid d-flex flex-sm-wrap flex-lg-nowrap align-items-center justify-content-center">
			<div class="row">
				<img class="col-xl-6" src="/img/io.png" alt="ADA">
				<div
					class="col-xl-6 d-flex align-items-sm-center align-items-xl-start flex-column justify-content-center px-md-1 px-xl-5 py-md-5 py-xl-0">
					<a class="my-btn-about" href="#">ABOUT ME</a>
					<h1 class="pt-4 developer">Developer</h1>
					<h1 class="pt-4 designer">Designer</h1>
					<p class="pt-2 text-sm-center text-lg-start">Sono Gabriel! Appassionato di tecnologia, sono un
						giovane
						professionista con una
						solida
						formazione nel campo
						della <span><b>grafica pubblicitaria</b></span> e un interesse sempre crescente nello
						<span><b>sviluppo
								web.</b></span>
					</p>
				</div>
			</div>

		</div>

		<div class="container pt-sm-5">
			<div class="d-flex justify-content-center align-item-center py-5">
				<i class="fa-solid fa-code"></i>
				<h1 class="ps-2">Full Stack Web Developer</h1>
			</div>
			<div class="row py-5">
				<div class="col-xl-6 line_right pe-lg-0 pe-xl-5">
					<div class="d-flex align-item-center">
						<i class="my_color_purple fa-solid fa-briefcase"></i>
						<h2 class="my_color_purple fw-bold ps-3">ESPERIENZE</h2>
					</div>
					<div v-for="element in exp">
						<h4 class="fw-bold pt-4">{{ element.title }}</h4>
						<p class="pt-3">{{ element.description }}</p>
					</div>
				</div>
				<div class="col-xl-6 ps-lg-0 ps-xl-5 pt-xl-0 pt-sm-5">
					<div class="d-flex align-item-center">
						<i class="my_color_purple fa-solid fa-graduation-cap"></i>
						<h2 class="my_color_purple fw-bold ps-2">FORMAZIONE</h2>
					</div>
					<div v-for="element in education">
						<h4 class="fw-bold pt-4">{{ element.title }}</h4>
						<p class="pt-3">{{ element.description }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
section {
	color: white;
}

.my-btn-about {
	text-decoration: none;
	width: 120px;
	text-align: center;
	padding: 8px;
	border-radius: 15px;
	cursor: unset;
}

p {
	color: rgba(211, 211, 211, 0.678);
}

span {
	color: white;
}

i {
	font-size: 2rem
}

.fa-code {
	font-size: 2.5rem
}

.designer {
	display: none;
}

.developer:hover {
	display: none;
	animation-name: example;
	animation-duration: 4s
}

.line_right {
	border-right: 1px solid white;
}

@media screen and (max-width: 768px) {
	.vh-100 {
		min-height: 200px;
	}

	.px-10 {
		padding: 1rem 1rem;
	}

	.pt-4 {
		padding-top: 1rem;
	}

	.pt-10 {
		margin-top: 1rem;
	}
}

@media screen and (max-width: 1200px) {
	.line_right {
		border-right: none;
	}
}
</style>
