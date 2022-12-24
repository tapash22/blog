<template>
    <div class="hotel-details">
        <v-container>
            <v-row>
                <v-col cols="12" md="4" lg="4" sm="12" class="pa-2">
                    <v-img src="../assets/hotel2.jpg" />
                </v-col>
                <v-col cols="12" md="8" lg="8" sm="12" class="pa-2">
                    <v-card elevation="10" class="">
                        <v-card-title class="text-h6 text-weight-bold text-uppercase mt-5 text-red">Hotel
                            name</v-card-title>

                        <v-card-text class="d-flex justify-space-between">
                            <h4 class="mt-5 text-h5 text-center">Address:</h4>
                            <p class=" mx-2 text-body-1 text-justify w-100 h-100 pa-5">
                                Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. Distinctio quasi optio recusandae harum magnam, inventore iusto minus quidem eos
                                explicabo odit, ullam numquam adipisci! Rerum dolorem odio corrupti molestiae
                                velit.
                            </p>
                        </v-card-text>

                        <v-card-text class="bg-red ">
                            <div class="d-flex justify-space-between pa-0">
                                <v-chip icon class="d-flex justify-start bg-red mx-2 text-h6">
                                    <v-icon left class="white--text mx-2">
                                        mdi-phone
                                    </v-icon>
                                    +8801600000000
                                </v-chip>
                                <v-chip icon class="d-flex justify-start bg-red mx-2 text-h6">
                                    <v-icon left class="white--text mx-2">
                                        mdi-facebook
                                    </v-icon>
                                    hotel
                                </v-chip>
                                <v-chip icon class="d-flex justify-space-evenly bg-red mx-2 text-h6">
                                    <v-icon left class="white--text mx-2">
                                        mdi-email-open-outline
                                    </v-icon>
                                    hotel@gmail.com
                                </v-chip>
                            </div>

                            <v-rating v-model="rating" size="20" readonly class="mx-5 my-2" color="white"></v-rating>

                        </v-card-text>
                        <v-card-text class="pa-0">
                            <v-list class="d-flex pa-2 w-100">
                                <v-list-item v-for="slider in sliders" :key="slider.id" class="d-block w-50">
                                    <!-- <h2 class="my-1 text-h6">{{ slider.name }}</h2> -->
                                    <v-slider v-model="slider.slider" :step="slider.step"
                                        class="align-center pa-0 mt-10" :max="slider.max" :min="slider.min" hide-details
                                        ticks thumb-label="always" color="red">
                                    </v-slider>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                        <v-card-acton class="pa-0 my-2">
                            <v-btn elevation="10" class="w-50 pa-2 text-body-1 offset-3 mb-5" @click="rooms = !rooms">
                                Filter
                            </v-btn>
                        </v-card-acton>
                        <v-card-text class="w-100 h-50 pa-2 my-2 " v-if="rooms">
                            <v-list class="d-flex ">

                                <v-list-item class="w-50" elevation="10" v-for="h_room in h_rooms" :key="h_room.id">
                                    <v-list-item-title class="text-h5 text-red text-center pa-2">{{ h_room.room_name
                                    }}</v-list-item-title>
                                    <v-img class="w-100 h-50" src="../assets/hotel2.jpg" />
                                    <div class="d-flex justify-center pa-2">
                                        <v-chip icon v-for="chipe in h_room.chipes" :key="chipe"
                                            class="mx-2 d-flex justify-space-evenly  text-body-2 bg-red-darken-1 "
                                            color="white">
                                            <v-icon right class="">
                                                mdi-{{ chipe.icon }}
                                            </v-icon>
                                            {{ chipe.room_n }}
                                        </v-chip>
                                    </div>
                                    <v-divider></v-divider>
                                    <router-link :to="{ name: 'hotelroom', params: { room_id: h_room.id } }"
                                        class="text-decoration-none offset-3">
                                        <v-btn class="my-5 text-white text-h6 w-50" rounded="sm" color="red">
                                            Details
                                        </v-btn>
                                    </router-link>

                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
export default {
    name: 'hoteldetails',
    data() {
        return {
            rooms: false,
            rating: 4,
            id: this.$route.params.id,
            sliders: [
                {
                    id: 1,
                    name: 'Price',
                    min: 50,
                    max: 10000,
                    slider: 400,
                    step: 10
                },
                {
                    id: 2,
                    name: 'Person',
                    min: 1,
                    max: 30,
                    slider: 2,
                    step: 1
                },

            ],
            h_rooms: [
                {
                    id: 1,
                    room_name: 'Couple Room',
                    chipes: [
                        {
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
                    chipes: [
                        {
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
    }
}
</script>