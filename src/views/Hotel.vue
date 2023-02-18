<template>
    <div class="hotel">
        <!-- <FilterView /> -->
        <v-container>
            <h2 class="text-h6 font-weight-bold text-uppercase my-2 text-center">Hotel</h2>
            <v-row>
                <v-col cols="12" md="3" lg="3" sm="6" xl="3" v-for="hotel in hotels" :key="hotel.id">
                    <SingelHotel :hotel="hotel"/>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
// import FilterView from '../components/hotel/FilterView.vue';
import SingelHotel from '../components/hotel/SingelHotel.vue';

export default {
    name: 'hotel',

    computed: {
        ...mapState('hotel', {
            hotels: 'hotels',
        })

        // ...mapGetters('hotel',{
        //     getHotel : 'getHotel'
        // })
    },
    mounted(){
        window.scrollTo(0,0);
    },

    components: {
        // FilterView,
        SingelHotel
    }
}
</script>