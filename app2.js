let planPickerItemComponent=  {
    template: '#plan-template',
    props: {
        name: {
            type: String,
            default: 'Tiago The Great',
            required: true
        },
        selectedPlan: {
            type: String,
        }
    },
    computed:{
        isSelected(){
            return this.name === this.selectedPlan
        }
    },
    methods: {
        select(){
            this.$emit('select', this.name)
        }
    }
}

let planPickerComponent =  {
    template: '#plan-picker-item-template',
    components: {
        'plan-picker-item': planPickerItemComponent,
    },
    data() {
        return {
            plans: [
                'The Hacker',
                'The Curious',
                'The Single',
                'The Addict'
            ],
            selectedPlan: null
        }
    },
    methods:{
        selectPlan(plan){
            this.selectedPlan = plan;
        }
    }
}


new Vue({
    el: '#app',
    components: {
        "plan-picker": planPickerComponent
    }
})
