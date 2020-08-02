<template>
  <div id="app">
    <MyHeader />
    <MyNav />
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
