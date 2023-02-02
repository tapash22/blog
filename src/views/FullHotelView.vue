<template>
<div class="fullhotel">
    <v-container>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                <v-card>
                    <v-card-text class="card-header bg-red-lighten-5">
                        <div class="first">
                            <v-img :src="hotels.image" height="420" cover />
                        </div>

                        <div class="second">
                            <v-img :src="hotels.image" height="200" cover class="rounded" />
                            <v-img :src="hotels.image" height="200" cover />
                            <v-img :src="hotels.image" height="200" cover />
                            <v-img :src="hotels.image" height="200" cover />
                        </div>
                    </v-card-text>

                    <v-card-text>
                        <v-card-title class="text-h6 font-weight-bold">{{ hotels.name }}</v-card-title>
                        <v-card-subtitle class="d-flex justify-space-between">
                            <v-rating v-model="hotels.rating" size="18" half-increments color="orange" class="mx-5" />
                            <v-icon color="red" class="mx-2">mdi-map-marker</v-icon>
                            <span class="text-black">{{ hotels.location }}</span>
                            <v-spacer></v-spacer>
                            <v-btn icon @click="heart =! heart" elevation="0">
                                <v-icon color="red" v-if="heart">mdi-heart</v-icon>
                                <v-icon color="red" v-else>mdi-heart-outline</v-icon>
                            </v-btn>

                        </v-card-subtitle>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="12" md="8" lg="8" xl="8">
                <v-card>

                    <v-card-text>
                        <v-card-title class="text-h6 font-weight-bold">
                            Full Description
                        </v-card-title>
                        <p class="mx-5">
                            {{ hotels.des }}
                        </p>
                    </v-card-text>

                    <v-card-text>
                        <v-card-title class="text-h6 font-weight-bold">Amenities</v-card-title>
                        <HotelRoomFacelities :lists="hotels.lists" />
                    </v-card-text>

                    <v-card-text style="height:250px;">
                        <v-card-title class="text-h6 font-weight-bold">What to Expect</v-card-title>
                        <SwiperSlider :images="hotels.images_view"/>
                    </v-card-text>

                    <v-card-text>
                        <v-card-title class="text-h6 font-weight-bold">Property Information</v-card-title>
                        <p class="mx-5">
                            {{ hotels.info }}
                        </p>
                    </v-card-text>

                    <v-card-text>
                        <v-card-title class="text-h6 font-weight-bold">Rooms and package</v-card-title>
                        <div>
                            <HotelRoom :hotel_rooms=" hotels.hotel_rooms"/>
                        </div>

                    </v-card-text>

                    <v-card-text>
                        <v-card-title class="text-h6 font-weight-bold">Asked Question</v-card-title>
                        <HotelInformation :questions="hotels.questions"/>
                    </v-card-text>

                </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="4" lg="4" xl="4" class="box">
                <v-card class="card">
                    <v-card-text class="d-flex justify-space-between">
                        <v-card-subtitle class="text-body-1">From <span class="text-h6 font-weight-bold mx-1 text-black">9,999</span>(per night)</v-card-subtitle>
                        <v-card-title class="text-body-2">(4)<v-icon color="orange" size="20">mdi-star</v-icon>
                        </v-card-title>
                    </v-card-text>
                    <v-card-text class="d-flex justify-center">
                      <GlobalSearch />
                    </v-card-text>
                    <!-- <v-card-actions class="d-flex justify-center">
                        <v-btn rounded="xl" elevation="1" class="bg-green">check Availablity</v-btn>
                    </v-card-actions> -->
                </v-card>
            </v-col>
        </v-row>

    </v-container>
</div>
</template>

<script>
// import HotelRoomView from '../components/HotelRoomView.vue';
import HotelRoomFacelities from '../components/hotel/HotelRoomFacelities.vue';
import SwiperSlider from '../components/slider/SwiperSlider.vue';
import HotelRoom from '../components/hotel/HotelRoom.vue';
import HotelInformation from '../components/hotel/HotelInformation.vue';

import GlobalSearch from '../components/GlobalSearch.vue';

import {
    mapGetters
} from 'vuex';

export default {
    name: 'fullhotel',
    data() {
        return {
            date:'',
            rating: 4,
            heart: false,
            show: false,
            id: this.$route.params.id,
            text: 'distinctio quo a dolore illo dolorum at quae. Vitae,tenetur. Aut atque repellendus quaerat architecto explicabo fugit quibusdam similique enim dolorem, asperiores nemo vero laudantium eius repudiandae harum tenetur labore qui animi. Earum id alias culpa.Fuga est cum possimus odit, recusandae ratione tenetur incidunt quisquam autem ipsam? Maiores sequi quo accusamus amet nesciunt, dolore deserunt libero similique atque ratione tempora non nemo cum nulla commodi? Dolore quidem itaque non quas dolorum, harum corrupti iusto?',

        }

    },

    // filters: {
    //     truncate: function (text, length, suffix) {
    //         if (text.length > length) {
    //             return text.substring(0, length) + suffix;
    //         } else {
    //             return text;
    //         }
    //     },
    // },

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
        HotelRoomFacelities,
        SwiperSlider,
        HotelRoom,
        HotelInformation,
        GlobalSearch
    }
}
</script>

<style scoped>

.card-header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 5px;
}

.card-header .second {
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 200px);
    grid-gap: 5px;
}
</style>
