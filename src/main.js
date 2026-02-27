import { createApp } from 'vue'
import App from './App.vue'
import { setupRouter } from './router'
import { setupStore } from '@/stores/index.js'
import i18nPlugin from '@/plugins/i18n.js'
import './assets/main.css'

void bootstrap()

async function bootstrap() {
  const app = createApp(App)
  setupStore(app)
  await setupRouter(app)
  app.use(i18nPlugin, {
    greetings: {
      hello: 'Nihao',
    },
  })
  app.mount('#app')
}
