<template>
    <div class="filter-view">
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title class="text-h6 ">name</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn text>
                login
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" temporary>
            <v-list class="d-block">
                <v-list-item v-for="slider in sliders" :key="slider.id">
                    <h2 class="my-1 text-h6">{{ slider.name }}</h2>
                    <v-slider v-model="slider.slider" :step="slider.step" class="align-center" :max="slider.max"
                        :min="slider.min" hide-details>
                        <template v-slot:append>
                            <v-text-field v-model="slider.slider" density="compact" variant="outlined" hide-details class="mt-0 pt-0"
                                single-line type="number" style="width: 90px"></v-text-field>
                        </template>
                    </v-slider>
                </v-list-item>
                <v-list-item-action class="my-5 d-flex justify-center">
                    <v-btn color="red" @click="drawer = false">
                        filter
                    </v-btn>
                </v-list-item-action>
            </v-list>

        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            sliders: [
                {
                    id: 1,
                    name: 'Price',
                    min: 50,
                    max: 10000,
                    slider: 400,
                    step: 10
                },
                {
                    id: 2,
                    name: 'Room',
                    min: 1,
                    max: 10,
                    slider: 1,
                    step: 1
                },
                {
                    id: 3,
                    name: 'Person',
                    min: 1,
                    max: 30,
                    slider: 2,
                    step: 1
                },

            ]
        }
    }
}
</script>