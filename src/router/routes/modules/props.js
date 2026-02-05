import { LAYOUT } from '@/router/constants.js'

const PROPS_ROUTE = {
  path: '/props',
  name: 'Props',
  component: LAYOUT,
  meta: {
    title: 'Props',
  },
  children: [
    {
      path: 'reactive-props-destructure',
      component: () => import('@/views/props/reactive-props-destructure.vue'),
      meta: {
        title: '响应式 Props 解构',
      },
    },
  ],
}

export default PROPS_ROUTE
