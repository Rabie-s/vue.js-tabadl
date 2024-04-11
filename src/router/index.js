import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('@/views/RegisterView.vue')
    },
    {
      path: '/books',
      name: 'Books',
      component: () => import('@/views/BooksView.vue')
    },
    {
      path: '/add-book',
      name: 'AddBook',
      meta:{
        requiresAuth:true
      },
      component: () => import('@/views/AddBook.vue')
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('@/views/TestView.vue')
    },

  ]
})


export default router
