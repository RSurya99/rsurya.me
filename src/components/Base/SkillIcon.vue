<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <IconLogosJavascript v-if="props.icon === 'Javascript'" class="text-4xl" />
  <IconLogosTypescriptIcon v-if="props.icon === 'Typescript'" class="text-4xl" />
  <IconLogosPython v-if="props.icon === 'Python'" class="text-4xl" />
  <IconLogosPhp v-if="props.icon === 'PHP'" class="text-4xl" />
  <IconLogosLaravel v-if="props.icon === 'Laravel'" class="text-4xl" />
  <IconLogosVue v-if="props.icon === 'VueJS'" class="text-4xl" />
  <IconLogosNuxtIcon v-if="props.icon === 'NuxtJS'" class="text-4xl" />
  <IconLogosTailwindcssIcon v-if="props.icon === 'TailwindCSS'" class="text-4xl" />
  <IconLogosHtml5 v-if="props.icon === 'HTML'" class="text-4xl" />
  <IconLogosCss3 v-if="props.icon === 'CSS'" class="text-4xl" />
  <IconLogosDjangoIcon v-if="props.icon === 'Django'" class="text-4xl" />
  <IconLogosMysql v-if="props.icon === 'MySQL'" class="text-4xl" />
  <IconLogosGitIcon v-if="props.icon === 'Git'" class="text-4xl" />
  <IconLogosNodejsIcon v-if="props.icon === 'NodeJS'" class="text-4xl" />
  <IconLogosFirebase v-if="props.icon === 'Firebase'" class="text-4xl" />
  <IconLogosFigma v-if="props.icon === 'Figma'" class="text-4xl" />
</template>
