import { EXCEPTION_404, LAYOUT, PAGE_NOT_FOUND_NAME } from '../constants.js'
import REACTIVITY_FUNDAMENTALS_ROUTE from './modules/reactivity-fundamentals.js'
import COMPUTED_ROUTE from './modules/computed.js'
import LIST_ROUTE from './modules/list.js'
import WATCHERS_ROUTE from './modules/watchers.js'
import TEMPLATE_REFS_ROUTE from './modules/template-refs.js'
import PROPS_ROUTE from './modules/props.js'
import V_MODEL_ROUTE from './modules/v-model.js'
import ATTRS_ROUTE from './modules/attrs.js'
import SLOTS_ROUTE from './modules/slots.js'
import PROVIDE_INJECT_ROUTE from './modules/provide-inject.js'
import ASYNC_ROUTE from './modules/async.js'
import COMPOSABLES_ROUTE from './modules/composables.js'
import CUSTOM_DIRECTIVES_ROUTE from './modules/custom-directives.js'
import PLUGINS_ROUTE from './modules/plugins.js'
import TRANSITION_ROUTE from './modules/transition.js'
import TEST_ROUTE from './modules/test'

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
  WATCHERS_ROUTE,
  TEMPLATE_REFS_ROUTE,
  PROPS_ROUTE,
  V_MODEL_ROUTE,
  ATTRS_ROUTE,
  SLOTS_ROUTE,
  PROVIDE_INJECT_ROUTE,
  ASYNC_ROUTE,
  COMPOSABLES_ROUTE,
  CUSTOM_DIRECTIVES_ROUTE,
  PLUGINS_ROUTE,
  TRANSITION_ROUTE,
  // Others...
  TEST_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
]
