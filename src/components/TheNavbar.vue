<script setup>
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

// รายการเมนูและ ID เป้าหมายที่จะให้วิ่งไปหา
const navItems = [
  { label: 'Solutions', target: 'solutions-section' },
  { label: 'Technology', target: 'tech-section' },
  { label: 'Why TH8', target: 'why-th8-section' },
];

// ฟังก์ชันสำหรับ Scroll ไปยัง Section ที่ต้องการแบบนุ่มนวล
const scrollToSection = (targetId) => {
  isMobileMenuOpen.value = false; // ปิดเมนูมือถือถ้าเปิดอยู่
  const element = document.getElementById(targetId);
  if (element) {
    // Offset เล็กน้อยเผื่อความสูงของ Navbar (ประมาณ 80px)
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <nav class="fixed w-full z-50 bg-th8-dark/90 backdrop-blur-md border-b border-gray-800 transition-all duration-300">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        
        <div class="text-2xl font-bold tracking-tighter cursor-pointer" @click="scrollTo('hero-top')">
          TH8<span class="text-th8-red">.AI</span>
        </div>

        <div class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <button 
            v-for="(item, index) in navItems" 
            :key="index"
            @click="scrollToSection(item.target)"
            class="hover:text-white transition-colors relative group"
          >
            {{ item.label }}
            <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-th8-red transition-all group-hover:w-full"></span>
          </button>
        </div>

        <div class="hidden md:block">
             <a href="products/pitch/th8-b2b-salepage-F1.html" class="px-5 py-2 text-sm font-bold bg-white text-th8-dark rounded hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            TH8AI-DCC Solution
             </a>
        </div>

        <button @click="toggleMobileMenu" class="md:hidden text-gray-300 hover:text-white focus:outline-none z-50 relative">
          <div class="w-6 flex items-center justify-center relative">
             <span v-if="!isMobileMenuOpen" class="text-2xl"><i class="fas fa-bars"></i></span>
             <span v-else class="text-2xl"><i class="fas fa-times"></i></span>
          </div>
        </button>

      </div>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-10 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-10 opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-th8-dark border-b border-gray-800 shadow-2xl">
        <div class="container mx-auto px-6 py-4 flex flex-col gap-2">
          <button 
            v-for="(item, index) in navItems" 
            :key="index"
            @click="scrollToSection(item.target)"
            class="text-left py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-lg font-medium flex items-center justify-between"
          >
            {{ item.label }}
            <i class="fas fa-chevron-right text-xs opacity-50"></i>
          </button>
          <a href="products/pitch/th8-b2b-salepage-F1.html" class="px-5 py-2 text-sm font-bold bg-white text-th8-dark rounded hover:bg-gray-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            TH8AI-DCC Solution
             </a>
        </div>
      </div>
    </transition>
  </nav>
</template>