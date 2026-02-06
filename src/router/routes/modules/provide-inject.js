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
  ],
}

export default PROVIDE_INJECT_ROUTE
