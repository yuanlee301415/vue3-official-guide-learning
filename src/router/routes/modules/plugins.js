import { LAYOUT } from '@/router/constants.js'

const PLUGINS_ROUTE = {
  path: '/plugins',
  name: 'plugins',
  component: LAYOUT,
  meta: {
    title: '插件',
    group: '逻辑利用',
  },
  children: [
    {
      path: 'introduction',
      component: () => import('@/views/plugins/introduction.vue'),
      meta: {
        title: '介绍',
      },
    },
    {
      path: 'writing-a-plugin',
      component: () => import('@/views/plugins/writing-a-plugin.vue'),
      meta: {
        title: '编写一个插件',
      },
    },
  ],
}

export default PLUGINS_ROUTE
