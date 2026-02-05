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
    {
      path: 'passing-destructured-props-into-functions',
      component: () => import('@/views/props/passing-destructured-props-into-functions.vue'),
      meta: {
        title: '将解析的 props 传递到函数中',
      },
    },
  ],
}

export default PROPS_ROUTE
