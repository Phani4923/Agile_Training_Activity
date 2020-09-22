import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TodoApp from '../components/TodoApp'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/app',
    name: 'TodoApp',
    component: TodoApp
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
