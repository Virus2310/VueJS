import Vue from 'vue'
import App from './App.vue'

Vue.component('counterBtn', {
    template:
     `<div>
        <h2>Рахунок: {{counter}}</h2>
        <button @click='add'>+1</button>
    </div>`,
    data: function() {
        return {
            counter: 0
        }
    },
    methods: {
        add: function() {
            this.counter++;
        }
    }
})

new Vue({
    el: '#app',
})


