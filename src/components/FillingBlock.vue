<template>
    <div :class="{selected:isSelected}" @click="toggleSelected"></div>
</template>

<script>
export default {
    props: {
        time: Date,
    },
    data(){
        return {
            isSelected: false,
            selectedNum: 0,
            greenColor: '#90ee90',
        };
    },
    methods: {
        toggleSelected(){
            this.isSelected = !this.isSelected;
            this.isSelected ? this.selectedNum++ : this.selectedNum--;
        }
    },
}
</script>

<style scoped>
div{
    height: 20px;
    width: 80px;
    background-color: grey;
}

.selected{
    background-color: lightgreen;
}
</style>