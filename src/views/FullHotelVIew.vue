<template>
<div class="full-hotel-view">
    <v-container>
        <h2 class="text-h6 font-weight-bold text-center my-2">Hotel name</h2>
        <v-row>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6">
                <v-card elevation="4" class="bg-red-lighten-5">
                    <v-card-title class="text-body-1 font-weight-bold text-uppercase">room name</v-card-title>
                    <v-card-text class="pa-1">
                        <TheSlider />
                        <v-card-subtitle class="d-flex justify-center">
                            <v-btn text class="my-2 w-75" @click="show = !show">FACILITY</v-btn>
                        </v-card-subtitle>
                       
                    </v-card-text>

                    <v-card-text v-if="show" class="pa-1">
                        <v-divider></v-divider>
                     <HotelRoomFacelities :lists="lists"/>
                        <v-divider></v-divider>
                    </v-card-text>
                    <v-card-text class="my-0">
                        <v-card-title class="pa-0">Price: Tk.9,555<span class="text-caption font-weight-bold text-orange">( 1 Day)</span></v-card-title>
                        <v-rating v-model="rating" size="18" color="red" ></v-rating>
                    </v-card-text>

                    <v-card-actions class="d-flex justify-center bg-red-lighten-1">
                        <v-btn class="w-50">Add to card</v-btn>
                    </v-card-actions>
                   
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import TheSlider from '../components/TheSlider.vue';
import HotelRoomFacelities from '../components/HotelRoomFacelities.vue';
export default {
    name: 'full-hotel-view',

    data() {
        return {
            show:false,
            rating:4,
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
            h_rooms: [{
                    id: 1,
                    room_name: 'Couple Room',
                    chipes: [{
                            id: 1,
                            room_n: 'one',
                            icon: 'home'
                        },
                        {
                            id: 2,
                            room_n: 'breakfast',
                            icon: 'food-variant'
                        },
                        {
                            id: 3,
                            room_n: 'Gym',
                            icon: 'weight-lifter'
                        },
                        {
                            id: 4,
                            room_n: 'pool',
                            icon: 'pool'
                        }
                    ],
                    image: '',
                    description: '',
                },
                {
                    id: 2,
                    room_name: 'Family Room',
                    chipes: [{
                            id: 1,
                            room_n: 'two',
                            icon: 'home'
                        },
                        {
                            id: 2,
                            room_n: 'breakfast',
                            icon: 'food-variant'
                        },
                        {
                            id: 3,
                            room_n: 'Gym',
                            icon: 'weight-lifter'
                        },
                    ],
                    image: '',
                    description: '',
                },
                {
                    id: 3,
                    room_name: 'Family Room',
                    chipes: [{
                            id: 1,
                            room_n: 'two',
                            icon: 'home'
                        },
                        {
                            id: 2,
                            room_n: 'breakfast',
                            icon: 'food-variant'
                        },
                        {
                            id: 3,
                            room_n: 'Gym',
                            icon: 'weight-lifter'
                        },
                    ],
                    image: '',
                    description: '',
                },
                {
                    id: 4,
                    room_name: 'Family Room',
                    chipes: [{
                            id: 1,
                            room_n: 'two',
                            icon: 'home'
                        },
                        {
                            id: 2,
                            room_n: 'breakfast',
                            icon: 'food-variant'
                        },
                        {
                            id: 3,
                            room_n: 'Gym',
                            icon: 'weight-lifter'
                        },
                    ],
                    image: '',
                    description: '',
                },
            ]
        }
    },

    components:{
        TheSlider,
        HotelRoomFacelities
    }
}
</script>

<style scoped>
.list{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows:repeat(4,30px);
    grid-gap: 5px;
    padding: 10px;
    background: transparent;
}
</style>
