Vue.component('plan', {
    template: '#plan-template',
    // props: ['name'],

    // props: {
    //     name: String,
    // },

    props: {
        name: {
            type: String,
            default: 'Tiago The Great',
            required: true
        }
    }
})

Vue.component('plan-picker', {
    template: '#plan-picker-template',
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
