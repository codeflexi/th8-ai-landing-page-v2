<script setup>
// --- แก้ไข Path การ Import ---
// เนื่องจากไฟล์นี้อยู่ใน folder 'views' เราต้องถอยออกไป 1 ขั้น (../) เพื่อเข้า folder 'components'

import TheNavbar from '../components/TheNavbar.vue'
import HeroSection from '../components/HeroSection.vue'
import ConnectedLayers from '../components/ConnectedLayers.vue'
import TechPillars from '../components/TechPillars.vue'
import OurServices from '../components/OurServices.vue'
import WhyTH8 from '../components/WhyTH8.vue'

// หมายเหตุ: FontAwesome import '@fortawesome/fontawesome-free/css/all.css'
// ไม่ต้องใส่ในนี้แล้วนะครับ เราจะเอาไปใส่ไว้ที่ App.vue หลักที่เดียว เพื่อให้ใช้ได้ทุกหน้า
</script>

<template>
  <div id="hero-top" class="min-h-screen bg-th8-dark text-white font-sans selection:bg-th8-red selection:text-white pt-16">
    
    <TheNavbar />

    <HeroSection />

    <section id="solutions-section">
        <ConnectedLayers />
        <OurServices />
    </section>
    
    <section id="tech-section">
        <TechPillars />
    </section>

    <section id="why-th8-section">
        <WhyTH8 />
    </section>
    
    <section class="py-24 text-center bg-gradient-to-b from-th8-surface to-th8-dark border-t border-gray-800">
      <h2 class="text-3xl font-bold mb-6">Ready to Synchronize Your Enterprise?</h2>
      <p class="text-gray-400 mb-8 max-w-xl mx-auto">
        ระบบของเราตรวจสอบได้ (Auditable) และปลอดภัย (Secure) เริ่มต้น Pilot Project กับเราวันนี้
      </p>
      <button class="px-8 py-3 bg-th8-red hover:bg-red-700 text-white font-bold rounded shadow-lg transition-all">
        Book a Discovery Call
      </button>
    </section>

    <footer class="py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
      © 2025 TH8.AI - All Rights Reserved.
    </footer>
  </div>
</template>