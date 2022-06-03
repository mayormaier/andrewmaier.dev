import { createApp } from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)
app.config.ignoredElements = [/^ion-/]

app.mount('#app')
