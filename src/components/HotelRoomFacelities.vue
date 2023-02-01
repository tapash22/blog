<template>
<v-list class="list" >
    <v-list-item-content class="d-flex" v-for="list in lists" :key="list.id" >
        <v-icon color="red">{{ list.icon }}</v-icon>
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

<style >
.list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(40px);
    padding: 20px;
}
</style>
