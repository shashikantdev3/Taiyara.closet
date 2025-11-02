<template>
  <section class="customize-view py-16 bg-white">
    <div class="container mx-auto px-4 text-center">
      <h1 class="font-playfair text-4xl mb-8">Craft Your Fit</h1>
      <p class="text-gray-600 max-w-2xl mx-auto mb-12">
        Design your perfect pair. Choose from our styles, materials, and colors — all tailored to your unique measurements.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div v-for="(product, index) in products" :key="index" class="border rounded-lg p-4 shadow-sm">
          <img :src="product.image" :alt="product.name" class="w-full h-56 object-cover rounded-lg mb-4" />
          <h2 class="font-semibold text-lg mb-2">{{ product.name }}</h2>
          <v-btn color="primary" to="/measurement" class="mt-2">Customize</v-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import OxfordImg from '@/assets/img/Oxford.png'
import DerbyImg from '@/assets/img/Derby.png'
import ChelseaImg from '@/assets/img/Chelsea.png'
import MonkImg from '@/assets/img/Monk_Strap_shoe.png'
import LoaferImg from '@/assets/img/loafer.png'
import SneakerImg from '@/assets/img/Sneaker.png'

const products = [
  { name: 'Oxford', image: OxfordImg },
  { name: 'Derby', image: DerbyImg },
  { name: 'Chelsea', image: ChelseaImg },
  { name: 'Monk Strap', image: MonkImg },
  { name: 'Loafer', image: LoaferImg },
  { name: 'Sneaker', image: SneakerImg }
]
</script>
