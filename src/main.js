// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import firebase from 'firebase'

Vue.use(Buefy)
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyA0xUc_JeTSC5b9KfVWZ5jvI24agOT4BvY',
  authDomain: 'cctapp-50940.firebaseapp.com',
  databaseURL: 'https://cctapp-50940.firebaseio.com',
  projectId: 'cctapp-50940',
  storageBucket: 'cctapp-50940.appspot.com',
  messagingSenderId: '938745634097',
  appId: '1:938745634097:web:65436ad8e708b2117de410',
  measurementId: 'G-2VGM610J7M'
}
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },

  template: '<App/>'
})
