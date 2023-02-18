<template>
<div class="home">
    <!-- <v-row class="pa-0 ma-0">
        <v-col cols="12" lg="12" md="12" xl="12"> -->
           <TheHeader />
        <!-- </v-col>
    </v-row> -->
    <v-container>
        <v-row class="w-100 d-block pa-0 ma-0">
            <v-col cols="12" lg="12" md="12" sm="12" xl="12" class="d-flex justify-center">
                <GlobalSearch />
            </v-col>
        </v-row>
        <!-- start tour -->
        <v-sheet class="w-100 h-25 d-flex justify-space-between my-2" rounded="lg">
            <h3 class=" text-red-lighten-1 text-h6 font-weight-bold">Recent tour</h3>
            <v-btn elevation="6" class="bg-red text-body-1 " @click="viewAll">view all</v-btn>
        </v-sheet>

        <v-row class=" d-flex justify-center my-2">
            <v-col cols="12" lg="4" md="4" sm="12" xl="4" v-for="index in countLength" :key="index">
                <TourDetails :tours="tours[index - 1]" />
            </v-col>
        </v-row>
        <!-- end tour -->

        <!--start packages  -->
        <v-sheet class="w-100 h-25 d-flex justify-center my-2" rounded="lg">
            <h3 class="text-h6 font-weight-bold text-red-lighten-1">Package</h3>
        </v-sheet>
        <v-row class="my-2">
            <v-col cols="12" lg="4" md="4" sm="12" xl="4" v-for="packages in packagess" :key="packages.id">
                <PackageDetails :packages="packages" />
            </v-col>

            <v-col cols="12" md="4" lg="4" xl="4" sm="12" class=" d-flex justify-center">
                <v-img src="https://i.ibb.co/vP60CQb/10476-removebg-preview.png" width="90%" />
            </v-col>
        </v-row>
         <!--end packages  -->
    </v-container>


</div>
</template>

<script>
import GlobalSearch from '../components/main/GlobalSearch.vue';
import TheSlider from '../components/TheSlider.vue';
import PackageDetails from '../components/package/PackageDetails.vue';
import TourDetails from '../components/TourDetails.vue';
import TheHeader from '../components/main/TheHeader.vue';
// import MakeStarDynamic from '../components/MakeStarDynamic.vue';

import {
    mapState
} from 'vuex';

export default {
    name: 'home',
    data() {
        return {
            textInputOptions: 'MM.dd.yyyy HH:mm',
            dialog: false,
            interval: {},
            value: 0,
            icons: true,
        }
    },
    mounted(){
        window.scrollTo(0,0);
    },

    // mounted() {
    //     this.interval = setInterval(() => {
    //         if (this.value === 100) {
    //             return (this.value = 0)
    //         }
    //         this.value += 1
    //     }, 100)
    // },

    computed: {
        ...mapState('tour', {
            tours: 'tours',
            packagess: 'packagess'
        }),

        countLength() {
            return Math.min(3, this.tours.length);
        }
    },
    components: {
        TheSlider,
        TourDetails,
        PackageDetails,
        GlobalSearch,
        TheHeader
        // MakeStarDynamic for dynamic star
    },

    methods: {
        viewAll() {
            this.$router.replace('/travelblog');
            console.log('routed works');
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

.rat {
    color: green;
}

.image{
 width:500px;
height: 250px;
margin-left:-200px;
background-size: cover;
}
</style>
