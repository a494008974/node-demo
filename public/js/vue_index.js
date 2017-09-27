import Vue from 'vue';
window.Vue = Vue;
require('./iview');

import Hello from './components/Hello.vue';
Vue.component('hello',Hello);

const app = new Vue({
    el: '#root'
});
