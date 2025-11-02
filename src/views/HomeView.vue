<template>
  <div class="home-page">
    <section class="hero-section bg-white min-h-[80vh] flex items-center">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h1 class="font-playfair text-4xl md:text-6xl mb-6 leading-tight">Handcrafted Precision. Digital Perfection.</h1>
          <p class="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">Each Taiyara pair is built by master artisans in Delhi-NCR — guided by your measurements, crafted with precision, and tailored for comfort.</p>
          <div class="flex flex-wrap gap-4 justify-center">
            <v-btn color="accent" size="large" to="/customize" class="text-primary font-medium">
              Craft My Fit
            </v-btn>
            <v-btn variant="outlined" color="primary" size="large" to="/products" class="font-medium">
              View Styles
            </v-btn>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          <div v-for="(product, index) in products" :key="index" 
               class="product-card bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
               data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="product-image h-64 bg-white relative overflow-hidden">
              <img :src="`/img/img/${product.imageName}`" :alt="product.name" class="w-full h-full object-cover object-center">
            </div>
            <div class="p-6">
              <h3 class="font-playfair text-xl mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 mb-4">{{ product.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="usp-section py-20 bg-secondary">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="font-playfair text-3xl md:text-4xl mb-4">Why Choose Taiyara.Closet</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">Our commitment to quality, craftsmanship, and personalization sets us apart.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="usp-card text-center p-6" data-aos="fade-up" data-aos-delay="100">
            <div class="mb-4 flex justify-center">
              <v-icon icon="mdi-ruler" color="accent" size="x-large"></v-icon>
            </div>
            <h3 class="font-playfair text-2xl mb-3">Perfect Fit Guarantee</h3>
            <p class="text-gray-600">Our advanced measurement system ensures your footwear fits perfectly every time.</p>
          </div>

          <div class="usp-card text-center p-6" data-aos="fade-up" data-aos-delay="200">
            <div class="mb-4 flex justify-center">
              <v-icon icon="mdi-palette" color="accent" size="x-large"></v-icon>
            </div>
            <h3 class="font-playfair text-2xl mb-3">Premium Materials</h3>
            <p class="text-gray-600">We source only the finest leathers and materials for unmatched quality and durability.</p>
          </div>

          <div class="usp-card text-center p-6" data-aos="fade-up" data-aos-delay="300">
            <div class="mb-4 flex justify-center">
              <v-icon icon="mdi-hand-heart" color="accent" size="x-large"></v-icon>
            </div>
            <h3 class="font-playfair text-2xl mb-3">Artisan Craftsmanship</h3>
            <p class="text-gray-600">Each pair is handcrafted by master artisans with decades of experience and expertise.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="craftsmanship-section py-20">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="craftsmanship-content" data-aos="fade-right">
            <h2 class="font-playfair text-3xl md:text-4xl mb-6">Where Tradition Meets Technology</h2>
            <p class="text-gray-700 text-lg mb-6">At Taiyara.Closet, every pair reflects decades of Indian shoemaking artistry combined with digital precision modeling.</p>
            <p class="text-gray-700 text-lg mb-8">Our commitment to quality means we never compromise on materials or craftsmanship. Every stitch, every cut, and every finish is executed with precision and care.</p>
            <v-btn color="primary" size="large" to="/about" class="font-medium">
              Our Story
            </v-btn>
          </div>
          <div class="craftsmanship-image relative h-[500px] rounded-lg overflow-hidden" data-aos="fade-left">
            <div class="absolute inset-0 bg-gray-100 flex items-center justify-center">
              <p class="text-gray-500 font-medium">Artisan Workshop Image</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section py-20 bg-primary text-white">
      <div class="container mx-auto px-4 text-center">
        <h2 class="font-playfair text-3xl md:text-4xl mb-6">Ready for Your Perfect Fit?</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">Experience the luxury of perfectly fitted footwear, crafted just for you. Start your customization journey today.</p>
        <v-btn color="accent" size="x-large" to="/customize" class="text-primary font-medium">
          Craft My Fit
        </v-btn>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

// Product data with correct image names
const products = ref([
  {
    id: 1,
    name: 'Oxford',
    description: 'Timeless elegance with premium leather and expert craftsmanship.',
    imageName: 'Oxford.png',
    category: 'formal'
  },
  {
    id: 2,
    name: 'Derby',
    description: 'Versatile style with open lacing and durable construction.',
    imageName: 'Derby.png',
    category: 'formal'
  },
  {
    id: 3,
    name: 'Chelsea',
    description: 'Sleek and sophisticated with elastic side panels for easy wear.',
    imageName: 'Chelsea.png',
    category: 'casual'
  },
  {
    id: 4,
    name: 'Monk Strap',
    description: 'Distinguished style with signature buckle closure and no laces.',
    imageName: 'Monk_Strap_shoe.png',
    category: 'formal'
  },
  {
    id: 5,
    name: 'Loafer',
    description: 'Sophisticated comfort with hand-stitched detailing and soft leather.',
    imageName: 'loafer.png',
    category: 'casual'
  },
  {
    id: 6,
    name: 'Sneaker',
    description: 'Contemporary casual style with premium materials and comfort.',
    imageName: 'Sneaker.png',
    category: 'casual'
  }
]);

onMounted(() => {
  // Animation for hero section
  gsap.from('.hero-section h1', { 
    opacity: 0, 
    y: 30, 
    duration: 1,
    delay: 0.2
  });
  
  gsap.from('.hero-section p', { 
    opacity: 0, 
    y: 20, 
    duration: 1,
    delay: 0.4
  });
  
  gsap.from('.hero-section .v-btn', { 
    opacity: 0, 
    y: 20, 
    duration: 1,
    delay: 0.6,
    stagger: 0.2
  });
  
  // *** REMOVED CONFLICTING GSAP ANIMATION FOR .product-card ***
  
  // Add hover animation for product images
  const productCards = document.querySelectorAll('.product-card');
  productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card.querySelector('img'), {
        scale: 1.05,
        duration: 0.3
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card.querySelector('img'), {
        scale: 1,
        duration: 0.3
      });
    });
  });
});
</script>

<style scoped>
.product-card img {
  transition: transform 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>