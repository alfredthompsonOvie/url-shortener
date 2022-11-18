<template>
	<div class="services__urlShortener js-urlShortener">
		<vee-form 
    class="form js-form" 
    @submit="handleSubmit"
    :validation-schema="schema"
    >
			<div class="form__group">
				<label for="url"></label>
				<vee-field
					type="url"
					name="url"
					id="url"
					class="form__control urlInput"
					placeholder="Shorten a link here..."
					v-model.lazy="urlLink"
				/>
				<!-- <p class="errorMsg">Please add a link</p> -->
        <ErrorMessage name="url" class="errorMsg" />
			</div>
			<button class="cta cta--submit form__control">Shorten It!</button>
		</vee-form>
		<div class="output" v-if="links.length">
			<div class="output__result" v-for="link in links" :key="link.id">
				<!-- shortened original link -->
				<p class="inputUrl">{{ link.shortenOriginalUrl }}</p>
				<!-- link from api -->
				<div class="result__output">
					<p class="shortenUrl">{{ link.shortenLink }}</p>
					<button class="btn cta">Copy</button>
				</div>
			</div>

			<div class="output__result">
				<p class="inputUrl">https://www.frontendmentor.io</p>
				<div class="result__output">
					<p class="shortenUrl">https://rel.ink/K4IKyk</p>
					<button class="btn cta">Copy</button>
				</div>
			</div>

			<!-- <div class="output__result">
					<p class="inputUrl">https://www.twitter.com/frontendmentor</p>
					<div class="result__output">
						<p class="shortenUrl">https://rel.ink/gxOXp9</p>
						<button class="btn cta">Copy</button>
					</div>
				</div>
				<div class="output__result">
					<p class="inputUrl">
						https://www.linkedin.com/company/frontend-mentor
					</p>
					<div class="result__output">
						<p class="shortenUrl">https://rel.ink/gob3X9</p>
						<button class="btn cta">Copy</button>
					</div>
				</div> -->
			<!-- try code -->
		</div>
	</div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
	name: "AppShortener",

	data() {
		return {
      urlLink: "",
      maxLength: 30,
      links: [],

      schema: {
        url: "required|min:2|url"
      }
		};
  },
  methods: {
    async handleSubmit(values) {
      let link = values.url
      console.log(link);
      let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      let data = await response.json();
      console.log(data);
      console.log(data.result.short_link);
      console.log(data.result.full_short_link);
      console.log(data.result.original_link);

      const shortenOriginalUrl = link.length <= this.maxLength ? link : `${link.substring(0, this.maxLength)}...`;

      this.links.unshift({
        id: uuidv4(),
        link,
        shortenOriginalUrl,
        shortenLink: data.result.full_short_link
      })

    }
  }
};
</script>
