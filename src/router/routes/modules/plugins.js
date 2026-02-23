import { LAYOUT } from '@/router/constants.js'

const PLUGINS_ROUTE = {
  path: '/plugins',
  name: 'plugins',
  component: LAYOUT,
  meta: {
    title: '插件',
  },
  children: [
    {
      path: 'introduction',
      component: () => import('@/views/plugins/introduction.vue'),
      meta: {
        title: '介绍',
      },
    },
  ],
}

export default PLUGINS_ROUTE
