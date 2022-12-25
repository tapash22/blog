<template>
    <div class="the-navigation">
        <v-app-bar app>
            <v-app-bar-title class="text-red">Blog</v-app-bar-title>
            <!-- <v-text-field hide-details elevation="10"  variant="underlined" placeholder="search" prepend-inner-icon="mdi-magnify"
                clearable class="rounded-xl bg-red-lighten-1 px-2 y-3 w-25" color="yellow" solo dense></v-text-field> -->
            <!-- <v-text-field class="shrink" dense hide-details placeholder="search" rounded filled
                append-icon="mdi-magnify"> -->
            <!-- </v-text-field> -->

            
            <v-spacer></v-spacer>
            <v-menu location="bottom">
                <template v-slot:activator="{ props }">
                    <v-btn icon dark v-bind="props">
                        <v-icon class="text-h6" color="red">
                            mdi-wallet-travel
                        </v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item v-for="(item, index) in item" :key="index">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <v-app-bar-nav-icon class="text-red" @click="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" temporary location="right"
            class=" w-20 h-50 rounded-lg bg-white-lighten-5 opacity-1">
            <v-list :lines="false" density="compact">
                <v-list-item v-for="(item, i) in items" :key="i" :value="item" active-color="primary">
                    <template v-slot:prepend>
                        <v-icon size="large" :icon="item.icon" color="red"></v-icon>
                    </template>

                    <v-list-item-title class="text-body2 font-weight-bold" v-text="item.text"></v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'TheNavigation',
    data() {
        return {
            drawer: false,
            items: [
                { text: 'Dhaka', icon: 'mdi-bike-fast' },
                { text: 'Chittagong', icon: 'mdi-ferry' },
                { text: 'Rajshahi', icon: 'mdi-bike-fast' },
                { text: 'Sylhet', icon: 'mdi-terrain' },
                { text: 'Mymensingh', icon: 'mdi-terrain' },
                { text: 'Rangpur', icon: 'mdi-terrain' },
                { text: 'Khulna', icon: 'mdi-sail-boat' },
                { text: 'Barisal', icon: 'mdi-sail-boat' },
            ],
            item: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
        }
    }
}
</script>