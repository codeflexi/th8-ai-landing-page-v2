<script setup>
import AgentInterfaceDemo from './AgentInterfaceDemo.vue';
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0">
    <div class="absolute inset-0 z-0 opacity-20 pointer-events-none">
       <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
       <div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-th8-red opacity-10 blur-[120px]"></div>
    </div>

    <div class="container mx-auto px-6 z-10 h-full">
      <div class="flex flex-col lg:flex-row items-center gap-12 h-full pt-10 lg:pt-0">
        
        <div class="lg:w-5/12 text-center lg:text-left">
            <div class="inline-block mb-4 px-4 py-1.5 rounded-full border border-th8-red/30 bg-th8-red/10 text-th8-red text-sm font-semibold tracking-wide uppercase animate-fade-in-up">
                The Agentic Enterprise OS
            </div>
            
            <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up" style="animation-delay: 0.1s;">
                Connect Your Enterprise.<br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Synchronize Your Decisions.</span>
            </h1>
            
            <p class="text-lg text-th8-dim max-w-2xl mx-auto lg:mx-0 mb-10 animate-fade-in-up" style="animation-delay: 0.2s;">
                เปลี่ยนระบบแยกส่วน (Silos) ให้เป็นระบบประสาทเดียวกัน ด้วย AI Infrastructure 
                ที่เชื่อมโยงตั้งแต่แผนกลยุทธ์ ถึงหน้างานจริง (Audit Trail Included)
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style="animation-delay: 0.3s;">
                <button class="px-8 py-4 bg-th8-red hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                <router-link 
  to="/demo" 
  class="px-8 py-4 bg-th8-red hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] inline-block text-center"
>
  ดู Demo ระบบทำงาน
</router-link>
                </button>
                <button class="px-8 py-4 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-lg transition-all">
                ปรึกษาผู้เชี่ยวชาญ
                </button>
            </div>
        </div>

        <div class="lg:w-7/12 w-full animate-fade-in-up lg:scale-110 transform-gpu z-20" style="animation-delay: 0.5s;">
            <div class="rounded-xl border border-th8-gold/30 shadow-[0_0_50px_-10px_rgba(245,158,11,0.2)] bg-[#1E293B]">
                 <AgentInterfaceDemo />
            </div>
        </div>

      </div>
    </div>
  </section>
</template>