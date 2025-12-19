import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 👇 เพิ่มบรรทัดนี้ (เปลี่ยนชื่อ repo ให้ตรงกับที่จะสร้างใน GitHub)
  base: '/th8-ai-landing-page-v2/', 
})