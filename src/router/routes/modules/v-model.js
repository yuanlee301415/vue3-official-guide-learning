import { LAYOUT } from '@/router/constants.js'

const V_MODEL_ROUTE = {
  path: '/v-model',
  name: 'v-model',
  component: LAYOUT,
  meta: {
    title: '组件 v-model',
  },
  children: [
    {
      path: 'basic-usage',
      component: () => import('@/views/v-model/basic-usage.vue'),
      meta: {
        title: '基本用法',
      },
    },
  ],
}

export default V_MODEL_ROUTE
