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
    data(){
        return{
            // panel:[],
            questions:[
                {
                    id:1,
                    question:'Booking Process?',
                    answer:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quaerat beatae culpa doloribus ut aliquam placeat repudiandae deserunt illo voluptatibus corrupti porro aut ipsa, amet sunt aperiam ea, omnis tempora ex. Ducimus praesentium totam beatae, deleniti unde dolores quos a maxime nostrum doloremque id aut explicabo delectus aliquid optio itaque!',
                },
                {
                    id:2,
                    question:'Does this hotel has resturent facility?',
                    answer:'Yes, This hotel have restaurent with continental food menu and train team of cook',
                },
                {
                    id:3,
                    question:'Kids policy?',
                    answer:'No charge are aplicable for kids, below 6 years (No food no charge policy.If guest take foods for kids an extra charge will be aplicable) -Kids above 6 years will be considers an adult will be charge full amount.',
                },
                {
                    id:4,
                    question:'what document are essential to carry?',
                    answer:'Please bring your National ID card if you are outside  from country, then bring your Passport please'
                },
            ]
        }
    }
}
</script>