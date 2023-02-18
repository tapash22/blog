<template>
    <div class="login">
        <v-container>
            <v-row>
                <v-col cols="12" md="6" sm="6" xl="6" lg="6" class="offset-3" >
                    <v-sheet elevation="10" rounded="lg" class="w-100 h-100 pa-2 bg-white-darken-1">
                        <form class="mx-5 my-5" >
                        <h2 class="pp text-center white--text">Login Form</h2>
                        <BaseInput name="Email" type="text" v-model="form.email" />
                        <BaseInput name="Password" type="password" v-model="form.password" />

                        <v-btn color="white" @click="loginForm" elevation="10" class="my-5 p">
                            Login
                        </v-btn>
                    </form>
                    </v-sheet>
                   
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>

<script>
import BaseInput from '../components/BaseInput.vue';;

export default {
    name:'login',
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    mounted(){
        window.scrollTo(0,0);
    },

    components: {
        BaseInput,
    },

    methods: {
        loginForm() {
            console.log(this.form);
            // this.$router.replace('/admin');
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sansita:wght@800&display=swap');

.pp {
    font-size: 1.5rem;
    font-weight: 800;
    font-family: 'Sansita', sans-serif;
}
.p {
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Sansita', sans-serif;
}
</style>