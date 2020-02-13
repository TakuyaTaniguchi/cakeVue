<template>
  <div class="w-full lg:w-1/3card md:mx-2 mb-4 md:mb-0">
    <div class="bg-white rounded-lg overflow-hidden shadow relative">
      <img
        class="h-56 w-full object-cover object-center"
        :alt="movie.title"
        :src="[
          movie.poster_path === null ? './img/dummy.jpg' : `https://image.tmdb.org/t/p/w780/${movie.poster_path}`
        ]"
      >
      <div class="p-4 relative h-auto md:h-40 lg:h-48">
        <a
          href="#"
          class="block text-blue-500 hover:text-blue-600 font-semibold mb-2 text-lg md:text-base lg:text-lg pr-6"
        >
          <h2>{{ movie.title }}</h2>
        </a>
        <div
          @click="checkFavorite"
          class="inline-block cursor-pointer"
        >
          <svg
            :class="['heart-icon',state.favorite ? '' : '_checkFavorite']"
            viewBox="0 0 24 24"
          >
            <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
          </svg>
        </div>
        <p class="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
          {{ movie.overview }}
        </p>
        <div class="relative mt-2 bottom-0 mb-4 md:hidden lg:block">
          <span
            class="inline border-b border-teal-600 py-1 px-2 text-xs lowercase text-gray-700"
          >おすすめ:{{ movie.vote_average }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from '@vue/composition-api'

export default {
  name: 'Movie',
  props: ['movie'],
  setup ({ movie }) {
    const state = reactive({
      favorite: true
    })
    const checkFavorite = () => {
      state.favorite = !state.favorite
    }
    const altText = computed(() => `The movie titled: ${movie.Title}`)
    return { state, altText, checkFavorite }
  }
}
</script>

<style lang="scss" scoped>
.like-button {
  position: absolute;
  top:20px;
  right: 20px;
}

.heart-icon {
  width: 24px;
  height: 24px;
  stroke: red;
  fill: none;
  &._checkFavorite {
    fill: red;
  }
}
</style>
