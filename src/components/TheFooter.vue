<template>
	<footer class="footer">
		<section class="footer__contents">
			<router-link 
			:to="{name: 'home'}"
			class="branding--footer"
			>
				<img
					src="@/assets/images/logo.svg"
					alt="go to homepage"
					class="branding__img--footer"
				/>
			</router-link>
			<ul class="footer__nav__list">
				<li class="nav__item--footer nav__link__header">
					Features
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
				<li class="nav__item--footer nav__link__header">
					Resources
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
				<li class="nav__item--footer nav__link__header">
					Company
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
					<AppLink to="https://www.facebook.com"><img src="@/assets/images/icon-facebook.svg" alt="like our facebook page" /></AppLink>
				</li>
				<li>
					<AppLink to="https://www.twitter.com"><img src="@/assets/images/icon-twitter.svg" alt="follow us on twitter" /></AppLink>
				</li>
				<li>
					<AppLink to="https://www.pinterest.com"
						><img src="@/assets/images/icon-pinterest.svg" alt="a link to pinterest"
					/></AppLink>
				</li>
				<li>
					<AppLink to="https://www.instagram.com"
						><img src="@/assets/images/icon-instagram.svg" alt="follow us on instagram"
					/></AppLink>
				</li>
			</ul>
		</section>
		<div class="attribution">
			<p>
				Challenge by
				<AppLink to="https://www.frontendmentor.io?ref=challenge"
					>Frontend Mentor</AppLink
				>. Coded by <AppLink to="https://www.linkedin.com/in/alfredthompsonovie/">Alfred Thompson Ovie</AppLink>.
			</p>
		</div>
	</footer>
</template>

<script setup>
import { onMounted } from 'vue';
import AppLink from './AppLink.vue';

onMounted(() => {
	console.log("footer mounted");
})
</script>
