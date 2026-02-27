import { LAYOUT } from '@/router/constants.js'

const TELEPORT_ROUTE = {
  path: '/teleport',
  name: 'teleport',
  component: LAYOUT,
  meta: {
    title: 'Teleport',
  },
  children: [
    {
      path: 'basic-usage',
      component: () => import('@/views/teleport/basic-usage/index.vue'),
      meta: {
        title: '基本用法',
      },
    },
  ],
}

export default TELEPORT_ROUTE
