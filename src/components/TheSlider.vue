<template>
    <v-carousel height="200" cycle delimiter-icon="mdi-circle" color="white" :show-arrows="false">
        <v-carousel-item v-for="slide in slides" :key="slide" >
           <v-img :src="slide" cover />
        </v-carousel-item>
    </v-carousel>

</template>

<script>
export default {
    name: 'the-slider',
    props:['slides']

}
</script>