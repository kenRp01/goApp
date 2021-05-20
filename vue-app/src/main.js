// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyBWd14opK0hjb3OaIpNbO9GmxQCZKRlQYw',
  authDomain: 'goapp-6672a.firebaseapp.com',
  projectId: 'goapp-6672a',
  storageBucket: 'goapp-6672a.appspot.com',
  messagingSenderId: '1022367745914',
  appId: '1:1022367745914:web:50555346b1ea51747ff8c3',
  measurementId: 'G-BX5WNYHPL8'
}
firebase.initializeApp(config)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

let app

// ログイン後のブラウザ更新対策
firebase.auth().onAuthStateChanged(user => {
  /* eslint-disable no-new */
  if (!app) {
    new Vue({
      el: '#app',
      router,
      components: { App },
      template: '<App/>'
    })
  }
})
