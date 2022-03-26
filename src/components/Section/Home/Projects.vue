<script lang="ts">
export default {
  name: 'SectionHomeProjects',
}
</script>
<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/autoplay'

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
    <div class="flex flex-col items-center justify-center mb-20 space-y-12">
      <h2 class="text-7xl font-medium capitalize">Projects</h2>
      <TitleUnderline />
    </div>
    <div class="flex justify-end px-24 py-4">
      <RouterLink
        to="/projects"
        class="px-2.5 py-2 hover:bg-slate-700 rounded-lg flex items-center transition duration-300"
      >
        See More <IconMdiChevronRight class="ml-2 text-xl" />
      </RouterLink>
    </div>
    <swiper
      :loop="true"
      :slides-per-view="2.2"
      :centered-slides="true"
      :space-between="50"
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
