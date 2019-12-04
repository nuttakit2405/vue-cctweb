<template>
  <div id="app">
    <navigation></navigation>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import navigation from '@/components/NavBar.vue'
export default {
  name: 'App',
  components: {
    navigation
  }
}
</script>

<style>
</style>
