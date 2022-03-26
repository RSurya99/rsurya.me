<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

const props = defineProps({
  lottie: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <Vue3Lottie :animationData="props.lottie" />
</template>
