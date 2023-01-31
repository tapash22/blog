<template>
<div class="travel-blog-detail">
    <v-row class="d-flex justify-center">
        <v-col cols="10" sm="10" lg="10" md="12" xl="12" class="pa-5">
            <v-card>
                <div class="image" style="width:100%;height:300px;">
                    <v-img :src="tours.image" max-height="300"  cover  />
                </div>
                
            </v-card>
        </v-col>
    </v-row>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';

export default {
    name: 'travelblogdetail',
    data() {
        return {
            text: false,
            id: this.$route.params.id,
        }
    },

    computed: {

        tours() {
            const id = this.id;
            return this.getProductById(id);
        },

        ...mapGetters('tour', {
            getProductById: 'getProductById',
            // getId : 'getId'
        }),

    },
    methods: {

        onHotel() {
            this.$router.push('/hotel');
        },
        onTransport() {
            this.$router.push('/transport');
        }
    }
}
</script>
