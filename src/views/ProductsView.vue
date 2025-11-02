<template>
  <section class="products-view py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h1 class="font-playfair text-4xl text-center mb-12">Our Collection</h1>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-all"
        >
          <img :src="product.image" :alt="product.name" class="w-full h-64 object-cover" />
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">{{ product.name }}</h2>
            <p class="text-gray-600 mb-4">{{ product.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import OxfordImg from '@/assets/img/Oxford.png'
import DerbyImg from '@/assets/img/Derby.png'
import ChelseaImg from '@/assets/img/Chelsea.png'
import MonkImg from '@/assets/img/Monk_Strap_shoe.png'
import LoaferImg from '@/assets/img/loafer.png'
import SneakerImg from '@/assets/img/Sneaker.png'

const products = ref([
  { name: 'Oxford', description: 'Timeless elegance and craftsmanship.', image: OxfordImg },
  { name: 'Derby', description: 'Versatile open-laced comfort.', image: DerbyImg },
  { name: 'Chelsea', description: 'Iconic side-panel style.', image: ChelseaImg },
  { name: 'Monk Strap', description: 'Distinctive buckle sophistication.', image: MonkImg },
  { name: 'Loafer', description: 'Effortless slip-on luxury.', image: LoaferImg },
  { name: 'Sneaker', description: 'Modern comfort and street flair.', image: SneakerImg }
])
</script>
