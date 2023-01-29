<template>
<v-list class="list">
    <v-list-item-content class="d-flex justify-start" v-for="list in lists" :key="list.id">
        <v-icon color="black">{{ list.icon }}</v-icon>
        <v-list-item-title class="mx-2 text-body-2 font-weight-bold">{{list.name}}</v-list-item-title>
    </v-list-item-content>
</v-list>
</template>

<script>
export default {
    name:'hotel-room-facelites',
    props:['lists']
}
</script>
