<template>
    <div class="hotel">
        <FilterView />
        <v-container>
            <h2 class="text-h4 text-uppercase my-5 text-center">Hotel</h2>
            <v-row>
                <v-col cols="12" md="4" lg="4" sm="6" xl="4" v-for="hotel in hotels" :key="hotel.id">
                    <v-card class="rounded-lg" elevation="10">
                       
                        <v-img class="w-100 h-50 pa-2" src="../assets/hotel.jpg" />
                        <v-card-title class="text-h6  text-uppercase">{{ hotel.name }}</v-card-title>
                      
                        <v-card-text class="pa-0 bg-red-darken-2">
                            <v-card-title class="text-h5 text-weight-bold" color="black">Price: {{ hotel.price }}</v-card-title>
                            <v-rating v-model="hotel.rating" size="20" readonly class="mx-5" color="white"></v-rating>
                       
                        </v-card-text>
                            <v-card-text class="pa-0">
                                <v-list>
                                    <v-list-item v-for='(list ,i) in hotel.lists' :key="i" >
                                        <v-list-item-title >{{i+1}}. {{ list }}</v-list-item-title>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
  
                        <v-card-actions class="d-flex justify-center pa-0 bg-red">
                            <router-link :to="{
                                name:'hoteldetails', params:{id:hotel.id}
                            }" class="text-white text-decoration-none w-75 offset-2">
                                <v-btn elevation="5" rounded="lg" class="w-75 bg-red my-2 text-h6">
                                Details
                            </v-btn>
                            </router-link>
                          
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
import { mapState } from 'vuex';
import FilterView from '../components/FilterView.vue';

export default {
    name: 'hotel',

    computed:{
        ...mapState('hotel',{
            hotels:'hotels',
        })
    },

    components: {
        FilterView,
    }
}
</script>