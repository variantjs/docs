<script lang="ts">
export default {
  head: {
    script: [
      {
        rel: 'preconnect',
        src: 'https://fonts.googleapis.com'
      },
      {
        rel: 'preconnect',
        src: 'https://fonts.gstatic.com',
        crossorigin: true,
      },
      {
        rel: 'stylesheet',
        src: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap',
      },
    ]
  },
}
</script>

<template>
<div class="flex flex-col items-center justify-center w-full min-h-screen space-y-4">
  <div class="flex items-center mx-auto mt-8 space-x-2">
    <span class="w-16"><img src="assets/logo.svg" width="200px" alt="VariantJS Logo" /></span>

    <span class="text-5xl font-light text-blue-900 font-test">VariantJS</span>
  </div>

  <p class="text-2xl text-gray-500">Coming soon...</p>
</div>
<!-- <div class="container flex justify-center p-4 bg-red-400">
   <NuxtPage />
</div> -->
</template>

