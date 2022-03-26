<script lang="ts">
export default {
  name: 'SectionHomeSkills',
}
</script>
<script setup lang="ts">
const skillItems = ref([
  {
    title: 'Javascript',
    desc: '2 Years Experience',
    iconBackground: 'bg-yellow-100',
  },
  {
    title: 'Typescript',
    desc: '3 Months Experience',
    iconBackground: 'bg-blue-100',
  },
  {
    title: 'VueJS',
    desc: '1 Years Experience',
    iconBackground: 'bg-emerald-100',
  },
  {
    title: 'NuxtJS',
    desc: '10 Months Experience',
    iconBackground: 'bg-green-100',
  },
  {
    title: 'TailwindCSS',
    desc: '2 Years Experience',
    iconBackground: 'bg-sky-100',
  },
  {
    title: 'Python',
    desc: '10 Months Experience',
    iconBackground: 'bg-amber-100',
  },
  {
    title: 'PHP',
    desc: '2 Years Experience',
    iconBackground: 'bg-purple-100',
  },
  {
    title: 'Laravel',
    desc: '1 Years Experience',
    iconBackground: 'bg-rose-100',
  },
  {
    title: 'HTML',
    desc: '3 Years Experience',
    iconBackground: 'bg-orange-100',
  },
  {
    title: 'CSS',
    desc: '3 Years Experience',
    iconBackground: 'bg-blue-100',
  },
  {
    title: 'Django',
    desc: '8 Months Experience',
    iconBackground: 'bg-green-100',
  },
  {
    title: 'MySQL',
    desc: '2 Years Experience',
    iconBackground: 'bg-yellow-100',
  },
  {
    title: 'Git',
    desc: '2 Years Experience',
    iconBackground: 'bg-rose-100',
  },
  {
    title: 'NodeJS',
    desc: '2 Months Experience',
    iconBackground: 'bg-lime-100',
  },
  {
    title: 'Firebase',
    desc: '8 Months Experience',
    iconBackground: 'bg-orange-100',
  },
  {
    title: 'Figma',
    desc: '2 Months Experience',
    iconBackground: 'bg-rose-100',
  },
])
</script>
<template>
  <div class="relative overflow-hidden h-full py-28">
    <div class="flex flex-col items-center justify-center mb-16 space-y-12">
      <h2 class="text-6xl xl:text-7xl font-medium capitalize">Skills</h2>
      <TitleUnderline />
    </div>
    <div class="grid grid-cols-12 gap-4 px-6 sm:px-12 xl:px-24 mb-10">
      <BaseSkillCard
        v-for="skillItem in skillItems"
        :key="skillItem.title"
        :title="skillItem.title"
        :desc="skillItem.desc"
        :icon-background="skillItem.iconBackground"
      >
        <BaseSkillIcon :icon="skillItem.title" />
      </BaseSkillCard>
    </div>
  </div>
</template>
