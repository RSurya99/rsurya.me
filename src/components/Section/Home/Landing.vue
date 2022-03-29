<script lang="ts">
export default {
  name: 'SectionHomeLanding',
}
</script>
<script setup lang="ts">
import workJSON from '@/assets/lottiefiles/work-from-home.json'
</script>
<template>
  <BuilderWrapper class="pb-28">
    <div class="relative overflow-hidden min-h-screen">
      <div class="grid grid-cols-6 lg:grid-cols-12 lg:gap-20 px-6 sm:px-12 xl:px-24">
        <div class="col-span-6 w-full text-center lg:text-left mt-10 lg:mt-0 2xl:my-auto">
          <span class="px-2 text-lpg font-lightNovel mb-1">ポートフォリオ</span>
          <h1 class="heading-1 uppercase">Rafli Surya Pratama</h1>
          <TitleUnderline class="hidden lg:block mb-6 xl:mb-10" />
          <p class="text">
            Frontend Engineer / <br />
            Web Developer
          </p>
        </div>
        <div class="col-span-6 mt-4 lg:mt-0">
          <div class="-mt-8 -mr-8">
            <BaseLottieFiles :lottie="workJSON" />
          </div>
        </div>
      </div>
      <div
        data-speed="4"
        class="hidden xl:block layer absolute top-14 left-0 w-20 h-3 bg-indigo-500"
      ></div>
      <div
        data-speed="-5"
        class="layer absolute bottom-20 md:bottom-44 -right-4 w-20 h-3 bg-indigo-500"
      ></div>
      <BackgroundPatternPolygon3d
        data-speed="-5"
        class="hidden lg:block layer absolute -top-8 left-[45%]"
      />
      <BackgroundPatternSquare
        data-speed="5"
        class="hidden lg:block layer absolute top-0 -right-36 text-indigo-500 fill-current"
      />
      <BackgroundPatternCross
        data-speed="2"
        class="hidden lg:block layer absolute bottom-28 left-[40%]"
      />
      <BackgroundPatternStripDot
        data-speed="6"
        class="hidden lg:block layer absolute bottom-20 right-64"
      />
    </div>
    <img
      src="@/assets/pattern/japan.svg"
      data-speed="8"
      class="hidden lg:block layer absolute -bottom-10 -right-56 z-10"
    />
  </BuilderWrapper>
</template>
