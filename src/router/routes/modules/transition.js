import { LAYOUT } from '@/router/constants.js'

const TRANSITION_ROUTE = {
  path: '/transition',
  name: 'transition',
  component: LAYOUT,
  meta: {
    title: 'Transition',
  },
  children: [
    {
      path: 'the-transition-component',
      component: () => import('@/views/transition/the-transition-component.vue'),
      meta: {
        title: 'Transition 组件',
      },
    },
    {
      path: 'named-transitions',
      component: () => import('@/views/transition/named-transitions.vue'),
      meta: {
        title: '为过滤效果命名',
      },
    },
    {
      path: 'css-transitions',
      component: () => import('@/views/transition/css-transitions.vue'),
      meta: {
        title: '基于 CSS 的过滤效果',
      },
    },
    {
      path: 'css-animations',
      component: () => import('@/views/transition/css-animations.vue'),
      meta: {
        title: 'CSS animation',
      },
    },
  ],
}

export default TRANSITION_ROUTE
