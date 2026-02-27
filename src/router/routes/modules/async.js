import { LAYOUT } from '@/router/constants.js'

const ASYNC_ROUTE = {
  path: '/async',
  name: 'async',
  component: LAYOUT,
  meta: {
    title: '异步组件',
    group: '深入组件',
  },
  children: [
    {
      path: 'basic-usage',
      component: () => import('@/views/async/basic-usage/index.vue'),
      meta: {
        title: '基本用法',
      },
    },
    {
      path: 'loading-and-error-states',
      component: () => import('@/views/async/loading-and-error-states/index.vue'),
      meta: {
        title: '加载和错误状态',
      },
    },
  ],
}

export default ASYNC_ROUTE
