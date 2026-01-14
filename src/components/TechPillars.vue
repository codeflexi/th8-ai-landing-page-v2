<template>
  <section class="py-24 bg-th8-surface relative overflow-hidden border-t border-gray-800">
    <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-th8-red/5 blur-[100px] rounded-full pointer-events-none opacity-50"></div>
    
    <div class="container mx-auto px-6 relative z-10">
      
      <div class="text-center mb-16">
        <div class="inline-block mb-3 px-3 py-1 rounded border border-th8-gold/30 bg-th8-gold/10 text-th8-gold text-xs font-bold tracking-widest uppercase">
          The Technology Engine
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Powered by TH8 Proprietary Frameworks</h2>
        <p class="text-th8-dim text-lg max-w-3xl mx-auto">
            โครงสร้างพื้นฐานทางปัญญาประดิษฐ์ ที่ออกแบบมาเพื่อความปลอดภัย ตรวจสอบได้ และทำงานเชื่อมโยงกันทั้งระบบ (Auditable & Orchestrated AI)
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mb-20 relative z-20">
        <div class="group flex flex-col h-full bg-th8-dark border border-gray-700 rounded-2xl p-8 hover:border-th8-red/50 hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.2)] transition-all duration-300">
            <div class="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 12C26.4772 12 22 16.4772 22 22V26H18C16.8954 26 16 26.8954 16 28V48C16 49.1046 16.8954 50 18 50H46C47.1046 50 48 49.1046 48 48V28C48 26.8954 47.1046 26 46 26H42V22C42 16.4772 37.5228 12 32 12Z" fill="#334155"/>
                    <rect x="26" y="34" width="12" height="8" rx="2" fill="#1E293B"/>
                    <circle cx="32" cy="22" r="3" fill="#F59E0B"/> 
                    <path d="M14 32H10V44H14V32Z" fill="#334155"/>
                    <path d="M50 32H54V44H50V32Z" fill="#334155"/>
                </svg>
            </div>
            <div class="mb-auto">
                <h3 class="text-xl font-bold mb-1">1. Intelligent Agent Squads</h3>
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">The Persona</p>
                <div class="mb-4 text-sm font-bold text-th8-red bg-th8-red/10 px-3 py-1.5 rounded-md inline-flex items-center border border-th8-red/20">
                   TH8 3-Layer Architecture™
                </div>
                <p class="text-gray-400 text-sm leading-relaxed mb-6">
                    เราสร้าง <strong>"ทีมผู้เชี่ยวชาญ"</strong> (Specialist Agents) ที่แบ่งหน้าที่ชัดเจน (Strategy / Task / Integration) เพื่อความแม่นยำสูงสุดในการตัดสินใจ
                </p>
            </div>
            <div class="pt-6 border-t border-gray-800 mt-2">
                <p class="text-[10px] text-gray-500 uppercase font-bold mb-2">Functions:</p>
                <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 text-[10px] font-bold bg-gray-800 text-gray-300 rounded border border-gray-700">FP&A Analysis</span>
                    <span class="px-2 py-1 text-[10px] font-bold bg-gray-800 text-gray-300 rounded border border-gray-700">Demand Planner</span>
                </div>
            </div>
        </div>

        <div class="group flex flex-col h-full bg-th8-dark border border-gray-700 rounded-2xl p-8 hover:border-th8-red/50 hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.2)] transition-all duration-300">
            <div class="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 48C16 52.4183 12.4183 56 8 56C3.58172 56 0 52.4183 0 48C0 43.5817 3.58172 40 8 40C9.65701 40 11.193 40.5038 12.4829 41.3721L22.7574 31.0976C22.2725 29.8015 22 28.4237 22 27C22 21.4772 26.4772 17 32 17C33.4237 17 34.8015 17.2725 36.0976 17.7574L46.3721 7.48294C45.5038 6.19296 45 4.65701 45 3C45 -1.41828 48.5817 -5 53 -5C57.4183 -5 61 -1.41828 61 3C61 7.41828 57.4183 11 53 11C51.343 11 49.807 10.4962 48.5171 9.62786L38.2426 19.9024C38.7275 21.1985 39 22.5763 39 24C39 29.5228 34.5228 34 29 34C27.5763 34 26.1985 33.7275 24.9024 33.2426L14.6279 43.5171C15.4962 44.807 16 46.343 16 48Z" fill="#334155"/>
                    <circle cx="32" cy="24" r="4" fill="#F59E0B"/>
                    <circle cx="8" cy="48" r="3" fill="#DC2626"/>
                    <circle cx="53" cy="3" r="3" fill="#DC2626"/>
                </svg>
            </div>
            <div class="mb-auto">
                <h3 class="text-xl font-bold mb-1">2. Action Engine</h3>
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">The Hands</p>
                <div class="mb-4 text-sm font-bold text-th8-red bg-th8-red/10 px-3 py-1.5 rounded-md inline-flex items-center border border-th8-red/20">
                   TH8 Integration Stack™
                </div>
                <p class="text-gray-400 text-sm leading-relaxed mb-6">
                    เชื่อมต่อ ERP, WMS, LINE, IoT อย่างปลอดภัย ทุกคำสั่งเขียนข้อมูล (Write) ต้องผ่าน <strong>Validation Guardrail</strong> เพื่อป้องกัน Database พัง
                </p>
            </div>
            <div class="pt-6 border-t border-gray-800 mt-2">
                <p class="text-[10px] text-gray-500 uppercase font-bold mb-2">Functions:</p>
                <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 text-[10px] font-bold bg-gray-800 text-gray-300 rounded border border-gray-700">Auto-PO Creation</span>
                    <span class="px-2 py-1 text-[10px] font-bold bg-gray-800 text-gray-300 rounded border border-gray-700">System Alert</span>
                </div>
            </div>
        </div>

        <div class="group flex flex-col h-full bg-th8-dark border border-gray-700 rounded-2xl p-8 hover:border-th8-red/50 hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.2)] transition-all duration-300">
            <div class="w-16 h-16 mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 8C25.3726 8 20 13.3726 20 20V22H18C14.6863 22 12 24.6863 12 28V36C12 39.3137 14.6863 42 18 42H20V44C20 50.6274 25.3726 56 32 56C38.6274 56 44 50.6274 44 44V42H46C49.3137 42 52 39.3137 52 36V28C52 24.6863 49.3137 22 46 22H44V20C44 13.3726 38.6274 8 32 8ZM32 16C34.2091 16 36 17.7909 36 20V22H28V20C28 17.7909 29.7909 16 32 16ZM24 32C24 29.7909 25.7909 28 28 28H36C38.2091 28 40 29.7909 40 32C40 34.2091 38.2091 36 36 36H28C25.7909 36 24 34.2091 24 32Z" fill="#334155"/>
                    <circle cx="32" cy="32" r="4" fill="#F59E0B"/>
                    <path d="M32 14V18" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
                    <path d="M32 46V50" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="mb-auto">
                <h3 class="text-xl font-bold mb-1">3. Unified Context</h3>
                <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">The Brain</p>
                <div class="mb-4 text-sm font-bold text-th8-red bg-th8-red/10 px-3 py-1.5 rounded-md inline-flex items-center border border-th8-red/20">
                   TH8 Knowledge Copilot™
                </div>
                <p class="text-gray-400 text-sm leading-relaxed mb-6">
                    ระบบ <strong>Hybrid RAG</strong> ผสาน "ข้อมูลดิบใน Database" และ "ความรู้ในเอกสาร (SOP/Contracts)" เพื่อให้คำตอบที่ถูกต้องและอ้างอิงได้
                </p>
            </div>
            <div class="pt-6 border-t border-gray-800 mt-2">
                <p class="text-[10px] text-gray-500 uppercase font-bold mb-2">Functions:</p>
                <div class="flex flex-wrap gap-2">
                    <span class="px-2 py-1 text-[10px] font-bold bg-gray-800 text-gray-300 rounded border border-gray-700">Policy Search</span>
                    <span class="px-2 py-1 text-[10px] font-bold bg-gray-800 text-gray-300 rounded border border-gray-700">Audit Trail</span>
                </div>
            </div>
        </div>
      </div>

      <div class="flex justify-center mb-8 relative z-10">
        <div class="flex flex-col items-center">
            <div class="h-16 w-0.5 bg-gradient-to-b from-gray-700 to-th8-red/50"></div>
            <div class="px-4 py-1 rounded-full bg-th8-red/10 border border-th8-red/30 text-th8-red text-xs font-bold uppercase tracking-wider">
                Orchestrated By
            </div>
            <div class="h-16 w-0.5 bg-gradient-to-b from-th8-red/50 to-th8-red"></div>
        </div>
      </div>

      <div class="bg-th8-dark/50 backdrop-blur-md border border-gray-700/50 rounded-3xl p-6 md:p-12 relative overflow-visible z-10 transition-all duration-500 min-h-[600px]">
        
        <div class="text-center mb-8 relative z-10">
            <a href="https://codeflexi.github.io/th8-ai-site-v2/" target="_blank" class="group inline-flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
                <h3 class="text-2xl md:text-3xl font-bold flex items-center justify-center gap-3 group-hover:text-blue-400 transition-colors">
                    <i class="fas fa-sync-alt text-th8-red group-hover:text-blue-400 transition-colors"></i> 
                    TH8 Workflow Sync Engine™
                </h3>
                <i class="fas fa-external-link-alt text-gray-500 text-sm group-hover:text-blue-400 transition-colors"></i>
            </a>
          

             <p class="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                กลไกกลางที่ทำให้ <strong>“งาน 1 เรื่อง” วิ่งครบทุกระบบโดยไม่ตกหล่นกลางทาง</strong> 
                เชื่อมโยงการทำงานของ Agent, Decision, Action Engine เข้าด้วยกันเป็นกระบวนการเดียว (End-to-End Process) <br>
            <span class="text-gray-500 text-xs">(Tip: เอาเมาส์ชี้ที่ขั้นตอนด้านล่างเพื่อดูรายละเอียด)</span>
            </p>

            <div class="flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-2 pb-2 px-2">
                <button 
                    v-for="(flow, key) in workflows" 
                    :key="key"
                    @click="currentFlowKey = key"
                    class="whitespace-nowrap px-4 py-2 rounded-full text-xs font-medium border transition-all duration-300"
                    :class="currentFlowKey === key 
                        ? 'bg-blue-500/10 text-blue-400 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]' 
                        : 'bg-gray-900/50 text-gray-500 border-gray-700 hover:border-gray-500 hover:text-gray-300'"
                >
                    {{ flow.tabLabel }}
                </button>
            </div>
        </div>

        <transition name="fade" mode="out-in">
            <div :key="currentFlowKey" class="relative z-10">
                <div class="mb-8 text-center">
                    <h4 class="text-xs font-bold text-gray-500 uppercase tracking-widest">{{ activeFlow.title }}</h4>
                </div>

                <div class="relative py-4 md:py-10 px-2 md:px-4">
                     <div class="absolute top-[34px] md:top-[88px] left-0 w-full h-0.5 bg-gray-800 -translate-y-full hidden md:block" style="z-index: 0;"></div>

                    <div class="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 relative z-10">
                        <div 
                            v-for="(step, index) in activeFlow.steps" 
                            :key="index"
                            class="flex flex-col items-center text-center group relative cursor-pointer"
                        >
                             <div class="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute bottom-full mb-3 w-48 md:w-56 p-3 bg-gray-900/95 text-gray-200 text-xs text-left rounded-lg border border-gray-700 shadow-2xl backdrop-blur-sm z-50 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
                                <p class="leading-relaxed font-light">{{ step.desc }}</p>
                                <div class="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-gray-900"></div>
                            </div>

                            <div class="relative mb-4 md:mb-6 transition-transform duration-300 group-hover:-translate-y-2 z-10">
                                <div 
                                    class="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center shadow-lg transition-all duration-300"
                                    :class="getColorClasses(step.color).border"
                                >
                                    <svg 
                                        class="w-6 h-6 md:w-8 md:h-8 transition-colors duration-300"
                                        :class="getColorClasses(step.color).text"
                                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="step.icon"></path>
                                    </svg>
                                </div>
                                <div 
                                    class="absolute -top-3 -right-3 w-6 h-6 md:w-7 md:h-7 rounded-full text-white text-[10px] md:text-xs font-bold flex items-center justify-center border-2 border-gray-900 shadow-lg group-hover:scale-110 transition-transform"
                                    :class="getColorClasses(step.color).bg"
                                >
                                    {{ index + 1 }}
                                </div>
                            </div>

                            <h5 class="font-bold text-white text-sm md:text-base mb-1 transition-colors" :class="getColorClasses(step.color).textHover">
                                {{ step.title }}
                            </h5>
                            <p class="text-[10px] md:text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                {{ step.sub }}
                            </p>
                        </div>
                    </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6 mt-12">
                     <div class="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 flex gap-4 hover:bg-gray-800/80 transition-colors">
                        <div class="flex-shrink-0 mt-1">
                            <div class="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center">
                                <i class="fas fa-eye text-orange-500"></i>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-white font-bold text-lg mb-1">End-to-End Visibility</h4>
                            <p class="text-gray-400 text-sm mb-3 font-light">{{ activeFlow.card1 }}</p>
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-yellow-900/30 text-yellow-500 border border-yellow-800/50">
                                <i class="fas fa-check mr-1.5"></i> Process Mining Ready
                            </span>
                        </div>
                    </div>

                    <div class="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6 flex gap-4 hover:bg-gray-800/80 transition-colors">
                        <div class="flex-shrink-0 mt-1">
                            <div class="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                                <i class="fas fa-exclamation-triangle text-red-500"></i>
                            </div>
                        </div>
                        <div>
                            <h4 class="text-white font-bold text-lg mb-1">Error & Exception Handling</h4>
                            <p class="text-gray-400 text-sm mb-3 font-light">{{ activeFlow.card2 }}</p>
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold bg-red-900/30 text-red-500 border border-red-800/50">
                                <i class="fas fa-bell mr-1.5"></i> Instant Alert
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </transition>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const currentFlowKey = ref('i2m')

// Helper function for dynamic colors in Tailwind
const getColorClasses = (colorName) => {
    const map = {
        rose:   { text: 'text-rose-400', textHover: 'group-hover:text-rose-400', border: 'group-hover:border-rose-500 group-hover:shadow-rose-500/20', bg: 'bg-rose-500' },
        purple: { text: 'text-purple-400', textHover: 'group-hover:text-purple-400', border: 'group-hover:border-purple-500 group-hover:shadow-purple-500/20', bg: 'bg-purple-500' },
        yellow: { text: 'text-yellow-400', textHover: 'group-hover:text-yellow-400', border: 'group-hover:border-yellow-500 group-hover:shadow-yellow-500/20', bg: 'bg-yellow-500' },
        blue:   { text: 'text-blue-400', textHover: 'group-hover:text-blue-400', border: 'group-hover:border-blue-500 group-hover:shadow-blue-500/20', bg: 'bg-blue-500' },
        orange: { text: 'text-orange-400', textHover: 'group-hover:text-orange-400', border: 'group-hover:border-orange-500 group-hover:shadow-orange-500/20', bg: 'bg-orange-500' },
        pink:   { text: 'text-pink-400', textHover: 'group-hover:text-pink-400', border: 'group-hover:border-pink-500 group-hover:shadow-pink-500/20', bg: 'bg-pink-500' },
        green:  { text: 'text-green-400', textHover: 'group-hover:text-green-400', border: 'group-hover:border-green-500 group-hover:shadow-green-500/20', bg: 'bg-green-500' },
        cyan:   { text: 'text-cyan-400', textHover: 'group-hover:text-cyan-400', border: 'group-hover:border-cyan-500 group-hover:shadow-cyan-500/20', bg: 'bg-cyan-500' },
        red:    { text: 'text-red-400', textHover: 'group-hover:text-red-400', border: 'group-hover:border-red-500 group-hover:shadow-red-500/20', bg: 'bg-red-500' },
        indigo: { text: 'text-indigo-400', textHover: 'group-hover:text-indigo-400', border: 'group-hover:border-indigo-500 group-hover:shadow-indigo-500/20', bg: 'bg-indigo-500' },
        teal:   { text: 'text-teal-400', textHover: 'group-hover:text-teal-400', border: 'group-hover:border-teal-500 group-hover:shadow-teal-500/20', bg: 'bg-teal-500' },
    }
    return map[colorName] || map['blue']
}

const workflows = {
    'i2m': {
        tabLabel: 'Idea-to-Market',
        title: 'IDEA-TO-MARKET (R&D & PRODUCT)',
        steps: [
            { title: 'Concept / Idea', sub: 'Market Research & Brief', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', color: 'rose', 
              desc: 'รวบรวมไอเดียจากทีมการตลาดและผลวิจัยผู้บริโภค สร้างเป็น Concept Brief เพื่อตั้งต้นโครงการพัฒนาสินค้าใหม่' },
            { title: 'Product Design', sub: 'CAD / Formulation', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z', color: 'purple',
              desc: 'ออกแบบบรรจุภัณฑ์ (CAD) หรือคิดสูตรการผลิต (Formula) พร้อมทำตัวต้นแบบ (Prototype) เพื่อทดสอบ' },
            { title: 'Costing (BOM)', sub: 'Material & Labor Calc.', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z', color: 'yellow',
              desc: 'คำนวณต้นทุนการผลิต (Bill of Materials) ค่าแรง และโสหุ้ย เพื่อกำหนดราคาขายเบื้องต้น' },
            { title: 'Compliance', sub: 'FDA / ISO / Registration', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', color: 'blue',
              desc: 'ยื่นจดทะเบียน อย., ขอใบรับรองมาตรฐาน (ISO/Halal) และตรวจสอบข้อกฎหมายก่อนผลิตจริง' },
            { title: 'Market Launch', sub: 'SKU Creation & Mktg', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: 'orange',
              desc: 'สร้าง Master Data ของสินค้า (SKU) ในระบบ ERP และเริ่มแคมเปญการตลาดเพื่อเปิดตัวสินค้า' }
        ],
        card1: 'ติดตามสถานะการพัฒนาสินค้าใหม่ (NPD) ว่าติดอยู่ที่ขั้นตอนไหน (สูตรยังไม่ผ่าน / รอ อย. / รอราคาต้นทุน)',
        card2: 'แจ้งเตือนเมื่อต้นทุนสินค้า (BOM Cost) เกินงบประมาณที่ตั้งไว้ หรือเอกสารใบอนุญาตกำลังจะหมดอายุ'
    },
    'l2c': {
        tabLabel: 'Lead-to-Contract',
        title: 'LEAD-TO-CONTRACT ORCHESTRATION',
        steps: [
            { title: 'Lead Capture', sub: 'Web Form / FB / LinkedIn', icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z', color: 'pink',
              desc: 'ดึงข้อมูลลูกค้าเป้าหมายอัตโนมัติจากทุกช่องทาง (Web, Ads, Social) เข้าสู่ระบบ CRM กลาง' },
            { title: 'Qualification', sub: 'AI Scoring & Routing', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', color: 'purple',
              desc: 'ใช้ AI ประเมินคุณภาพลูกค้า (Lead Scoring) และจ่ายงานให้เซลล์ที่มีความเชี่ยวชาญดูแล' },
            { title: 'Proposal Gen', sub: 'Auto-Quote from CRM', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z', color: 'blue',
              desc: 'สร้างใบเสนอราคาอัตโนมัติโดยดึงข้อมูลสินค้าและโปรโมชั่นล่าสุด ลดความผิดพลาด Human Error' },
            { title: 'Negotiation', sub: 'Version Control & Appr.', icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z', color: 'orange',
              desc: 'ระบบติดตามการต่อรองราคา จัดเก็บประวัติการแก้ไข (Version Control) และส่งขออนุมัติส่วนลด' },
            { title: 'e-Sign & Close', sub: 'Docusign → ERP Sync', icon: 'M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z', color: 'green',
              desc: 'เซ็นสัญญาออนไลน์ และ Sync ข้อมูลลูกค้าใหม่เข้าสู่ระบบ ERP เพื่อเตรียมเปิด Order ต่อไป' }
        ],
        card1: 'เห็น Pipeline ทั้งหมดว่า Lead แต่ละรายอยู่ที่ขั้นตอนไหน นานเท่าไหร่ (Aging) ช่วยดันยอดขายได้แม่นยำ',
        card2: 'แจ้งเตือนเมื่อสัญญาใกล้หมดอายุ หรือ Lead ค้างอยู่ในขั้นตอนเสนอนานผิดปกติ'
    },
    'o2c': {
        tabLabel: 'Order-to-Cash',
        title: 'ORDER-TO-CASH ORCHESTRATION',
        steps: [
            { title: 'Order Capture', sub: 'LINE OA / Web / Sales App', icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z', color: 'blue',
              desc: 'รับคำสั่งซื้อจากหลากหลายช่องทาง (Omni-channel) ข้อมูลวิ่งเข้าสู่ระบบกลางทันที' },
            { title: 'ERP Creation', sub: 'Sales Order via Integration', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4', color: 'purple',
              desc: 'ตรวจสอบเครดิตลูกค้า เช็คสต็อก และสร้าง Sales Order ใน ERP อัตโนมัติ (หรือแจ้งเตือนถ้าติดปัญหา)' },
            { title: 'Fulfillment', sub: 'Pick & Pack → Auto DO', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', color: 'orange',
              desc: 'ส่งคำสั่งไปยังคลังสินค้า (WMS) เพื่อหยิบของ แพ็คของ และออกใบส่งของ (DO) พร้อมเรียกรถขนส่ง' },
            { title: 'Invoicing', sub: 'Shipped → Draft Invoice', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'yellow',
              desc: 'เมื่อของส่งถึงมือลูกค้า ระบบจะออกใบแจ้งหนี้ (Invoice/Tax Invoice) ให้ฝ่ายบัญชีโดยอัตโนมัติ' },
            { title: 'Revenue Realized', sub: 'Payment → AR Update', icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z', color: 'green',
              desc: 'ตรวจสอบยอดเงินโอน (Reconcile) ตัดลูกหนี้การค้า (AR) และแสดงยอดขายใน Dashboard ผู้บริหาร' }
        ],
        card1: 'เห็นสถานะงานแบบ Real-time ว่า Order ไหนติดค้างที่ขั้นตอนใด (เช่น รอจัดของ / รอออกบิล) ลดการตามงานด้วยมือ',
        card2: 'เคสข้อมูลไม่ครบ, ยิงเข้าระบบไม่สำเร็จ, หรือเครดิตไม่พอ ระบบจะทำการ Log และแจ้งเตือนคนทันที'
    },
    'plan': {
        tabLabel: 'Plan-to-Produce',
        title: 'PLAN-TO-PRODUCE (MANUFACTURING)',
        steps: [
            { title: 'Demand Sensing', sub: 'Sales Forecast Integration', icon: 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z', color: 'blue',
              desc: 'ดึงข้อมูลยอดขายจริงและ Forecast มารวมกัน เพื่อวางแผนการผลิตแม่นยำ ไม่ผลิตเกินหรือขาด' },
            { title: 'Prod. Schedule', sub: 'MRP & Capacity Plan', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z', color: 'cyan',
              desc: 'ระบบคำนวณวัตถุดิบที่ต้องใช้ (MRP) และจัดตารางเครื่องจักร (Scheduling) ให้เหมาะสมกับกำลังการผลิต' },
            { title: 'Execution (WIP)', sub: 'Job Order to Machine', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z', color: 'orange',
              desc: 'ส่งใบสั่งผลิตเข้าหน้าจอ Tablet ที่ไลน์ผลิต หรือส่งคำสั่งตรงเข้าเครื่องจักร (IoT) เพื่อเริ่มงาน' },
            { title: 'Quality (QC)', sub: 'Inspect & Rework Loop', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'purple',
              desc: 'บันทึกผลการตรวจสอบคุณภาพ หากไม่ผ่าน ระบบจะสร้าง Job Rework หรือแจ้งเตือนทันที' },
            { title: 'Finished Goods', sub: 'Putaway to Warehouse', icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4', color: 'green',
              desc: 'สแกนบาร์โค้ดรับสินค้าสำเร็จรูปเข้าคลังสินค้า พร้อมตัดยอดวัตถุดิบออกจากระบบโดยอัตโนมัติ' }
        ],
        card1: 'เห็นยอด WIP (งานระหว่างทำ) ในแต่ละ Station แบบ Real-time ไม่ต้องรอรายงานท้ายกะจากพนักงาน',
        card2: 'แจ้งเตือนเมื่อ Yield ต่ำกว่ามาตรฐาน, เครื่องจักรเสีย (Downtime), หรือวัตถุดิบไม่พอผลิตตามแผน'
    },
    'p2p': {
        tabLabel: 'Procure-to-Pay',
        title: 'PROCURE-TO-PAY ORCHESTRATION',
        steps: [
            { title: 'PR Creation', sub: 'Employee Request', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', color: 'blue',
              desc: 'พนักงานสร้างใบขอซื้อ (PR) ผ่านมือถือหรือเว็บ ระบบตรวจสอบงบประมาณและผู้อนุมัติตามสายงาน' },
            { title: 'PO Approval', sub: 'Auto-Approve & Send', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'purple',
              desc: 'เปลี่ยน PR เป็น PO อัตโนมัติเมื่อผ่านการอนุมัติ และส่งอีเมลหา Supplier ทันที' },
            { title: 'Goods Receipt', sub: 'Receive & Scan Barcode', icon: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4', color: 'orange',
              desc: 'รับของที่โกดัง สแกนตรวจสอบความถูกต้อง ระบบบันทึก Goods Receipt (GR) เข้าระบบ ERP' },
            { title: 'Invoice Verify', sub: '3-Way Matching (OCR)', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z', color: 'yellow',
              desc: 'ตรวจสอบความถูกต้อง 3 ทาง (PO vs ใบรับของ vs ใบแจ้งหนี้) ด้วยระบบ OCR ป้องกันการจ่ายเงินผิด' },
            { title: 'Payment Run', sub: 'Schedule & GL Update', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z', color: 'green',
              desc: 'ตั้งรอบการจ่ายเงินอัตโนมัติ สร้างไฟล์โอนเงินให้ธนาคาร และบันทึกบัญชีเจ้าหนี้ (AP)' }
        ],
        card1: 'ติดตามสถานะ PR/PO ได้ทันทีว่าติดอยู่ที่ใคร (อนุมัติ / ของยังไม่ส่ง / รอวางบิล) ลดงาน Admin',
        card2: 'แจ้งเตือนทันทีเมื่อ ราคาในบิลไม่ตรงกับ PO หรือ Supplier ส่งของขาด/เกิน (Exception Handling)'
    },
    'i2r': {
        tabLabel: 'Incident-to-Res.',
        title: 'INCIDENT-TO-RESOLUTION ORCHESTRATION',
        steps: [
            { title: 'Ticket Log', sub: 'Email / Portal / IoT', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z', color: 'red',
              desc: 'รับแจ้งปัญหาจากลูกค้า (ผ่านเว็บ/แอป) หรือจากเซ็นเซอร์ IoT ที่เครื่องจักร (Machine Alert)' },
            { title: 'Auto Triage', sub: 'Categorize & Assign', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', color: 'orange',
              desc: 'AI วิเคราะห์หัวข้อปัญหา จัดลำดับความสำคัญ (Priority) และส่งงานให้ทีมช่างที่เกี่ยวข้อง' },
            { title: 'Diagnosis', sub: 'AI Suggest / KB Search', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', color: 'blue',
              desc: 'ระบบแนะนำวิธีการแก้ไขเบื้องต้น (Knowledge Base) ให้เจ้าหน้าที่ เพื่อความรวดเร็วในการแก้ปัญหา' },
            { title: 'Remediation', sub: 'Execute Fix / Patch', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z', color: 'purple',
              desc: 'ดำเนินการซ่อมแซม บันทึกเวลาที่ใช้ และอะไหล่ที่เบิกไปใช้ในการซ่อม' },
            { title: 'Closure', sub: 'Verify & Survey', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'green',
              desc: 'ตรวจสอบผลงาน ส่งแบบสอบถามความพึงพอใจให้ลูกค้า และปิดงานในระบบ' }
        ],
        card1: 'Dashboard รวม SLA Monitoring เห็นว่าเคสไหนกำลังจะหลุดกำหนด (Breach) แบบ Real-time',
        card2: 'Escalate อัตโนมัติหากเคสมีความรุนแรงสูง (P1) หรือแก้ไม่ได้ตามเวลาที่กำหนด'
    },
    'h2r': {
        tabLabel: 'Hire-to-Retire',
        title: 'HIRE-TO-RETIRE (HR & PEOPLE)',
        steps: [
            { title: 'Recruitment', sub: 'Job Post & Candidate', icon: 'M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z', color: 'indigo',
              desc: 'ประกาศรับสมัครงาน รวบรวมเรซูเม่ และคัดกรองผู้สมัครเบื้องต้นด้วยระบบ' },
            { title: 'Onboarding', sub: 'Contract & Asset Prov.', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', color: 'cyan',
              desc: 'เซ็นสัญญาจ้าง ระบบสร้าง User ไอที เตรียมคอมพิวเตอร์ และชุดยูนิฟอร์มอัตโนมัติ' },
            { title: 'Payroll & Ben', sub: 'Time Attend. & Calc', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', color: 'green',
              desc: 'ดึงเวลาเข้า-ออกงาน (Time Attendance) คำนวณเงินเดือน โอที และสวัสดิการ สิ้นเดือน' },
            { title: 'Development', sub: 'Training & KPI Eval', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', color: 'blue',
              desc: 'จัดการแผนการฝึกอบรม และประเมินผลการทำงาน (KPI/OKR) ประจำปี' },
            { title: 'Offboarding', sub: 'Resign / Retire', icon: 'M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1', color: 'red',
              desc: 'แจ้งลาออก คืนอุปกรณ์ ระงับสิทธิ์การเข้าถึงระบบ และจ่ายเงินชดเชยตามกฎหมาย' }
        ],
        card1: 'ดูภาพรวม Manpower ได้ทันที ขาด/เกิน ในแผนกไหน และสถานะการเบิกจ่าย OT ผิดปกติหรือไม่',
        card2: 'แจ้งเตือนเมื่อพนักงานขาดงานติดต่อกัน หรือใบรับรองความปลอดภัยในการทำงาน (Safety Cert) กำลังจะหมดอายุ'
    },
    't2r': {
        tabLabel: 'Trans-to-Report',
        title: 'TRANSACTION-TO-REPORT (FINANCE)',
        steps: [
            { title: 'Data Capture', sub: 'Sales / Expense / Bank', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4', color: 'blue',
              desc: 'รวบรวมข้อมูลธุรกรรมการเงินทั้งหมดจากระบบขาย จัดซื้อ และธนาคาร' },
            { title: 'Reconciliation', sub: 'Bank & GL Matching', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', color: 'teal',
              desc: 'กระทบยอดรายการธนาคารกับบัญชีแยกประเภท (GL) เพื่อตรวจสอบความถูกต้อง' },
            { title: 'Adjustments', sub: 'Accruals / FX Rate', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4', color: 'yellow',
              desc: 'ตั้งค้างรับ-ค้างจ่าย (Accruals) ปรับปรุงอัตราแลกเปลี่ยน และค่าเสื่อมราคา' },
            { title: 'Consolidation', sub: 'Inter-company Elim.', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10', color: 'purple',
              desc: 'รวมงบการเงินจากหลายบริษัทในเครือ และตัดรายการระหว่างกัน (Inter-company)' },
            { title: 'Fin. Report', sub: 'P&L / Balance Sheet', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', color: 'green',
              desc: 'ออกงบกำไรขาดทุน งบดุล และรายงานวิเคราะห์ทางการเงินสำหรับผู้บริหารและผู้ถือหุ้น' }
        ],
        card1: 'ลดเวลาปิดบัญชี (Month-end close) ด้วยการกระทบยอดอัตโนมัติ เห็นตัวเลขกำไร/ขาดทุน เร็วขึ้น',
        card2: 'แจ้งเตือนเมื่อพบรายการผิดปกติ (Anomaly Detection) เช่น ยอดค่าใช้จ่ายสูงผิดปกติ หรือรายการซ้ำซ้อน'
    }
}

const activeFlow = computed(() => workflows[currentFlowKey.value])
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>