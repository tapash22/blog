<template>
<v-list class="list" >
    <v-list-item-content class="d-flex" v-for="list in lists" :key="list.id" >
        <v-icon color="black">{{ list.icon }}</v-icon>
        <v-list-item-title class="mx-2 text-body-2 ">{{list.name}}</v-list-item-title>
    </v-list-item-content>
</v-list>
</template>

<script>
export default {
    name:'hotel-room-facelities',
    props:['lists']
}
</script>

<style scoped>
.list{
    display: grid;
    grid-template-columns: 1fr ;
    grid-template-rows: repeat(50px);
    padding: 10px;
    background: transparent;
    overflow: hidden;
    box-shadow: 0 0 5px red;
    border-radius: 10px;
}
</style>
