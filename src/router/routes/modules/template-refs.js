import { LAYOUT } from '@/router/constants.js'

const TEMPLATE_REFS_ROUTE = {
  path: '/template-refs',
  component: LAYOUT,
  meta: {
    title: '模板引用',
  },
  children: [
    {
      path: 'v-for-on-template',
      component: () => import('@/views/template-refs/accessing-the-refs.vue'),
      meta: {
        title: '访问模板引用',
      },
    },
    {
      path: 'ref-on-component',
      component: () => import('@/views/template-refs/ref-on-component.vue'),
      meta: {
        title: '组件上的 ref',
      },
    },
  ],
}

export default TEMPLATE_REFS_ROUTE
