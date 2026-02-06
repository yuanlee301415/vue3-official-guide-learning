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
  ],
}

export default ATTRS_ROUTE
