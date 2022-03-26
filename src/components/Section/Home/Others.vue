<script lang="ts">
export default {
  name: 'SectionHomeOthers',
}
</script>
<script setup lang="ts">
const otherProjectLists = ref([
  {
    title: 'NEFA Cryptocurrency',
    description: 'Free landing page template built using nuxt and tailwindcss',
    href: 'https://github.com/RSurya99/nefa',
    icon: 'github',
  },
  {
    title: 'Vue 3 Vite Starter',
    description: 'A Vue 3 starter template or boilerplate for your new Vue projects using Vite.',
    href: 'https://github.com/RSurya99/vue3-vite-starter',
    icon: 'github',
  },
  {
    title: 'Vue JS 3 Documentation',
    description: 'Vue 3 Core Documentation Translated in Indonesian',
    href: 'https://github.com/RSurya99/docs-next',
    icon: 'github',
  },
  {
    title: 'Osu! Wiki Documentation',
    description: 'home of the osu! wiki',
    href: 'https://github.com/RSurya99/osu-wiki',
    icon: 'github',
  },
  {
    title: 'CKEditor Tailwind Reset',
    description:
      'Style to reset TailwindCSS class on CKEditor WYSIWYG without disabling tailwind core plugin preflight',
    href: 'https://github.com/RSurya99/ckeditor-tailwind-reset',
    icon: 'github',
  },
  {
    title: 'Datenshi Website Documentation',
    description: 'home of the osu! datenshi website',
    href: 'https://github.com/osu-datenshi/website-docs',
    icon: 'github',
  },
  {
    title: 'Django Image Compressor',
    description: 'Compress your image without compromising the quality of image',
    href: 'https://github.com/RSurya99/django-image-compressor',
    icon: 'github',
  },
  {
    title: 'Smart Motorbike',
    description: 'Smart motorbike with voice command built using arduino uno',
    href: 'https://github.com/RSurya99/motorbike-sound-switch',
    icon: 'github',
  },
  {
    title: 'Planin App',
    description: 'Organize your plan easily on planin',
    href: 'https://www.figma.com/file/Maz02V4Y9HSgwvJqdQHb3c/Planin-App?node-id=13%3A5',
    icon: 'figma',
  },
])
</script>
<template>
  <div class="relative overflow-hidden h-full py-28">
    <div class="flex flex-col items-center justify-center mb-16 space-y-12">
      <h2 class="text-7xl font-medium capitalize">Other things I’ve done</h2>
      <TitleUnderline />
    </div>
    <div class="grid grid-cols-12 gap-y-8 gap-x-10 px-24 mb-10">
      <BaseOthersCard
        v-for="item in otherProjectLists"
        :key="item.title"
        :title="item.title"
        :description="item.description"
        :href="item.href"
        :icon="item.icon"
      />
    </div>
    <div class="flex justify-center">
      <BaseButton class="px-12 py-4" text="See All" to="/others" />
    </div>
  </div>
</template>
