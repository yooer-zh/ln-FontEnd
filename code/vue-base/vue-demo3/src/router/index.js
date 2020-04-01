import Vue from 'vue'
import Router from 'vue-router'
// import Home from 'pages/home'
// import Cart from 'pages/cart'
// import Category from 'pages/category'
// import Personal from 'pages/personal'
// import Product from 'pages/product'

Vue.use(Router)

const routes = [
  {
    name: 'home',
    path: '/home',
    component: () => import('pages/home'),
    children: [
      {
        name: 'home-product',
        path: 'product/:id',
        component: () => import('pages/product')
      }
    ]
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('pages/cart')
  },
  {
    name: 'category',
    path: '/category',
    component: () => import('pages/category')
  },
  {
    name: 'personal',
    path: '/personal',
    component: () => import('pages/personal')
  },
  {
    path: '*',
    redirect: '/home'
  }
]

export default new Router({
  routes
})
