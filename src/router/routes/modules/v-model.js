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
    {
      path: 'under-the-hood',
      component: () => import('@/views/v-model/under-the-hood.vue'),
      meta: {
        title: '底层机制',
      },
    },
    {
      path: 'v-model-arguments',
      component: () => import('@/views/v-model/v-model-arguments.vue'),
      meta: {
        title: 'v-model 的参数',
      },
    },
  ],
}

export default V_MODEL_ROUTE
