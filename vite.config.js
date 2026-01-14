import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 👇 แก้บรรทัดนี้ให้เป็นชื่อ Repo ของคุณ (ต้องมี / ปิดท้ายด้วย)
  base: '/th8-ai-landing-page-v2/', 
})