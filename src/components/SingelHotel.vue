<template>
<div class="single-hotel">
    <router-link :to="{ name:'fullhotel', params: { id: hotel.id } }" class="text-decoration-none">
        <v-card class="rounded-lg bg-red-lighten-1" elevation="10">
            <v-img :src="hotel.image" height="200" cover />
            <v-card-title class="text-body-1 font-weight-bold text-uppercase pa-1 my-1">{{ hotel.name }}</v-card-title>
            <v-rating v-model="hotel.rating" size="18" readonly class="mx-2 pa-0 " color="orange" />
            <v-card-text class="d-flex">
                <v-row class="d-flex justify-center">
                    <v-col v-for="list in hotel.lists" :key="list" class="pa-1 ">
                        <v-chip class=" d-flex justify-center text-body-2 bg-white " color="red">
                            {{ list }}
                        </v-chip>
                    </v-col>
                </v-row>
            </v-card-text>

            <v-card-text class="pa-0 ">
                <v-card-title class="text-body-1 font-weight-bold pa-1 mx-2" color="black">
                    Tk.{{ hotel.price }}
                </v-card-title>

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
