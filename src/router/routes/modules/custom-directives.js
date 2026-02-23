import { LAYOUT } from '@/router/constants.js'

const CUSTOM_DIRECTIVES_ROUTE = {
  path: '/custom-directives',
  name: 'custom-directives',
  component: LAYOUT,
  meta: {
    title: '自定义指令',
  },
  children: [
    {
      path: 'introduction',
      component: () => import('@/views/custom-directives/introduction.vue'),
      meta: {
        title: '介绍',
      },
    },
  ],
}

export default CUSTOM_DIRECTIVES_ROUTE
