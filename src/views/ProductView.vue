<template>
  <div class="product-detail">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-img
            :src="product.image"
            height="500"
            cover
            class="product-image"
          ></v-img>
        </v-col>
        <v-col cols="12" md="6" class="d-flex flex-column justify-center">
          <h1 class="text-h3 font-weight-light mb-2">{{ product.name }}</h1>
          <p class="text-h5 text-secondary font-weight-medium mb-6">${{ product.price }}</p>
          <p class="text-body-1 mb-8">Experience unparalleled comfort and style with our handcrafted luxury footwear. Each pair is meticulously designed to provide the perfect fit for your unique measurements.</p>
          
          <div class="d-flex flex-column flex-sm-row gap-4">
            <v-btn
              color="primary"
              size="large"
              block
              @click="openCustomizer"
              class="text-none"
              elevation="0"
            >
              Customize & Order
            </v-btn>
            <v-btn
              variant="outlined"
              color="primary"
              size="large"
              block
              class="text-none"
              elevation="0"
            >
              Add to Wishlist
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    
    <CustomizerModal 
      v-model="showCustomizer" 
      :product-id="productId"
      @close="showCustomizer = false"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import CustomizerModal from '@/components/customizer/CustomizerModal.vue';

const route = useRoute();
const productId = computed(() => Number(route.params.id));
const showCustomizer = ref(false);

// Sample product data - CORRECTED IMAGE PATH
const product = ref({
  id: 1,
  name: 'Classic Oxford',
  price: 450,
  image: '/img/img/Oxford.png', // Corrected path
  category: 'formal'
});

onMounted(() => {
  // Fetch product details based on productId
  // This would be an API call in a real application
  console.log(`Fetching product with ID: ${productId.value}`);
});

const openCustomizer = () => {
  showCustomizer.value = true;
};
</script>

<style scoped>
.product-image {
  border-radius: 4px;
}
</style>