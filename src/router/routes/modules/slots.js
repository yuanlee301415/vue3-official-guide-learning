import { LAYOUT } from '@/router/constants.js'

const SLOTS_ROUTE = {
  path: '/slots',
  name: 'Slots',
  component: LAYOUT,
  meta: {
    title: '插槽',
  },
  children: [
    {
      path: 'slot-content-and-outlet',
      component: () => import('@/views/slots/slot-content-and-outlet.vue'),
      meta: {
        title: '插槽内容与出口',
      },
    },
    {
      path: 'named-slots',
      component: () => import('@/views/slots/named-slots.vue'),
      meta: {
        title: '具名插槽',
      },
    },
    {
      path: 'conditional-slots',
      component: () => import('@/views/slots/conditional-slots.vue'),
      meta: {
        title: '条件插槽',
      },
    },
    {
      path: 'dynamic-slot-names',
      component: () => import('@/views/slots/dynamic-slot-names.vue'),
      meta: {
        title: '动态插槽名',
      },
    },
    {
      path: 'scoped-slots/1-default',
      component: () => import('@/views/slots/scoped-slots/1-default.vue'),
      meta: {
        title: '作用域插槽_1-默认插槽',
      },
    },
    {
      path: 'scoped-slots/2-named-scoped-slots',
      component: () => import('@/views/slots/scoped-slots/2-named-scoped-slots.vue'),
      meta: {
        title: '作用域插槽_2-具名插槽',
      },
    },
  ],
}

export default SLOTS_ROUTE
