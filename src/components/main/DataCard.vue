<template>
<div class="date-card">
    <v-card class="card">
        <v-card-text class="d-flex justify-space-between">
            <v-card-subtitle class="text-body-1">From <span class="text-h6 font-weight-bold mx-1 text-black">9,999</span>(per night)</v-card-subtitle>
            <v-card-title class="text-body-2">(4)<v-icon color="orange" size="20">mdi-star</v-icon>
            </v-card-title>
        </v-card-text>
        <v-card-text class="d-flex justify-center">
            <GlobalSearch />
        </v-card-text>

    </v-card>
</div>
</template>

<script>
import GlobalSearch from './GlobalSearch.vue';
export default {
    name:'date-card',

    components:{
        GlobalSearch,
    }

}
</script>

<style scoped>
.date-card {
    position: sticky;
    top: 100px;
}
</style>