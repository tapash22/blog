<template>
<div class="package-details">
    <v-container>
        <v-row>
            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                <HotelHerder :hotels="packages" />
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
                            {{ packages.des }}
                        </p>
                    </v-card-text>

                    <v-card-text v-if="packages.lists">
                        <v-card-title class="text-h6 font-weight-bold">Amenities</v-card-title>
                        <HotelRoomFacelities :lists="packages.lists" />
                    </v-card-text>

                    <v-card-text style="height:250px;" v-if="packages.images_view">
                        <v-card-title class="text-h6 font-weight-bold">What to Expect</v-card-title>
                        <SwiperSlider :images="hotels.images_view" />
                    </v-card-text>

                    <v-card-text>
                        <v-card-title class="text-h6 font-weight-bold">Property Information</v-card-title>
                        <p class="mx-5 text-justify">
                            {{ packages.info }}
                        </p>
                    </v-card-text>

                    <v-card-text v-if="packages.hotel_rooms">
                        <v-card-title class="text-h6 font-weight-bold">Rooms and package</v-card-title>
                        <div>
                            <HotelRoom :hotel_rooms=" hotels.hotel_rooms" />
                        </div>

                    </v-card-text>

                    <v-card-text v-if="packages.questions">
                        <v-card-title class="text-h6 font-weight-bold">Asked Question</v-card-title>
                        <HotelInformation :questions="packages.questions" />
                    </v-card-text>

                    <v-card-text>
                        <v-card-title class="text-h6 font-weight-bold">Transport List</v-card-title>
                        <TransportPackage :transports="packages.transport" />
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
import {
    mapGetters
} from 'vuex';
import HotelHerder from '../components/main/HotelHerder.vue';
import DataCard from '../components/main/DataCard.vue';
import HotelRoomFacelities from '../components/hotel/HotelRoomFacelities.vue';
import TransportPackage from '../components/package/TransportPackage.vue';

export default {
    name: 'packagedetails',
    data() {
        return {
            id: this.$route.params.id,
        }
    },

    computed: {
        packages() {
            return this.getSelectedId(this.id);
        },

        ...mapGetters('packages', {
            getSelectedId: 'getSelectedId'
        })
    },

    components: {
        DataCard,
        HotelHerder,
        HotelRoomFacelities,
        TransportPackage
    }
}
</script>
