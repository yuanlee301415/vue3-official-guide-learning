import { LAYOUT } from '@/router/constants.js'

const PROVIDE_INJECT_ROUTE = {
  path: '/provide-inject',
  name: 'provide-inject',
  component: LAYOUT,
  meta: {
    title: '依赖注入',
  },
  children: [
    {
      path: 'prop-drilling',
      component: () => import('@/views/provide-inject/prop-drilling/index.vue'),
      meta: {
        title: 'Prop 逐级透传问题',
      },
    },
    {
      path: 'provide',
      component: () => import('@/views/provide-inject/provide/index.vue'),
      meta: {
        title: 'Provide(提供)',
      },
    },
    {
      path: 'inject',
      component: () => import('@/views/provide-inject/inject/index.vue'),
      meta: {
        title: 'Inject(注入)',
      },
    },
    {
      path: 'injection-default-values',
      component: () => import('@/views/provide-inject/injection-default-values/index.vue'),
      meta: {
        title: '注入默认值',
      },
    },
    {
      path: 'working-with-reactivity',
      component: () => import('@/views/provide-inject/working-with-reactivity/index.vue'),
      meta: {
        title: '和响应式数据配合使用',
      },
    },
    {
      path: 'working-with-symbol-keys',
      component: () => import('@/views/provide-inject/working-with-symbol-keys/index.vue'),
      meta: {
        title: '使用 Symbol 作注入名',
      },
    },
  ],
}

export default PROVIDE_INJECT_ROUTE
