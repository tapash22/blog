<template>
    <div class="package-details">
        <v-card elevation="10" rounded="lg">

            <v-card-title class=" w-100 bg-red-lighten-1 text-center text-body-1 font-weight-bold">
                {{ packages.name }}
            </v-card-title>

            <v-card-text class="my-1">
                <div class="d-flex justify-center align-center">
                    <v-avatar size="64" class=" pa-2 bg-red">
                        <v-icon class="text-h4 text-weight-bold icon" color="white">
                            mdi-{{ packages.icon }}
                        </v-icon>
                    </v-avatar>
                </div>
                <div class="d-flex justify-center">
                    <p class="text-body-1 text-weight-bold text-justify my-1 mx-5">
                        {{ packages.des }}
                    </p>
                </div>
            </v-card-text>

            <v-card-actions class="d-flex justify-center bg-red-lighten-1 pa-0">
                <router-link :to="packages.link" class="text-body-2 text-decoration-none text-white">
                    Details
                </router-link>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'package-details',
    props: ['packages'],
    data() {
        return {
            // id: ''
        }
    },
    methods: {
        getPage() {
            console.log('click')
        }
    }
}
</script>

<style scoped>
.v-card-actions{
    min-height:40px!important;
}
</style>