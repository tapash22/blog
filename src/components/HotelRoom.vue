<template>
<div class="hotel-room">
    <!-- <router-link :to="{ name: 'roomdetails', params: { room_id: h_room.id } }" class="text-decoration-none offset-3"> -->
        <v-list class="list my-2" v-for="hroom in hotel_rooms" :key="hroom.id">
            <v-list-item class="pa-3">
                <v-img :src="hroom.image" height="180" cover />
            </v-list-item>
            <v-list-item class="d-block">
                <v-list-item-tile class="my-5 text-h6 text-uppercase">{{ hroom.name }}</v-list-item-tile>
                <v-list-item-content class="title" >
                    <v-list-item-title class="d-block text-body-2 " v-for="list in hroom.lists" :key="list.id" >
                        <v-icon size="20" color="orange">
                            {{ list.icon }}
                        </v-icon>
                       <span class="text-body-2 mx-1"> {{ list.text }}</span>
                    </v-list-item-title>
                </v-list-item-content>

            </v-list-item>

            <v-list-item>
                  <p class="text-black">{{ hroom.price }}</p>
                <v-rating v-model="hroom.rating" size="18" color="orange"></v-rating>
                <v-btn color="orange" class="my-10">
                    Booking
                </v-btn>
            </v-list-item>
          
        </v-list>
    <!-- </router-link> -->
</div>
</template>

<script>
export default {
    name: 'hotel-room',
    props: ['h_room'],
    data(){
        return{
            hotel_rooms: [{
                    id: 1,
                    name: "couple room",
                    image: "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
                    price: "Tk. 9,444",
                    rating: 4,
                    lists: [{
                            id: 1,
                            text: "Room Size : 15 X 15",
                            icon: "mdi-bed",
                        },
                        {
                            id: 2,
                            text: "Bed : Queen Size",
                            icon: "mdi-bed-queen",
                        },
                        {
                            id: 3,
                            text: "Pickup & Drop",
                            icon: "mdi-car-convertible",
                        },
                        {
                            id: 4,
                            text: "Free Wifi",
                            icon: "mdi-wifi",
                        },
                        {
                            id: 5,
                            text: "Breakfast, Lunch, Dinner",
                            icon: "mdi-food-variant",
                        },
                        {
                            id: 6,
                            text: "Air Condition : Available",
                            icon: "mdi-air-conditioner",
                        },
                        {
                            id: 7,
                            text: "Amenities : Swimming Pool",
                            icon: "mdi-pool",
                        },
                        {
                            id: 8,
                            text: "Hot & cold Water",
                            icon: "mdi-fire",
                        },
                    ],
                },
                {
                    id: 2,
                    name: "Big Family",
                    image: "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
                    price: "Tk. 9,444",
                    rating: 4,
                    lists: [{
                            id: 1,
                            text: "Room Size : 15 X 15",
                            icon: "mdi-bed",
                        },
                        {
                            id: 2,
                            text: "Bed : Queen Size",
                            icon: "mdi-bed-queen",
                        },
                        {
                            id: 3,
                            text: "Pickup & Drop",
                            icon: "mdi-car-convertible",
                        },
                        {
                            id: 4,
                            text: "Free Wifi",
                            icon: "mdi-wifi",
                        },
                        {
                            id: 5,
                            text: "Breakfast, Lunch, Dinner",
                            icon: "mdi-food-variant",
                        },
                        {
                            id: 6,
                            text: "Air Condition : Available",
                            icon: "mdi-air-conditioner",
                        },
                        {
                            id: 7,
                            text: "Amenities : Swimming Pool",
                            icon: "mdi-pool",
                        },
                        {
                            id: 8,
                            text: "Hot & cold Water",
                            icon: "mdi-fire",
                        },
                    ],
                },
                {
                    id: 3,
                    name: "couple Suit",
                    image: "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
                    price: "Tk. 9,444",
                    rating: 4,
                    lists: [{
                            id: 1,
                            text: "Room Size : 15 X 15",
                            icon: "mdi-bed",
                        },
                        {
                            id: 2,
                            text: "Bed : Queen Size",
                            icon: "mdi-bed-queen",
                        },
                        {
                            id: 3,
                            text: "Pickup & Drop",
                            icon: "mdi-car-convertible",
                        },
                        {
                            id: 4,
                            text: "Free Wifi",
                            icon: "mdi-wifi",
                        },
                        {
                            id: 5,
                            text: "Breakfast, Lunch, Dinner",
                            icon: "mdi-food-variant",
                        },
                        {
                            id: 6,
                            text: "Air Condition : Available",
                            icon: "mdi-air-conditioner",
                        },
                        {
                            id: 7,
                            text: "Amenities : Swimming Pool",
                            icon: "mdi-pool",
                        },
                        {
                            id: 8,
                            text: "Hot & cold Water",
                            icon: "mdi-fire",
                        },
                    ],
                },
                {
                    id: 4,
                    name: "Family room",
                    image: "https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg",
                    price: "Tk. 9,444",
                    rating: 4,
                    lists: [{
                            id: 1,
                            text: "Room Size : 15 X 15",
                            icon: "mdi-bed",
                        },
                        {
                            id: 2,
                            text: "Bed : Queen Size",
                            icon: "mdi-bed-queen",
                        },
                        {
                            id: 3,
                            text: "Pickup & Drop",
                            icon: "mdi-car-convertible",
                        },
                        {
                            id: 4,
                            text: "Free Wifi",
                            icon: "mdi-wifi",
                        },
                        {
                            id: 5,
                            text: "Breakfast, Lunch, Dinner",
                            icon: "mdi-food-variant",
                        },
                        {
                            id: 6,
                            text: "Air Condition : Available",
                            icon: "mdi-air-conditioner",
                        },
                        {
                            id: 7,
                            text: "Amenities : Swimming Pool",
                            icon: "mdi-pool",
                        },
                        {
                            id: 8,
                            text: "Hot & cold Water",
                            icon: "mdi-fire",
                        },
                    ],
                },
            ],
        }
    }
}
</script>

<style scoped>
.list{
    display: grid;
    grid-template-columns: 1fr 3fr 120px;
    grid-gap: 5px;
    height: 200px;
    box-shadow: 0 0 2px red;
    padding: 0;
    margin: 0;

}

.title{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(30px);
    grid-gap: 5px;
    margin-top: 20px;
}
</style>
