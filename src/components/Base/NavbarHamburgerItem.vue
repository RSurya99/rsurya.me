<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <RouterLink
    v-if="props.to"
    :to="props.to"
    class="text-6xl font-medium hover:text-slate-300 transition duration-300"
  >
    {{ $props.text }}
  </RouterLink>
</template>
