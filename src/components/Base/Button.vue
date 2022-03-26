<script lang="ts">
export default {
  name: 'BaseButton',
}
</script>
<script setup lang="ts">
const props = defineProps({
  text: {
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
  <RouterLink
    v-if="props.to"
    :to="props.to"
    class="border-2 border-indigo-500 text-xl font-medium rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition duration-300"
  >
    <slot>{{ props.text }}</slot>
  </RouterLink>
  <button
    v-else
    class="border-2 border-indigo-500 text-indigo-500 text-lg xl:text-xl font-medium rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition duration-300"
  >
    <slot>
      {{ props.text }}
    </slot>
  </button>
</template>
