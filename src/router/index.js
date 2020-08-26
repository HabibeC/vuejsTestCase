import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddNewBook from '../components/bookForm'
import BookList from '../views/ListBook'
import AddBook from "@/views/AddBook";
import userForm from "@/views/setToUser";
import getFromUser from "@/views/getFromUser";
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addBook',
    name: AddNewBook,
    component: AddBook,

  },
    {
      path: '/bookList',
      name: BookList,
      component: BookList,
    },
    {
      path: '/setToUser',
      name: userForm,
      component: userForm,
    },
    {
      path: '/getFromUser',
      name: getFromUser,
      component: getFromUser,
    }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
