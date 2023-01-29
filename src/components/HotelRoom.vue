<template>
<div class="hotel-room">
    <router-link :to="{ name: 'roomdetails', params: { room_id: h_room.id } }" class="text-decoration-none offset-3">
        <v-list class="d-flex ">
            <v-list-item class="w-100" elevation="10">
                <v-list-item-title class="text-h5 text-red text-center pa-2">
                    {{ h_room.room_name }}
                </v-list-item-title>
                <v-img class="w-100 h-50" src="../assets/hotel2.jpg" />
                <div class="d-flex justify-center pa-2">
                    <v-chip icon v-for="chipe in h_room.chipes" :key="chipe" class="mx-2 d-flex justify-space-evenly  text-body-2 bg-red-darken-1 " color="white">
                        <v-icon right class="">
                            mdi-{{ chipe.icon }}
                        </v-icon>
                        {{ chipe.room_n }}
                    </v-chip>
                </div>

            </v-list-item>
        </v-list>
    </router-link>
</div>
</template>

<script>
export default {
    name: 'hotel-room',
    props: ['h_room']
}
</script>
