<template>
  <div class="customize-page">
    <section class="customize-header py-16 bg-secondary">
      <div class="container mx-auto px-4 text-center">
        <h1 class="font-playfair text-4xl md:text-5xl mb-4">Craft Your Perfect Fit</h1>
        <p class="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">Upload your foot measurements or choose a preset size. Select your leather, color, and stitching style.</p>
      </div>
    </section>

    <section class="customize-form py-16">
      <div class="container mx-auto px-4">
        <v-card class="mx-auto max-w-4xl">
          <v-card-text>
            <v-stepper v-model="currentStep">
              <v-stepper-item value="1">
                <v-stepper-title>Choose Style</v-stepper-title>
              </v-stepper-item>
              <v-stepper-content value="1">
                <h3 class="font-playfair text-2xl mb-6">Select Your Style</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div v-for="(style, index) in styles" :key="index" class="style-option">
                    <v-card 
                      :color="selectedStyle === style.id ? 'primary' : ''" 
                      class="h-full cursor-pointer"
                      @click="selectStyle(style.id)"
                    >
                      <div class="h-48 bg-white relative overflow-hidden">
                        <img :src="style.image" :alt="style.name" class="w-full h-full object-cover object-center">
                      </div>
                      <v-card-text class="text-center">
                        <h4 class="font-playfair text-lg mb-1">{{ style.name }}</h4>
                        <p class="text-sm">{{ style.description }}</p>
                      </v-card-text>
                    </v-card>
                  </div>
                </div>
                <div class="flex justify-end mt-6">
                  <v-btn color="primary" @click="currentStep = '2'">Continue</v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-item value="2">
                <v-stepper-title>Materials</v-stepper-title>
              </v-stepper-item>
              <v-stepper-content value="2">
                <h3 class="font-playfair text-2xl mb-6">Select Materials & Colors</h3>
                
                <div class="mb-8">
                  <h4 class="text-xl mb-4">Leather Type</h4>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div v-for="(leather, index) in leatherTypes" :key="index" class="leather-option">
                      <v-card 
                        :color="selectedLeather === leather.id ? 'primary' : ''" 
                        class="cursor-pointer"
                        @click="selectLeather(leather.id)"
                      >
                        <div class="h-24 relative" :style="`background-color: ${leather.color}`"></div>
                        <v-card-text class="text-center py-2">
                          <p class="font-medium">{{ leather.name }}</p>
                        </v-card-text>
                      </v-card>
                    </div>
                  </div>
                </div>
                
                <div class="mb-8">
                  <h4 class="text-xl mb-4">Color</h4>
                  <div class="grid grid-cols-2 md:grid-cols-6 gap-4">
                    <div v-for="(color, index) in colors" :key="index" class="color-option">
                      <v-card 
                        :color="selectedColor === color.id ? 'primary' : ''" 
                        class="cursor-pointer"
                        @click="selectColor(color.id)"
                      >
                        <div class="h-16 relative" :style="`background-color: ${color.hex}`"></div>
                        <v-card-text class="text-center py-2">
                          <p class="font-medium">{{ color.name }}</p>
                        </v-card-text>
                      </v-card>
                    </div>
                  </div>
                </div>
                
                <div class="flex justify-between mt-6">
                  <v-btn variant="outlined" @click="currentStep = '1'">Back</v-btn>
                  <v-btn color="primary" @click="currentStep = '3'">Continue</v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-item value="3">
                <v-stepper-title>Measurements</v-stepper-title>
              </v-stepper-item>
              <v-stepper-content value="3">
                <h3 class="font-playfair text-2xl mb-6">Your Measurements</h3>
                
                <div class="mb-8">
                  <h4 class="text-xl mb-4">Choose Your Size Method</h4>
                  <v-btn-toggle v-model="sizeMethod" mandatory color="primary" class="mb-6">
                    <v-btn value="standard">Standard Sizes</v-btn>
                    <v-btn value="custom">Custom Measurements</v-btn>
                  </v-btn-toggle>
                  
                  <div v-if="sizeMethod === 'standard'" class="standard-sizes">
                    <v-select
                      v-model="selectedSize"
                      :items="standardSizes"
                      label="Select Your Size"
                      variant="outlined"
                    ></v-select>
                  </div>
                  
                  <div v-else class="custom-measurements">
                    <p class="mb-4">For the most accurate fit, please provide your foot measurements:</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <v-text-field
                        v-model="footLength"
                        label="Foot Length (cm)"
                        type="number"
                        variant="outlined"
                      ></v-text-field>
                      <v-text-field
                        v-model="footWidth"
                        label="Foot Width (cm)"
                        type="number"
                        variant="outlined"
                      ></v-text-field>
                      <v-text-field
                        v-model="instepHeight"
                        label="Instep Height (cm)"
                        type="number"
                        variant="outlined"
                      ></v-text-field>
                      <v-text-field
                        v-model="heelWidth"
                        label="Heel Width (cm)"
                        type="number"
                        variant="outlined"
                      ></v-text-field>
                    </div>
                    
                    <div class="mt-6">
                      <v-btn color="accent" prepend-icon="mdi-upload" class="text-primary">
                        Upload Foot Scan
                      </v-btn>
                      <p class="text-sm text-gray-500 mt-2">Supported formats: .jpg, .png (max 5MB)</p>
                    </div>
                  </div>
                </div>
                
                <div class="flex justify-between mt-6">
                  <v-btn variant="outlined" @click="currentStep = '2'">Back</v-btn>
                  <v-btn color="primary" @click="currentStep = '4'">Continue</v-btn>
                </div>
              </v-stepper-content>

              <v-stepper-item value="4">
                <v-stepper-title>Review</v-stepper-title>
              </v-stepper-item>
              <v-stepper-content value="4">
                <h3 class="font-playfair text-2xl mb-6">Review Your Custom Shoe</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="preview-image bg-gray-100 rounded-lg h-80 flex items-center justify-center">
                    <p class="text-gray-500 font-medium">Shoe Preview</p>
                  </div>
                  
                  <div class="order-summary">
                    <h4 class="font-playfair text-xl mb-4">Order Summary</h4>
                    <v-list>
                      <v-list-item>
                        <template v-slot:prepend>
                          <v-icon icon="mdi-shoe-formal" color="primary"></v-icon>
                        </template>
                        <v-list-item-title>Style: {{ getSelectedStyleName() }}</v-list-item-title>
                      </v-list-item>
                      
                      <v-list-item>
                        <template v-slot:prepend>
                          <v-icon icon="mdi-palette" color="primary"></v-icon>
                        </template>
                        <v-list-item-title>Leather: {{ getSelectedLeatherName() }}</v-list-item-title>
                      </v-list-item>
                      
                      <v-list-item>
                        <template v-slot:prepend>
                          <v-icon icon="mdi-palette-swatch" color="primary"></v-icon>
                        </template>
                        <v-list-item-title>Color: {{ getSelectedColorName() }}</v-list-item-title>
                      </v-list-item>
                      
                      <v-list-item>
                        <template v-slot:prepend>
                          <v-icon icon="mdi-ruler" color="primary"></v-icon>
                        </template>
                        <v-list-item-title>
                          Size: {{ sizeMethod === 'standard' ? selectedSize : 'Custom Measurements' }}
                        </v-list-item-title>
                      </v-list-item>
                    </v-list>
                    
                    <div class="price-summary mt-6 pt-6 border-t border-gray-200">
                      <div class="flex justify-between items-center mb-2">
                        <span class="text-gray-600">Base Price:</span>
                        <span class="font-medium">₹12,999</span>
                      </div>
                      <div class="flex justify-between items-center mb-2">
                        <span class="text-gray-600">Custom Fit:</span>
                        <span class="font-medium">₹2,000</span>
                      </div>
                      <div class="flex justify-between items-center mb-2">
                        <span class="text-gray-600">Premium Materials:</span>
                        <span class="font-medium">₹1,500</span>
                      </div>
                      <div class="flex justify-between items-center pt-4 border-t border-gray-200">
                        <span class="text-xl font-playfair">Total:</span>
                        <span class="text-xl font-medium text-primary">₹16,499</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="flex justify-between mt-8">
                  <v-btn variant="outlined" @click="currentStep = '3'">Back</v-btn>
                  <v-btn color="accent" size="large" class="text-primary" @click="placeOrder">
                    Place Order
                  </v-btn>
                </div>
              </v-stepper-content>
            </v-stepper>
          </v-card-text>
        </v-card>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentStep = ref('1');

// Style options - CORRECTED IMAGE PATHS
const styles = [
  {
    id: 1,
    name: 'Oxford',
    description: 'Timeless elegance with closed lacing',
    image: '/img/img/Oxford.png' // Corrected path
  },
  {
    id: 2,
    name: 'Derby',
    description: 'Versatile style with open lacing',
    image: '/img/img/Derby.png' // Corrected path
  },
  {
    id: 3,
    name: 'Loafer',
    description: 'Slip-on comfort with refined style',
    image: '/img/img/loafer.png' // Corrected path
  }
];

// Leather types
const leatherTypes = [
  { id: 1, name: 'Full Grain', color: '#8B4513' },
  { id: 2, name: 'Calfskin', color: '#A0522D' },
  { id: 3, name: 'Suede', color: '#D2B48C' },
  { id: 4, name: 'Patent', color: '#000000' }
];

// Color options
const colors = [
  { id: 1, name: 'Black', hex: '#000000' },
  { id: 2, name: 'Brown', hex: '#8B4513' },
  { id: 3, name: 'Tan', hex: '#D2B48C' },
  { id: 4, name: 'Burgundy', hex: '#800020' },
  { id: 5, name: 'Navy', hex: '#000080' },
  { id: 6, name: 'Olive', hex: '#556B2F' }
];

// Standard sizes
const standardSizes = [
  'UK 6 / EU 40',
  'UK 7 / EU 41',
  'UK 8 / EU 42',
  'UK 9 / EU 43',
  'UK 10 / EU 44',
  'UK 11 / EU 45'
];

// Form values
const selectedStyle = ref(1);
const selectedLeather = ref(1);
const selectedColor = ref(1);
const sizeMethod = ref('standard');
const selectedSize = ref('UK 8 / EU 42');
const footLength = ref('');
const footWidth = ref('');
const instepHeight = ref('');
const heelWidth = ref('');

// Selection methods
const selectStyle = (id) => {
  selectedStyle.value = id;
};

const selectLeather = (id) => {
  selectedLeather.value = id;
};

const selectColor = (id) => {
  selectedColor.value = id;
};

// Helper methods to get selected item names
const getSelectedStyleName = () => {
  const style = styles.find(s => s.id === selectedStyle.value);
  return style ? style.name : '';
};

const getSelectedLeatherName = () => {
  const leather = leatherTypes.find(l => l.id === selectedLeather.value);
  return leather ? leather.name : '';
};

const getSelectedColorName = () => {
  const color = colors.find(c => c.id === selectedColor.value);
  return color ? color.name : '';
};

// Place order
const placeOrder = () => {
  // In a real app, this would submit the order to the backend
  alert('Thank you for your order! Your custom shoes will be crafted with care.');
  router.push('/');
};
</script>

<style scoped>
.v-stepper {
  box-shadow: none !important;
}
</style>