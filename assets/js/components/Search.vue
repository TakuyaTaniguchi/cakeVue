<template>
  <form class="search">
    <input
      type="text"
      :value="movieTitle"
      @keyup="handleChange"
    >
    <input
      @click="handleSubmit"
      type="submit"
      value="SEARCH"
    >
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
        console.log('submit')
        emit('search', movieTitle.value)
      },
      handleChange (event) {
        console.log('cahnge')
        movieTitle.value = event.target.value
      }
    }
  }
}
</script>
