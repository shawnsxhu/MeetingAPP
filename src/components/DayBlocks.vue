<template>
  <div>
      <FillingBlock :key="time" v-for="time in blocksNum"/>
  </div>
</template>

<script>

import FillingBlock from "./FillingBlock.vue"

export default {
    props:{
        times: Array
    },

    data(){
        return{
            blocksNum: [1, 2, 3, 4, 5, 6, 7, 8]
        }
    },

    components:{
        FillingBlock,
    },
}
</script>

<style>

</style>