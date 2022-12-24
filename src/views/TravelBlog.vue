<template>
    <div class="travel-blog">
        <v-container>
            <h2 class="d-flex justify-center text-h4 my-2">Travel</h2>
            <v-row class="d-flex">
                <v-col cols="12" lg="4" md="4" sm="6" xl="4" v-for="tour in tours" :key="tour.id">
                    <v-card>
                        <v-card-item class="h-80">
                            <video width="350" height="200" controls>
                                <source src='../assets/video2.mp4' type="video/mp4">
                            </video>
                            <!-- <v-img class="w-100 pa-2 h-100" :src="tour.image" /> -->
                        </v-card-item>
                        <v-card-text class="h-20">
                            <v-card-title>{{ tour.name }}</v-card-title>
                            <v-card-subtitle>{{ tour.date }}</v-card-subtitle>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col>

                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>
export default {
    name: 'trave-lblog',

    data() {
        return {
            tours: [
                {
                    id: 1,
                    name: 'travaling to cox bazzer',
                    date: new Date(),
                    image: 'https://i.ibb.co/5YVBDG0/bus.jpg'
                },

                {
                    id: 2,
                    name: 'travaling to jaflong',
                    date: new Date(),
                    image: 'https://i.ibb.co/5YVBDG0/bus.jpg'
                },
                {
                    id: 3,
                    name: 'travaling to Bandorbon',
                    date: new Date(),
                    image: 'https://i.ibb.co/5YVBDG0/bus.jpg'
                },
                {
                    id: 4,
                    name: 'travaling to sundorbon',
                    date: new Date(),
                    image: 'https://i.ibb.co/5YVBDG0/bus.jpg'
                },
                {
                    id: 5,
                    name: 'travaling to cox bazzer',
                    date: new Date(),
                    image: 'https://i.ibb.co/5YVBDG0/bus.jpg'
                },

                {
                    id: 6,
                    name: 'travaling to jaflong',
                    date: new Date(),
                    image: 'https://i.ibb.co/5YVBDG0/bus.jpg'
                },
                {
                    id: 7,
                    name: 'travaling to Bandorbon',
                    date: new Date(),
                    image: 'https://i.ibb.co/5YVBDG0/bus.jpg'
                },
                {
                    id: 8,
                    name: 'travaling to sundorbon',
                    date: new Date(),
                    image: 'https://i.ibb.co/5YVBDG0/bus.jpg'
                },
                {
                    id: 9,
                    name: 'travaling to Borisal',
                    date: new Date(),
                    image: 'https://i.ibb.co/5YVBDG0/bus.jpg'
                },
            ]
        }
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>