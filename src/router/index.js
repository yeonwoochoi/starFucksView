import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'
import Introduction from '../components/introduction/Introduction'
import Calendar from '../components/calendar/Calendar'
import Log from "../components/log/Log";
import Receipt from "../components/receipt/Receipt"

Vue.use(VueRouter)

const routes = [
    {
    path: '/',
    components: {
      body: Home
    }
    },
    {
    path:'/calendar',
    components: {
      body: Calendar
    }
    },
    {
    path: '/log',
    components: {
      body: Log
    }
    },
    {
    path: '/introduction',
    components: {
      body: Introduction
    }
    },
    {
        name: 'body',
        path: '/home/receipt',
        components: Receipt,
        props: true
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
})

export default router
