import { LAYOUT } from '@/router/constants.js'

const REACTIVITY_FUNDAMENTALS_ROUTE = {
  path: '/reactivity-fundamentals',
  component: LAYOUT,
  meta: {
    title: '响应式基础',
  },
  children: [
    {
      path: 'deep-reactivity',
      component: () => import('@/views/reactivity-fundamentals/deep-reactivity.vue'),
      meta: {
        title: '深层响应性',
      },
    },
    {
      path: 'dom-update-timing',
      component: () => import('@/views/reactivity-fundamentals/dom-update-timing.vue'),
      meta: {
        title: 'DOM 更新时机',
      },
    },
  ],
}

export default REACTIVITY_FUNDAMENTALS_ROUTE
