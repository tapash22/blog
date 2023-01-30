<template>
<div class="hotel-room-view">
    <v-card elevation="4" class="bg-red-lighten-5">
        <v-card-title class="text-body-1 font-weight-bold text-uppercase">{{ room.name }}</v-card-title>
        <v-card-text class="pa-1">
            <TheSlider />
            <v-card-subtitle class="d-flex justify-center">
                <v-btn text class="my-2 w-75" @click="show = !show">FACILITY</v-btn>
            </v-card-subtitle>

        </v-card-text>

        <v-card-text v-if="show" class="pa-1">
            <v-divider></v-divider>
            <HotelRoomFacelities :lists="room.lists" />
            <v-divider></v-divider>
        </v-card-text>
        <v-card-text class="my-0">
            <v-card-title class="pa-0">Price: {{ room.price }}<span class="text-caption font-weight-bold text-orange">( 1 Day)</span></v-card-title>
            <v-rating v-model="room.rating" half-increments size="18" color="red"></v-rating>
        </v-card-text>

        <v-card-actions class="d-flex justify-center bg-red-lighten-1">
            <v-btn class="w-50">Add to card</v-btn>
        </v-card-actions>

    </v-card>
</div>
</template>

<script>
import TheSlider from './TheSlider.vue';
import HotelRoomFacelities from './HotelRoomFacelities.vue';
export default {
    name: 'hotel-room-view',
    props: ['room'],
    components: {
        TheSlider,
        HotelRoomFacelities
    }
}
</script>
