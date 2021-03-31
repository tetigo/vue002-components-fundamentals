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


new Vue({
    el: '#app',
    data: {
        plans: [
            'The Hacker',
            'The Curious',
            'The Single',
            'The Addict'
        ]
    }
})
