<template>
  <div>
      <AppHeader/>
      <Card/>
      <AppFooter/>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import Card from "./components/Card.vue";
export default {
  components: { 
    AppHeader,
    AppFooter,
    Card
   }
};
</script>

<style scoped>

</style>