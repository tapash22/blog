<template>
<div class="hotel-room">
    <!-- <router-link :to="{ name: 'roomdetails', params: { room_id: h_room.id } }" class="text-decoration-none offset-3"> -->
    <v-list class="list my-2" v-for="hroom in hotel_rooms" :key="hroom.id">
        <v-list-item class="pa-3">
            <v-img :src="hroom.image" cover />
        </v-list-item>
        <v-list-item class="d-block">
            <v-list-item-tile class="my-5 text-h6 text-uppercase text-orange">{{ hroom.room }}</v-list-item-tile>
            <v-list-item-content class="title">
                <v-list-item-title class="d-block text-body-2 " v-for="list in hroom.services" :key="list.id">
                    <v-icon size="20" color="orange">
                        {{ list.icon }}
                    </v-icon>
                    <span class="text-body-2 mx-1"> {{ list.text }}</span>
                </v-list-item-title>
            </v-list-item-content>

        </v-list-item>

        <v-list-item class="bottom">
            <p class="text-black">{{ hroom.price }}</p>
            <v-rating v-model="hroom.rating" size="18" color="orange"></v-rating>
            <v-btn color="orange" class="my-10 pa-2">
                Booking
            </v-btn>
        </v-list-item>

    </v-list>
    <!-- </router-link> -->
</div>
</template>

<script>
export default {
    name: 'hotel-room',
    props: ['hotel_rooms'],
}
</script>

<style scoped>
.list {
    display: grid;
    grid-template-columns: 1fr 3fr 120px;
    grid-gap: 5px;
    height: 200px;
    background: rgba(128, 128, 128, 0.315);
    padding: 0;
    margin: 0;

}

.title {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(30px);
    grid-gap: 5px;
    margin-top: 20px;
}
.bottom{
    display:flex;
    justify-content: space-between;
}

@media only screen and (max-width: 600px) {
    .list {
        display: grid;
        grid-template-columns: 1fr ;
        grid-template-rows: 100px 250px 100px;
        grid-gap: 5px;
        height: auto;
        box-shadow: 0 0 2px red;
        padding: 0;
        margin: 0;

    }

    .title {
        display: grid;
        grid-template-columns: 1fr ;
        grid-template-rows: repeat(30px);
        grid-gap: 5px;
        margin-top: 20px;
        height: 150px;
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .bottom{
    display:block;
    justify-content: space-between;
}
}
</style>
