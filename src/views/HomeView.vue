<template>
	<main>
		<section class="hero">
			<div class="hero__illustration"></div>
			<div class="hero__content js-hero__content">
				<h1 class="title js__hero--heading">More than just shorter links</h1>
				<p class="text text--hero js__hero--text">
					Build your brand’s recognition and get detailed insights on how your
					links are performing.
				</p>
				<a href="#" class="cta">Get Started</a>
			</div>
		</section>
		<AppServices />
		<section class="subscribe">
			<div class="content js-subscribe">
				<h2>Boost your links today</h2>
				<a href="#" class="cta">Get Started</a>
			</div>
		</section>
	</main>
</template>

<script>
import AppServices from '../components/AppServices.vue';
export default {
	name: "HomeView",
	components: {
		AppServices
	},
};
</script>

<style></style>
