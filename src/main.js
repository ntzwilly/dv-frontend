import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import store from './assets/store'

let localAuthToken = localStorage.auth_token;
let cookiesExists = localAuthToken !== 'undefined' && localAuthToken !== null;
if(cookiesExists) {
  const auth_token = localStorage.getItem('auth_token');
  const authTokenExists = auth_token !== 'undefined' && auth_token !== null
  if(authTokenExists) {
    store.dispatch("loginUserWithToken", { auth_token });
  }
}


createApp(App).mount('#app')
