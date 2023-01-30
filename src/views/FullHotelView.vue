<template>
<div class="fullhotel">
    <v-container>
        {{ hotels.name }}
        <!-- <v-card v-if="hotels">
            <v-img :src="hotels.image" height="100" cover />
     
        </v-card> -->
    </v-container>
</div>
</template>

<script>
import HotelRoomView from '../components/HotelRoomView.vue';
import {
    mapGetters,
    mapState
} from 'vuex';
export default {
    name: 'fullhotel',
    data() {
        return {
            show: false,
            id: null,
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
            ],
        }

    },

    mounted(){
        this.id = this.$route.params.id;
        this.getHotelById(this.id);
    },

    computed: {

        hotels() {
            return this.getHotelById(this.id);
        },
        ...mapGetters('hotel', {
            getHotelById: 'getHotelById'
        })
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
