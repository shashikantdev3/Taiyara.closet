<template>
  <section class="about-view py-16 bg-gray-50">
    <div class="container mx-auto px-4 text-center">
      <h1 class="font-playfair text-4xl mb-6">Our Story</h1>
      <p class="text-gray-700 max-w-3xl mx-auto mb-10">
        At Taiyara, every pair of shoes tells a story of precision, craftsmanship, and individuality.
      </p>

      <img :src="WorkshopImg" alt="Artisan Workshop" class="w-full max-w-3xl mx-auto rounded-lg shadow-md" />
    </div>
  </section>
</template>

<script setup>
import WorkshopImg from '@/assets/img/Oxford.png' // Replace with an actual workshop image if available
</script>
