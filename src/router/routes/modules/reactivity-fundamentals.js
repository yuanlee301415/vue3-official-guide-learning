import { LAYOUT } from '@/router/constants.js'

const REACTIVITY_FUNDAMENTALS_ROUTE = {
  path: '/reactivity-fundamentals',
  component: LAYOUT,
  meta: {
    title: '响应式基础',
  },
  children: [
    {
      path: 'deep-reactivity',
      component: () => import('@/views/reactivity-fundamentals/deep-reactivity.vue'),
      meta: {
        title: '深层响应性',
      },
    },
    {
      path: 'dom-update-timing',
      component: () => import('@/views/reactivity-fundamentals/dom-update-timing.vue'),
      meta: {
        title: 'DOM 更新时机',
      },
    },
    {
      path: 'limitations-of-reactive',
      component: () => import('@/views/reactivity-fundamentals/limitations-of-reactive.vue'),
      meta: {
        title: 'reactive() 的局限性',
      },
    },
    {
      path: 'ref-unwrapping-as-reactive-object-property',
      component: () => import('@/views/reactivity-fundamentals/ref-unwrapping-as-reactive-object-property.vue'),
      meta: {
        title: '作为 reactive 对象的属性',
      },
    },
    {
      path: 'caveat-in-arrays-and-collections',
      component: () => import('@/views/reactivity-fundamentals/caveat-in-arrays-and-collections.vue'),
      meta: {
        title: '数组和集合的注意事项',
      },
    },
  ],
}

export default REACTIVITY_FUNDAMENTALS_ROUTE
