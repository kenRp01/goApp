import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Signin from '@/components/Signin'
import Signup from '@/components/Signup'
import firebase from 'firebase'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirevct: 'signin'
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      // 認証が必要か判断する
      meta: {requiresAuth: true }
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ]
})

// router.beforeEach()を追加
router.beforeEach((to, from, next) => {
  // 現在ログインしているユーザーを返却
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  // ユーザーが存在しない場合signinへ
  if (requiresAuth && !currentUser) next('signin')
  else if (!requiresAuth && currentUser) next()
  else next()
})

export default router
