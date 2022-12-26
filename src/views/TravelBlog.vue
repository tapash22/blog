<template>
    <div class="travel-blog">
        <v-container>
            <h2 class="d-flex justify-center text-h4 my-2">Travel</h2>
            <v-row class="d-flex">
                <v-col cols="12" lg="4" md="4" sm="6" xl="4" v-for="tour in tours" :key="tour.id">
                    <v-card>
                        <v-card-item class="h-80">
                            <video width="350" height="200" controls>
                                <source src='../assets/video.mp4' type="video/mp4">
                            </video>
                            <v-img class="w-100 pa-2 h-100" :src='tour.image'/>
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
import { mapState } from 'vuex';
export default {
    name: 'trave-lblog',

    computed:{
        ...mapState('tour',{
            tours:'tours'
        })
    },
    mounted() {
        window.scrollTo(0, 0);
    }
}
</script>