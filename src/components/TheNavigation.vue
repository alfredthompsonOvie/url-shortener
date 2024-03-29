<template>
	<header>
		<nav class="nav__bar">
			<div class="branding">
				<router-link to="/">
					<img
						src="@/assets/images/logo.svg"
						alt="site's logo"
						class="branding__img"
					/>
				</router-link>
			</div>

			<!-- mobile menu -->
			<div 
			class="hamburger" 
			@click.prevent="menu = !menu" 
			v-if="isMobile"
			>
				<div class="top__bar bar"></div>
				<div class="middle__bar bar"></div>
				<div class="last__bar bar"></div>
			</div>

			<Transition 
			:css="false" 
			@enter="onEnter"
			@leave="onLeave"
			>
				<ul class="nav__list--mobile" v-if="menu">
					<li class="nav__item--mobile">
						<router-link :to="{name: ''}" class="nav__link--mobile">Features</router-link>
					</li>
					<li class="nav__item--mobile">
						<router-link :to="{name: ''}" class="nav__link--mobile">Pricing</router-link>
					</li>
					<li class="nav__item--mobile">
						<router-link :to="{name: ''}" class="nav__link--mobile">Resources</router-link>
					</li>
					<li class="nav__item--mobile nav__item--login">
						<router-link :to="{name: ''}" class="nav__link--mobile">Login</router-link>
					</li>
					<li class="nav__item--mobile">
						<router-link :to="{name: ''}" class="nav__link--mobile cta">Sign Up</router-link>
					</li>
				</ul>
			</Transition>

			<!-- desktop menu -->

			<ul class="nav__list" v-if="!isMobile">
				<li class="nav__item">
					<router-link :to="{name: '' }" class="nav__link">Features</router-link>
				</li>
				<li class="nav__item">
					<router-link :to="{name: '' }" class="nav__link">Pricing</router-link>
				</li>
				<li class="nav__item">
					<router-link :to="{name: '' }" class="nav__link">Resources</router-link>
				</li>
				<li class="nav__item nav__item--login">
					<router-link :to="{name: '' }" class="nav__link">Login</router-link>
				</li>
				<li class="nav__item">
					<router-link :to="{name: '' }" class="nav__link cta">Sign Up</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const menu = ref(null);
const isMobile = ref(null);
const windowWidth = ref(null);
const checkScreen = () => {
	windowWidth.value = window.innerWidth;
	if (windowWidth.value < 992) {
		menu.value = false;
		isMobile.value = true;
		return;
	}
	menu.value = false;
	isMobile.value = false;
	return;
};
onMounted(() => {
	checkScreen();
	window.addEventListener("resize", checkScreen);

});
const onEnter = (el, done) => {
	const tl = gsap.timeline();
	const li = el.children;

	tl.from(el, {
		y: 15,
		autoAlpha: 0.01,
	}).from(li, {
		autoAlpha: 0.01,
		y: 10,
		stagger: 0.2,
		onComplete: () => {
			gsap.from(el, {
				clearProps: "all"
			})
			done()
		},
	});
};

const onLeave = (el, done) => {
	const tl = gsap.timeline();

	tl.to(el, {
		x: 75,
		autoAlpha: 0.01,
		onComplete: done,
	})
};

</script>

<style scoped>
header {
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	grid-template-rows: 6em;
	align-items: center;
}
.nav__bar {
	grid-column: 2;
	grid-row: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 1.5em 0;
}
.hamburger {
	width: 1.6em;
	height: 1.2em;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	cursor: pointer;
}
.bar {
	width: inherit;
	height: 0.2em;
	background-color: var(--GrayishViolet);
}
.nav__list--mobile {
	position: absolute;
	top: 5em;
	left: 0;
	right: 0;
	background-color: var(--DarkViolet);
	text-align: center;
	border-radius: 8px;
	padding: 2em 1em;
	z-index: 99;
}
.nav__link--mobile {
	display: block;
	padding: 0.6em 0;
	color: #fff;
	font-weight: var(--fw-bold);
}
.nav__item--mobile + .nav__item--mobile {
	margin-top: 0.6em;
}
.nav__item--mobile:first-child a {
	padding-top: 0;
}
.nav__item--mobile:nth-of-type(4) {
	border-top: 1px solid var(--GrayishViolet);
	padding: 1em 0 0.6em;
	margin-top: 1.2em;
}
.nav__link--mobile.cta {
	background-color: var(--Cyan);
	border-radius: 5em;
}
/* larger screen size */
@media (min-width: 992px) {
	.nav__bar {
		justify-content: flex-start;
		align-items: center;
		gap: 1em;
	}
	.branding__img {
		padding-top: 0.6em;
	}
	.nav__list {
		display: flex;
		align-items: center;
		gap: 1em;
		width: 100%;
	}
	.nav__link {
		padding: 0em;
		color: var(--GrayishViolet);
		font-size: 1rem;
		font-weight: var(--fw-md);
	}
	.nav__link:hover {
		color: var(--DarkViolet);

	}
	.cta.nav__link:hover {
		color: #fff;

	}
	.nav__item:nth-of-type(4) {
		margin-left: auto;
	}
}
</style>
