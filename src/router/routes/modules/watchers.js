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
    {
      path: 'deep-watchers',
      component: () => import('@/views/watchers/deep-watchers.vue'),
      meta: {
        title: '深层侦听器',
      },
    },
    {
      path: 'once-watchers',
      component: () => import('@/views/watchers/once-watchers.vue'),
      meta: {
        title: '一次性侦听器',
      },
    },
    {
      path: 'watcheffect',
      component: () => import('@/views/watchers/watcheffect.vue'),
      meta: {
        title: 'watchEffect()',
      },
    },
    {
      path: 'side-effect-cleanup/1-onWatcherCleanup',
      component: () => import('@/views/watchers/side-effect-cleanup/1-onWatcherCleanup.vue'),
      meta: {
        title: '副作用清理_1-onWatcherCleanup',
      },
    },
  ],
}

export default WATCHERS_ROUTE
