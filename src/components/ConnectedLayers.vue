<script setup>
import { ref, computed } from 'vue';

// เริ่มต้นที่ Layer 4 (บนสุด) ตามไฟล์ต้นฉบับ
const activeLayer = ref(4);

const layers = {
    4: {
        id: 4,
        title: "Strategic & Financial Oversight",
        subtitle: "The Brain",
        concept: "Real-time P&L Impact & Risk Management from operational actions.",
        color: "text-th8-gold",
        borderColor: "border-th8-gold",
        bgHover: "hover:bg-th8-gold/10",
        icon: "fa-chart-line",
        agents: [
             { role: 'Cross-Industry', name: 'P&L Impact Analysis Agent' },
             { role: 'Cross-Industry', name: 'Cost Driver & Margin Risk Agent' },
             { role: 'Cross-Industry', name: 'Scenario-to-Financial Bridge Agent' },
             { role: 'Retail/FMCG', name: 'Promotion Effectiveness & Uplift Agent' }
        ],
        link: "Operational metrics (Sales, OEE, SLA) ↔ Financial outcomes (Net Margin, Cashflow, ROI).",
        value: "Shift from lagging financial reports to real-time margin visibility and proactive risk mitigation."
    },
    1: {
        id: 1,
        title: "Integrated Business Planning (IBP)",
        subtitle: "The Vision",
        concept: "Single source of truth for Demand, Supply, and Financial plans.",
        color: "text-blue-400",
        borderColor: "border-blue-500",
        bgHover: "hover:bg-blue-500/10",
        icon: "fa-chess",
        agents: [
             { role: 'FMCG/Retail', name: 'Promotion Scenario Planning Agent' },
             { role: 'Manufacturing', name: 'Production Capacity & Constraint Agent' },
             { role: 'Supply Chain', name: 'Inventory Optimization Agent (Multi-location)' },
             { role: 'Cross-Industry', name: 'Sales & Valume Planning & Forecasting Agent' }
        ],
        link: "Commercial Forecasts ↔ Production Constraints ↔ Inventory Policy ↔ Distribution Capacity ↔ Financial Targets.",
        value: "Align sales ambitions with operational reality, reducing conflicts and optimizing working capital."
    },
    2: {
        id: 2,
        title: "Autonomous Execution & Operations",
        subtitle: "The Action",
        concept: "Proactive, automated handling of operational disruptions.",
        color: "text-green-400",
        borderColor: "border-green-500",
        bgHover: "hover:bg-green-500/10",
        icon: "fa-cogs",
        agents: [
             { role: 'Order Mgmt', name: 'Order Validation & Exception Agent' },
             { role: 'Logistics', name: 'Shipment Delay & Route Optimization Agent' },
             { role: 'Manufacturing', name: 'Machine Downtime & OEE Agent' },
             { role: 'Procurement', name: 'Auto-PO & Supplier Risk Agent' }
        ],
        link: "Real-time events (IoT, ERP triggers) ↔ Automated workflows (adjustments, alerts) ↔ Layer 3 & 1 updates.",
        value: "Move from firefighting to managing by exception, increasing speed and reducing manual errors."
    },
    3: {
        id: 3,
        title: "Customer Assurance & Service",
        subtitle: "The Experience",
        concept: "Transparent, proactive customer service based on real-time operational truth.",
        color: "text-orange-400",
        borderColor: "border-orange-500",
        bgHover: "hover:bg-orange-500/10",
        icon: "fa-handshake",
        agents: [
             { role: 'Service', name: 'Customer Service Knowledge Copilot (RAG)' },
             { role: 'Sales/Logistics', name: 'Delivery Commitment & OTIF Agent' },
             { role: 'Service', name: 'SLA Monitor & Breach Prevention Agent' },
             { role: 'Sales', name: 'Proactive Order Status Notification Agent' }
        ],
        link: "Customer inquiries/Contracts ↔ Real-time operational status (Layer 2) ↔ Financial implications (Layer 4).",
        value: "Build trust through transparency, reduce disputes, and minimize SLA-related penalties."
    }
};

const currentData = computed(() => layers[activeLayer.value]);
</script>

<template>
  <section class="py-24 bg-th8-dark relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-800/20 via-th8-dark to-th8-dark pointer-events-none"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="text-center mb-16">
        <div class="inline-block mb-3 px-3 py-1 rounded border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest uppercase">
            The Core Solution Map
        </div>
        <h2 class="text-3xl md:text-4xl font-bold mb-4">The Connected Value Chain</h2>
        <p class="text-th8-dim text-lg max-w-2xl mx-auto">
            เราเชื่อมโยง 4 เลเยอร์สำคัญของธุรกิจ ตั้งแต่กลยุทธ์จนถึงหน้างาน ให้ทำงานสอดคล้องกันแบบ Real-time เพื่อการตัดสินใจที่แม่นยำที่สุด
        </p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8 lg:h-[650px]">
        
        <div class="w-full lg:w-2/5 flex flex-col justify-center relative px-4 lg:px-0">
            <div class="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 hidden lg:block">
                <div class="w-1.5 h-12 bg-th8-red rounded-full shadow-[0_0_15px_#DC2626] animate-pulse absolute left-1/2 -translate-x-1/2 top-1/4 transition-all duration-700"
                     :style="{ top: `${(4 - activeLayer) * 25 + 10}%` }"></div>
            </div>

            <div class="space-y-4 relative z-10">
                <div 
                    v-for="(layerId) in [4, 1, 2, 3]" 
                    :key="layerId"
                    @mouseenter="activeLayer = layerId"
                    class="group cursor-pointer transition-all duration-300 lg:ml-8"
                >
                    <div :class="[
                        'p-5 rounded-xl border backdrop-blur-md transition-all duration-300 flex items-center justify-between relative overflow-hidden',
                        activeLayer === layerId 
                            ? `${layers[layerId].borderColor} bg-white/5 shadow-lg lg:translate-x-2` 
                            : 'border-gray-800/50 bg-gray-900/30 hover:border-gray-700 hover:bg-gray-800/50'
                    ]">
                        <div v-if="activeLayer === layerId" class="absolute inset-0 opacity-10 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full animate-[flow_1.5s_ease-in-out_infinite]"></div>
                        
                        <div class="flex items-center gap-4">
                            <div :class="['w-10 h-10 rounded-lg flex items-center justify-center bg-gray-800/50 border border-gray-700/50 transition-colors', activeLayer === layerId ? layers[layerId].color : 'text-gray-500']">
                                <i :class="['fas', layers[layerId].icon]"></i>
                            </div>
                            <div>
                                <div class="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Layer {{ layerId }}</div>
                                <h3 :class="['font-bold text-lg transition-colors', activeLayer === layerId ? 'text-white' : 'text-gray-300']">
                                    {{ layers[layerId].title }}
                                </h3>
                            </div>
                        </div>
                        <i :class="['fas fa-chevron-right transition-all', activeLayer === layerId ? `${layers[layerId].color} opacity-100 translate-x-0` : 'text-gray-600 opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0']"></i>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full lg:w-3/5 h-full">
            <div class="h-full bg-th8-surface/50 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 relative overflow-hidden transition-all duration-500 group">
                
                <div :class="['absolute -top-20 -right-20 w-96 h-96 blur-[150px] opacity-25 rounded-full transition-colors duration-700 pointer-events-none', 
                    currentData.id === 4 ? 'bg-th8-gold' : 
                    currentData.id === 1 ? 'bg-blue-500' : 
                    currentData.id === 2 ? 'bg-green-500' : 'bg-orange-500'
                ]"></div>

                <transition name="fade-slide" mode="out-in">
                    <div :key="activeLayer" class="relative z-10 h-full flex flex-col">
                        
                        <div class="flex items-start gap-5 mb-8 pb-8 border-b border-gray-700/50">
                            <div :class="['p-4 rounded-2xl bg-gray-800/50 border border-gray-700/50 shadow-inner', currentData.color]">
                                <i :class="['fas text-4xl', currentData.icon]"></i>
                            </div>
                            <div>
                                <div :class="['text-sm font-bold uppercase tracking-widest mb-2', currentData.color]">{{ currentData.subtitle }}</div>
                                <h2 class="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">{{ currentData.title }}</h2>
                                <p class="text-gray-300 text-lg leading-relaxed font-medium">{{ currentData.concept }}</p>
                            </div>
                        </div>

                        <div class="flex-grow space-y-8">
                            <div>
                                <h4 class="flex items-center text-sm font-bold text-gray-400 uppercase mb-4 tracking-wider">
                                    <i class="fas fa-robot mr-2 opacity-70"></i> Specialized Agents Team
                                </h4>
                                <div class="grid sm:grid-cols-2 gap-3">
                                    <div v-for="(agent, idx) in currentData.agents" :key="idx" 
                                         class="flex items-start gap-3 p-3 rounded-xl bg-gray-900/40 border border-gray-700/50 hover:border-gray-600/80 transition-colors group/agent">
                                        <span class="flex-shrink-0 px-2 py-1 rounded-md text-[10px] font-bold uppercase bg-gray-800 text-gray-400 border border-gray-700 group-hover/agent:text-gray-200 transition-colors">
                                            {{ agent.role }}
                                        </span>
                                        <span class="text-sm text-gray-200 font-medium leading-tight">{{ agent.name }}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                 <h4 class="flex items-center text-sm font-bold text-gray-400 uppercase mb-3 tracking-wider">
                                    <i class="fas fa-link mr-2 opacity-70"></i> Connected Flow
                                </h4>
                                <p class="text-sm text-gray-300 bg-gray-900/30 p-3 rounded-lg border border-gray-700/30 font-mono">
                                    <i class="fas fa-exchange-alt mr-2 opacity-50"></i> {{ currentData.link }}
                                </p>
                            </div>

                            <div :class="['mt-auto p-5 rounded-2xl border bg-gradient-to-br', `${currentData.borderColor} from-gray-900/80 to-gray-800/50`]">
                                <h4 :class="['text-xs font-bold uppercase mb-2 tracking-wider flex items-center', currentData.color]">
                                    <i class="fas fa-gem mr-2"></i> Executive Value
                                </h4>
                                <p class="text-lg text-white font-medium leading-relaxed">{{ currentData.value }}</p>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active { transition: all 0.4s ease-in-out; }
.fade-slide-enter-from { opacity: 0; transform: translateX(20px); }
.fade-slide-leave-to { opacity: 0; transform: translateX(-20px); }

/* เพิ่มความสูงให้ container เพื่อรองรับเนื้อหาที่มากขึ้นในหน้าจอขนาดใหญ่ */
@media (min-width: 1024px) {
    .lg\:h-\[650px\] { height: 650px; }
}
</style>