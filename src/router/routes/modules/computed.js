import { LAYOUT } from '@/router/constants.js'

const COMPUTED_ROUTE = {
  path: '/computed',
  name: 'computed',
  component: LAYOUT,
  meta: {
    title: '计算属性',
  },
  children: [
    {
      path: 'computed-caching-vs-methods',
      component: () => import('@/views/computed/computed-caching-vs-methods.vue'),
      meta: {
        title: '计算属性缓存 vs 方法',
      },
    },
    {
      path: 'writable-computed',
      component: () => import('@/views/computed/writable-computed.vue'),
      meta: {
        title: '可写计算属性',
      },
    },
  ],
}

export default COMPUTED_ROUTE
