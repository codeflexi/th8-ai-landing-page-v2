<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import Chart from 'chart.js/auto';

const publicPath = import.meta.env.BASE_URL;

const router = useRouter();
const revenueChartCanvas = ref(null);
const currentDateTag = ref('');
let chartInstance = null;

// ฟังก์ชันกลับหน้าหลัก
const goBackHome = () => {
  router.push('/');
};

onMounted(() => {
  // 1. Set Current Date
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  currentDateTag.value = now.toLocaleDateString('en-US', options);

  // 2. Initialize Chart.js
  if (revenueChartCanvas.value) {
    const ctx = revenueChartCanvas.value.getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(34, 211, 238, 0.2)');
    gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Revenue (THB)',
                data: [125000, 150000, 110000, 180000, 210000, 250000, 190000],
                borderColor: '#22d3ee',
                backgroundColor: gradient,
                borderWidth: 2,
                pointBackgroundColor: '#22d3ee',
                pointBorderColor: '#0f172a',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#1e293b',
                    titleColor: '#f8fafc',
                    bodyColor: '#cbd5e1',
                    borderColor: '#334155',
                    borderWidth: 1,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) { label += ': '; }
                            if (context.parsed.y !== null) {
                                label += new Intl.NumberFormat('th-TH', { style: 'currency', currency: 'THB' }).format(context.parsed.y);
                            }
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: '#334155', drawBorder: false },
                    ticks: {
                        color: '#94a3b8',
                        callback: function(value) {
                            if (value >= 1000) { return (value / 1000) + 'k'; }
                            return value;
                        }
                    }
                },
                x: { grid: { display: false }, ticks: { color: '#94a3b8' } }
            }
        }
    });
  }
});

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.destroy();
  }
});

const triggerWorkflow = () => alert("Workflow Engine Triggered: Auto-PO generation started for low stock items.");
const viewAuditLog = () => alert("Navigating to Audit Trail system...");
</script>

<template>
  <div class="bg-slate-950 text-slate-200 font-sans min-h-screen selection:bg-cyan-500/20 selection:text-cyan-400 pt-16 md:pt-0">

    <header class="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 p-4 fixed w-full top-0 z-40 md:relative md:bg-transparent md:backdrop-blur-none">
        <div class="container mx-auto flex justify-between items-center">
            <button @click="goBackHome" class="flex items-center gap-3 group cursor-pointer focus:outline-none">
                <div class="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
                    <i class="fas fa-robot text-white text-lg"></i>
                </div>
                <div class="text-left">
                    <h1 class="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                        <i class="fas fa-chevron-left text-sm mr-1 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                        TH8.AI <span class="text-cyan-400">Demo</span>
                    </h1>
                    <p class="text-xs text-slate-400 hidden md:block">Enterprise Agentic Command Center</p>
                </div>
            </button>

            <div class="flex items-center gap-4 md:gap-6">
                <div class="hidden md:flex items-center gap-2 text-sm text-slate-400 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700">
                    <i class="far fa-calendar-alt text-cyan-400"></i>
                    <span id="currentDate">{{ currentDateTag }}</span>
                </div>
                <div class="flex items-center gap-3">
                    <button class="relative p-2 text-slate-400 hover:text-white transition-colors">
                        <i class="fas fa-bell text-lg"></i>
                        <span class="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-slate-900"></span>
                    </button>
                    <div class="w-9 h-9 bg-slate-700 rounded-full border-2 border-slate-600 flex items-center justify-center cursor-pointer hover:border-cyan-400 transition-all">
                        <i class="fas fa-user text-sm"></i>
                    </div>
                </div>
            </div>
        </div>
    </header>


    <main class="container mx-auto p-4 md:p-6 space-y-6 mt-4 md:mt-0">

        <div class="mb-6">
            <h2 class="text-2xl font-bold text-white mb-2">Operational Overview</h2>
            <p class="text-slate-400 flex items-center gap-2">
                <i class="fas fa-sync-alt text-cyan-400 animate-spin-slow"></i>
                Real-time data synced via TH8 Integration Stack™
            </p>
        </div>


        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            <div class="kpi-card bg-slate-900/50 p-6 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-amber-500/50 transition-all duration-300">
                <div class="absolute -right-4 -top-4 w-24 h-24 bg-amber-500/10 blur-3xl rounded-full group-hover:bg-amber-500/20 transition-all"></div>
                <div class="flex justify-between items-start mb-4 relative z-10">
                    <div>
                        <p class="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Total Revenue (WTD)</p>
                        <h3 class="text-3xl font-bold text-white">฿ 1,224,000</h3>
                    </div>
                    <div class="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400">
                        <i class="fas fa-coins text-2xl"></i>
                    </div>
                </div>
                <div class="flex items-center gap-2 text-sm relative z-10">
                    <span class="flex items-center gap-1 text-green-400 font-bold bg-green-400/10 px-2 py-0.5 rounded">
                        <i class="fas fa-arrow-up text-xs"></i> 12.5%
                    </span>
                    <span class="text-slate-500">vs last week</span>
                </div>
            </div>
            <div class="kpi-card bg-slate-900/50 p-6 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-red-500/50 transition-all duration-300">
                <div class="absolute -right-4 -top-4 w-24 h-24 bg-red-500/10 blur-3xl rounded-full group-hover:bg-red-500/20 transition-all"></div>
                <div class="flex justify-between items-start mb-4 relative z-10">
                    <div>
                        <p class="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Active Orders</p>
                        <h3 class="text-3xl font-bold text-white">845</h3>
                    </div>
                    <div class="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">
                        <i class="fas fa-box-open text-2xl"></i>
                    </div>
                </div>
                <div class="flex items-center gap-2 text-sm relative z-10">
                     <span class="text-slate-400">Processing by <strong class="text-red-400">Action Engine™</strong></span>
                </div>
                 <div class="mt-4 h-1.5 w-full bg-slate-800 rounded-full overflow-hidden relative z-10">
                    <div class="h-full bg-red-500 w-[70%] rounded-full glow-red"></div>
                </div>
                 <div class="flex justify-between text-xs text-slate-500 mt-1 relative z-10">
                    <span>70% Fulfilled</span><span>Goal: 1,200</span>
                 </div>
            </div>
             <div class="kpi-card bg-slate-900/50 p-6 rounded-2xl border border-slate-800 relative overflow-hidden group hover:border-cyan-500/50 transition-all duration-300">
                <div class="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/10 blur-3xl rounded-full group-hover:bg-cyan-500/20 transition-all"></div>
                <div class="flex justify-between items-start mb-4 relative z-10">
                    <div>
                        <p class="text-sm text-slate-400 font-medium uppercase tracking-wider mb-1">Avg. Order Value</p>
                        <h3 class="text-3xl font-bold text-white">฿ 1,450</h3>
                    </div>
                    <div class="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">
                        <i class="fas fa-chart-line text-2xl"></i>
                    </div>
                </div>
                <div class="flex items-center gap-2 text-sm relative z-10">
                    <span class="flex items-center gap-1 text-green-400 font-bold bg-green-400/10 px-2 py-0.5 rounded">
                        <i class="fas fa-arrow-up text-xs"></i> 5.2%
                    </span>
                     <span class="text-slate-500">Uplift from Smart Promo</span>
                </div>
            </div>
        </div>


        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">

            <div class="lg:col-span-1 bg-slate-900/80 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm h-fit lg:sticky lg:top-6">
                <h3 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <i class="fas fa-history text-slate-400"></i>
                    Live Activity Feed
                    <span class="flex h-2.5 w-2.5 relative ml-auto">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                </h3>
                <div class="space-y-5 relative before:absolute before:inset-0 before:ml-2.5 before:w-0.5 before:-translate-x-1/2 before:bg-gradient-to-b before:from-slate-700 before:to-transparent before:h-full">
                    <div class="relative flex gap-4 items-start group">
                        <div class="absolute left-0 ml-2.5 -translate-x-1/2 translate-y-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] z-10 group-hover:scale-125 transition-transform"></div>
                        <div class="bg-slate-800/50 p-3 rounded-lg border border-slate-700 w-full group-hover:border-cyan-400/50 transition-colors">
                            <div class="flex justify-between items-start mb-1">
                                <p class="text-sm font-bold text-white">New Order Received <span class="text-cyan-400">#ORD-9921</span></p>
                                <span class="text-xs text-slate-500">Just now</span>
                            </div>
                            <p class="text-xs text-slate-400">Channel: LINE OA • Value: ฿2,500 • Status: <span class="text-yellow-400">Validating</span></p>
                        </div>
                    </div>
                    <div class="relative flex gap-4 items-start group">
                        <div class="absolute left-0 ml-2.5 -translate-x-1/2 translate-y-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-red-400 z-10 group-hover:scale-125 transition-transform"></div>
                        <div class="bg-slate-800/50 p-3 rounded-lg border border-slate-700 w-full group-hover:border-red-400/50 transition-colors">
                            <div class="flex justify-between items-start mb-1">
                                <p class="text-sm font-bold text-white">Stock Alert: Low Inventory</p>
                                <span class="text-xs text-slate-500">15m ago</span>
                            </div>
                            <p class="text-xs text-slate-400">SKU: TH8-DEV-KIT • Location: BKK-WH1 • Remaining: <span class="text-red-400 font-bold">5 units</span></p>
                        </div>
                    </div>
                    <div class="relative flex gap-4 items-start group">
                        <div class="absolute left-0 ml-2.5 -translate-x-1/2 translate-y-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-green-400 z-10 group-hover:scale-125 transition-transform"></div>
                        <div class="bg-slate-800/50 p-3 rounded-lg border border-slate-700 w-full group-hover:border-green-400/50 transition-colors">
                            <div class="flex justify-between items-start mb-1">
                                <p class="text-sm font-bold text-white">Payment Confirmed</p>
                                <span class="text-xs text-slate-500">42m ago</span>
                            </div>
                             <p class="text-xs text-slate-400">Order #ORD-9918 • Bank Transfer • Syncing to ERP via <span class="text-green-400">Workflow Engine</span></p>
                        </div>
                    </div>
                     <div class="relative flex gap-4 items-start group opacity-70">
                        <div class="absolute left-0 ml-2.5 -translate-x-1/2 translate-y-1.5 w-3 h-3 rounded-full bg-slate-900 border-2 border-slate-500 z-10"></div>
                        <div class="bg-slate-800/50 p-3 rounded-lg border border-slate-700 w-full">
                             <div class="flex justify-between items-start mb-1">
                                <p class="text-sm font-bold text-slate-300">Daily Sync Completed</p>
                                <span class="text-xs text-slate-500">2h ago</span>
                            </div>
                            <p class="text-xs text-slate-500">Master Data updated from SAP ERP successful.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div class="lg:col-span-2 space-y-6">
                
                <div class="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 backdrop-blur-sm">
                    <div class="flex justify-between items-center mb-6">
                        <div>
                             <h3 class="text-xl font-bold text-white mb-1">Revenue Trend</h3>
                             <p class="text-sm text-slate-400">Weekly performance vs Target</p>
                        </div>
                        <div class="flex bg-slate-800/50 p-1 rounded-lg border border-slate-700">
                            <button class="px-3 py-1 text-xs font-bold text-cyan-400 bg-slate-700/50 rounded-md">7D</button>
                            <button class="px-3 py-1 text-xs font-bold text-slate-400 hover:text-white transition-colors">30D</button>
                            <button class="px-3 py-1 text-xs font-bold text-slate-400 hover:text-white transition-colors">YTD</button>
                        </div>
                    </div>
                    <div class="relative h-[300px] w-full">
                        <canvas ref="revenueChartCanvas"></canvas>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="bg-gradient-to-br from-slate-900/80 to-slate-800/50 p-6 rounded-2xl border border-slate-800 relative overflow-hidden">
                        <div class="absolute -right-8 -bottom-8 text-8xl text-slate-800/30 z-0"><i class="fas fa-dolly"></i></div>
                        <div class="relative z-10">
                            <h4 class="text-lg font-bold text-white flex items-center gap-2 mb-3">
                                <i class="fas fa-lightbulb text-yellow-400"></i>
                                Insight: Stock Optimization
                            </h4>
                             <p class="text-sm text-slate-300 leading-relaxed mb-4">
                                AI predicts a stock-out for <strong class="text-white">SKU-A</strong> in 3 days based on current velocity.
                            </p>
                            <button @click="triggerWorkflow" class="w-full py-3 bg-slate-700 hover:bg-cyan-600 text-white text-sm font-bold rounded-xl border border-slate-600 hover:border-cyan-500 transition-all flex items-center justify-center gap-2 group">
                                <i class="fas fa-robot group-hover:animate-bounce"></i>
                                Approve Auto-Restock PO
                            </button>
                        </div>
                    </div>
                     <div class="bg-gradient-to-br from-slate-900/80 to-slate-800/50 p-6 rounded-2xl border border-slate-800 relative overflow-hidden">
                        <div class="absolute -right-8 -bottom-8 text-8xl text-slate-800/30 z-0"><i class="fas fa-fingerprint"></i></div>
                        <div class="relative z-10">
                            <h4 class="text-lg font-bold text-white flex items-center gap-2 mb-3">
                                <i class="fas fa-shield-alt text-green-400"></i>
                                Security & Compliance
                            </h4>
                             <p class="text-sm text-slate-300 leading-relaxed mb-4">
                                245 actions logged today. No unauthorized access attempts detected by Guardrails.
                            </p>
                            <button @click="viewAuditLog" class="w-full py-3 bg-slate-700 hover:bg-slate-600 text-white text-sm font-bold rounded-xl border border-slate-600 hover:border-slate-400 transition-all flex items-center justify-center gap-2">
                                <i class="fas fa-list-ul"></i>
                                View Full Audit Trail
                            </button>
                        </div>
                    </div>
                </div>

                <div class="mt-6"> 
    <a :href="`${publicPath}demo_dashboard.html`" target="_blank" class="group block bg-gradient-to-r from-slate-900/80 to-slate-800/50 border border-slate-800 hover:border-blue-500/50 p-4 rounded-2xl transition-all shadow-lg backdrop-blur-sm relative overflow-hidden">
        
        <div class="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-all pointer-events-none"></div>

        <div class="flex items-center justify-between relative z-10">
            <div class="flex items-center gap-5">
                <div class="w-14 h-14 bg-blue-500/10 rounded-xl border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-105 group-hover:bg-blue-500/20 transition-all">
                    <i class="fas fa-code text-2xl"></i>
                </div>
                <div>
                    <h4 class="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                        Legacy HTML Dashboard
                        <span class="ml-2 text-xs bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full border border-blue-500/30">Static View</span>
                    </h4>
                    <p class="text-sm text-slate-400 leading-relaxed">
                        คลิกเพื่อเปิดไฟล์ HTML ต้นฉบับในแท็บใหม่ (ไม่ได้เชื่อมต่อข้อมูลจริง)
                    </p>
                </div>
            </div>
            <i class="fas fa-chevron-right text-slate-600 text-xl group-hover:text-blue-400 group-hover:translate-x-1 transition-all mr-4"></i>
        </div>
    </a>
</div>
                </div>

        </div>

    </main>

</div>
</template>

<style scoped>
/* Custom styles from the original demo_dashboard.html */
.custom-scrollbar::-webkit-scrollbar { width: 5px; }
.custom-scrollbar::-webkit-scrollbar-track { background: #0f172a; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
.animate-spin-slow { animation: spin 3s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.glow-red { box-shadow: 0 0 10px #ef4444, 0 0 20px #ef444444; }
</style>