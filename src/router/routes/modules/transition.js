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
    {
      path: 'nested-transitions-and-explicit-transition-durations',
      component: () => import('@/views/transition/nested-transitions-and-explicit-transition-durations.vue'),
      meta: {
        title: '深层级过渡与显式过渡时长',
      },
    },
  ],
}

export default TRANSITION_ROUTE
