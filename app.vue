<script lang="ts">
export default {
  head: {
    title: 'VariantJS - Configurable Vue3 Components for Vue 3',
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
    <span class="w-16"><img src="~assets/logo.svg" width="200px" alt="VariantJS Logo" /></span>

    <span class="text-5xl font-light text-blue-900 font-test">VariantJS</span>
  </div>

  <p class="text-2xl text-gray-500">Coming soon...</p>

  <div class="flex pt-10">
    <a
      href="https://twitter.com/variantjs"
      target="_blank"
      class="inline-flex items-center px-3 text-sm text-gray-500 underline">
      <svg fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6 mr-2"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>

      Follow US
    </a>
    <a
      href="https://github.com/variantjs/vue"
      target="_blank"
      class="inline-flex items-center px-3 text-sm text-gray-500 underline border-gray-200 sm:border-l">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4 mr-2"><path d="M7.975 16a9.39 9.39 0 003.169-.509c-.473.076-.652-.229-.652-.486l.004-.572c.003-.521.01-1.3.01-2.197 0-.944-.316-1.549-.68-1.863 2.24-.252 4.594-1.108 4.594-4.973 0-1.108-.39-2.002-1.032-2.707.1-.251.453-1.284-.1-2.668 0 0-.844-.277-2.77 1.032A9.345 9.345 0 008 .717c-.856 0-1.712.113-2.518.34C3.556-.24 2.712.025 2.712.025c-.553 1.384-.2 2.417-.1 2.668-.642.705-1.033 1.612-1.033 2.707 0 3.852 2.342 4.72 4.583 4.973-.29.252-.554.692-.642 1.347-.58.264-2.027.692-2.933-.831-.19-.302-.756-1.045-1.549-1.032-.843.012-.34.478.013.667.428.239.919 1.133 1.032 1.422.201.567.856 1.65 3.386 1.184 0 .55.006 1.079.01 1.447l.003.428c0 .265-.189.567-.692.479 1.007.34 1.926.516 3.185.516z"></path></svg> Github Source
    </a>
  </div>
</div>
<!-- <div class="container flex justify-center p-4 bg-red-400">
   <NuxtPage />
</div> -->
</template>

