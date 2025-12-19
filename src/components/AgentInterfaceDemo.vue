<script setup>
import { ref, onMounted } from 'vue';

const steps = ref([
    { 
        id: 1, 
        type: 'user', 
        content: 'ช่วยคำนวณ Promo สินค้า A ถ้าลด 20% จะคุ้มไหม?', 
        time: '10:42:05' 
    },
    { 
        id: 2, 
        type: 'agent-thought', 
        title: 'Layer 1: Strategy & Planning',
        status: 'Thinking...',
        logs: [
            '> Identifying Product: SKU-A (Coffee Blend)',
            '> Scenario: Discount -20% (Price 100 -> 80)',
            '> Goal: Optimize for Net Profit (not just Revenue)'
        ],
        time: '10:42:06' 
    },
    { 
        id: 3, 
        type: 'agent-action', 
        title: 'Layer 2: Execution (Data Fetch)',
        status: 'Success',
        logs: [
            '> Querying Database: "Sales_History_2024"',
            '> Retrieving Margin Data from ERP...',
            '> Found Base Baseline Sales: 1,000 units/week'
        ],
        data: {
            uplift_factor: "1.8x",
            margin_per_unit: "30 THB (was 50)",
            est_volume: "2,800 units"
        },
        time: '10:42:08' 
    },
    { 
        id: 4, 
        type: 'agent-guardrail', 
        title: 'Layer 3: Guardrail Check',
        status: 'Passed',
        logs: [
            '> Checking Policy: "Min Margin Threshold > 15%"',
            '> Result: 22% Margin -> PASS',
            '> Checking Inventory: "Available Stock > 3,000"',
            '> Result: 2,800 required / 5,000 available -> PASS'
        ],
        isSecure: true,
        time: '10:42:09' 
    },
    { 
        id: 5, 
        type: 'final-result', 
        content: 'สรุป: การลดราคา 20% "คุ้มค่า" ครับ (Worthwhile)\nกำไรรวมคาดการณ์: 84,000 บาท (เพิ่มขึ้นจากปกติ 4,000 บาท)\nInventory เพียงพอสำหรับการจัดแคมเปญครับ',
        uplift: '+180% Uplift',
        time: '10:42:10' 
    }
]);

const visibleSteps = ref([]);

// Simple animation to show steps one by one
onMounted(() => {
    let delay = 0;
    steps.value.forEach((step, index) => {
        setTimeout(() => {
            visibleSteps.value.push(step);
            // Auto scroll to bottom could go here
        }, delay);
        delay += (index === 0 ? 500 : 1500); // Dynamic delay
    });
});
</script>

<template>
  <div class="w-full max-w-4xl mx-auto perspective-1000">
    <div class="bg-[#1E293B] rounded-xl border border-gray-700 shadow-2xl overflow-hidden transform rotate-x-2 transition-all duration-500 hover:rotate-0 hover:scale-[1.02]">
        
        <div class="bg-[#0F172A] px-4 py-3 flex items-center justify-between border-b border-gray-700">
            <div class="flex gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="text-xs text-gray-400 font-mono flex items-center gap-2">
                <i class="fas fa-lock text-green-500"></i> TH8 Secure Environment
            </div>
            <div class="text-xs text-gray-500">v2.4.0-Enterprise</div>
        </div>

        <div class="p-6 h-[500px] overflow-y-auto bg-[#0F172A]/90 font-mono text-sm relative custom-scrollbar">
            
            <div class="absolute inset-0 pointer-events-none opacity-5" 
                 style="background-image: linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px); background-size: 20px 20px;">
            </div>

            <TransitionGroup name="list" tag="div" class="relative z-10 space-y-4">
                <div v-for="step in visibleSteps" :key="step.id">

                    <div v-if="step.type === 'user'" class="flex justify-end mb-6">
                        <div class="bg-blue-600/20 border border-blue-500/30 text-blue-100 px-4 py-3 rounded-lg rounded-tr-none max-w-[80%]">
                            <div class="flex items-center gap-2 mb-1 opacity-50 text-xs">
                                <i class="fas fa-user"></i> User <span class="ml-auto">{{ step.time }}</span>
                            </div>
                            {{ step.content }}
                        </div>
                    </div>

                    <div v-else-if="['agent-thought', 'agent-action', 'agent-guardrail'].includes(step.type)" 
                         class="border-l-2 ml-2 pl-4 py-2 relative"
                         :class="{
                             'border-th8-gold': step.type === 'agent-thought',
                             'border-blue-500': step.type === 'agent-action',
                             'border-green-500': step.type === 'agent-guardrail'
                         }">
                        
                        <div class="absolute -left-[9px] top-6 w-4 h-4 rounded-full border-2 bg-[#0F172A]"
                             :class="{
                                 'border-th8-gold text-th8-gold': step.type === 'agent-thought',
                                 'border-blue-500 text-blue-500': step.type === 'agent-action',
                                 'border-green-500 text-green-500': step.type === 'agent-guardrail'
                             }">
                             <i class="fas fa-circle text-[6px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></i>
                        </div>

                        <div class="bg-[#1E293B]/50 p-3 rounded border border-gray-700/50 mb-2">
                            <div class="flex justify-between items-center mb-2">
                                <span class="font-bold text-xs uppercase tracking-wider"
                                      :class="{
                                         'text-th8-gold': step.type === 'agent-thought',
                                         'text-blue-400': step.type === 'agent-action',
                                         'text-green-400': step.type === 'agent-guardrail'
                                      }">
                                    {{ step.title }}
                                </span>
                                <span class="text-[10px] px-2 py-0.5 rounded bg-gray-800 text-gray-400">{{ step.status }}</span>
                            </div>

                            <div class="space-y-1 text-gray-400 text-xs">
                                <div v-for="(log, i) in step.logs" :key="i">{{ log }}</div>
                            </div>

                            <div v-if="step.data" class="mt-3 p-2 bg-black/30 rounded border border-gray-700/50 font-mono text-[10px] text-green-400">
                                <span class="text-gray-500">// Extracted Data</span><br>
                                {{ JSON.stringify(step.data, null, 2) }}
                            </div>
                        </div>
                    </div>

                    <div v-if="step.type === 'final-result'" class="flex justify-start mt-6">
                        <div class="bg-th8-dark border border-gray-600 text-gray-200 px-4 py-4 rounded-lg rounded-tl-none w-full shadow-lg relative overflow-hidden">
                            <div class="absolute top-0 left-0 w-1 h-full bg-th8-red"></div>
                            
                            <div class="flex items-center gap-2 mb-3 opacity-50 text-xs">
                                <i class="fas fa-robot text-th8-red"></i> TH8 Agent <span class="ml-auto">{{ step.time }}</span>
                            </div>
                            
                            <div class="whitespace-pre-line mb-4">{{ step.content }}</div>

                            <div class="flex gap-4">
                                <div class="bg-green-900/30 border border-green-500/30 px-3 py-2 rounded text-center">
                                    <div class="text-xs text-green-400 uppercase">Est. Uplift</div>
                                    <div class="text-lg font-bold text-white">{{ step.uplift }}</div>
                                </div>
                                <div class="bg-blue-900/30 border border-blue-500/30 px-3 py-2 rounded text-center flex-grow">
                                    <div class="text-xs text-blue-400 uppercase">Validation</div>
                                    <div class="text-sm font-bold text-white mt-1"><i class="fas fa-check-circle mr-1"></i> Audit Log Recorded</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </TransitionGroup>

        </div>
    </div>
  </div>
</template>

<style scoped>
.perspective-1000 { perspective: 1000px; }
.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-track { background: #0F172A; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 3px; }

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>