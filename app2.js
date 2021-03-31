
//usado somente localmente, não precisa ser Vue.component
//pois cria globalmente e fica em memoria sem necessidade
let planComponent=  {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            default: 'Tiago The Great',
            required: true
        }
    }
}

// now planComponent registered locally
Vue.component('plan-picker', {
    template: '#plan-picker-template',
    components: {
        plan: planComponent,
    },
    data() {
        return {
            plans: [
                'The Hacker',
                'The Curious',
                'The Single',
                'The Addict'
            ]
        }
    }
})


new Vue({
    el: '#app',
   
})
