<template>
    <div class="flex max-w-5xl mx-auto justify-between flex-wrap">
        <div class="bg-yellow-300 text-center mb-4 w-pxcard">
            <p>カードリスト</p>
            <input type="number" :value="10">
        </div>
        <div class="bg-yellow-300 text-center mb-4 w-pxcard">
            <p>カードリスト</p>
            <input type="number" :value="10">
        </div>
        <div class="bg-yellow-300 text-center mb-4 w-pxcard">
            <p>カードリスト</p>
            <input type="number" :value="10">
        </div>
        <div class="bg-yellow-300 text-center mb-4 w-pxcard">
            <p>カードリスト</p>
            <input type="number" :value="10">
        </div>
        <div class="bg-yellow-300 text-center mb-4 w-pxcard">
            <p>カードリスト</p>
            <input type="number" :value="10">
        </div>
        <div class="bg-yellow-300 text-center mb-4 w-pxcard">
            <p>カードリスト</p>
            <input type="number" :value="10">
        </div>
    </div>
</template>

<script>
export default {
  mounted () {
    console.log('Component mounted.')
  }
}
</script>

<style scoped>
.w-pxcard{
    max-width: 300px;
    width: 33.33333%;
}
</style>
