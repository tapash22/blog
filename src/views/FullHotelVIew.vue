<template>
<div class="full-hotel-view">
    <v-container>
        <h2 class="text-h6 font-weight-bold text-center my-2">Hotel name</h2>
        <v-row>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" v-for="room in hotel_rooms" :key="room.id">
                <HotelRoomView :room="room" />
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import HotelRoomView from '../components/HotelRoomView.vue';

export default {
    name: 'full-hotel-view',

    data() {
        return {
            show: false,

            hotel_rooms: [{
                    id: 1,
                    name: 'couple room',
                    image: 'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg',
                    price: 'Tk. 9,444',
                    rating: 4,
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
                },
                {
                    id: 2,
                    name: 'couple room',
                    image: 'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg',
                    price: 'Tk. 9,444',
                    rating: 4,
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
                },
                {
                    id: 3,
                    name: 'couple room',
                    image: 'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg',
                    price: 'Tk. 9,444',
                    rating: 4,
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
                },
                {
                    id: 4,
                    name: 'couple room',
                    image: 'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg',
                    price: 'Tk. 9,444',
                    rating: 4,
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
                },
            ]
        }
    },

    components: {
        HotelRoomView
    }
}
</script>

<style scoped>
.list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 30px);
    grid-gap: 5px;
    padding: 10px;
    background: transparent;
}
</style>
