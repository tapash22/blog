<template>
<div class="fullhotel">
    <v-container>
       <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
            <v-card>
                <v-card-text class="card-header">
                    <div class="first">
                        <v-img :src="hotels.image" height="420" cover />
                    </div>
                    
                    <div class="second">
                        <v-img :src="hotels.image" height="200" cover />
                    <v-img :src="hotels.image" height="200" cover />
                    <v-img :src="hotels.image" height="200" cover />
                    <v-img :src="hotels.image" height="200" cover />
                    </div>
                </v-card-text>
                <v-card-text>
                    <v-card-title class="text-h6 font-weight-bold">{{ hotels.name }}</v-card-title>
                    <v-card-subtitle class="d-flex justify-space-between">
                        <v-rating v-model="hotels.rating" size="18" half-increments color="orange"/>
                        <v-icon color="red" class="mx-2">mdi-facebook</v-icon>
                        <span class="text-black">{{ hotels.location }}</span>
                        <v-spacer></v-spacer>
                        <v-icon color="red">mdi-facebook</v-icon>
                    </v-card-subtitle>
                </v-card-text>

                <v-card-text>
                    <v-card-title>
                        About this Hotel
                    </v-card-title>
                    <HotelRoomFacelities :lists="lists"/>
                </v-card-text>
            </v-card>
        </v-col>
       </v-row>

    </v-container>
</div>
</template>

<script>
// import HotelRoomView from '../components/HotelRoomView.vue';
import HotelRoomFacelities from '../components/HotelRoomFacelities.vue';
import {
    mapGetters
} from 'vuex';

export default {
    name: 'fullhotel',
    data() {
        return {
            show: false,
            id: this.$route.params.id,
            lists: [{
                    id: 1,
                    name: 'Room Size : 15 X 15',
                    icon: 'mdi-bed'
                },
                {
                    id: 2,
                    name: 'Bed : Queen Size',
                    icon: 'mdi-bed-queen'
                },
                {
                    id: 3,
                    name: 'Pickup & Drop',
                    icon: 'mdi-car-convertible'
                },
                {
                    id: 4,
                    name: 'Free Wifi',
                    icon: 'mdi-wifi'
                },
                {
                    id: 5,
                    name: 'Breakfast, Lunch, Dinner',
                    icon: 'mdi-food-variant'
                },
                {
                    id: 6,
                    name: 'Air Condition : Available',
                    icon: 'mdi-air-conditioner'
                },
                {
                    id: 7,
                    name: 'Amenities : Swimming Pool',
                    icon: 'mdi-pool'
                },
                {
                    id: 8,
                    name: 'Hot & cold Water',
                    icon: 'mdi-fire'
                },
            ],

        }

    },

    computed: {
        hotels() {
            return this.getHotelById(this.id);
        },

        ...mapGetters({
            getHotelById: 'hotel/getHotelById'
        })

    },

    components: {
        // HotelRoomView
        HotelRoomFacelities
    }
}
</script>

<style scoped>
.card-header{
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 5px;
}
.card-header .second{
    padding:10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2,200px);
    grid-gap: 5px;
}
</style>
