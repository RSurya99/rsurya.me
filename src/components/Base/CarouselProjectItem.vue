<script setup lang="ts">
const props = defineProps({
  img: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <RouterLink :to="props.to">
    <img :src="props.img" class="w-full" :alt="props.alt" />
    <p class="text-xl mt-2 text-center">{{ props.title }}</p>
  </RouterLink>
</template>
