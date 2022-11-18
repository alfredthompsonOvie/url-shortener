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
		</div>
	</div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
export default {
	name: "AppShortener",

	data() {
		return {
      maxLength: 30,
      links: [],

      schema: {
        url: "required|min:8|url"
      }
		};
  },
  methods: {
    async handleSubmit(values) {
      let url = values.url

      // check for duplicate url
      let linkCheck = this.links.filter(list => list.link === url);
      if (!linkCheck.length) {
        this.getLink(url);
      } else {
        alert("link already exist");
      }
      return;
    },
    async getLink(link) {
      let response = await fetch(`https://api.shrtco.de/v2/shorten?url=${link}`)
      let data = await response.json();

      const shortenOriginalUrl = link.length <= this.maxLength ? link : `${link.substring(0, this.maxLength)}...`;

      let linkData = {
        id: uuidv4(),
        link,
        shortenOriginalUrl,
        shortenLink: data.result.full_short_link
      }
      this.links.unshift(linkData)
    }
  },
  watch: {
    links: {
      handler(newVal) {
        localStorage.setItem("link", JSON.stringify(newVal))
      },
      deep: true,
    }
  },
  mounted() {
    this.links = JSON.parse(localStorage.getItem("link")) || [];
  }
};
</script>
