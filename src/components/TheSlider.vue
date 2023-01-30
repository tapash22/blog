<template>
    <v-carousel height="400" hide-delimiters progress="primary">
        <v-carousel-item v-for="slide in slides" :key="slide.id" :src="slide.image" cover>
           <div v-if="slide.name" class="d-flex justify-center h-100 align-end ">
            <p class="text-h4 font-weight-bold text-green text-uppercase pa-5 bg-white-lighten-1 rounded-xl ">{{ slide.name}}</p>
           </div>
        </v-carousel-item>
    </v-carousel>

</template>

<script>
export default {
    name: 'the-slider',
    props:['slides']

}
</script>