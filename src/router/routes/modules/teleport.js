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
    {
      path: 'multiple-teleports-on-the-same-target',
      component: () => import('@/views/teleport/multiple-teleports-on-the-same-target.vue'),
      meta: {
        title: '多个 Teleport 共享目标',
      },
    },
  ],
}

export default TELEPORT_ROUTE
