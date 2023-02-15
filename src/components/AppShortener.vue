<template>
	<div class="services__urlShortener js-urlShortener">
		<form 
		class="form js-form"
		
		@submit="onSubmit">
			<div 
			class="form__group"
			:class="{'form__group--err': error}"
			>
				<label for="url"></label>
				<input
					type="url"
					name="url"
					id="url"
					class="form__control urlInput"

					placeholder="Shorten a link here..."
					v-model="url"
				/>
				<p class="errorMsg" v-if="errors.url">{{ errors.url }}</p>
			</div>
			<p class="errorMsg errNtw" v-if="error">{{ error }} - please try again</p>
			<button class="cta cta--submit form__control" v-if="!isPending">Shorten It!</button>
			<button class="cta cta--submit form__control" disabled v-else >
				<span class="loader" ></span>
			</button>
		</form>
		<section class="output" v-if="links.length">
			<!-- <div class="output__result" v-for="link in links" :key="link.id">

        <p class="inputUrl">{{ link.shortenOriginalUrl }}</p>

				<div class="result__output">
					<p class="shortenUrl">{{ link.shortenLink }}</p>
					<button class="btn cta">Copy</button>
				</div>
			</div> -->

			<ShortenedLink v-for="link in links" :key="link.id" :link="link" />
		</section>
	</div>
</template>

<script setup>
import ShortenedLink from "./ShortenedLink.vue";
import { useField, useForm } from "vee-validate";
import { object, string } from "yup";
import { v4 as uuidv4 } from "uuid";
import { ref } from "vue";

const maxLength = ref(30);
const links = ref([]);
const error = ref(null)
const isPending = ref(false)

const schema = object({
	url: string().required().url("must start with http:// or https://"),
});

const { handleSubmit, errors, resetForm } = useForm({
	validationSchema: schema,
});
const { value: url } = useField("url");

const onSubmit = handleSubmit(async (values) => {
	let link = values.url;

	try { 
		error.value = null;
		isPending.value = true;

		let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`);
		let data = await response.json();
	
		const shortenOriginalUrl =
			link.length <= maxLength.value
				? link
				: `${link.substring(0, maxLength.value)}...`;
	
		let linkData = {
			id: uuidv4(),
			link,
			shortenOriginalUrl,
			shortenLink: data.result.full_short_link,
		};
		links.value.unshift(linkData);
	
		// setFieldValue("url", "");
		isPending.value = false;
		resetForm();
	} catch (err) {
		error.value = err.message;
		isPending.value = false;
	}

});
// export default {
// 	name: "AppShortener",
// 	components: {
// 		ShortenedLink,
// 	},
// 	data() {
// 		return {
// 			maxLength: 30,
// 			links: [],

// 			schema: {
// 				url: "required|min:8|url",
// 			},
// 		};
// 	},
// 	methods: {
// 		async handleSubmit(values) {
// 			let url = values.url;

// 			// check for duplicate url
// 			let linkCheck = this.links.filter((list) => list.link === url);
// 			if (!linkCheck.length) {
// 				this.getLink(url);
// 				values.url = "";
// 			} else {
// 				alert("link already exist");
// 			}
// 			return;
// 		},
// 		async getLink(link) {
// 			let response = await fetch(
// 				`https://api.shrtco.de/v2/shorten?url=${link}`
// 			);
// 			let data = await response.json();

// 			const shortenOriginalUrl =
// 				link.length <= this.maxLength
// 					? link
// 					: `${link.substring(0, this.maxLength)}...`;

// 			let linkData = {
// 				id: uuidv4(),
// 				link,
// 				shortenOriginalUrl,
// 				shortenLink: data.result.full_short_link,
// 			};
// 			this.links.unshift(linkData);
// 		},
// 	},
// 	watch: {
// 		links: {
// 			handler(newVal) {
// 				localStorage.setItem("link", JSON.stringify(newVal));
// 			},
// 			deep: true,
// 		},
// 	},
// 	mounted() {
// 		this.links = JSON.parse(localStorage.getItem("link")) || [];
// 	},
// };
</script>
<style>
.loader {
	width: 20px;
	height: 20px;
	border: 2px solid;
	border-top: 4px solid var(--DarkViolet);
	display: inline-block;
	border-radius: 50%;
	animation: spin infinite linear 1s;

}
@keyframes spin {
	from{
		transform: rotate(0deg);
	}
	to{
		transform: rotate(360deg);
	}
}
.errNtw {
	position: absolute;
	top: 5.8em;
}
.form__group--err {
	margin-bottom: 1em;
}
</style>