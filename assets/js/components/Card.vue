<template>
  <div>
    <div
      class="p-24 flex flex-wrap items-center justify-center"
    >
      <div
        class="flex-shrink-0 m-6 relative overflow-hidden bg-red-arm rounded-lg max-w-xs shadow-lg"
        v-for="(skil, index) in skils.skilArm"
        :key="index"
      >
        <div class="relative text-white px-6 pb-6 mt-6">
          <div class="flex justify-center">
            <span class="block bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">{{ skil }}</span>
          </div>
        </div>
      </div>
      <div
        class="flex-shrink-0 m-6 relative overflow-hidden bg-yellow-abs rounded-lg max-w-xs shadow-lg"
        v-for="(skil, index) in skils.skilAbs"
        :key="index"
      >
        <div class="relative text-white px-6 pb-6 mt-6">
          <div class="flex justify-center">
            <span class="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">{{ skil }}</span>
          </div>
        </div>
      </div>
      <div
        class="flex-shrink-0 m-6 relative overflow-hidden bg-purple-foot rounded-lg max-w-xs shadow-lg"
        v-for="(skil, index) in skils.skilFoot"
        :key="index"
      >
        <div class="relative text-white px-6 pb-6 mt-6">
          <div class="flex justify-center">
            <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">{{ skil }}</span>
          </div>
        </div>
      </div>
      <div
        class="flex-shrink-0 m-6 relative overflow-hidden bg-green-yoga rounded-lg max-w-xs shadow-lg"
        v-for="(skil, index) in skils.skilYoga"
        :key="index"
      >
        <div class="relative text-white px-6 pb-6 mt-6">
          <div class="flex justify-center">
            <span class="block bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">{{ skil }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createComponent, reactive, computed, watch, onMounted } from '@vue/composition-api'
import data from '../data/index.json'
import axios from 'axios'
export default createComponent({
  setup () {
    const state = reactive({
      greet: 'hello',
      skilArm: data[0].skil.arm
    })

    watch(() => {

    })

    computed(() => {

    })
    const skils = computed(() => {
      const skilArm = data[0].skil.arm
      const skilFoot = data[0].skil.foot
      const skilAbs = data[0].skil.abs
      const skilYoga = data[0].skil.yoga
      return (
        { skilArm, skilFoot, skilAbs, skilYoga }
      )
    })
    async function getdata () {
      const data = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.MIX_TMDB_KEY}&language=ja-JA`)
      const results = data.data.results
      return results
    }
    onMounted(() => {
      getdata()
    })

    return {
      state,
      skils
    }
  }
})
</script>

<style scoped>
.w-pxcard{
  max-width: 300px;
  width: 33.33333%;
}
</style>
