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
				<div class="card js-card">
					<div class="card__imgContainer">
						<img src="@/assets/images/icon-brand-recognition.svg" alt="" />
					</div>
					<div class="card__content">
						<h4 class="heading">Brand Recognition</h4>
						<p class="description">
							Boost your brand recognition with each click. Generic links don’t
							mean a thing. Branded links help instil confidence in your
							content.
						</p>
					</div>
				</div>
				<div class="card">
					<div class="card__imgContainer">
						<img src="@/assets/images/icon-detailed-records.svg" alt="" />
					</div>
					<div class="card__content">
						<h4 class="heading">Detailed Records</h4>
						<p class="description">
							Gain insights into who is clicking your links. Knowing when and
							where people engage with your content helps inform better
							decisions.
						</p>
					</div>
				</div>
				<div class="card">
					<div class="card__imgContainer">
						<img src="@/assets/images/icon-fully-customizable.svg" alt="" />
					</div>
					<div class="card__content">
						<h4 class="heading">Fully Customizable</h4>
						<p class="description">
							Improve brand awareness and content discoverability through
							customizable links, supercharging audience engagement.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import AppShortener from './AppShortener.vue';
export default {
	name: "AppServices",
	components: {
		AppShortener
	},

}
</script>

<style></style>
