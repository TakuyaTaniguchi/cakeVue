<template>
  <div class="home">
    <Search
      :search="state.search"
      @search="handleSearch"
    />
    <p class="App-intro">
      Sharing a few of our favourite movies
    </p>
    <div>
      <Movie
        v-for="movie in state.movies"
        :movie="movie"
        :key="movie.id"
      />
    </div>
  </div>
</template>

<script>
import { reactive, watch, onMounted } from '@vue/composition-api'
import Search from '../components/Search.vue'
import Movie from '../components/Movie.vue'
export default {
  components: {
    Search,
    Movie
  },
  setup () {
    const state = reactive({
      search: 'Joker',
      loading: true,
      movies: [],
      errorMessage: null,
      pagination: {
        currentPage: 0
      }
    })
    onMounted(() => {
      setTimeout(() => {
        console.log(state.pagination.currentPage)
      }, 4000)
    })

    watch(() => {
      // const MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.MIX_TMDB_KEY}&language=ja-JA`
      const MOVIE_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MIX_TMDB_KEY}&query=${state.search}&language=ja-JA`
      fetch(MOVIE_API_URL)
        .then(response => response.json())
        .then(jsonResponse => {
          console.dir(jsonResponse)
          state.pagination.currentPage = jsonResponse.page
          state.movies = jsonResponse.results
          state.loading = false
        })
    })
    return {
      state,
      handleSearch (searchTerm) {
        state.loading = true
        state.search = searchTerm
      }
    }
  }
}
</script>
<style scoped>
#id{
  color: red;
}
</style>
