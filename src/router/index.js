import { createRouter,createWebHistory,createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path:'/',
      redirect: '/home'
    },
    {
      path:'/home',
      component: () => import('@/views/home/home.vue')
    },
    {
      path:'/intro',
      component: () => import('@/views/introduction/introduction.vue'),
      children: [
        {
          path:'/intro',
          redirect: '/intro/describes'
        },
        {
          path: 'describes',
          component: () => import('@/views/introduction/cpns/describes.vue'),
        },
        {
          path: 'leader',
          component: () => import('@/views/introduction/cpns/leader.vue'),
        },
        {
          path: 'regulations',
          component: () => import('@/views/introduction/cpns/regulations.vue'),
        },
      ]
    },
    {
      path:'/org',
      component: () => import('@/views/organizations/organizations.vue')
    },
    {
      path:'/news',
      component: () => import('@/views/news/news.vue')
    },
    {
      path:'/culture',
      component: () => import('@/views/culture/culture.vue')
    },
  ]
})

export default router