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
          <div class="block md:flex flex-wrap justify-between md:-mx-2">
            <Movie
              v-for="movie in state.movies"
              :movie="movie"
              :key="movie.id"
            />
          </div>
          <div>
            <div>
              <ul class="flex pl-0 list-none rounded my-2">
                <li :class="[state.pagination.currentPage === 1 ? 'active' : '','relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-gray-200']">
                  <button
                    class="page-link"
                    @click="loadMore(state.pagination.currentPage + 1)"
                  >
                    MORE
                  </button>
                </li>
              </ul>
            </div>
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

const useMore = (state) => {
  const loadMore = (page) => {
    state.pagination.currentPage++
    const MOVIE_API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MIX_TMDB_KEY}&query=${state.search}&page=${state.pagination.currentPage}&language=ja-JA`
    fetch(MOVIE_API_URL)
      .then(response => response.json())
      .then(jsonResponse => {
        console.dir(jsonResponse)
        // resultの中にNULLがある場合がある。
        state.movies = state.movies.concat(jsonResponse.results)
        state.loading = false
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
      search: 'Joker',
      loading: true,
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
        console.log(state.pagination.currentPage)
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
          console.dir(jsonResponse)
          // resultの中にNULLがある場合がある。
          state.pagination.currentPage = jsonResponse.page
          state.pagination.total_pages = jsonResponse.total_pages
          state.movies = jsonResponse.results
          state.loading = false
        })
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
