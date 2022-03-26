<script lang="ts">
export default {
  name: 'SectionHomeContact',
}
</script>
<script setup lang="ts">
import connectJSON from '@/assets/lottiefiles/connect.json'
</script>
<template>
  <div class="relative overflow-hidden h-screen pt-28">
    <div class="h-[90%] grid grid-cols-12 px-12 xl:px-24">
      <div class="col-span-6">
        <h1 class="text-7xl xl:text-8xl font-medium capitalize mb-6">Get In Touch</h1>
        <TitleUnderline class="mb-10" />
        <ul class="space-y-4">
          <li>
            <a
              href="mailto:rafli.rfsp@gmail.com"
              target="_blank"
              class="text-xl xl:text-2xl font-medium text-slate-200 hover:text-slate-300 transition duration-300 flex"
            >
              <IconMdiEmail class="mr-2" />
              rafli.rfsp@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://github.com/rsurya99"
              target="_blank"
              class="text-xl xl:text-2xl font-medium text-slate-200 hover:text-slate-300 transition duration-300 flex"
            >
              <IconMdiGithub class="mr-2" />
              RSurya99
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/rsurya-dev"
              target="_blank"
              class="text-xl xl:text-2xl font-medium text-slate-200 hover:text-slate-300 transition duration-300 flex"
            >
              <IconMdiLinkedin class="mr-2" />
              Rafli Surya Pratama
            </a>
          </li>
        </ul>
      </div>
      <div class="col-span-6">
        <div class="-mt-32 -mr-16">
          <BaseLottieFiles :lottie="connectJSON" />
        </div>
      </div>
    </div>
    <p class="text-center text-lg pb-4">Copyright © 2022 Created by RSurya99</p>
    <BackgroundPatternStripCircle
      data-speed="2"
      class="layer absolute -bottom-36 -right-14 text-indigo-500 fill-current transform -rotate-12 w-40 h-40"
    />
    <div
      class="absolute -bottom-14 -left-14 w-40 h-40 rounded-full border-[16px] border-indigo-500"
    ></div>
  </div>
</template>
