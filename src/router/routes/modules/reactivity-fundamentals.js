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
  ],
}

export default REACTIVITY_FUNDAMENTALS_ROUTE
