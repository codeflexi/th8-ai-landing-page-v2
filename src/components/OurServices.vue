<script setup>
import { ref } from 'vue';

const activeTab = ref('solutions'); // 'solutions' or 'engagement'

const solutions = [
  {
    icon: 'fa-chart-pie',
    title: 'FP&A & Finance Suite',
    desc: 'ปิดงบเร็วขึ้น วิเคราะห์ Scenario Planning และ P&L Impact แบบ Real-time',
    tags: ['Net Margin Agent', 'Cost Driver Analysis']
  },
  {
    icon: 'fa-truck-loading',
    title: 'Logistics Control Tower',
    desc: 'จัดการ Route, Stock และ SLA อัตโนมัติ แก้ปัญหาหน้างานก่อนของส่งไม่ทัน',
    tags: ['Shipment Exception', 'Warehouse Copilot']
  },
  {
    icon: 'fa-industry',
    title: 'Manufacturing OEE',
    desc: 'เชื่อมต่อ Machine State เข้ากับแผนผลิต ลด Downtime และของเสีย',
    tags: ['Yield Optimization', 'Maintenance Alert']
  },
  // --- เปลี่ยนใหม่ตรงนี้ครับ ---
  {
    icon: 'fa-headset', // เปลี่ยนไอคอนเป็น Headset
    title: 'CS Knowledge Copilot (RAG)',
    desc: 'ตอบคำถามลูกค้าแม่นยำ อ้างอิงจาก SOP และสัญญา ลดเวลาเทรนพนักงานใหม่',
    tags: ['Contract Search', 'Instant Answer', 'SOP Base']
  }
  // -------------------------
];

const engagements = [
  {
    step: '01',
    title: 'Discovery & Blueprint',
    type: 'Advisory Service',
    desc: 'ถอดรหัสกระบวนการธุรกิจ (As-Is) และออกแบบ Agentic Architecture (To-Be) ที่เหมาะกับองค์กรคุณ',
    details: 'Deliverable: System Blueprint & Roadmap'
  },
  {
    step: '02',
    title: 'Integration & Launch',
    type: 'Implementation Fee',
    desc: 'ติดตั้ง TH8 Stack เชื่อมต่อ ERP/Data Lake และปรับจูน Agent ให้เข้ากับ Business Logic',
    details: 'Deliverable: Production-Ready Agents'
  },
  {
    step: '03',
    title: 'Managed Evolution',
    type: 'Subscription / Retainer',
    desc: 'ดูแลระบบหลัง Go-live, Monitor Accuracy และอัปเดต Agent ให้ฉลาดขึ้นตามข้อมูลใหม่',
    details: 'Deliverable: Monthly Performance Report & Tuning'
  }
];
</script>

<template>
  <section class="py-24 bg-th8-dark border-t border-gray-800 relative overflow-hidden">
    <div class="absolute inset-0 bg-th8-dark/80 z-0 pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      
      <div class="text-center mb-12">
        <div class="inline-block mb-3 px-3 py-1 rounded border border-th8-red/30 bg-th8-red/10 text-th8-red text-xs font-bold tracking-widest uppercase">
          Our Offerings
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Solutions & Engagement</h2>
        <p class="text-th8-dim text-lg">เลือก Solution ที่ตรงกับอุตสาหกรรม หรือเริ่มจากการวางโครงสร้าง</p>
      </div>

      <div class="flex justify-center mb-12">
        <div class="bg-gray-800 p-1 rounded-lg inline-flex shadow-inner">
          <button 
            @click="activeTab = 'solutions'"
            :class="['px-6 py-3 rounded-md text-sm font-bold transition-all flex items-center', activeTab === 'solutions' ? 'bg-th8-red text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5']"
          >
            <i class="fas fa-box-open mr-3"></i> Industry Packages
          </button>
          <button 
            @click="activeTab = 'engagement'"
            :class="['px-6 py-3 rounded-md text-sm font-bold transition-all flex items-center', activeTab === 'engagement' ? 'bg-th8-red text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5']"
          >
            <i class="fas fa-handshake mr-3"></i> How We Work
          </button>
        </div>
      </div>

      <transition name="fade" mode="out-in">
        <div v-if="activeTab === 'solutions'" class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(item, index) in solutions" :key="index" 
               class="bg-th8-surface border border-gray-700/80 p-8 rounded-2xl hover:border-th8-gold/50 transition-all duration-300 hover:-translate-y-2 group shadow-lg">
            <div class="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center mb-6 text-th8-gold group-hover:bg-th8-gold/20 group-hover:scale-110 transition-all">
              <i :class="['fas', item.icon, 'text-2xl']"></i>
            </div>
            <h3 class="text-xl font-bold mb-3 text-white">{{ item.title }}</h3>
            <p class="text-sm text-gray-400 mb-6 leading-relaxed min-h-[64px]">{{ item.desc }}</p>
            <div class="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
              <span v-for="tag in item.tags" :key="tag" class="text-[10px] uppercase font-bold px-2.5 py-1 bg-black/30 text-gray-500 rounded-md border border-gray-700/50">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>

        <div v-else class="grid md:grid-cols-3 gap-8 relative">
          <div class="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-gray-800 via-th8-red/20 to-gray-800 -z-10"></div>
          
          <div v-for="(step, index) in engagements" :key="index" class="relative h-full">
            <div class="bg-th8-dark border border-gray-800 p-8 rounded-2xl text-center hover:border-th8-red/50 transition-all duration-300 h-full flex flex-col items-center z-10 shadow-xl group hover:-translate-y-1">
              <div class="w-20 h-20 rounded-full bg-th8-surface border-4 border-th8-dark flex items-center justify-center text-2xl font-black text-white mb-6 shadow-[0_0_30px_rgba(220,38,38,0.15)] group-hover:border-th8-red/30 transition-all relative">
                {{ step.step }}
                <div class="absolute inset-0 bg-th8-red/20 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 class="text-2xl font-bold mb-2 text-white">{{ step.title }}</h3>
              <span class="text-xs font-bold text-th8-red uppercase tracking-widest mb-6 block bg-th8-red/10 px-3 py-1 rounded-full">{{ step.type }}</span>
              <p class="text-gray-400 text-sm leading-relaxed mb-8">{{ step.desc }}</p>
              <div class="mt-auto pt-6 border-t border-gray-800 w-full">
                <p class="text-xs text-th8-dim font-semibold flex items-center justify-center">
                  <i class="fas fa-check-circle mr-2 text-green-500"></i> {{ step.details }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </transition>

    </div>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: all 0.3s ease-in-out; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(10px); }
</style>