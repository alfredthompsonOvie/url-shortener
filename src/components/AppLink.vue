<template>
  <a 
  v-bind="$attrs"
  :href="to" 
  target="_blank"
  rel="noopener"
  v-if="isExternalLink"
  ><slot /></a>

  <router-link
    v-else
    v-bind="$props"
    custom
    v-slot="{ href, navigate }"
  >
    <a
      v-bind="$attrs"
      :href="href"
      @click="navigate"
    >
      <slot />
    </a>
  </router-link>

</template>

<script setup>
import { RouterLink  } from "vue-router"
import { computed } from "vue"
const props = defineProps({
  ...RouterLink.props,
})
const isExternalLink = computed(() => {
  return typeof props.to === 'string' && props.to.startsWith('http')
})
</script>

<style lang="scss" scoped>

</style>