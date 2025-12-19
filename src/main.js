import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router' // <-- เพิ่มบรรทัดนี้

const app = createApp(App)

app.use(router) // <-- เพิ่มบรรทัดนี้ เพื่อบอกให้ app ใช้ router

app.mount('#app')