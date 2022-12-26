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
                    <v-card elevation="10" rounded="lg">

                        <v-img width="380" height="200" src="../assets/bus1.png" class="pa-2" />

                        <v-card-title>{{ hotel.name }}</v-card-title>
                        <v-card-subtitle>price: ${{ hotel.price }}</v-card-subtitle>
                        <v-rating dense v-model="hotel.rating" background-color="purple lighten-3" color="purple"
                            size="20" class="mx-5"></v-rating>
                        <v-divider class="mt-3"></v-divider>
                        <v-card-text>
                            <v-list>
                                <v-list-item v-for="list in hotel.lists" :key="list">
                                    <v-list-item-title>{{ list }}</v-list-item-title>
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
import { mapState } from 'vuex';

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
    }
}
</script>