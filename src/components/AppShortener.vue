<template>
	<section class="services__urlShortener">
		<form class="form" @submit="onSubmit">
			<section class="form__group" :class="{ 'form__group--err': error }">
				<label for="url"></label>
				<input
					type="url"
					name="url"
					id="url"
					class="form__control urlInput"
					:class="{ inputError: errors.url }"
					placeholder="Shorten a link here..."
					v-model="url"
				/>
				<p class="errorMsg" v-if="errors.url">{{ errors.url }}</p>
			</section>
			<p class="errorMsg errNtw" v-if="error">{{ error }}</p>
			<button class="cta cta--submit form__control" v-if="!isPending">
				Shorten It!
			</button>
			<button class="cta cta--submit form__control" disabled v-else>
				<span class="loader"></span>
			</button>
		</form>

		<section class="output" v-if="links.length">
			<ShortenedLink v-for="link in links" :key="link.id" :link="link" />
		</section>
	</section>
</template>

<script setup>
import ShortenedLink from "./ShortenedLink.vue";
import { useField, useForm } from "vee-validate";
import { object, string } from "yup";
import { v4 as uuidv4 } from "uuid";
import { ref, watch, onMounted } from "vue";

const maxLength = ref(30);
const links = ref([]);
const error = ref(null);
const isPending = ref(false);

const schema = object({
	url: string()
		.required("Please add a link")
		.url("must start with http:// or https://"),
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
		const checkIfLinkExist = links.value.some((list) => list.link === link);
		if (checkIfLinkExist) {
			resetForm();
			throw new Error("Link already exist");
		}

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

		isPending.value = false;
		resetForm();
	} catch (err) {
		error.value = err.message;
		isPending.value = false;
	}
});

watch(
	links,
	(newVal) => {
		console.log("newVal", newVal);
		localStorage.setItem("link", JSON.stringify(newVal));
	},
	{ deep: true }
);
onMounted(() => (links.value = JSON.parse(localStorage.getItem("link")) || []));

</script>
<style scoped>
button {
	display: block;
}
.loader {
	width: 14px;
	height: 14px;
	border: 1px solid;
	border-top: 2px solid var(--DarkViolet);
	display: inline-block;
	border-radius: 50%;
	animation: spin infinite linear 1s;
}
@keyframes spin {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
.errNtw {
	position: absolute;
	top: 5.8em;
}
.form__group--err {
	margin-bottom: 1em;
	margin-bottom: 2.5em;
}
input.inputError {
	border: 2px solid var(--Red);
}
input.inputError::placeholder {
	color: var(--Red);
}
button:disabled {
	cursor: not-allowed;
	opacity: 0.7;
}
@media (min-width: 570px) {
	.form__group--err {
		margin-bottom: 1em;
	}
}
</style>
