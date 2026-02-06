import { LAYOUT } from '@/router/constants.js'

const PROVIDE_INJECT_ROUTE = {
  path: '/provide-inject',
  name: 'provide-inject',
  component: LAYOUT,
  meta: {
    title: '依赖注入',
  },
  children: [
    {
      path: 'prop-drilling',
      component: () => import('@/views/provide-inject/prop-drilling.vue'),
      meta: {
        title: 'Prop 逐级透传问题',
      },
    },
    {
      path: 'provide',
      component: () => import('@/views/provide-inject/provide.vue'),
      meta: {
        title: 'Provide(提供)',
      },
    },
    {
      path: 'inject',
      component: () => import('@/views/provide-inject/inject.vue'),
      meta: {
        title: 'Inject(注入)',
      },
    },
  ],
}

export default PROVIDE_INJECT_ROUTE
