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
  ],
}

export default SLOTS_ROUTE
