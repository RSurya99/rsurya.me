<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

import connectJSON from '../assets/lottiefiles/connect.json'

document.addEventListener('mousemove', parallax)

function parallax(e) {
  document.querySelectorAll('.layer').forEach((element: any) => {
    const speed = element.getAttribute('data-speed')
    const x = (window.innerWidth - e.pageX * speed) / 100
    const y = (window.innerWidth - e.pageY * speed) / 100
    element.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}
</script>
<template>
  <div class="relative bg-slate-900">
    <SectionNavbar />
    <SectionHomeLanding />
    <SectionHomeAbout />
    <BackgroundPatternSquare class="absolute bottom-[35%] -left-28 text-indigo-500 fill-current" />
    <SectionHomeProjects />
    <div class="relative overflow-hidden h-full py-28">
      <div class="flex flex-col items-center justify-center mb-16 space-y-12">
        <h1 class="text-7xl font-medium capitalize">Other things I’ve done</h1>
        <div class="layer" data-speed="1">
          <hr class="w-[100px] h-1 border-0 bg-indigo-500 rounded-md mb-8" />
          <hr class="w-[100px] h-1 border-0 bg-indigo-500 rounded-md ml-16" />
        </div>
      </div>
      <div class="grid grid-cols-12 gap-y-8 gap-x-10 px-24 mb-10">
        <div
          v-for="i in 6"
          :key="i"
          class="col-span-4 max-w-[370px] min-h-[200px] flex px-6 py-4 flex-col justify-between bg-slate-700 rounded-lg shadow-md hover:-translate-y-2 transition duration-500"
        >
          <div class="flex justify-between">
            <div>
              <IconMdiFolderOpenOutline class="text-2xl text-indigo-500 mb-2" />
              <h3 class="text-xl font-medium">Vue 3 Vite Starter</h3>
            </div>
            <IconMdiGithub class="text-2xl" />
          </div>
          <p class="text-slate-300 tracking-wide text-sm pr-8">
            A Vue 3 starter template or boilerplate for your new Vue projects using Vite.
          </p>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          class="px-12 py-4 border-2 border-indigo-500 text-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 transition duration-300 text-lg font-medium rounded-full"
        >
          See All
        </button>
      </div>
    </div>
    <div class="relative overflow-hidden h-full py-28">
      <div class="flex flex-col items-center justify-center mb-16 space-y-12">
        <h1 class="text-7xl font-medium capitalize">Skills</h1>
        <div class="layer" data-speed="1">
          <hr class="w-[100px] h-1 border-0 bg-indigo-500 rounded-md mb-8" />
          <hr class="w-[100px] h-1 border-0 bg-indigo-500 rounded-md ml-16" />
        </div>
      </div>
      <div class="grid grid-cols-12 gap-4 px-24 mb-10">
        <div
          v-for="i in 16"
          :key="i"
          class="col-span-3 min-h-[200px] flex px-6 py-4 flex-col items-center justify-center bg-slate-700 rounded-lg shadow-md"
        >
          <IconMdiGithub class="text-4xl" />
        </div>
      </div>
    </div>
    <div class="relative overflow-hidden h-full pt-28">
      <div class="grid grid-cols-12 px-24">
        <div class="col-span-6">
          <h1 class="text-8xl font-medium capitalize mb-6">Get In Touch</h1>
          <div class="layer mb-10" data-speed="1">
            <hr class="w-[100px] h-1 border-0 bg-indigo-500 rounded-md mb-8" />
            <hr class="w-[100px] h-1 border-0 bg-indigo-500 rounded-md ml-16" />
          </div>
          <ul class="space-y-4">
            <li>
              <a
                href="mailto:rafli.rfsp@gmail.com"
                target="_blank"
                class="text-2xl font-medium text-slate-200 hover:text-slate-300 transition duration-300 flex"
              >
                <IconMdiEmail class="mr-2" />
                rafli.rfsp@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rsurya99"
                target="_blank"
                class="text-2xl font-medium text-slate-200 hover:text-slate-300 transition duration-300 flex"
              >
                <IconMdiGithub class="mr-2" />
                RSurya99
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rsurya-dev"
                target="_blank"
                class="text-2xl font-medium text-slate-200 hover:text-slate-300 transition duration-300 flex"
              >
                <IconMdiLinkedin class="mr-2" />
                Rafli Surya Pratama
              </a>
            </li>
          </ul>
        </div>
        <div class="col-span-6">
          <div class="-mt-32 -mr-16">
            <Vue3Lottie :animationData="connectJSON" />
          </div>
        </div>
      </div>
      <div class="text-center text-lg py-4">Copyright © 2022 Created by RSurya99</div>
      <BackgroundPatternStripCircle
        data-speed="2"
        class="layer absolute -bottom-32 -right-14 text-indigo-500 fill-current transform -rotate-12 w-40 h-40"
      />
    </div>
  </div>
</template>
