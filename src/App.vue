<template>
  <div id="app">
    <MyHeader />
    <MyNav />
    <!-- router exit, router that matched will render here -->
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from './components/header/Header';
import MyNav from './components/Nav/Nav'
export default {
  name: 'App',
  components: {
    MyHeader, //(MyHeader:MyHeader)
    MyNav
  }
}
</script>

<style>
</style>
