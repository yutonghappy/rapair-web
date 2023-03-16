import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/repair/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component:Main,
      redirect:'/process',
      children:[
        {
          path: 'queryStatistics',
          component: () => import("@/views/repair/query-statistics/index.vue")
        },
        {
          path: 'protect',
          component: () => import("@/views/repair/protect/index.vue"),
          redirect: '/protect/equipment',
          children: [
            {
              path: 'furniture',
              component: () => import('@/views/repair/protect/furniture.vue')
            },
            {
              path: 'equipment',
              component: () => import('@/views/repair/protect/equipment.vue')
            },
            {
              path: 'ventilation-equipment',
              component: () => import('@/views/repair/protect/ventilation-equipment.vue')
            },
          ]
        },
        {
          path: 'process',
          component: () => import("@/views/repair/process/index.vue")
        },
        {
          path: 'mend',
          component: () => import("@/views/repair/mend/index.vue"),
          redirect: '/mend/apply',
          children: [
            {
              path: 'apply',
              component: () => import('@/views/repair/mend/apply.vue')
            },
            {
              path: 'pending',
              component: () => import('@/views/repair/mend/pending.vue')
            },
            {
              path: 'done',
              component: () => import('@/views/repair/mend/done.vue')
            },
            {
              path: 'completed',
              component: () => import('@/views/repair/mend/completed.vue')
            }
          ]
        },
        {
          path: 'description',
          component: () => import("@/views/repair/description/index.vue")
        },
        {
          path: 'department',
          component: () => import("@/views/repair/department/index.vue")
        }
      ]
    }
  ]
})

export default router
