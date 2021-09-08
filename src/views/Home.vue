<template>
<div>
  <span id="intro"> Select your desired dates for meeting: </span>
    <div>
    <DateSelecter class="calendar"/>
    </div>
    <div class="timeSelecter">
    <span>Select your start time:</span>    
    <TimeSelecter/>
    </div>
    <div class="timeSelecter">
    <span>Select your end time:</span>
    <TimeSelecter/>
    </div>
    <div>
      <button @click="parseData">Submit</button>
    </div>
    </div>
</template>

<script>
import DateSelecter from '../components/DateSelecter.vue'
import TimeSelecter from '../components/TimeSelecter.vue'

export default {
    components: {    
        DateSelecter,
        TimeSelecter,
    },
    methods:{
      parseData(){

      }
    }
}
</script>

<style>

#intro{
    margin-left: -25%;
}

.calendar{
  margin: auto;
  margin-top : 40px;
  position: relative;
  vertical-align: middle;
}

.timeSelecter{
  margin: auto;
  margin-top: 40px;
  float: left;
  display:inline;
  width: 50%;
}

button {
  transition-duration: 0.4s;
  border: 0;
  border-radius: 4px;
  background-color: #4CAF50; /* Green */
  color:white;
  font-size: 16px;
}

button:hover {
  color: white;
  background-color: grey;
  border-radius: 4px;
}

</style>