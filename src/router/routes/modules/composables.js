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
        title: '鼠标示例器',
      },
    },
  ],
}

export default COMPOSABLES_ROUTE
