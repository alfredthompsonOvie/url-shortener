<template>
	<section class="services">
		<AppShortener />
		<div class="services__info">
			<div class="services__info__description js-infoHeading">
				<h2 class="heading">Advanced Statistics</h2>
				<p class="text text--services">
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</div>
			<div class="service__card">
				<section
					class="card"
					v-for="serviceCard in serviceCards"
					:key="serviceCard.heading"
				>
					<div class="card__imgContainer">
						<img
							:src="`${getImageUrl(serviceCard.image)}`"
							:alt="serviceCard.alt"
						/>
					</div>
					<div class="card__content">
						<h1 class="heading">{{ serviceCard.heading }}</h1>
						<p class="description">{{ serviceCard.content }}.</p>
					</div>
				</section>
			</div>
		</div>
	</section>
</template>

<script setup>
import AppShortener from "./AppShortener.vue";
import { ref } from "vue";

const serviceCards = ref([
	{
		image: "icon-brand-recognition.svg",
		alt: "Boost your brand recognition with each click",
		heading: "Brand Recognition",
		content:
			"Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
	},
	{
		image: "icon-detailed-records.svg",
		alt: "detailed records, Gain insights into who is clicking your links",
		heading: "Detailed Records",
		content:
			"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
	},
	{
		image: "icon-fully-customizable.svg",
		alt: "it's fully customizable",
		heading: "Fully Customizable",
		content:
			"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
	},
]);
function getImageUrl(name) {
	return new URL(`/src/assets/images/${name}`, import.meta.url).href;
}
</script>

<style>
.card__content h1 {
	font-size: var(--fs);
}
</style>
