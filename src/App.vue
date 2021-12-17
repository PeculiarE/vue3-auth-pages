<script setup>
</script>

<template>
  <div class="relative min-h-screen bg-black overflow-hidden py-10 md:px-14 md:py-24 lg:px-44 lg:py-36">
    <div class="absolute w-56 h-28 md:w-[34rem]
    md:h-[17rem] top-0 right-12 md:right-4/5 border border-solid
    border-gray-200 opacity-20 rounded-b-full">
    </div>
    <div class="absolute w-40 h-40 border border-solid border-gray-200 opacity-20 rotate-[45deg]
    -bottom-20 left-20 md:left-56">
    </div>
    <router-view/>
  </div>
</template>
