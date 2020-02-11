<template>
  <div>
    <h2>{{ movie.title }}</h2>
    <div>
      <img
        width="200"
        :alt="altText"
        :src="[
          movie.poster_path === null ? './img/dummy.jpg' : `https://image.tmdb.org/t/p/w780/${movie.poster_path}`
        ]"
      >
    </div>
    <p>{{ movie.release_date }}</p>
  </div>
</template>

<script>
import { computed } from '@vue/composition-api'
export default {
  name: 'Movie',
  props: ['movie'],
  setup ({ movie }) {
    const altText = computed(() => `The movie titled: ${movie.Title}`)
    return { altText }
  }
}
</script>
