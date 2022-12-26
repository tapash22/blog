<template>
    <div class="home">
        <v-row class="pa-0 ma-0">
            <v-col cols="12" lg="12" md="12" xl="12">
                <TheSlider />
            </v-col>
        </v-row>
        <v-container>
            <v-row class="w-100 d-block">
                <v-col cols="12" lg="12" md="12" sm="12" xl="12" class="d-flex justify-center my-5">
                    <v-sheet class="pa-2 w-75 h-25 d-block justify-center mt-10 bg-white" rounded="lg">
                        <h2 class="pp text-center mt-2 text-red">Round Trip</h2>
                        <Datepicker v-model="date" range week-start="0" calendar-cell-class-name="dp-custom-cell"
                            :auto-position="true" class="my-2 pa-2 mx-0 " placeholder="select date"></Datepicker>
                        <v-btn class="text-h6 d-flex justify-center w-50 offset-3 my-3" elevation="10"
                            @click="onSearch">
                            search
                        </v-btn>
                    </v-sheet>

                </v-col>
            </v-row>
            <v-sheet class="w-100 h-25 d-flex justify-space-between my-2 pa-2" rounded="lg" elevation="1">
                <v-card-title class=" text-red-lighten-1 text-h5">Recent tour</v-card-title>
                <v-btn elevation="6" class="bg-red" @click="viewAll">View all</v-btn>
            </v-sheet>
            <v-row class="w-100 d-flex justify-center my-5">
                <v-col cols="12" lg="4" md="4" sm="12" xl="4" v-for="tour in tours" :key="tour.id">
                    <TourDetails :tour="tour" />
                </v-col>
            </v-row>

            <v-sheet class="w-100 h-25 d-flex justify-center my-5 pa-2" rounded="lg" elevation="1">
                <h2 class="text-h4">Package</h2>
            </v-sheet>

            <!-- <v-divider class="w-25 bg-red offset-4"></v-divider> -->

            <v-row class="my-5">
                <v-col cols="12" lg="4" md="4" sm="12" xl="4" v-for="packages in packagess" :key="packages.id">
                 <PackageDetails :packages="packages"/>
                </v-col>

                <v-col cols="12" md="4" lg="4" xl="4" sm="12" class="pa-10">
                    <v-sheet elevation="10" class="my-10 mx-auto pa-5 mt-16" rounded="xl">
                        <v-progress-circular :rotate="360" :size="80" :width="10" :model-value="value" color="red"
                            class="offset-4 my-5">
                            {{ value }}
                        </v-progress-circular>
                        <p class="text-h6 text-center pa-5">
                            You can choose any package, what do you want!
                        </p>

                    </v-sheet>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
import TheSlider from '../components/TheSlider.vue';
import PackageDetails from '../components/PackageDetails.vue';
import TourDetails from '../components/TourDetils.vue';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import { mapState } from 'vuex';

export default {
    name: 'home',
    data() {
        return {
            date: '',
            textInputOptions: 'MM.dd.yyyy HH:mm',
            dialog: false,
            interval: {},
            value: 0,
        }
    },

    mounted() {
        this.interval = setInterval(() => {
            if (this.value === 100) {
                return (this.value = 0)
            }
            this.value += 1
        }, 100)
    },
    computed: {
        ...mapState('tour', {
            tours: 'tours',
            packagess: 'packagess'
        })
    },
    components: {
        TheSlider,
        Datepicker,
        TourDetails,
        PackageDetails
    },

    methods: {
        viewAll() {
            this.$router.replace('/travelblog');
            console.log('routed works');
        },
        onSearch() {
            this.$router.push('/trip')
        },
        getPage(id) {
            if (id === 1) {
                this.$router.push('/transport');
            } else {
                this.$router.push('/hotel');
            }
        }
    }

}
</script>]

<style>
@import url('https://fonts.googleapis.com/css2?family=Sansita:wght@800&display=swap');

.dp-custom-cell {
    border-radius: 50%;
}

.pp {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'Sansita', sans-serif;
}

.p {
    font-size: 1.8rem;
    font-weight: 400;
    font-family: 'Sansita', sans-serif;
}

.p2 {
    font-size: 1.5rem;
    font-weight: 500;
    font-family: 'Sansita', sans-serif;
}

.rounded {
    border-radius: 50%;
}
</style>