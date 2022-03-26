<script lang="ts">
export default {
  name: 'SectionHomeProjects',
}
</script>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'

const slidePerView = computed(() => {
  if (window.innerWidth > 767 && window.innerWidth < 1024) {
    return 1.8
  } else if (window.innerWidth < 767) {
    return 1.2
  }
  return 2.2
})
const spaceBetween = computed(() => {
  if (window.innerWidth > 767 && window.innerWidth < 1024) {
    return 35
  } else if (window.innerWidth < 767) {
    return 25
  }
  return 50
})

const projectLists = ref([
  {
    img: '/projects/Horizon-5.webp',
    title: 'Horizon',
    alt: 'horizon',
    to: '/projects/horizon',
  },
  {
    img: '/projects/Indiedu-3.webp',
    title: 'Indiedu',
    alt: 'indiedu',
    to: '/projects/indiedu',
  },
  {
    img: '/projects/Nefa-3.webp',
    title: 'Nefa',
    alt: 'nefa',
    to: '/projects/nefa',
  },
  {
    img: '/projects/wbw.webp',
    title: 'WargaBantuWarga Clone',
    alt: 'wargabantuwarga-clone',
    to: '/projects/wargabantuwarga-clone',
  },
  {
    img: '/projects/Cetan-1.webp',
    title: 'Cetan',
    alt: 'cetan',
    to: '/projects/cetan',
  },
  {
    img: '/projects/Simono-6.webp',
    title: 'Simple Monochrome Online Shop',
    alt: 'simple-monochrome-online-shop-template',
    to: '/projects/simple-monochrome',
  },
  {
    img: '/projects/MarinaHotel-2.webp',
    title: 'Marina Hotel',
    alt: 'marina-hotel',
    to: '/projects/marina-hotel',
  },
  {
    img: '/projects/Spp-1.webp',
    title: 'Sistem Pembayaran SPP',
    alt: 'sistem-pembayaran-spp-online',
    to: '/projects/sistem-pembayaran-spp',
  },
  {
    img: '/projects/PasarFashionary-1.webp',
    title: 'Pasar Fashionary',
    alt: 'pasar-fashionary',
    to: '/projects/pasar-fashionary',
  },
])
</script>
<template>
  <BuilderWrapper class="py-28">
    <div class="flex flex-col items-center justify-center mb-16 xl:mb-20 space-y-12">
      <h2 class="text-6xl xl:text-7xl font-medium capitalize">Projects</h2>
      <TitleUnderline />
    </div>
    <div class="flex justify-end px-6 sm:px-12 xl:px-24 py-4">
      <RouterLink
        to="/projects"
        class="px-2.5 py-2 hover:bg-slate-700 rounded-lg flex items-center transition duration-300"
      >
        See More <IconMdiChevronRight class="ml-2 text-xl" />
      </RouterLink>
    </div>
    <swiper
      :loop="true"
      :slides-per-view="slidePerView"
      :centered-slides="true"
      :space-between="spaceBetween"
      :initial-slide="2"
    >
      <swiper-slide v-for="item in projectLists" :key="item.title">
        <BaseCarouselProjectItem
          :img="item.img"
          :title="item.title"
          :alt="item.alt"
          :to="item.to"
        />
      </swiper-slide>
    </swiper>
  </BuilderWrapper>
</template>
