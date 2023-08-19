import { createApp } from 'vue'
//import * as Vue from 'vue' 
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'

createApp(App)
.mount('#app')
.use(VueAxios, axios)
