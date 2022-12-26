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
                            <v-row>
                                <v-col cols="6" sm="6" md="12" lg="12" xl="12">
                                    <v-chip icon class="d-flex justify-start bg-red mx-2 text-h6" v-for="info in h_info"
                                        :key="info.id">
                                        <v-icon left class="white--text mx-2">
                                            mdi-{{ info.icon }}
                                        </v-icon>
                                        {{ info.info }}
                                    </v-chip>
                                </v-col>
                                <v-col cols="6" sm="6" md="12" lg="12" xl="12">
                                    <v-rating v-model="rating" size="20" readonly class="mx-5 my-2"
                                        color="white"></v-rating>
                                </v-col>
                            </v-row>
                            <div class="d-flex justify-space-between pa-0">

                                <!-- <v-chip icon class="d-flex justify-start bg-red mx-2 text-h6">
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
                                </v-chip> -->
                            </div>



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
                            <v-row>
                                <v-col cols="12" sm="12" md="6" lg="6" xl="6" v-for="h_room in h_rooms"
                                    :key="h_room.id">
                                  <HotelRoom :h_room="h_room" />
                                </v-col>
                            </v-row>

                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
import HotelRoom from './HotelRoom.vue';
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
            h_info: [
                {
                    id: 1,
                    icon: 'phone',
                    info: '+8801600000000'
                },
                {
                    id: 2,
                    icon: 'email-open-outline',
                    info: 'email@gmail.com'
                }
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
    },
    components:{
        HotelRoom,
    }
}
</script>