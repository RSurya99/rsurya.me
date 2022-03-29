<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  icon: {
    type: String, // github | figma
    default: '',
  },
})
</script>
<template>
  <a
    :href="props.href"
    target="_blank"
    class="col-span-12 sm:col-span-6 lg:col-span-4 2xl:col-span-3 w-full max-w-[370px] min-h-[200px] flex px-6 py-4 flex-col justify-between bg-slate-700 rounded-lg shadow-md hover:-translate-y-2 transition duration-500 mx-auto sm:mx-0"
  >
    <div class="flex justify-between">
      <div>
        <IconMdiFolderOpenOutline class="text-2xl text-indigo-500 mb-2" />
        <h3 class="text-xl font-medium">{{ props.title }}</h3>
      </div>
      <IconMdiGithub
        v-if="props.icon === 'github'"
        class="text-2xl hover:text-indigo-500 transition duration-300"
      />
      <IconPhFigmaLogo
        v-if="props.icon === 'figma'"
        class="text-2xl hover:text-indigo-500 transition duration-300"
      />
    </div>
    <p class="text-slate-300 tracking-wide text-sm">
      {{ props.description }}
    </p>
  </a>
</template>
