import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/User.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    meta:{showTabBar:true},
    component: Home
  },
  {
    path:'/user',
    name:'user',
    meta:{showTabBar:true},
    component:() => import(/* webpackChunkName: "about" */ '../views/User.vue')
  },
  {
    path:'/order',
    name:'order',
    meta:{showTabBar:true},
    component:() => import(/* webpackChunkName: "about" */ '../views/Order.vue')
  },
  {
    path:'/address',
    name:'address',
    meta:{showTabBar:true},
    component:() => import(/* webpackChunkName: "about" */ '../views/Address.vue')
  },
  {
    path:'/wait',
    name:'wait',
    meta:{showTabBar:true},
    component:() => import(/* webpackChunkName: "about" */ '../views/Wait.vue')
  },
  //二级导航页
  {
    path:'/Approve',
    name:'Approve',
    meta:{showTabBar:false},
    component:() => import(/* webpackChunkName: "about" */ '../views/SecondViews/Approve.vue')
  },
  {
    path:'/Bill',
    name:'Bill',
    meta:{showTabBar:false},
    component:() => import(/* webpackChunkName: "about" */ '../views/SecondViews/Bill.vue')
  },
  {
    path:'/Pay',
    name:'Pay',
    meta:{showTabBar:false},
    component:() => import(/* webpackChunkName: "about" */ '../views/Other/Pay.vue')
  },
  {
    path:'/ToChat',
    name:'ToChat',
    meta:{showTabBar:false},
    component:() => import(/* webpackChunkName: "about" */ '../views/Other/Chat.vue'),
    props: route => ({ userId: route.query.userId })
  },
]

const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  routes
})

export default router
