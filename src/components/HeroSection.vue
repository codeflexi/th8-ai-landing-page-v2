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
            <div class="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-th8-red/30 bg-th8-red/10 text-th8-red text-xs font-bold tracking-widest uppercase animate-fade-in-up">
                <span class="w-2 h-2 rounded-full bg-th8-red animate-pulse"></span>
                Enterprise Agentic Infrastructure
            </div>
            
            <h1 class="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up" style="animation-delay: 0.1s;">
                Connect Your Enterprise.<br />
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Synchronize Your Decisions.</span>
            </h1>
            
            <p class="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in-up" style="animation-delay: 0.2s;">
                เปลี่ยนองค์กรที่ทำงานแยกส่วน (Silos) ให้ขับเคลื่อนเป็นหนึ่งเดียว ด้วยโครงสร้างพื้นฐาน AI 
                ที่เชื่อมโยง <span class="text-white font-medium">"แผนกลยุทธ์"</span> สู่ <span class="text-white font-medium">"หน้างานจริง"</span> 
                อย่างไร้รอยต่อ พร้อมระบบตรวจสอบย้อนกลับ 
                <span class="inline-block mt-2 sm:mt-0 px-2 py-0.5 rounded bg-gray-800 border border-gray-700 text-xs text-gray-300 font-mono tracking-tight">(Audit Trail Ready)</span>
            </p>
            
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style="animation-delay: 0.3s;">
                
                <a 
                    href="https://liff.line.me/2008741274-AIZCVeCo" 
                    target="_blank"
                    class="px-8 py-4 bg-th8-red hover:bg-red-700 text-white font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] flex items-center justify-center gap-2"
                >
                    <i class="fas fa-calendar-check"></i>
                    นัดปรึกษาผู้เชี่ยวชาญ
                </a>

                <router-link 
                    to="/demo" 
                    class="px-8 py-4 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-lg transition-all flex items-center justify-center gap-2"
                >
                    <span>ดู Demo ระบบทำงาน</span>
                    <i class="fas fa-arrow-right text-sm"></i>
                </router-link>
            </div>
        </div>

        <div class="lg:w-7/12 w-full animate-fade-in-up lg:scale-110 transform-gpu z-20" style="animation-delay: 0.5s;">
            <div class="rounded-xl border border-gray-700/50 shadow-[0_0_50px_-10px_rgba(220,38,38,0.15)] bg-[#1E293B]">
                 <AgentInterfaceDemo />
            </div>
        </div>

      </div>
    </div>
  </section>
</template>