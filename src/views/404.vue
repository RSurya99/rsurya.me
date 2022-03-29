<script lang="ts">
export default {
  name: 'NotFoundView',
}
</script>
<template>
  <section
    class="min-h-screen max-h-screen overflow-hidden w-full border-box sm:pt-20 pt-14 sm:pb-14 pb-8 lg:px-24 md:px-16 sm:px-8 px-8 transition-all duration-500 linear bg-slate-900"
  >
    <div class="empty-2-3">
      <div class="container mx-auto flex items-center justify-center flex-col">
        <img class="sm:w-auto w-5/6 sm:mb-16 mb-12 object-cover object-center" src="/404.webp" />
        <div class="text-center w-full">
          <h1 class="title-text text-3xl mb-5 font-semibold text-white">Opss! Something Missing</h1>
          <p class="caption-text mb-16 tracking-wide leading-7">
            The page you’re looking for isn’t found. We <br class="sm:block hidden" />
            suggest you Back to Homepage.
          </p>
          <div class="flex justify-center">
            <BaseButton to="/" class="px-8 py-4 bg-indigo-500 text-white" text="Back to Homepage" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.empty-2-3 {
  .caption-text {
    color: #707092;
  }
}

@media (min-width: 425px) {
  .empty-2-3 .title-text {
    font-size: 40px;
  }
}
</style>
