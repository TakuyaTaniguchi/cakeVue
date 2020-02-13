<template>
  <div class="home">
    <div class="py-4">
      <div class="px-4">
        <div class="w-full width-card md:mx-2 mb-4 md:mb-0">
          <Search
            :search="state.search"
            @search="handleSearch"
          />
        </div>
      </div>
    </div>
    <div>
      <main class="py-4">
        <div class="px-4">
          <div class="block md:flex flex-wrap flex-start md:-mx-2">
            <Movie
              v-for="movie in state.movies"
              :movie="movie"
              :key="movie.id"
            />
          </div>
          <div :class="[state.pagination.currentPage === state.pagination.total_pages ? 'hidden' : 'block','relative w-full py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200']">
            <button
              class="w-full page-link"
              @click="loadMore(state.pagination.currentPage)"
            >
              MORE
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { reactive, watch, onMounted, onUpdated } from '@vue/composition-api'
import Search from '../components/Search.vue'
import Movie from '../components/Movie.vue'
import { excludeNull } from '../utility/removeNull.js'

const useMore = (state) => {
  const loadMore = () => {
    ++state.pagination.currentPage
    const MOVIE_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MIX_TMDB_KEY}&query=${state.search}&page=${state.pagination.currentPage}&language=ja-JA`
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        const data = jsonResponse.results.filter(excludeNull)
        console.log(data)
        state.movies = state.movies.concat(data)
      })
  }
  return {
    loadMore
  }
}

export default {
  components: {
    Search,
    Movie
  },
  setup () {
    const state = reactive({
      search: 'Disney',
      loading: false,
      movies: [],
      errorMessage: null,
      counter: 0,
      pagination: {
        currentPage: 1,
        total_pages: 3
      }
    })
    onMounted(() => {
      setTimeout(() => {
      }, 4000)
    })
    onUpdated(() => {
      console.log('update')
    })

    const { loadMore } = useMore(state)

    watch(() => {
      // const MOVIE_API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.MIX_TMDB_KEY}&language=ja-JA`
      const MOVIE_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MIX_TMDB_KEY}&query=${state.search}&language=ja-JA`
      fetch(MOVIE_API_URL)
        .then(response => response.json())
        .then(jsonResponse => {
          console.dir(jsonResponse, 'wathch')
          // resultの中にNULLがある場合がある。
          state.pagination.currentPage = jsonResponse.page
          state.pagination.total_pages = jsonResponse.total_pages
          const data = jsonResponse.results.filter(excludeNull)
          state.movies = data
          state.loading = false
        }).catch(error => console.error(error))
    })

    return {
      state,
      loadMore,
      handleSearch (searchTerm) {
        state.loading = true
        state.search = searchTerm
      }
    }
  }
}
</script>
