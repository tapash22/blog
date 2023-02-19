<template>
       <v-list class="pa-0">
            <v-list-item-title class="text-body-1 pa-2 text-uppercase text-red d-flex justify-space-between">
                {{ hotelinfo.hotelname }}
                <v-chip class="text-lowercase">
                    {{ hotelinfo.daystay }}/day
                </v-chip>
            </v-list-item-title>
            <v-list-item-subtitle class="text-body-h6 text-start font-weight-bold mx-3">Tk. {{ hotelinfo.price }}</v-list-item-subtitle>
            <v-list-item>
                <HotelRoomFacelities :lists="hotelinfo.lists" />
            </v-list-item>
            
        </v-list>
</template>

<script>
import HotelRoomFacelities from '../hotel/HotelRoomFacelities.vue';

export default {
    name:'single-hotel-package',
    props:['hotelinfo'],
    components:{
        HotelRoomFacelities
    }
}
</script>