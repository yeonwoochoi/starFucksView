<template>
  <v-app>
    <Header></Header>
    <Nav></Nav>
    <v-content>
      <router-view name="body"></router-view>
    </v-content>
    <Footer></Footer>
  </v-app>
</template>

<script>
  import Header from './components/Header'
  import Nav from './components/Nav'
  import Footer from './components/Footer'


  export default {
    components: {Header, Nav, Footer},
    data: () => ({
    })
  }
</script>

<style lang="scss">

</style>
