<template>
  <section class="customize-view py-8 sm:py-16 bg-white">
    <div class="container mx-auto px-4">
      <!-- Step 1: Select Shoe Style -->
      <div v-if="currentStep === 1" class="text-center">
        <h1 class="font-playfair text-3xl sm:text-4xl mb-4 sm:mb-8">Step 1: Choose Your Style</h1>
        <p class="text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
          Select the shoe style you'd like to customize. Each style can be fully personalized to your preferences.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div 
            v-for="(product, index) in products" 
            :key="index" 
            class="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            :class="{'border-primary border-2': selectedProduct === product.name}"
            @click="selectProduct(product.name)"
          >
            <img :src="product.image" :alt="product.name" class="w-full h-48 sm:h-56 object-cover rounded-lg mb-4" />
            <h2 class="font-semibold text-lg mb-2">{{ product.name }}</h2>
            <v-btn 
              color="primary" 
              class="mt-2" 
              @click.stop="selectProduct(product.name)"
              :variant="selectedProduct === product.name ? 'flat' : 'outlined'"
            >
              {{ selectedProduct === product.name ? 'Selected' : 'Select' }}
            </v-btn>
          </div>
        </div>

        <div class="mt-8 sm:mt-12 flex justify-center">
          <v-btn 
            color="primary" 
            size="large" 
            :disabled="!selectedProduct" 
            @click="nextStep"
          >
            Continue to Customization
          </v-btn>
        </div>
      </div>

      <!-- Step 2: Customize Options -->
      <div v-else-if="currentStep === 2" class="max-w-5xl mx-auto">
        <div class="flex flex-col sm:flex-row items-start gap-6 sm:gap-10">
          <!-- Preview Image -->
          <div class="w-full sm:w-2/5 sticky top-24">
            <img :src="getSelectedProductImage()" :alt="selectedProduct" class="w-full rounded-lg shadow-md" />
            <h2 class="font-playfair text-2xl mt-4 text-center">{{ selectedProduct }}</h2>
            <div class="bg-gray-50 p-4 mt-4 rounded-lg">
              <h3 class="font-semibold mb-2">Your Selections:</h3>
              <ul class="text-sm">
                <li v-for="(value, key) in customizationSummary" :key="key" class="mb-1">
                  <span class="font-medium">{{ formatLabel(key) }}:</span> {{ value }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Customization Options -->
          <div class="w-full sm:w-3/5">
            <h1 class="font-playfair text-3xl mb-6">Customize Your {{ selectedProduct }}</h1>
            
            <v-expansion-panels variant="accordion" multiple>
              <!-- Material Options -->
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="font-medium">Material</div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div class="mb-4">
                    <v-radio-group v-model="customization.material" inline>
                      <v-radio label="Premium Leather" value="Premium Leather"></v-radio>
                      <v-radio label="Suede" value="Suede"></v-radio>
                      <v-radio label="Patent Leather" value="Patent Leather"></v-radio>
                      <v-radio label="Nubuck" value="Nubuck"></v-radio>
                      <v-radio label="Vegan Leather" value="Vegan Leather"></v-radio>
                    </v-radio-group>
                  </div>
                  <v-text-field
                    v-model="customization.materialNotes"
                    label="Additional material requests"
                    variant="outlined"
                    density="comfortable"
                    placeholder="E.g., specific leather grain, texture preferences..."
                  ></v-text-field>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <!-- Color Options -->
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="font-medium">Color</div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                    <v-btn 
                      v-for="color in colorOptions" 
                      :key="color.value"
                      :color="color.color"
                      :class="{'border-2 border-black': customization.color === color.value}"
                      @click="customization.color = color.value"
                      class="h-12 rounded-md"
                    >
                      {{ color.label }}
                    </v-btn>
                  </div>
                  <v-text-field
                    v-model="customization.colorNotes"
                    label="Custom color requests"
                    variant="outlined"
                    density="comfortable"
                    placeholder="E.g., specific shade, two-tone preferences..."
                  ></v-text-field>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <!-- Sole Options -->
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="font-medium">Sole</div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div class="mb-4">
                    <v-radio-group v-model="customization.sole" inline>
                      <v-radio label="Leather" value="Leather"></v-radio>
                      <v-radio label="Rubber" value="Rubber"></v-radio>
                      <v-radio label="Crepe" value="Crepe"></v-radio>
                      <v-radio label="EVA" value="EVA"></v-radio>
                      <v-radio label="Vibram" value="Vibram"></v-radio>
                    </v-radio-group>
                  </div>
                  <v-select
                    v-model="customization.soleColor"
                    :items="['Black', 'Brown', 'Tan', 'White', 'Natural', 'Contrast']"
                    label="Sole Color"
                    variant="outlined"
                    density="comfortable"
                    class="mb-4"
                  ></v-select>
                  <v-text-field
                    v-model="customization.soleNotes"
                    label="Additional sole requests"
                    variant="outlined"
                    density="comfortable"
                    placeholder="E.g., specific sole pattern, height preferences..."
                  ></v-text-field>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <!-- Lining Options -->
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="font-medium">Lining</div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <div class="mb-4">
                    <v-radio-group v-model="customization.lining" inline>
                      <v-radio label="Leather" value="Leather"></v-radio>
                      <v-radio label="Fabric" value="Fabric"></v-radio>
                      <v-radio label="Sheepskin" value="Sheepskin"></v-radio>
                      <v-radio label="Synthetic" value="Synthetic"></v-radio>
                    </v-radio-group>
                  </div>
                  <v-select
                    v-model="customization.liningColor"
                    :items="['Match Upper', 'Contrast', 'Black', 'Brown', 'Tan', 'Red', 'Blue']"
                    label="Lining Color"
                    variant="outlined"
                    density="comfortable"
                    class="mb-4"
                  ></v-select>
                  <v-text-field
                    v-model="customization.liningNotes"
                    label="Additional lining requests"
                    variant="outlined"
                    density="comfortable"
                    placeholder="E.g., specific lining material, padding preferences..."
                  ></v-text-field>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <!-- Stitching Options -->
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="font-medium">Stitching</div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-select
                    v-model="customization.stitchingStyle"
                    :items="['Tonal', 'Contrast', 'Decorative', 'Minimal']"
                    label="Stitching Style"
                    variant="outlined"
                    density="comfortable"
                    class="mb-4"
                  ></v-select>
                  <v-select
                    v-model="customization.stitchingColor"
                    :items="['Match Upper', 'Black', 'White', 'Brown', 'Tan', 'Custom']"
                    label="Stitching Color"
                    variant="outlined"
                    density="comfortable"
                    class="mb-4"
                  ></v-select>
                  <v-text-field
                    v-model="customization.stitchingNotes"
                    label="Additional stitching requests"
                    variant="outlined"
                    density="comfortable"
                    placeholder="E.g., specific stitch pattern, thread thickness..."
                  ></v-text-field>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <!-- Hardware Options -->
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="font-medium">Hardware & Accessories</div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-select
                    v-model="customization.hardwareFinish"
                    :items="['Gold', 'Silver', 'Antique Brass', 'Gunmetal', 'None']"
                    label="Hardware Finish"
                    variant="outlined"
                    density="comfortable"
                    class="mb-4"
                  ></v-select>
                  <v-checkbox
                    v-model="customization.monogram"
                    label="Add monogram"
                    class="mb-2"
                  ></v-checkbox>
                  <v-text-field
                    v-if="customization.monogram"
                    v-model="customization.monogramText"
                    label="Monogram text (max 3 characters)"
                    variant="outlined"
                    density="comfortable"
                    maxlength="3"
                    class="mb-4"
                  ></v-text-field>
                  <v-text-field
                    v-model="customization.hardwareNotes"
                    label="Additional hardware requests"
                    variant="outlined"
                    density="comfortable"
                    placeholder="E.g., specific buckle style, lace type..."
                  ></v-text-field>
                </v-expansion-panel-text>
              </v-expansion-panel>

              <!-- Special Requests -->
              <v-expansion-panel>
                <v-expansion-panel-title>
                  <div class="font-medium">Special Requests</div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                  <v-textarea
                    v-model="customization.specialRequests"
                    label="Any other customization requests"
                    variant="outlined"
                    density="comfortable"
                    rows="4"
                    placeholder="Please describe any additional customization requests or special instructions for your shoes..."
                  ></v-textarea>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>

            <div class="mt-8 flex flex-wrap gap-4 justify-between">
              <v-btn color="secondary" variant="outlined" @click="currentStep = 1">
                Back to Styles
              </v-btn>
              <v-btn color="primary" @click="nextStep">
                Continue to Measurements
              </v-btn>
            </div>
          </div>
        </div>
      </div>

      <!-- Step 3: Measurement -->
      <div v-else-if="currentStep === 3" class="max-w-4xl mx-auto">
        <h1 class="font-playfair text-3xl mb-6 text-center">Final Step: Your Measurements</h1>
        <p class="text-gray-600 max-w-2xl mx-auto mb-8 text-center">
          To ensure your custom shoes fit perfectly, please provide your measurements.
        </p>

        <div class="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 class="font-medium text-xl mb-4">Measurement Options</h2>
          <v-radio-group v-model="measurementMethod" inline>
            <v-radio label="I'll use your measurement guide" value="guide"></v-radio>
            <v-radio label="I already know my measurements" value="manual"></v-radio>
            <v-radio label="Use my previous measurements on file" value="previous"></v-radio>
          </v-radio-group>
        </div>

        <div v-if="measurementMethod === 'guide'" class="text-center">
          <v-btn color="primary" to="/measurement-guide" class="mb-4">
            Open Measurement Guide
          </v-btn>
          <p class="text-sm text-gray-600">
            Follow our step-by-step guide to take accurate measurements of your feet.
          </p>
        </div>

        <div v-if="measurementMethod === 'manual'" class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <v-text-field
            v-model="measurements.footLength"
            label="Foot Length (cm)"
            type="number"
            variant="outlined"
            density="comfortable"
          ></v-text-field>
          <v-text-field
            v-model="measurements.footWidth"
            label="Foot Width (cm)"
            type="number"
            variant="outlined"
            density="comfortable"
          ></v-text-field>
          <v-text-field
            v-model="measurements.instepHeight"
            label="Instep Height (cm)"
            type="number"
            variant="outlined"
            density="comfortable"
          ></v-text-field>
          <v-text-field
            v-model="measurements.heelWidth"
            label="Heel Width (cm)"
            type="number"
            variant="outlined"
            density="comfortable"
          ></v-text-field>
          <v-textarea
            class="sm:col-span-2"
            v-model="measurements.additionalNotes"
            label="Additional measurement notes"
            variant="outlined"
            density="comfortable"
            rows="3"
            placeholder="Any specific fit concerns or preferences..."
          ></v-textarea>
        </div>

        <div class="mt-8 flex flex-wrap gap-4 justify-between">
          <v-btn color="secondary" variant="outlined" @click="currentStep = 2">
            Back to Customization
          </v-btn>
          <v-btn color="success" @click="submitCustomization">
            Complete & Add to Cart
          </v-btn>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import OxfordImg from '@/assets/img/Oxford.png'
import DerbyImg from '@/assets/img/Derby.png'
import ChelseaImg from '@/assets/img/Chelsea.png'
import MonkImg from '@/assets/img/Monk_Strap_shoe.png'
import LoaferImg from '@/assets/img/loafer.png'
import SneakerImg from '@/assets/img/Sneaker.png'

const router = useRouter()
const currentStep = ref(1)
const selectedProduct = ref('')
const measurementMethod = ref('guide')

const products = [
  { name: 'Oxford', image: OxfordImg },
  { name: 'Derby', image: DerbyImg },
  { name: 'Chelsea', image: ChelseaImg },
  { name: 'Monk Strap', image: MonkImg },
  { name: 'Loafer', image: LoaferImg },
  { name: 'Sneaker', image: SneakerImg }
]

const customization = ref({
  // Material options
  material: 'Premium Leather',
  materialNotes: '',
  
  // Color options
  color: 'Black',
  colorNotes: '',
  
  // Sole options
  sole: 'Leather',
  soleColor: 'Black',
  soleNotes: '',
  
  // Lining options
  lining: 'Leather',
  liningColor: 'Match Upper',
  liningNotes: '',
  
  // Stitching options
  stitchingStyle: 'Tonal',
  stitchingColor: 'Match Upper',
  stitchingNotes: '',
  
  // Hardware options
  hardwareFinish: 'Silver',
  monogram: false,
  monogramText: '',
  hardwareNotes: '',
  
  // Special requests
  specialRequests: ''
})

const measurements = ref({
  footLength: '',
  footWidth: '',
  instepHeight: '',
  heelWidth: '',
  additionalNotes: ''
})

const colorOptions = [
  { label: 'Black', value: 'Black', color: 'black' },
  { label: 'Brown', value: 'Brown', color: 'brown' },
  { label: 'Tan', value: 'Tan', color: 'amber-darken-1' },
  { label: 'Burgundy', value: 'Burgundy', color: 'red-darken-4' },
  { label: 'Navy', value: 'Navy', color: 'blue-darken-4' },
  { label: 'Grey', value: 'Grey', color: 'grey' }
]

const customizationSummary = computed(() => {
  const summary = {
    Material: customization.value.material,
    Color: customization.value.color,
    Sole: `${customization.value.sole} (${customization.value.soleColor})`,
    Lining: `${customization.value.lining} (${customization.value.liningColor})`,
    Stitching: `${customization.value.stitchingStyle} (${customization.value.stitchingColor})`
  }
  
  if (customization.value.hardwareFinish !== 'None') {
    summary.Hardware = customization.value.hardwareFinish
  }
  
  if (customization.value.monogram && customization.value.monogramText) {
    summary.Monogram = customization.value.monogramText
  }
  
  return summary
})

function selectProduct(productName) {
  selectedProduct.value = productName
}

function getSelectedProductImage() {
  const product = products.find(p => p.name === selectedProduct.value)
  return product ? product.image : ''
}

function formatLabel(key) {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
}

function nextStep() {
  if (currentStep.value < 3) {
    currentStep.value++
  }
}

function submitCustomization() {
  // Here you would typically save the customization data
  // and redirect to cart or confirmation page
  alert('Your custom shoe has been added to cart!')
  router.push('/')
}
</script>
