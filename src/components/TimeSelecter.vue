<template>
<div class="time-selecter">
  <select name="startH" v-on:change="getHour">
    <option  v-for="time in timeValue" :key="time.value">{{ time }}</option>
  </select>
  <select name="startM" v-on:change="getMinute">
    <option  v-for="minute in MinuteValue" :key="minute.value">{{ minute }}</option>
  </select>
</div>
</template>

<script>
export default {
  data() {  
    return {
      timeValue: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 
      '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
      MinuteValue: ['00', '30'],
      time: null,
      minute: null,
      Hour: null,
      Minute: null,
    };
  },
  created(){
    this.time = this.timeValue[0].value;
    this.minute = this.MinuteValue[0].value;
  },
  methods:{
    getHour(){
      this.Hour = this.time
    },
    getMinute(){
      this.Minute = this.minute
    },
  }
}
</script>

<style scoped>
  .time-select{
    position: relative;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>