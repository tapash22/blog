<template>
    <div class="the-footer">
        <v-footer class="d-block ma-0 pa-0">
            <div class="bg-red-darken-2 w-100 d-flex px-4">

                <div class="d-block pa-5 w-2/3">
                    <strong class="text-h4 text-weight-lg">Introduce Your Journey</strong>
                    <p class="text-justify text-body1 my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem modi saepe
                        placeat amet in sed praesentium tempora nisi. Dolorum illum tenetur aut exercitationem sunt iure numquam hic.
                        Corrupti, tempore deleniti.</p>
                </div>

                <div class="w-1/3 pa-3 d-flex mt-10">
                    <v-btn v-for="icon in icons" :key="icon" class="mx-1 bg-white my-1" color="red" :icon="icon" 
                        size="large"></v-btn>
                </div>

            </div>

            <div class="px-4 py-2 bg-red text-center text-h6 w-100">
                {{ new Date().getFullYear() }} <strong>Blog</strong>
            </div>
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