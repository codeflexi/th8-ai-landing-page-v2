<script setup>
// Import ไอคอนนกฮูกที่เราเพิ่งสร้าง
import Th8OwlIcon from './Th8OwlIcon.vue';
</script>

<template>
  <section class="py-24 bg-th8-dark relative border-t border-gray-800">
    <div class="container mx-auto px-6">
      
      <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div class="max-w-2xl">
          <h2 class="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Why <span class="text-th8-red">TH8</span>.AI?
          </h2>
          <p class="text-th8-dim text-lg">
            เราไม่ได้เป็นแค่บริษัท Software House แต่เราคือ <strong>"Infrastructure Builder"</strong> 
            ที่ยึดถือ 4 DNA หลักในการสร้าง Agentic System ให้กับองค์กรไทย
          </p>
        </div>
        
        <div class="hidden md:block relative flex-shrink-0">
            <Th8OwlIcon class="w-32 h-32 md:w-40 md:h-40 opacity-95 transition-transform hover:scale-105 duration-300" />
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-th8-gold opacity-15 blur-[60px] -z-10 rounded-full"></div>
        </div>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        
        <div class="bg-gradient-to-b from-gray-800 to-th8-dark p-1 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-lg">
            <div class="bg-th8-dark h-full rounded-xl p-6 border border-gray-700 relative overflow-hidden group">
                <div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity select-none">
                    <span class="text-6xl font-black text-white">TH</span>
                </div>
                <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                    <i class="fas fa-user-shield text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Think Human First</h3>
                <p class="text-gray-400 text-sm leading-relaxed">
                    เริ่มจากความเข้าใจคนก่อนเทคโนโลยี ออกแบบ Agent ที่ "ช่วยคนทำงาน" ไม่ใช่แทนที่คน ลดแรงต้านการเปลี่ยนแปลง
                </p>
            </div>
        </div>

        <div class="bg-gradient-to-b from-gray-800 to-th8-dark p-1 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-lg">
            <div class="bg-th8-dark h-full rounded-xl p-6 border border-gray-700 relative overflow-hidden group">
                <div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity select-none">
                    <span class="text-6xl font-black text-white">A+I</span>
                </div>
                <div class="w-12 h-12 bg-th8-red/20 rounded-lg flex items-center justify-center mb-4 text-th8-red">
                    <i class="fas fa-plug text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Act with Integration</h3>
                <p class="text-gray-400 text-sm leading-relaxed">
                    แปลง Insight เป็นการกระทำจริง เชื่อมต่อ ERP/WMS/LINE ทันที ไม่ใช่แค่ Chatbot ที่คุยสนุกแต่ทำงานไม่ได้
                </p>
            </div>
        </div>

        <div class="bg-gradient-to-b from-gray-800 to-th8-dark p-1 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-lg">
            <div class="bg-th8-dark h-full rounded-xl p-6 border border-gray-700 relative overflow-hidden group">
                <div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity select-none">
                    <span class="text-6xl font-black text-white">LA</span>
                </div>
                <div class="w-12 h-12 bg-th8-gold/20 rounded-lg flex items-center justify-center mb-4 text-th8-gold">
                    <i class="fas fa-bolt text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Learn & Adapt Fast</h3>
                <p class="text-gray-400 text-sm leading-relaxed">
                    เติบโตไปพร้อมลูกค้าด้วย Agile Loop (Think-Act-Evaluate) ปรับ Agent ให้ฉลาดขึ้นทุกสัปดาห์ ไม่ใช่ทำแล้วทิ้ง
                </p>
            </div>
        </div>

        <div class="bg-gradient-to-b from-gray-800 to-th8-dark p-1 rounded-2xl hover:-translate-y-2 transition-transform duration-300 shadow-lg">
            <div class="bg-th8-dark h-full rounded-xl p-6 border border-gray-700 relative overflow-hidden group">
                <div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity select-none">
                    <span class="text-6xl font-black text-white">ND</span>
                </div>
                <div class="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 text-green-400">
                    <i class="fas fa-chart-line text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">Nurture with Data</h3>
                <p class="text-gray-400 text-sm leading-relaxed">
                    วัดผลลัพธ์จริงทางธุรกิจ (ROI/KPI) ทุกโครงการต้องมีตัวเลขยืนยันความคุ้มค่า ไม่ใช่แค่ความรู้สึก
                </p>
            </div>
        </div>

      </div>

      <div class="bg-th8-surface/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div class="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-th8-red opacity-[0.07] rounded-full blur-[100px] pointer-events-none"></div>
        <div class="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-th8-gold opacity-[0.05] rounded-full blur-[100px] pointer-events-none"></div>
        
        <div class="relative z-10">
          <div class="text-center mb-12">
            <h3 class="text-2xl md:text-3xl font-bold mb-3">The TH8 Difference</h3>
            <p class="text-th8-dim text-lg">ความแตกต่างที่ทำให้องค์กรชั้นนำเลือกเรา เหนือกว่า AI ทั่วไป</p>
          </div>

          <div class="grid md:grid-cols-3 gap-10">
            
            <div class="flex gap-5 items-start">
              <div class="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-th8-red border border-gray-700 shadow-sm">
                <i class="fas fa-language text-2xl"></i>
              </div>
              <div>
                <h4 class="text-xl font-bold text-white mb-2">Thai Context Native</h4>
                <p class="text-gray-400 leading-relaxed">
                  เราเข้าใจวัฒนธรรมการทำงานแบบไทย (Hierarchy/SOP) ระบบจึงถูกออกแบบให้ใช้งานง่ายและลดแรงต้านจากพนักงาน (Change Management) ได้จริง
                </p>
              </div>
            </div>

            <div class="flex gap-5 items-start">
              <div class="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-th8-gold border border-gray-700 shadow-sm">
                <i class="fas fa-shield-alt text-2xl"></i>
              </div>
              <div>
                <h4 class="text-xl font-bold text-white mb-2">Auditable & Safe</h4>
                <p class="text-gray-400 leading-relaxed">
                  แตกต่างจาก AI ทั่วไปตรงที่ "ตรวจสอบได้" (Audit Log) ทุกการตัดสินใจมีที่มาที่ไป และมี Guardrail ป้องกันข้อมูลรั่วไหลหรือทำงานผิดพลาด
                </p>
              </div>
            </div>

            <div class="flex gap-5 items-start">
              <div class="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-blue-400 border border-gray-700 shadow-sm">
                <i class="fas fa-building text-2xl"></i>
              </div>
              <div>
                <h4 class="text-xl font-bold text-white mb-2">Enterprise Infrastructure</h4>
                <p class="text-gray-400 leading-relaxed">
                  เราไม่ได้ทำแค่โปรเจกต์ (One-off) แต่เราวางโครงสร้างพื้นฐาน (Infrastructure) ให้คุณต่อยอดเป็น Productized Service ได้ในระยะยาว
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  </section>
</template>