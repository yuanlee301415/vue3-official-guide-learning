import { LAYOUT } from '@/router/constants.js'

const LIST_ROUTE = {
  path: '/list',
  name: 'list',
  component: LAYOUT,
  meta: {
    title: '列表渲染',
  },
  children: [
    {
      path: 'v-for-on-template',
      component: () => import('@/views/list/v-for-on-template.vue'),
      meta: {
        title: '<template> 上的 v-for',
      },
    },
  ],
}

export default LIST_ROUTE
