<template>
  <NavBar />
  <router-view />
</template>


<style scoped>
</style>


<script >
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import NavBar from './components/navBar.vue';
export default {
  name: 'app',
  components: {
    NavBar,
  }
}
</script>