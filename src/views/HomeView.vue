<template>
	<div class="hero">
		<div class="hero__illustration"></div>
		<div class="hero__content js-hero__content">
			<h1 class="title js__hero--heading">More than just shorter links</h1>
			<p class="text text--hero js__hero--text">
				Build your brand’s recognition and get detailed insights on how your
				links are performing.
			</p>
			<a href="#" class="cta">Get Started</a>
		</div>
	</div>
	<section class="services">
		<div class="services__urlShortener js-urlShortener">
			<form action="#" class="form js-form">
				<div class="form__group">
					<label for="url"></label>
					<input
						type="url"
						name="url"
						id="url"
						class="form__control urlInput"
						placeholder="Shorten a link here..."
					/>
					<p class="errorMsg">Please add a link</p>
				</div>
				<button class="cta cta--submit form__control">Shorten It!</button>
			</form>
			<div class="output">
				<!-- <div class="output__result">
              <p class="inputUrl">https://www.frontendmentor.io</p>
              <div class="result__output">
                <p class="shortenUrl">https://rel.ink/K4IKyk</p>
                <button class="btn cta">Copy</button>
              </div>
            </div>
            <div class="output__result">
              <p class="inputUrl">https://www.twitter.com/frontendmentor</p>
              <div class="result__output">
                <p class="shortenUrl">https://rel.ink/gxOXp9</p>
                <button class="btn cta">Copy</button>
              </div>
            </div>
            <div class="output__result">
              <p class="inputUrl">https://www.linkedin.com/company/frontend-mentor</p>
              <div class="result__output">
                <p class="shortenUrl">https://rel.ink/gob3X9</p>
                <button class="btn cta">Copy</button>
              </div>
            </div> -->
				<!-- try code -->
			</div>
		</div>
		<div class="services__info">
			<div class="services__info__description js-infoHeading">
				<h2 class="heading">Advanced Statistics</h2>
				<p class="text text--services">
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</div>
			<div class="service__card">
				<div class="card js-card">
					<div class="card__imgContainer">
						<img src="@/assets/images/icon-brand-recognition.svg" alt="" />
					</div>
					<div class="card__content">
						<h4 class="heading">Brand Recognition</h4>
						<p class="description">
							Boost your brand recognition with each click. Generic links don’t
							mean a thing. Branded links help instil confidence in your
							content.
						</p>
					</div>
				</div>
				<div class="card">
					<div class="card__imgContainer">
						<img src="@/assets/images/icon-detailed-records.svg" alt="" />
					</div>
					<div class="card__content">
						<h4 class="heading">Detailed Records</h4>
						<p class="description">
							Gain insights into who is clicking your links. Knowing when and
							where people engage with your content helps inform better
							decisions.
						</p>
					</div>
				</div>
				<div class="card">
					<div class="card__imgContainer">
						<img src="@/assets/images/icon-fully-customizable.svg" alt="" />
					</div>
					<div class="card__content">
						<h4 class="heading">Fully Customizable</h4>
						<p class="description">
							Improve brand awareness and content discoverability through
							customizable links, supercharging audience engagement.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "HomeView",
};
</script>

<style></style>
