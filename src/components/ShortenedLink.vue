<template>
	<section class="output__result">
		<!-- shortened original link -->
		<p class="inputUrl">{{ link.shortenOriginalUrl }}</p>
		<!-- link from api -->
		<section class="result__output">
			<p class="shortenUrl">{{ link.shortenLink }}</p>
			<button 
			class="btn cta"
			:class="{copied}"
			@click.prevent="copyLink"
			>
			<span v-if="copied">Copied</span>
			<span v-else>Copy</span>
		</button>
		</section>
	</section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  link: {
    type: Object,
    required: true
  }
})
const copied = ref(false)
const copyLink = () => {
	navigator.clipboard.writeText(props.link.shortenLink);
	copied.value = true
}
</script>

<style  scoped>
.copied {
	background-color: var(--DarkViolet);
}
</style>
