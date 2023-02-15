<template>
	<TheNavigation />

	<router-view />

	<TheFooter />
</template>

<script setup>
import TheNavigation from "./components/TheNavigation.vue";
import TheFooter from "./components/TheFooter.vue";
</script>

<style scoped></style>
