import './js/common.js';
import './scss/style.scss';

window.Vue = require('vue/dist/vue.js');
Vue.component('example-component', require('./components/Example.vue').default)
const app = new Vue({
    el: '#app'
})