import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueTextareaAutosize);
Vue.config.productionTip = false

firebase.initializeApp(
  {
    apiKey: "AIzaSyCIjJ_JsxfbhKtmotjTo8wEbn6GsJQvrO0",
    authDomain: "vue-calendar-734b6.firebaseapp.com",
    databaseURL: "https://vue-calendar-734b6.firebaseio.com",
    projectId: "vue-calendar-734b6",
    storageBucket: "vue-calendar-734b6.appspot.com",
    messagingSenderId: "504985721617",
    appId: "1:504985721617:web:3fbc591f7fe3e1e241cab0",
    measurementId: "G-Q1NG4MC0KS"
  }
);

export const db=firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
