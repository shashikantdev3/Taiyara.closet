<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section bg-white min-h-[80vh] flex items-center">
      <div class="container mx-auto px-4">
        <!-- Hero Text -->
        <div class="text-center mb-16">
          <h1 class="font-playfair text-4xl md:text-6xl mb-6 leading-tight">
            Handcrafted Precision. Digital Perfection.
          </h1>
          <p class="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Each Taiyara pair is built by master artisans in Delhi-NCR — guided by your measurements,
            crafted with precision, and tailored for comfort.
          </p>
          <div class="flex flex-wrap gap-4 justify-center">
            <v-btn color="accent" size="large" to="/customize" class="text-primary font-medium">
              Craft My Fit
            </v-btn>
            <v-btn variant="outlined" color="primary" size="large" to="/products" class="font-medium">
              View Styles
            </v-btn>
          </div>
        </div>

        <!-- Product Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div
            v-for="(product, index) in products"
            :key="index"
            class="product-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="product-image h-64 bg-white relative overflow-hidden">
              <!-- ✅ Properly resolved images -->
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover object-center"
              />
            </div>
            <div class="p-6">
              <h3 class="font-playfair text-xl mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 mb-4">{{ product.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

// ✅ Import product images from /src/assets/img
import OxfordImg from '@/assets/img/Oxford.png'
import DerbyImg from '@/assets/img/Derby.png'
import ChelseaImg from '@/assets/img/Chelsea.png'
import MonkImg from '@/assets/img/Monk_Strap_shoe.png'
import LoaferImg from '@/assets/img/loafer.png'
import SneakerImg from '@/assets/img/Sneaker.png'

const products = ref([
  {
    name: 'Oxford',
    description: 'Timeless elegance with premium leather and expert craftsmanship.',
    image: OxfordImg
  },
  {
    name: 'Derby',
    description: 'Versatile style with open lacing and durable construction.',
    image: DerbyImg
  },
  {
    name: 'Chelsea',
    description: 'Sleek and sophisticated with elastic side panels for easy wear.',
    image: ChelseaImg
  },
  {
    name: 'Monk Strap',
    description: 'Distinguished style with signature buckle closure and no laces.',
    image: MonkImg
  },
  {
    name: 'Loafer',
    description: 'Sophisticated comfort with hand-stitched detailing and soft leather.',
    image: LoaferImg
  },
  {
    name: 'Sneaker',
    description: 'Contemporary casual style with premium materials and comfort.',
    image: SneakerImg
  }
])

// ✅ Smooth GSAP hero animations
onMounted(() => {
  gsap.from('.hero-section h1', { opacity: 0, y: 30, duration: 1, delay: 0.2 })
  gsap.from('.hero-section p', { opacity: 0, y: 20, duration: 1, delay: 0.4 })
  gsap.from('.hero-section .v-btn', {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.6,
    stagger: 0.2
  })
})
</script>

<style scoped>
.hero-section {
  background: linear-gradient(to bottom, #fff, #f9f9f9);
}

.product-card img {
  transition: transform 0.3s ease;
}

.product-card:hover img {
  transform: scale(1.05);
}
</style>
