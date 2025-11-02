<template>
  <section class="measurement-guide py-16 bg-white">
    <div class="container mx-auto px-4 text-center">
      <h1 class="font-playfair text-4xl mb-8">Measurement Guide</h1>
      <p class="text-gray-600 mb-12 max-w-2xl mx-auto">
        Follow our step-by-step guide to measure your feet accurately for a perfect fit.
      </p>
      <img :src="GuideImg" alt="Measurement Guide" class="mx-auto w-full max-w-3xl rounded-lg shadow" />
    </div>
  </section>
</template>

<script setup>
import GuideImg from '@/assets/img/Sneaker.png' // placeholder
</script>
