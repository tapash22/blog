<template>
    <div class="hotel-information">
        <v-expansion-panels multiple>
            <v-expansion-panel v-for="question in questions" :key="question.id" class="my-2" elevation="0" >
                <v-expansion-panel-title class="text-body-1 font-weight-bold ">{{ question.question }}</v-expansion-panel-title>
                <v-expansion-panel-text class="text-body-2 text-justify"> {{ question.answer }}</v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
export default {
    name:'hotel-information',
    props:['questions'],
    data(){
        return{
            // panel:[],

        }
    }
}
</script>