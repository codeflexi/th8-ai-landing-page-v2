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

      <div class="bg-th8-dark/50 backdrop-blur-md border border-gray-700/50 rounded-3xl p-8 md:p-12 relative overflow-hidden z-10">
        <div class="absolute inset-0 bg-gradient-to-br from-th8-red/5 via-transparent to-blue-500/5 pointer-events-none opacity-20"></div>

        <div class="text-center mb-12 relative z-10">
            <a href="https://codeflexi.github.io/th8-ai-site-v2/" target="_blank" class="group inline-flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity">
                <h3 class="text-3xl font-bold flex items-center justify-center gap-3 group-hover:text-blue-400 transition-colors">
                    <i class="fas fa-sync-alt text-th8-red group-hover:text-blue-400 transition-colors"></i> 
                    TH8 Workflow Sync Engine™
                </h3>
                <i class="fas fa-external-link-alt text-gray-500 text-sm group-hover:text-blue-400 transition-colors"></i>
            </a>
            
            <p class="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                กลไกกลางที่ทำให้ <strong>“งาน 1 เรื่อง” วิ่งครบทุกระบบโดยไม่หล่นกลางทาง</strong> เชื่อมโยงการทำงานของ Agent, Action Engine และฐานข้อมูลเข้าด้วยกันเป็นกระบวนการเดียว (End-to-End Process)
            </p>
             <div class="flex flex-wrap justify-center gap-3 mt-6">
                <span class="px-3 py-1.5 text-xs font-bold bg-blue-900/30 text-blue-300 rounded-lg border border-blue-700/50">Order-to-Cash</span>
                <span class="px-3 py-1.5 text-xs font-bold bg-green-900/30 text-green-300 rounded-lg border border-green-700/50">Procure-to-Pay</span>
                <span class="px-3 py-1.5 text-xs font-bold bg-purple-900/30 text-purple-300 rounded-lg border border-purple-700/50">Lead-to-Contract</span>
                <span class="px-3 py-1.5 text-xs font-bold bg-red-900/30 text-red-300 rounded-lg border border-red-700/50">Incident-to-Resolution</span>
            </div>
        </div>

        <div class="mb-12 relative z-10">
            <h4 class="text-sm font-bold text-gray-400 uppercase mb-6 text-center tracking-wider">Example Flow: Order-to-Cash Orchestration</h4>
            
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4 items-center justify-items-center">
                <div class="flex flex-col items-center text-center group relative w-full">
                    <div class="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-blue-400 mb-3 shadow-lg group-hover:border-blue-500 transition-all z-10 relative">
                        <i class="fas fa-inbox text-2xl"></i>
                         <div class="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold text-white">1</div>
                    </div>
                    <h5 class="font-bold text-white text-sm mb-1">Order Capture</h5>
                    <p class="text-xs text-gray-400">LINE OA / Web / Sales App</p>
                    <div class="hidden md:block absolute top-8 -right-[50%] w-full h-0.5 bg-gray-700 z-0">
                        <i class="fas fa-chevron-right absolute right-0 -top-1.5 text-gray-500"></i>
                    </div>
                </div>

                <div class="flex flex-col items-center text-center group relative w-full">
                    <div class="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-indigo-400 mb-3 shadow-lg group-hover:border-indigo-500 transition-all z-10 relative">
                        <i class="fas fa-database text-2xl"></i>
                        <div class="absolute -top-2 -right-2 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center text-xs font-bold text-white">2</div>
                    </div>
                    <h5 class="font-bold text-white text-sm mb-1">ERP Creation</h5>
                    <p class="text-xs text-gray-400">Sales Order via Integration Stack</p>
                     <div class="hidden md:block absolute top-8 -right-[50%] w-full h-0.5 bg-gray-700 z-0"><i class="fas fa-chevron-right absolute right-0 -top-1.5 text-gray-500"></i></div>
                </div>

                <div class="flex flex-col items-center text-center group relative w-full">
                    <div class="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-orange-400 mb-3 shadow-lg group-hover:border-orange-500 transition-all z-10 relative">
                        <i class="fas fa-truck-loading text-2xl"></i>
                         <div class="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-xs font-bold text-white">3</div>
                    </div>
                    <h5 class="font-bold text-white text-sm mb-1">Fulfillment (WMS)</h5>
                    <p class="text-xs text-gray-400">Pick & Pack → Auto DO</p>
                     <div class="hidden md:block absolute top-8 -right-[50%] w-full h-0.5 bg-gray-700 z-0"><i class="fas fa-chevron-right absolute right-0 -top-1.5 text-gray-500"></i></div>
                </div>

                <div class="flex flex-col items-center text-center group relative w-full">
                    <div class="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-yellow-400 mb-3 shadow-lg group-hover:border-yellow-500 transition-all z-10 relative">
                        <i class="fas fa-file-invoice-dollar text-2xl"></i>
                        <div class="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center text-xs font-bold text-white">4</div>
                    </div>
                    <h5 class="font-bold text-white text-sm mb-1">Invoicing</h5>
                    <p class="text-xs text-gray-400">Shipped → Draft Invoice for Acct.</p>
                     <div class="hidden md:block absolute top-8 -right-[50%] w-full h-0.5 bg-gray-700 z-0"><i class="fas fa-chevron-right absolute right-0 -top-1.5 text-gray-500"></i></div>
                </div>

                <div class="flex flex-col items-center text-center group relative w-full">
                    <div class="w-16 h-16 rounded-2xl bg-gray-800 border border-gray-700 flex items-center justify-center text-green-400 mb-3 shadow-lg group-hover:border-green-500 transition-all z-10 relative">
                        <i class="fas fa-chart-line text-2xl"></i>
                        <div class="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white">5</div>
                    </div>
                    <h5 class="font-bold text-white text-sm mb-1">Revenue Realized</h5>
                    <p class="text-xs text-gray-400">Payment Received → AR Update & Dashboard</p>
                </div>
            </div>
        </div>

        <div class="grid md:grid-cols-2 gap-6 relative z-10">
            <div class="bg-gray-900/50 border border-gray-700/50 p-6 rounded-xl flex gap-5 items-start hover:border-th8-gold/30 transition-all">
                <div class="flex-shrink-0 w-12 h-12 bg-th8-gold/10 text-th8-gold rounded-lg flex items-center justify-center border border-th8-gold/20">
                    <i class="fas fa-eye text-xl"></i>
                </div>
                <div>
                    <h4 class="text-lg font-bold text-white mb-2">End-to-End Visibility</h4>
                    <p class="text-sm text-gray-400 leading-relaxed mb-3">
                        เห็นสถานะงานแบบ Real-time ว่า Order ไหนติดค้างที่ขั้นตอนใด (เช่น รอจัดของ / รอออกบิล / รอเก็บเงิน) ลดการตามงานด้วยมือ
                    </p>
                     <div class="flex gap-2">
                        <span class="px-2 py-1 text-[10px] font-bold bg-black/30 text-th8-gold rounded border border-th8-gold/20"><i class="fas fa-check mr-1"></i> Process Mining Ready</span>
                    </div>
                </div>
            </div>

            <div class="bg-gray-900/50 border border-gray-700/50 p-6 rounded-xl flex gap-5 items-start hover:border-th8-red/30 transition-all">
                <div class="flex-shrink-0 w-12 h-12 bg-th8-red/10 text-th8-red rounded-lg flex items-center justify-center border border-th8-red/20">
                    <i class="fas fa-exclamation-triangle text-xl"></i>
                </div>
                <div>
                    <h4 class="text-lg font-bold text-white mb-2">Error & Exception Handling</h4>
                    <p class="text-sm text-gray-400 leading-relaxed mb-3">
                        เคสข้อมูลไม่ครบ, ยิงเข้าระบบไม่สำเร็จ, หรือเครดิตไม่พอ ระบบจะทำการ Log และแจ้งเตือนคน (Human-in-the-loop) ทันที ไม่ปล่อยให้งานหลุด
                    </p>
                    <div class="flex gap-2">
                        <span class="px-2 py-1 text-[10px] font-bold bg-black/30 text-th8-red rounded border border-th8-red/20"><i class="fas fa-bell mr-1"></i> Instant Alert</span>
                    </div>
                </div>
            </div>
        </div>

      </div>

    </div>
  </section>
</template>