<template>
  <div class="products-page">
    <section class="collection-header py-16 bg-secondary">
      <div class="container mx-auto px-4 text-center">
        <h1 class="font-playfair text-4xl md:text-5xl mb-4">Our Signature Collection</h1>
        <p class="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">From timeless Oxfords to modern sneakers — explore craftsmanship redefined.</p>
      </div>
    </section>

    <section class="products-section py-16">
      <div class="container mx-auto px-4">
        <div class="filters mb-12">
          <div class="flex flex-wrap items-center justify-between gap-4 mb-6">
            <h2 class="font-playfair text-2xl">Filter Collection</h2>
            <div class="filter-buttons flex gap-2">
              <v-btn 
                v-for="category in categories" 
                :key="category.value"
                :color="activeCategory === category.value ? 'primary' : 'default'"
                variant="tonal"
                @click="setCategory(category.value)"
                class="text-capitalize"
              >
                {{ category.label }}
              </v-btn>
            </div>
          </div>
          <v-divider></v-divider>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            v-for="product in filteredProducts" 
            :key="product.id" 
            :product="product"
            class="product-card"
            @click="router.push(`/product/${product.id}`)"
          />
        </div>
        
        <div v-if="filteredProducts.length === 0" class="text-center py-10">
          <p class="text-xl text-gray-500">No products found in this category.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import ProductCard from '@/components/product/ProductCard.vue';
import gsap from 'gsap';

const router = useRouter();
const activeCategory = ref('all');

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Formal', value: 'formal' },
  { label: 'Semi-Formal', value: 'semi-formal' },
  { label: 'Casual', value: 'casual' }
];

// Product data with CORRECTED IMAGE PATHS
const products = ref([
  {
    id: 1,
    name: 'Oxford',
    description: 'Timeless elegance with premium leather and expert craftsmanship.',
    price: 12999,
    image: '/img/img/Oxford.png', // Corrected path
    category: 'formal'
  },
  {
    id: 2,
    name: 'Derby',
    description: 'Versatile style with open lacing and durable construction.',
    price: 11499,
    image: '/img/img/Derby.png', // Corrected path
    category: 'formal'
  },
  {
    id: 3,
    name: 'Chelsea',
    description: 'Sleek and sophisticated with elastic side panels for easy wear.',
    price: 13999,
    image: '/img/img/Chelsea.png', // Corrected path
    category: 'semi-formal'
  },
  {
    id: 4,
    name: 'Monk Strap',
    description: 'Distinguished style with signature buckle closure and no laces.',
    price: 14499,
    image: '/img/img/Monk_Strap_shoe.png', // Corrected path
    category: 'formal'
  },
  {
    id: 5,
    name: 'Loafer',
    description: 'Sophisticated comfort with hand-stitched detailing and soft leather.',
    price: 10999,
    image: '/img/img/loafer.png', // Corrected path
    category: 'semi-formal'
  },
  {
    id: 6,
    name: 'Sneaker',
    description: 'Contemporary casual style with premium materials and comfort.',
    price: 9999,
    image: '/img/img/Sneaker.png', // Corrected path
    category: 'casual'
  }
]);

// Filtered products based on active category
const filteredProducts = computed(() => {
  if (activeCategory.value === 'all') {
    return products.value;
  }
  return products.value.filter(product => product.category === activeCategory.value);
});

// Set active category
const setCategory = (category) => {
  activeCategory.value = category;
};

// Reset filters
const resetFilters = () => {
  activeCategory.value = 'all';
};

onMounted(() => {
  // *** REMOVED CONFLICTING GSAP ANIMATION FOR .product-card ***
  
  // Keep hover animation for product images
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
/* Scoped styles */
</style>