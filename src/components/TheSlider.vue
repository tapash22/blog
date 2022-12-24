<template>
    <v-carousel height="400" hide-delimiters progress="primary">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
            <v-sheet height="100%" :color="colors[i]">
                <div class="d-flex fill-height justify-center align-center">
                    <div class="text-h2">
                        {{ slide }} Division
                    </div>
                </div>
            </v-sheet>
        </v-carousel-item>
    </v-carousel>

</template>

<script>
export default {
    name: 'slider',

    data() {
        return {
            slides: [
                'Dhake',
                'Chattogong',
                'Rajshahi',
                'Khulna',
                'Sylhet',
            ],
            colors: [
                'red',
                'blue',
                'green',
                'yellow',
                'orange'
            ]
        }
    }

}
</script>