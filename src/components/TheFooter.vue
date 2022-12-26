<template>
    <div class="the-footer">
        <v-footer class="d-block ma-0 pa-0">
            <v-row class="d-flex w-100 bg-red-darken-2">
                <v-col cols="12" sm="12" lg="8" md="8" xl="8">
                    <div class="d-block pa-5">
                        <strong class="text-h4 text-weight-lg">Introduce Your Journey</strong>
                        <p class="text-justify text-body1 my-5">Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit.
                            Rem modi saepe
                            placeat amet in sed praesentium tempora nisi. Dolorum illum tenetur aut exercitationem sunt
                            iure
                            numquam hic.
                            Corrupti, tempore deleniti.</p>
                    </div>
                </v-col>

                <v-col cols="12" sm="12" lg="4" md="4" xl="4">
                    <div class=" d-flex justify-center align-center">
                        <v-btn v-for="icon in icons" :key="icon" class="mx-1 bg-white my-1 mx-smAndDown-3" color="red" :icon="icon"
                            size="large"></v-btn>
                    </div>
                </v-col>

            </v-row>
        </v-footer>
    </div>
</template>

<script>
export default {
    data: () => ({
        icons: [
            'mdi-facebook',
            'mdi-twitter',
            'mdi-linkedin',
            'mdi-instagram',
        ],
    }),
}
</script>