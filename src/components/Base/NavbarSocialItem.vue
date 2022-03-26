<script setup lang="ts">
const props = defineProps({
  href: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <li class="mr-16">
    <a
      :href="props.href"
      target="_blank"
      class="hidden md:inline-block hover:text-slate-300 transition duration-300"
    >
      <slot></slot>
    </a>
  </li>
</template>
