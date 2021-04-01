Vue.component('todo-item', {
    template: "#todo-item-component",
    data(){
        return{
            completed: false
        }
    }
})

new Vue({
    el: "#app"
})