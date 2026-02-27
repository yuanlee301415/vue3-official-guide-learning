import { I18N_INJECTION_KEY } from '@/constants/tokens.js'

const i18nPlugin = {
  install(app, options) {
    app.config.globalProperties.$t = function (path = '') {
      return path.split('.').reduce((option, key) => {
        return option?.[key]
      }, options)
    }

    app.provide(I18N_INJECTION_KEY, options)
  },
}

export default i18nPlugin
