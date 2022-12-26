<template>
    <div class="hotel">
        <FilterView />
        <v-container>
            <h2 class="text-h4 text-uppercase my-2 text-center">Hotel</h2>
            <v-row>
                <v-col cols="12" md="4" lg="4" sm="6" xl="4" v-for="hotel in hotels" :key="hotel.id">
                    <SingelHotel :hotel="hotel"/>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
import { mapState } from 'vuex';
import FilterView from '../components/FilterView.vue';
import SingelHotel from '../components/SingelHotel.vue';

export default {
    name: 'hotel',

    computed: {
        ...mapState('hotel', {
            hotels: 'hotels',
        })
    },

    components: {
        FilterView,
        SingelHotel
    }
}
</script>