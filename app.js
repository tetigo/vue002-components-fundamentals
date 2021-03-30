Vue.component('click-counter', {
    template: '<button v-on:click="count++">Contador {{count}}</button>',
    data(){
        return {
            count: 0
        }
    }
})

new Vue({
    el: '#app'
})