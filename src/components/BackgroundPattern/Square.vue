<script lang="ts">
export default {
  name: 'BackgroundPatternSquare',
}
</script>
<script setup lang="ts">
const props = defineProps({
  strokeColor: {
    type: String,
    default: 'text-indigo-500',
  },
})
</script>
<template>
  <svg
    width="200"
    height="200"
    viewBox="0 0 200 200"
    class="fill-current"
    :class="props.strokeColor"
    fill="currentColor"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <mask
      id="mask0_19163_27"
      style="mask-type: alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="200"
      height="200"
    >
      <rect width="200" height="200" />
    </mask>
    <g mask="url(#mask0_19163_27)">
      <line x1="150.585" y1="-16.5379" x2="215.585" y2="37.4621" stroke-width="30" />
      <line x1="67.2667" y1="-12.3669" x2="214.905" y2="110.291" stroke-width="30" />
      <line x1="-4.98599" y1="-3.40117" x2="216.157" y2="180.326" stroke-width="30" />
      <line x1="-42.1154" y1="41.7452" x2="182.287" y2="228.18" stroke-width="30" />
      <line x1="-19.4145" y1="134.462" x2="81.4533" y2="218.264" stroke-width="30" />
    </g>
  </svg>
</template>
