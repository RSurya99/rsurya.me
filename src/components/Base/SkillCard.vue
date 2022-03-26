<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  desc: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },
  iconBackground: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div
    class="card relative overflow-hidden col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 min-h-[200px] flex px-6 py-4 flex-col items-center justify-center bg-slate-700 rounded-lg shadow-md"
  >
    <div
      class="icon absolute top-0 left-0 z-20 w-full h-full duration-500 flex items-center justify-center"
      :class="iconBackground"
    >
      <div class="icon-svg duration-500">
        <slot></slot>
      </div>
    </div>
    <div class="content relative z-10 p-5 text-center mt-16">
      <h4 class="text-lg font-medium mb-1">{{ props.title }}</h4>
      <p class="text-slate-200">{{ props.desc }}</p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.card {
  .icon {
    transition-delay: 0.2s;
  }
  .content {
    transform: scale(0);
    transition: 0.5s;
    transition-delay: 0s;
  }
  &:hover {
    .icon {
      left: calc(50% - 40px);
      top: 20px;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      transition-delay: 0s;

      .icon-svg {
        transform: scale(80%);
      }
    }

    .content {
      transform: scale(1);
      transition-delay: 0.2s;
    }
  }
}
</style>
