<template>
  <v-card 
    class="product-card" 
    elevation="0" 
    @click="$emit('click')"
    :ripple="false"
  >
    <v-img
      :src="product.image"
      height="300"
      cover
      class="product-image"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="secondary"></v-progress-circular>
        </v-row>
      </template>
    </v-img>
    
    <v-card-text class="pa-4">
      <div class="d-flex justify-space-between align-center">
        <div>
          <p class="text-h6 font-weight-regular mb-1">{{ product.name }}</p>
          <p class="text-subtitle-1 text-secondary font-weight-light">${{ product.price }}</p>
        </div>
        <v-btn
          icon
          variant="text"
          color="secondary"
          @click.stop="$emit('favorite')"
        >
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
});

defineEmits(['click', 'favorite']);
</script>

<style scoped>
.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 0;
  overflow: hidden;
  background-color: transparent;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1) !important;
}

.product-image {
  transition: opacity 0.3s ease;
}

.product-card:hover .product-image {
  opacity: 0.9;
}
</style>