Vue.component('click-counter', {
    // template: '<button v-on:click="count++">Contador {{count}}</button>',
    template: '#click-counter-template',
    data(){
        return {
            count: 0
        }
    }
})

new Vue({
    el: '#app'
})