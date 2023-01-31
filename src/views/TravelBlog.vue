<template>
    <div class="travel-blog">
        <v-container>
        
            <v-sheet class="w-100 h-25 d-flex justify-center my-2 pa-2" rounded="lg" >
                <h2 class="text-h4">Travel Blog</h2>
            </v-sheet>
            <v-row class="d-flex my-2">
                <v-col cols="12" lg="4" md="4" sm="6" xl="4" v-for="tour in tours" :key="tour.id">
                   <TourDetails :tours="tour" />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import TourDetails from '../components/TourDetails.vue';

export default {
    name: 'trave-lblog',

    computed:{
        ...mapState('tour',{
            tours:'tours'
        })
    },
    components:{
        TourDetails,
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>