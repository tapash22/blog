<template>
<div class="single-hotel">

    <v-card class="rounded-lg " elevation="10">
        <v-img :src="hotel.image1" height="200" cover />
        <router-link :to="{ name:'fullhotel', params: { id: hotel.id } }" class="text-decoration-none">
            <v-card-title class="text-body-1 font-weight-bold text-black text-uppercase pa-1 my-1">{{ hotel.name }}</v-card-title>
        </router-link>
        <v-rating v-model="hotel.rating" size="18" readonly class="mx-2 pa-0 " color="orange" />
        <v-card-text class="d-block" >
          <HotelRoomFacelities :lists="hotel.lists" />
        </v-card-text>

        <v-card-text class="pa-0 ">
            <v-card-title class="text-body-1 font-weight-bold pa-1 mx-2" color="black">
                Tk.{{ hotel.price }}
            </v-card-title>

        </v-card-text>
    </v-card>

</div>
</template>

<script>
import HotelRoomFacelities from './HotelRoomFacelities.vue';

export default {
    name: 'single-hotel',
    props: ['hotel'],

    components:{
        HotelRoomFacelities
    }
}
</script>
