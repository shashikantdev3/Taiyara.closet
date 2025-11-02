<template>
  <section class="product-view py-16">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <img :src="product.image" :alt="product.name" class="rounded-lg shadow-lg w-full object-cover" />
        <div>
          <h1 class="font-playfair text-3xl mb-4">{{ product.name }}</h1>
          <p class="text-gray-600 mb-6">{{ product.description }}</p>
          <v-btn color="primary">Customize This</v-btn>
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
