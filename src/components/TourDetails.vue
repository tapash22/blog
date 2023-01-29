<template>
    <div class="tour-details">
        <v-card elevation="6"  rounded="lg">
            <v-card-item >
                <v-img class="w-100 pa-2 background-position-cover" height="200" :src='tour.image' />
            </v-card-item>
            
            <v-card-text class=" pa-0 mx-2">
                <v-card-title class="text-body-1 text-uppercase pa-0 my-2">{{ tour.name }}</v-card-title>
                <v-card-subtitle class="pa-0 my-2">{{ tour.date }}</v-card-subtitle>
            </v-card-text>
            <v-card-actions class="d-flex justify-center bg-red-lighten-1 pa-0">
                <router-link :to="{name:'travelblogdetail', params:{id:tour.id}}" class="text-body-1 font-weight-bold text-decoration-none text-white">
                    view detail
                </router-link>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'tour-details',
    props: ['tour'],
}
</script>

<style scoped>
.v-card-actions{
    min-height:40px!important;
}
</style>