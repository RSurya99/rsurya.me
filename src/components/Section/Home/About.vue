<script lang="ts">
export default {
  name: 'SectionHomeAbout',
}
</script>
<template>
  <div class="relative overflow-hidden h-full py-24">
    <div class="grid grid-cols-12 gap-6 px-12 xl:px-24">
      <div class="col-span-7">
        <h1 class="heading-1 capitalize">About Me</h1>
        <TitleUnderline class="mb-6 xl:mb-10" />
        <p class="text mb-10">
          I am a Frontend Engineer with a high <br />
          enthusiast of open-source.
        </p>
        <BaseButton class="px-10 py-5" text="Read More" to="/about" />
      </div>
      <div class="col-span-5">
        <div class="max-w-[504px] rounded-full overflow-hidden grayscale">
          <img src="@/assets/img/profile/me.jpg" alt="" />
        </div>
      </div>
    </div>
    <BackgroundPatternStripCircle
      data-speed="2"
      class="layer absolute bottom-0 -right-14 text-indigo-500 fill-current transform -rotate-12 w-40 h-40"
    />
    <BackgroundPatternZigzag
      data-speed="5"
      class="layer absolute top-12 left-[48%] text-emerald-500"
    />
  </div>
</template>
