import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from '@/modules/i18n'
import App from './App.vue'
import router from './router'

// css
import './assets/sass/app.scss'
import './assets/sass/vendor.scss'

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)

app.mount('#app')
