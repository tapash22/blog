<template>
<div class="tourpackage">
    <v-container>
        <v-row class="my-5">
            <v-col cols="6" sm="6" md="3" lg="3" xl="3" v-for="packages in packageinfo" :key="packages.id">
                <SinglePackage :packages="packages" />
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
import SinglePackage from '../components/package/SinglePackage.vue';

export default {
    name: 'tourpackage',
    computed: {
        ...mapState('packages', {
            // buses:'buses',
            packageinfo: 'packageinfo'
        }),
    },
    components: {
        SinglePackage,
    }
}
</script>
