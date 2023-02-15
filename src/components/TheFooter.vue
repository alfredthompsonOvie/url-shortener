<template>
	<footer class="footer">
		<section class="footer__contents">
			<router-link 
			:to="{name: 'home'}"
			class="branding--footer"
			>
				<img
					src="@/assets/images/logo.svg"
					alt=""
					class="branding__img--footer"
				/>
			</router-link>
			<ul class="footer__nav__list">
				<li class="nav__item--footer">
					<router-link :to="{name: ''}" class="nav__link--footer nav__link__header">Features</router-link>
				</li>
				<li class="nav__item--footer">
					<router-link :to="{name: ''}" class="nav__link--footer"> Link Shortening </router-link>
				</li>
				<li class="nav__item--footer">
					<router-link :to="{name: ''}" class="nav__link--footer">Branded Links</router-link>
				</li>
				<li class="nav__item--footer">
					<router-link :to="{name: ''}" class="nav__link--footer">Analytics</router-link>
				</li>
			</ul>
			<ul class="footer__nav__list">
				<li class="nav__item--footer">
					<router-link :to="{name: ''}" class="nav__link--footer nav__link__header">Resources</router-link>
				</li>
				<li class="nav__item--footer">
					<router-link :to="{name: ''}" class="nav__link--footer">Blog</router-link>
				</li>
				<li class="nav__item--footer">
					<router-link :to="{name: ''}" class="nav__link--footer">Developers</router-link>
				</li>
				<li class="nav__item--footer">
					<router-link :to="{name: ''}" class="nav__link--footer">Support</router-link>
				</li>
			</ul>

			<ul class="footer__nav__list">
				<li class="nav__item--footer">
					<router-link :to="{name: ''}" class="nav__link--footer nav__link__header">Company</router-link>
				</li>
				<li class="nav__item--footer">
					<router-link :to="{name: ''}" class="nav__link--footer">About </router-link>
				</li>
				<li class="nav__item--footer">
					<router-link :to="{name: ''}" class="nav__link--footer">Our Team </router-link>
				</li>
				<li class="nav__item--footer">
					<router-link :to="{name: ''}" class="nav__link--footer">Careers</router-link>
				</li>
				<li class="nav__item--footer">
					<router-link :to="{name: ''}" class="nav__link--footer">Contact</router-link>
				</li>
			</ul>
			<ul class="social__links">
				<li>
					<router-link :to="{name: ''}"><img src="@/assets/images/icon-facebook.svg" alt="" /></router-link>
				</li>
				<li>
					<router-link :to="{name: ''}"><img src="@/assets/images/icon-twitter.svg" alt="" /></router-link>
				</li>
				<li>
					<router-link :to="{name: ''}"
						><img src="@/assets/images/icon-pinterest.svg" alt=""
					/></router-link>
				</li>
				<li>
					<router-link :to="{name: ''}"
						><img src="@/assets/images/icon-instagram.svg" alt=""
					/></router-link>
				</li>
			</ul>
		</section>
		<div class="attribution">
			<p>
				Challenge by
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
					>Frontend Mentor</a
				>. Coded by <a href="#">Your Name Here</a>.
			</p>
		</div>
	</footer>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
	console.log("footer mounted");
})
</script>
