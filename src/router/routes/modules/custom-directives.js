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
    {
      path: 'directive-hooks',
      component: () => import('@/views/custom-directives/directive-hooks.vue'),
      meta: {
        title: '指令钩子',
      },
    },
    {
      path: 'function-shorthand',
      component: () => import('@/views/custom-directives/function-shorthand.vue'),
      meta: {
        title: '简化形式',
      },
    },
    {
      path: 'usage-on-components',
      component: () => import('@/views/custom-directives/usage-on-components/index.vue'),
      meta: {
        title: '在组件上使用',
      },
    },
  ],
}

export default CUSTOM_DIRECTIVES_ROUTE
