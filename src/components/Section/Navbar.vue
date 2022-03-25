<script lang="ts">
export default {
  name: 'SectionNavbar',
}
</script>
<script setup lang="ts">
const { y } = useWindowScroll()
const menuOpen = ref(false)
const sticky = computed(() => {
  if (y.value > 0) {
    return 'fixed top-0 left-0 backdrop-blur-sm py-6'
  }
})
</script>
<template>
  <header class="w-full px-24 py-10 transition-all duration-300">
    <nav class="bg-transparent flex items-center justify-between">
      <a href="#" class="text-2xl hover:text-slate-300 transition duration-300l">RSurya99</a>
      <ul class="flex items-center">
        <li class="mr-16">
          <a
            href="https://twitter.com/rsurya99"
            target="_blank"
            class="hover:text-slate-300 transition duration-300"
          >
            <IconMdiTwitter class="text-2xl" />
          </a>
        </li>
        <li class="mr-16">
          <a
            href="https://www.instagram.com/rsurya99"
            target="_blank"
            class="hover:text-slate-300 transition duration-300"
          >
            <IconMdiInstagram class="text-2xl" />
          </a>
        </li>
        <li class="mr-16">
          <a href="https://linkedin.com/in/rsurya-dev" target="_blank">
            <IconMdiLinkedin class="text-2xl" />
          </a>
        </li>
        <li class="mr-24">
          <a
            href="https://github.com/rsurya99"
            target="_blank"
            class="hover:text-slate-300 transition duration-300"
          >
            <IconMdiGithub class="text-2xl" />
          </a>
        </li>
        <li>
          <button
            @click="menuOpen = !menuOpen"
            class="z-50 relative text-4xl hover:text-slate-300 transition duration-300"
          >
            <IconMdiMenu v-if="!menuOpen" />
            <IconMdiClose v-else />
          </button>
          <div
            v-if="menuOpen"
            class="w-full h-screen absolute top-0 left-0 bg-slate-900 bg-opacity-90 flex flex-col items-center justify-center space-y-8 z-30"
          >
            <a href="#" class="text-6xl font-medium hover:text-slate-200 transition duration-300">
              Home
            </a>
            <a href="#" class="text-6xl font-medium hover:text-slate-200 transition duration-300">
              Blog
            </a>
            <a href="#" class="text-6xl font-medium hover:text-slate-200 transition duration-300">
              Projects
            </a>
            <a href="#" class="text-6xl font-medium hover:text-slate-200 transition duration-300">
              About
            </a>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>
