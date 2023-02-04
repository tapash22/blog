<template>
    <div class="the-navigation">
        <v-app-bar  sm="12" md="12" cols="12" xl="12" xs="12" >
            <v-app-bar-title class="text-red"><router-link to="/home"
                    class="text-decoration-none text-red">Blog</router-link></v-app-bar-title>
            <v-spacer></v-spacer>
            <v-menu location="bottom">
                <template v-slot:activator="{ props }">
                    <v-btn icon dark v-bind="props">
                        <v-icon class="text-h6" color="red">
                            mdi-wallet-travel
                        </v-icon>
                    </v-btn>
                </template>
                <MIniCard :item="item "/>
             
            </v-menu>
            <!-- <v-app-bar-nav-icon class="text-red" @click="drawer = !drawer"></v-app-bar-nav-icon> -->
        </v-app-bar>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import MIniCard from './MIniCard.vue';
export default {
    name: 'TheNavigation',
    // data() {
    //     return {
    //         drawer: false,
    //     }
    // },

    components: {
        MIniCard,
    }
}
</script>