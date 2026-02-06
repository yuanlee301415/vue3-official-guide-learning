import { LAYOUT } from '@/router/constants.js'

const ATTRS_ROUTE = {
  path: '/attrs',
  name: 'Attrs',
  component: LAYOUT,
  meta: {
    title: '透传 Attributes',
  },
  children: [
    {
      path: 'attribute-inheritance',
      component: () => import('@/views/attrs/attribute-inheritance.vue'),
      meta: {
        title: 'Attributes 继承',
      },
    },
    {
      path: 'class-and-style-merging',
      component: () => import('@/views/attrs/class-and-style-merging.vue'),
      meta: {
        title: '对 class 和 style 合并',
      },
    },
    {
      path: 'v-on-listener-inheritance',
      component: () => import('@/views/attrs/v-on-listener-inheritance.vue'),
      meta: {
        title: 'v-on 监听器继承',
      },
    },
    {
      path: 'nested-component-inheritance',
      component: () => import('@/views/attrs/nested-component-inheritance.vue'),
      meta: {
        title: '深层组件继承',
      },
    },
    {
      path: 'disabling-attribute-inheritance/1-disable',
      component: () => import('@/views/attrs/disabling-attribute-inheritance/1-disable.vue'),
      meta: {
        title: '禁用 Attributes 继承_1-禁用',
      },
    },
    {
      path: 'disabling-attribute-inheritance/2-$attrs',
      component: () => import('@/views/attrs/disabling-attribute-inheritance/2-$attrs.vue'),
      meta: {
        title: '禁用 Attributes 继承_2-$attrs',
      },
    },
  ],
}

export default ATTRS_ROUTE
