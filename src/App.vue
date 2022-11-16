<template>
  
  <TheNavigation />

	<router-view />

  <TheFooter />
</template>

<script>
import TheNavigation from './components/TheNavigation.vue';
import TheFooter from './components/TheFooter.vue';
export default {
	name: "App",
  components: {
    TheNavigation,
    TheFooter
  },
};
</script>

<style scoped></style>
