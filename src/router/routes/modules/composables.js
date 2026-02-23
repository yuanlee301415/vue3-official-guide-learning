import { LAYOUT } from '@/router/constants.js'

const COMPOSABLES_ROUTE = {
  path: '/composables',
  name: 'composables',
  component: LAYOUT,
  meta: {
    title: '组合式函数',
  },
  children: [
    {
      path: 'mouse-tracker-example',
      component: () => import('@/views/composables/mouse-tracker-example/index.vue'),
      meta: {
        title: '鼠标跟踪器示例',
      },
    },
    {
      path: 'async-state-example',
      component: () => import('@/views/composables/async-state-example/index.vue'),
      meta: {
        title: '异步状态示例',
      },
    },
  ],
}

export default COMPOSABLES_ROUTE
