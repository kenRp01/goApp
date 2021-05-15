// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
	apiKey: 'YOUR_KEY',
	authDomain: 'YOUR_DOMAIN.firebaseapp.com',
  databaseURL: 'YOUR_DOMAIN.firebaseio.com',
  projectId: 'YOUR_ID',
  storageBucket: 'YOUR_BUCKET_ID.appspot.com',
  messageingSenderId: 'YOUR_SENDER_ID'
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
      el: "#app",
      router,
      componrnts: {App },
      template: '<App/>'
    })
  }
})
