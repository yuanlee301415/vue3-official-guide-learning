import { EXCEPTION_404, LAYOUT, PAGE_NOT_FOUND_NAME } from '@/router/constants.js'
import REACTIVITY_FUNDAMENTALS_ROUTE from '@/router/routes/modules/reactivity-fundamentals.js'
import COMPUTED_ROUTE from '@/router/routes/modules/computed.js'
import LIST_ROUTE from '@/router/routes/modules/list.js'
import TEST_ROUTE from '@/router/routes/modules/test'

export const ROOT_ROUTE = {
  path: '/',
  name: 'Root',
  redirect: '/home',
}

export const HOME_ROUTE = {
  path: '/home',
  name: 'Home',
  redirect: '/home',
  component: LAYOUT,
  meta: {
    title: '首页',
  },
  children: [
    {
      path: '',
      name: 'HomePage',
      component: () => import('@/views/home/index.vue'),
    },
  ],
}

export const PAGE_NOT_FOUND_ROUTE = {
  path: '/:path(.*)*',
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  children: [
    {
      path: '',
      name: PAGE_NOT_FOUND_NAME + 'Page',
      component: EXCEPTION_404,
    },
  ],
}

export const basicRoutes = [
  ROOT_ROUTE,
  HOME_ROUTE,
  REACTIVITY_FUNDAMENTALS_ROUTE,
  COMPUTED_ROUTE,
  LIST_ROUTE,
  // Others...
  TEST_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
]
