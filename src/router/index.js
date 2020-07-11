import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('@views/home/home')
const Category=()=>import('@views/category/category')
const Cart=()=>import('@views/cart/cart')
const Profile=()=>import('@views/profile/profile')

Vue.use(VueRouter)

  const routes = [
    {
      path:'',
      redirect:'/home'
    },
    {
      path:'/home',
      component:Home,
      name:'Home'
    },
    {
      path:'/category',
      component:Category,
      name:'Category'
    },
    {
      path:'/cart',
      component:Cart,
      name:'Cart'
    },
    {
      path:'/profile',
      component:Profile,
      name:'Profile'
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
