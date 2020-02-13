<template>
  <form class="border-2 border-teal-600 inline-block">
    <input
      type="text"
      placeholder="映画名を検索しよう。"
      :value="movieTitle"
      @keyup="handleChange"
    >
    <button
      @click="handleSubmit"
      type="submit"
      value="SEARCH"
    >
      SEARCH
    </button>
  </form>
</template>

<script>

import { ref } from '@vue/composition-api'
export default {
  name: 'Search',
  setup ({ search }, { emit }) {
    const movieTitle = ref(search)
    return {
      movieTitle,
      handleSubmit (event) {
        event.preventDefault()
        emit('search', movieTitle.value)
      },
      handleChange (event) {
        movieTitle.value = event.target.value
      }
    }
  }
}
</script>
