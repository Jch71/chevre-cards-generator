import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'
import '@formkit/themes/genesis'
import {  fr } from '@formkit/i18n'
import router from './router'

  

const app = createApp(App)

app.use(router)



app.use(plugin, defaultConfig({
    theme: 'genesis', // will load from CDN and inject into document head,
    locales: { fr },
    locale: 'fr'
}))

app.mount('#app')
