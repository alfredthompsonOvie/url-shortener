<template>
	<main>
		<section class="hero">
			<!-- <div class="hero__illustration"></div> -->
			<section class="hero__graphics">
				<img src="@/assets/images/illustration-working.svg" alt="">
			</section>
			<section class="hero__content js-hero__content">
				<h1 class="title js__hero--heading">
					<span class="heading--js">More than just</span> <span class="heading--js">shorter links</span>
				</h1>
				<p class="text text--hero js__hero--text">
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</p>
				<!-- <a href="#" class="cta">Get Started</a> -->
				<router-link :to="{name: ''}" class="cta">Get Started</router-link>
			</section>
		</section>
		<AppServices />
		<section class="subscribe">
			<div class="content js-subscribe">
				<h1 class="subscribe__heading">Boost your links today</h1>
				<!-- <a href="#" class="cta">Get Started</a> -->
				<router-link :to="{name: ''}" class="cta">Get Started</router-link>
			</div>
		</section>
	</main>
</template>

<script setup>
import AppServices from '../components/AppServices.vue';
import { onMounted } from "vue";
onMounted(() => {
	console.log("HomeView mounted");
})
// export default {
// 	name: "HomeView",
// 	components: {
// 		AppServices
// 	},
// };
</script>

<style></style>
