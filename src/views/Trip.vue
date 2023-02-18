<template>
    <div class="trip">
        <v-container>
            <v-row>
                <v-col>
                    <v-sheet elevation="10" class="w-50 pa-5 offset-3" rounded="lg">
                        <p class="text-center text-h5 text-weight-bold">Trip date: {{ date }}</p>
                    </v-sheet>
                </v-col>
            </v-row>
            <v-row v-if="hotels">
                <v-col cols="12" md="4" sm="6" lg="4" xl="4" v-for="hotel in hotels" :key="hotel.id">
                    <SingelHotel :hotel="hotel"/>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import SingelHotel from '../components/hotel/SingelHotel.vue';

export default {
    name: 'trip',
    data() {
        return {
            date: '12/21/2022',
        }
    },
    computed: {
        ...mapState('hotel', {
            hotels: 'hotels'
        })
    },

    mounted(){
        window.scrollTo(0,0);
    },
    components:{
        SingelHotel
    }
}
</script>