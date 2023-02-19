<template>
<v-card elevation="4" rounded="lg">
    <v-card-title class="text-h6 font-weight-bold d-flex justify-center text-uppercase bg-red lignten-2">{{ packages.name }}</v-card-title>
    <v-card-text class="pa-0">
        <TheSlider :slides="packages.image" />
    </v-card-text>
    <v-card-text class="pa-0">
        <SinglePackageHotel :hotelinfo='packages' />
    </v-card-text>
    <v-card-actions class="d-flex justify-center bg-red-lighten-4">
        <router-link :to="{ name:'packagedetails', params:{id:packages.id}}" class="text-decoration-none text-black text-body-1  ">
            view details
        </router-link>
    </v-card-actions>
</v-card>
</template>

<script>
import TheSlider from '../TheSlider.vue';
import SinglePackageHotel from './SinglePackagehotel.vue';

export default {
    name: 'single-package',
    props: ['packages'],

    components: {
        TheSlider,
        SinglePackageHotel
    }
}
</script>
