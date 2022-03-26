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

const hamburgerItems = ref([
  {
    to: '/',
    text: 'Home',
  },
  {
    to: '/blogs',
    text: 'Blogs',
  },
  {
    to: '/projects',
    text: 'Projects',
  },
  {
    to: '/about',
    text: 'About',
  },
])
</script>
<template>
  <header class="w-full px-6 sm:px-12 xl:px-24 py-8 transition-all duration-300">
    <nav class="bg-transparent flex items-center justify-between">
      <a href="#" class="text-2xl hover:text-slate-300 transition duration-300l">RSurya99</a>
      <ul class="flex items-center">
        <BaseNavbarSocialItem href="https://twitter.com/rsurya99">
          <IconMdiTwitter class="text-2xl" />
        </BaseNavbarSocialItem>
        <BaseNavbarSocialItem href="https://www.instagram.com/rsurya99">
          <IconMdiInstagram class="text-2xl" />
        </BaseNavbarSocialItem>
        <BaseNavbarSocialItem href="https://linkedin.com/in/rsurya-dev">
          <IconMdiLinkedin class="text-2xl" />
        </BaseNavbarSocialItem>
        <BaseNavbarSocialItem href="https://github.com/rsurya99">
          <IconMdiGithub class="text-2xl" />
        </BaseNavbarSocialItem>
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
            <BaseNavbarHamburgerItem
              v-for="(hamburgerItem, i) in hamburgerItems"
              :key="i"
              :to="hamburgerItem.to"
              :text="hamburgerItem.text"
            />
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>
