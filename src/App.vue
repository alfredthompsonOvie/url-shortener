<template>
	<TheNavigation />

	<router-view />

	<TheFooter />
</template>

<script setup>
import TheNavigation from "./components/TheNavigation.vue";
import TheFooter from "./components/TheFooter.vue";
import { gsap } from "gsap";
import { onMounted, onUpdated } from "vue";
onMounted(() => {
  console.log(" app mounted");
	const tl = gsap.timeline();

  tl
  //   .from([".branding", ".hamburger"], {
	// 	x: -20,
	// 	autoAlpha: 0.01,
  //   // ease: 'back.out',
  //   stagger: 0.2,
  //   // duration: 1
  // })
  //   .from(".nav__list > *", {
	// 	x: -10,
	// 	autoAlpha: 0.01,
	// 	rotate: "-10deg",
  //   stagger: 0.2,
	// })
  //   .from(".hero__illustration", {
	// 	x: -10,
	// 	autoAlpha: 0.01,
	// 	// rotate: "-10deg",
  //   stagger: 0.2,
	// })
  //   .from(".heading--js", {
	// 	y: -10,
	// 	autoAlpha: 0.01,
	// 	rotate: "-10deg",
  //   stagger: 0.2,
	// });
});
onUpdated(() => {
  console.log("onUpdated");
})

// USING OPTIONS API
// export default {
// 	name: "App",
//   components: {
//     TheNavigation,
//     TheFooter
//   },
// };
</script>

<style scoped></style>
