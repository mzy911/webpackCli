import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import('../views/Home')
const About = () => import('../views/About')
const Derective = () => import('../views/Directive')

export default createRouter({
  history: createWebHistory(),
  routes: [
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
    }
  ]
})
