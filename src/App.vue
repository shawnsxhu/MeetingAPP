<template>
  <div id="app">
    <title>Group Scheduling App</title>
    
    
    <!-- <div class="day">
      <DayBlock/>
    </div>
    <div class="block">
      <FillingBlock/>
    </div> -->
    <!-- <div>
      <AllBlocks />
    </div> -->
    <!-- <router-link :to="{ name:'Home'}">Home</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>

// import FillingBlock from './components/FillingBlock.vue'
// import DayBlock from './components/DayBlocks.vue'
// import AllBlocks from './components/AllBlocks.vue'


export default {
  name: 'App',
  components: {

    // FillingBlock,
    // DayBlock,
    //AllBlocks,
  }
}
</script>

<style>
#app {
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#intro{
  position: relative;
  right: 10%;
  width: 200 px;
  top: 0;
}

.block{
  margin: 50 auto;
  padding: 0 30;
  display:inline-block;
}

.day{
  margin: 20 auto;
  padding: 0 10;
  display: inline-block;
}
</style>
