import { LAYOUT } from '@/router/constants.js'

const ASYNC_ROUTE = {
  path: '/async',
  name: 'async',
  component: LAYOUT,
  meta: {
    title: '异步组件',
  },
  children: [
    {
      path: 'basic-usage',
      component: () => import('@/views/async/basic-usage/index.vue'),
      meta: {
        title: '基本用法',
      },
    },
  ],
}

export default ASYNC_ROUTE
