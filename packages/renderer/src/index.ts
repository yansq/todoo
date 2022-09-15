import App from '/@/App.vue'
import { createPinia } from 'pinia'
import 'uno.css'

const app = createApp(App)
const store = createPinia()
app.use(store).mount('#app')
