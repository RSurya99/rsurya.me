<script setup lang="ts">
document.addEventListener('mousemove', parallax)

function parallax(e) {
  document.querySelectorAll('.layer').forEach((element: any) => {
    const speed = element.getAttribute('data-speed')
    const x = (window.innerWidth - e.pageX * speed) / 100
    const y = (window.innerWidth - e.pageY * speed) / 100
    element.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}
</script>
<template>
  <div class="relative bg-slate-900">
    <SectionNavbar />
    <SectionHomeLanding />
    <SectionHomeAbout />
    <BackgroundPatternSquare
      data-speed="5"
      class="layer absolute bottom-[30%] -left-28 text-indigo-500 fill-current"
    />
    <BackgroundPatternSquare
      data-speed="5"
      class="layer absolute top-[45%] -right-40 text-indigo-500 fill-current"
    />
    <SectionHomeProjects />
    <SectionHomeOthers />
    <SectionHomeSkills />
    <SectionHomeContact />
  </div>
</template>
