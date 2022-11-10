import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import('../views/Home')
const About = () => import('../views/About')
const Derective = () => import('../views/Directive')
const Store = () => import('../views/Store')
const Composition = () => import('../views/Composition')

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/directive',
      component: Derective
    },
    {
      path: '/store',
      component: Store
    },
    {
      path: '/composition',
      component: Composition
    }
  ]
})
