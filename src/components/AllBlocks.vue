<template>
  <div>
      <div class="dayBlock" :key="day" v-for="day in daysNum">
          <span>{{ day }}</span>
        <DayBlocks />
      </div>
  </div>
</template>

<script>

import DayBlocks from "./DayBlocks.vue"

export default {
    props:{
        days: Array
    },

    data(){
        return{
            daysNum: [1, 2, 3, 4, 5, 6, 7]
        }
    },

    components:{
        DayBlocks,
    },
}
</script>

<style>
.dayBlock{
    display: inline-block;
}
</style>