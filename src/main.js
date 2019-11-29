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
  apiKey: 'AIzaSyAwJDVC1trgg5y6rKUrX8WrmIMAGbRm5zQ',
  authDomain: 'mast-foot-877a5.firebaseapp.com',
  databaseURL: 'https://mast-foot-877a5.firebaseio.com',
  projectId: 'mast-foot-877a5',
  storageBucket: 'mast-foot-877a5.appspot.com',
  messagingSenderId: '474113088021',
  appId: '1:474113088021:web:38c011bd6c994c21f04c1c'
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
