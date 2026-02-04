import { LAYOUT } from '@/router/constants.js'

const WATCHERS_ROUTE = {
  path: '/watchers',
  name: 'watchers',
  component: LAYOUT,
  meta: {
    title: '侦听器',
  },
  children: [
    {
      path: 'watch-source-types',
      component: () => import('@/views/watchers/watch-source-types.vue'),
      meta: {
        title: '侦听数据源类型',
      },
    },
  ],
}

export default WATCHERS_ROUTE
