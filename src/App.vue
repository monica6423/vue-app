<template>
  <div id="app">
    <MyHeader :poiInfo='poiInfo'></MyHeader>
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
  },
  data() {
    return {
      //data for header
      poiInfo:{}
    }
  },
  created() {
    //initiate asynchronize data request
    //binding to this
    var that = this;
    this.$axios.get('/api/goods')
      .then(function(response) {
        //console.log('fifi',response);
        //console.log(this);
        var dataSource = response.data;
        //console.log(dataSource);
        //0 is success
        if(dataSource.code == 0) {
          that.poiInfo = dataSource.data.poi_info;
          //console.log(that.poiInfo);
        }
      })
      .catch(function(error) {
        console.log('hh',error);
      });
  }
}
</script>

<style>
</style>
