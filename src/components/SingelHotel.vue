<template>
    <div class="single-hotel">
        <router-link :to="{ name: 'hoteldetails', params: { id: hotel.id } }" class="text-decoration-none">
            <v-card class="rounded-lg" elevation="10">
                <v-img class="w-100 h-50 pa-2" src="../assets/hotel.jpg" />
                <v-card-title class="text-h6  text-uppercase">{{ hotel.name }}</v-card-title>

                <v-card-text class="pa-0 bg-red-darken-2">
                    <v-card-title class="text-h5 text-weight-bold" color="black">
                        Price: {{ hotel.price }}
                    </v-card-title>
                    <v-rating v-model="hotel.rating" size="20" readonly class="mx-5" color="white" />
                </v-card-text>

                <v-card-text class="d-flex">
                    <v-row class="d-flex justify-center">
                        <v-col v-for="list in hotel.lists" :key="list">
                            <v-chip class=" d-flex justify-center text-body-1 bg-red-darken-1 " color="white">
                                {{ list }}
                            </v-chip>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'single-hotel',
    props: ['hotel'],
}
</script>