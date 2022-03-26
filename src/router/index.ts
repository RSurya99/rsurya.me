import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },

    { path: '/404', component: () => import('../views/404.vue') },
    {
      path: '/:catchAll(.*)', // Unrecognized path automatically matches 404
      redirect: '/404',
    },
  ],
})

router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router
