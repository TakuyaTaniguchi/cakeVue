<template>
  <div>
      <AppHeader/>
      <Card/>
      <div id="nav">
        <router-link to="/about">About</router-link>
         <router-view />
      </div>
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