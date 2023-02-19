<template>
<div class="hotel-header">
    <v-card>
        <v-card-text class="card-header bg-red-lighten-5">
            <div class="first">
                <v-img :src="hotels.image1" height="420" cover />
            </div>

            <div class="second" >
                <v-img v-for="img in hotels.image" :key="img" :src="img" height="200" cover class="rounded" />
            </div>
        </v-card-text>

        <v-card-text>
            <v-card-title class="text-h6 font-weight-bold">{{ hotels.name }}</v-card-title>
            <v-card-subtitle class="d-flex justify-space-between">
                <v-rating v-model="hotels.rating" size="18" half-increments color="orange" class="mx-5" />
                <v-icon color="red" class="mx-2">mdi-map-marker</v-icon>
                <span class="text-black">{{ hotels.location }}</span>
                <v-spacer></v-spacer>
                <v-btn icon @click="heart =! heart" elevation="0">
                    <v-icon color="red" v-if="heart">mdi-heart</v-icon>
                    <v-icon color="red" v-else>mdi-heart-outline</v-icon>
                </v-btn>

            </v-card-subtitle>
        </v-card-text>
    </v-card>
</div>
</template>

<script>
export default {
    name: 'hotel-headers',
    props: ['hotels'],
    data() {
        return {
            heart: false,
        }
    }

}
</script>

<style scoped>
.card-header {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-gap: 5px;
}

.card-header .second {
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(2, 200px);
    grid-gap: 5px;
}



@media only screen and (max-width: 600px) {
    .card-header {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5px;
    }

    .card-header .second {
        padding: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(2, 200px);
        grid-gap: 5px;
    }
}
</style>
