<template>
  <section class="product-view py-8 sm:py-16">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
        <img :src="product.image" :alt="product.name" class="rounded-lg shadow-lg w-full object-cover" />
        <div class="mt-6 md:mt-0">
          <h1 class="font-playfair text-2xl sm:text-3xl mb-3 sm:mb-4">{{ product.name }}</h1>
          <p class="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">{{ product.description }}</p>
          <v-btn color="primary" class="w-full sm:w-auto">Customize This</v-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import OxfordImg from '@/assets/img/Oxford.png'

const product = ref({
  name: 'Oxford',
  description: 'Classic elegance with hand-finished details and superior comfort.',
  image: OxfordImg
})
</script>
