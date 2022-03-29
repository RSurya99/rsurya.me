<script lang="ts">
export default {
  name: 'SectionHomeContact',
}
</script>
<script setup lang="ts">
import connectJSON from '@/assets/lottiefiles/connect.json'
</script>
<template>
  <div class="relative overflow-hidden min-h-screen pt-28">
    <div class="h-[90%] grid grid-cols-6 lg:grid-cols-12 px-12 xl:px-24 mb-16 sm:mb-10 lg:mb-0">
      <div class="order-last lg:order-none col-span-6 2xl:my-auto">
        <h1
          class="text-5xl sm:text-7xl xl:text-8xl font-medium capitalize mb-6 text-center sm:text-left"
        >
          Get In Touch
        </h1>
        <TitleUnderline class="hidden lg:block mb-10" />
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
        <div class="-mt-24 sm:-mt-32 sm:-mr-16">
          <BaseLottieFiles :lottie="connectJSON" />
        </div>
      </div>
    </div>
    <p class="text-center text-lg pb-4">Copyright © 2022 Created by RSurya99</p>
    <BackgroundPatternStripCircle
      data-speed="2"
      class="hidden lg:block layer absolute -bottom-36 -right-14 text-indigo-500 fill-current transform -rotate-12 w-40 h-40"
    />
    <div
      data-speed="2"
      class="hidden xl:block layer absolute -bottom-14 -left-14 w-40 h-40 rounded-full border-[16px] border-indigo-500"
    ></div>
  </div>
</template>
