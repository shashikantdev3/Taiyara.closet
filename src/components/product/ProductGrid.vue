<template>
  <div class="product-grid">
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="product in products" :key="product.id">
        <ProductCard 
          :product="product" 
          @click="$emit('select-product', product.id)" 
          @favorite="toggleFavorite(product.id)"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductCard from './ProductCard.vue';

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
});

defineEmits(['select-product']);

const favorites = ref([]);

const toggleFavorite = (productId) => {
  const index = favorites.value.indexOf(productId);
  if (index === -1) {
    favorites.value.push(productId);
  } else {
    favorites.value.splice(index, 1);
  }
};
</script>

<style scoped>
.product-grid {
  margin-top: 2rem;
}
</style>