<template>
<div class="fullhotel">
    <v-container>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                <HotelHerder :hotels="hotels" />
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="12" md="8" lg="8" xl="8">
                <v-card>

                    <v-card-text>
                        <v-card-title class="text-h6 font-weight-bold">
                            Full Description
                        </v-card-title>
                        <p class="mx-5 text-justify">
                            {{ hotels.des }}
                        </p>
                    </v-card-text>

                    <v-card-text>
                        <v-card-title class="text-h6 font-weight-bold">Amenities</v-card-title>
                        <HotelRoomFacelities :lists="hotels.lists" />
                    </v-card-text>

                    <v-card-text style="height:250px;">
                        <v-card-title class="text-h6 font-weight-bold">What to Expect</v-card-title>
                        <SwiperSlider :images="hotels.images_view" />
                    </v-card-text>

                    <v-card-text>
                        <v-card-title class="text-h6 font-weight-bold">Property Information</v-card-title>
                        <p class="mx-5 text-justify">
                            {{ hotels.info }}
                        </p>
                    </v-card-text>

                    <v-card-text>
                        <v-card-title class="text-h6 font-weight-bold">Rooms and package</v-card-title>
                        <div>
                            <HotelRoom :hotel_rooms=" hotels.hotel_rooms" />
                        </div>

                    </v-card-text>

                    <v-card-text>
                        <v-card-title class="text-h6 font-weight-bold">Asked Question</v-card-title>
                        <HotelInformation :questions="hotels.questions" />
                    </v-card-text>

                </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="4" lg="4" xl="4">
                <DataCard />
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

import DataCard from '../components/main/DataCard.vue';
import HotelHerder from '../components/main/HotelHerder.vue';
import {
    mapGetters
} from 'vuex';

export default {
    name: 'fullhotel',
    data() {
        return {
            date: '',
            rating: 4,
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

    mounted() {
        window.scrollTo(0, 0);
    },

    components: {
        HotelRoomFacelities,
        SwiperSlider,
        HotelRoom,
        HotelInformation,
        DataCard,
        HotelHerder
    }
}
</script>
