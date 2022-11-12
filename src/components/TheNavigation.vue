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
				@click.prevent="mobileMenu = !mobileMenu"
				v-if="mobile"
			>
				<div class="top__bar bar"></div>
				<div class="middle__bar bar"></div>
				<div class="last__bar bar"></div>
			</div>

			<ul class="nav__list--mobile" v-if="mobileMenu">
				<li class="nav__item--mobile">
					<a href="#" class="nav__link--mobile">Features</a>
				</li>
				<li class="nav__item--mobile">
					<a href="#" class="nav__link--mobile">Pricing</a>
				</li>
				<li class="nav__item--mobile">
					<a href="#" class="nav__link--mobile">Resources</a>
				</li>
				<li class="nav__item--mobile nav__item--login">
					<a href="#" class="nav__link--mobile">Login</a>
				</li>
				<li class="nav__item--mobile">
					<a href="#" class="nav__link--mobile cta">Sign Up</a>
				</li>
			</ul>

			<!-- desktop menu -->

			<ul class="nav__list" v-if="!mobile">
				<li class="nav__item"><a href="#" class="nav__link">Features</a></li>
				<li class="nav__item"><a href="#" class="nav__link">Pricing</a></li>
				<li class="nav__item"><a href="#" class="nav__link">Resources</a></li>
				<li class="nav__item nav__item--login">
					<a href="#" class="nav__link">Login</a>
				</li>
				<li class="nav__item"><a href="#" class="nav__link cta">Sign Up</a></li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: "TheNavigation",
	data() {
		return {
			mobileMenu: null,
			mobile: null,
			windowWidth: null,
		};
	},
	created() {
		this.checkScreen();
		window.addEventListener("resize", this.checkScreen);
	},
	methods: {
		checkScreen() {
			this.windowWidth = window.innerWidth;
			if (this.windowWidth < 700) {
				this.mobile = true;
				this.mobileMenu = false;
				return;
			}
			this.mobile = false;
			this.mobileMenu = false;
			return;
		},
	},
};
</script>

<style>
header {
	display: grid;
	grid-template-columns: 1fr 10fr 1fr;
	grid-template-rows: 4em;
	/* border: 1px solid; */
	align-items: center;
}
.nav__bar {
	grid-column: 2;
	grid-row: 1;

	display: flex;
	justify-content: space-between;
	align-items: center;
	align-content: center;
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
	padding: 0.7em 1em;
}
.nav__link--mobile {
	display: block;
	padding: 0.7em 0;
	color: #fff;
}
.nav__item--mobile:nth-of-type(4) {
	border-top: 1px solid var(--GrayishViolet);
}
.nav__link--mobile.cta {
	background-color: var(--Cyan);
	border-radius: 5em;
}
/* larger screen size */
@media (min-width: 700px) {
	.nav__bar {
		justify-content: flex-start;
		gap: 1em;
		/* border: 1px solid red; */

	}
	.nav__list {
		display: flex;
		gap: 1em;
		/* border: 1px solid red; */
		width: 100%;
	}
	.nav__link {
	padding: 0em;

	color: var(--GrayishViolet);
}
.nav__item:nth-of-type(4) {
	margin-left: auto;
}
}
</style>
