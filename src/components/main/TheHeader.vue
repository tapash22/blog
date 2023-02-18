<template>
<div class="the-header">
    <v-container>
        <v-row class="d-flex ">
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="d-flex justify-center">
                <v-sheet color="" width="100%" class="d-flex">
                <p class="text-red text-h2  align-self-center ">{{ title }}</p>
                </v-sheet>

            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" class="d-block ">
                <div class="div">
                    <div class="image">
                        <v-img v-for="image in images" :key="image" :src="image" cover class="rounded-lg img" />
                    </div>
                </div>

            </v-col>
        </v-row>
    </v-container>

</div>
</template>

<script>
export default {
    name: 'theheader',
    data() {
        return {
            title: 'Beauty OF Bangladesh',
            images: [
                'https://i.ibb.co/DpFvPNR/edvin-johansson-rlw-E8f8an-Oc-unsplash.jpg',
                'https://i.ibb.co/vh8FDh1/francesca-saraco-d-S27-XGg-Ry-Q-unsplash.jpg',
                'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg',
                'https://i.ibb.co/kg6nZ25/qui-nguyen-gi-L2f-HNr3-Lc-unsplash.jpg'
            ]
        }
    }
}
</script>

<style scoped>
.div {
    display: flex;
    justify-content: center;
}

.image {
    display: grid;
    grid-template-columns: 300px 300px;
    grid-gap: 5px;
    grid-template-rows: repeat(2, 150px);
}

@media only screen and (max-width: 600px) {
    .div {
        display: flex;
        justify-content: end;
    }

    .image {
    display: none;
}
}
</style>
