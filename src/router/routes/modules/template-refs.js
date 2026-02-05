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
    {
      path: 'refs-inside-v-for',
      component: () => import('@/views/template-refs/refs-inside-v-for.vue'),
      meta: {
        title: 'v-for 中的模板引用',
      },
    },
    {
      path: 'function-refs',
      component: () => import('@/views/template-refs/function-refs.vue'),
      meta: {
        title: '函数模板引用',
      },
    },
  ],
}

export default TEMPLATE_REFS_ROUTE
