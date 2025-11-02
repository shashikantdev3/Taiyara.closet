<template>
  <div class="about-page">
    <!-- Header Section -->
    <section class="about-header py-8 sm:py-16 bg-secondary">
      <div class="container mx-auto px-4 text-center">
        <h1 class="font-playfair text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">Where Tradition Meets Technology</h1>
        <p class="text-gray-700 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
          At Taiyara.Closet, every pair reflects decades of Indian shoemaking artistry combined with digital precision modeling.
        </p>
      </div>
    </section>

    <!-- Brand Story Section -->
    <section class="brand-story py-8 sm:py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div class="story-image">
            <div class="bg-gray-200 rounded-lg h-64 sm:h-96 relative overflow-hidden">
              <!-- ✅ Replace placeholder with actual image -->
              <img :src="ArtisanImg" alt="Artisan Workshop" class="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

          <div class="story-content">
            <h2 class="font-playfair text-2xl sm:text-3xl mb-4 sm:mb-6">Our Heritage</h2>
            <p class="text-sm sm:text-base mb-3 sm:mb-4">
              Founded in the heart of Delhi-NCR, Taiyara.Closet emerged from a lineage of master shoemakers with over five decades of experience in handcrafting premium footwear. Our founder, inspired by his grandfather's dedication to perfection, sought to preserve this artisanal heritage while embracing modern technology.
            </p>
            <p class="text-sm sm:text-base mb-3 sm:mb-4">
              Each Taiyara pair represents the culmination of traditional craftsmanship and cutting-edge digital modeling. We believe that true luxury lies in the perfect fit—where comfort meets elegance without compromise.
            </p>
            <p class="text-sm sm:text-base">
              Our artisans work with the finest materials, sourced ethically from around the world, to create footwear that stands the test of time both in durability and style.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Craftsmanship Section -->
    <section class="craftsmanship py-8 sm:py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="font-playfair text-2xl sm:text-3xl text-center mb-8 sm:mb-12">Our Craftsmanship</h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div class="craft-card text-center p-4 sm:p-6">
            <div class="icon-wrapper mb-4 mx-auto">
              <v-icon icon="mdi-hand" size="x-large" color="primary"></v-icon>
            </div>
            <h3 class="font-playfair text-lg sm:text-xl mb-2 sm:mb-3">Handcrafted Excellence</h3>
            <p class="text-sm sm:text-base">
              Every stitch, every cut, and every finish is meticulously executed by our master artisans who have honed their skills over decades.
            </p>
          </div>

          <div class="craft-card text-center">
            <div class="icon-wrapper mb-4 mx-auto">
              <v-icon icon="mdi-ruler" size="x-large" color="primary"></v-icon>
            </div>
            <h3 class="font-playfair text-xl mb-3">Digital Precision</h3>
            <p>
              We utilize advanced 3D modeling and digital measurement technology to ensure your shoes fit perfectly to your unique foot shape.
            </p>
          </div>

          <div class="craft-card text-center">
            <div class="icon-wrapper mb-4 mx-auto">
              <v-icon icon="mdi-leaf" size="x-large" color="primary"></v-icon>
            </div>
            <h3 class="font-playfair text-xl mb-3">Sustainable Luxury</h3>
            <p>
              Our commitment to ethical sourcing and sustainable practices ensures that luxury doesn't come at the expense of our planet.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values py-16">
      <div class="container mx-auto px-4">
        <h2 class="font-playfair text-3xl text-center mb-12">Our Values</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="value-item">
            <h3 class="font-playfair text-2xl mb-4">Quality Without Compromise</h3>
            <p>
              We never cut corners. From the selection of premium leathers to the final polish, every step in our process is executed with unwavering attention to detail.
            </p>
          </div>

          <div class="value-item">
            <h3 class="font-playfair text-2xl mb-4">Innovation in Tradition</h3>
            <p>
              While we honor traditional techniques, we continuously explore new technologies and methods to enhance comfort, durability, and sustainability.
            </p>
          </div>

          <div class="value-item">
            <h3 class="font-playfair text-2xl mb-4">Customer Satisfaction</h3>
            <p>
              Your satisfaction is our priority. We work closely with each client to ensure their expectations are not just met, but exceeded.
            </p>
          </div>

          <div class="value-item">
            <h3 class="font-playfair text-2xl mb-4">Artisan Empowerment</h3>
            <p>
              We believe in fair compensation and creating opportunities for skilled artisans to preserve and evolve their craft in the modern world.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta py-16 bg-primary">
      <div class="container mx-auto px-4 text-center">
        <h2 class="font-playfair text-3xl text-white mb-6">Experience the Perfect Fit</h2>
        <p class="text-white opacity-90 mb-8 max-w-2xl mx-auto">
          Join the growing community of discerning individuals who have discovered the unparalleled comfort and elegance of Taiyara.Closet footwear.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <v-btn color="accent" size="large" class="text-primary" to="/customize">Craft My Fit</v-btn>
          <v-btn variant="outlined" color="white" size="large" to="/collection">View Collection</v-btn>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// ✅ Import an artisan image for About page
import ArtisanImg from '@/assets/img/shoemaker.png' // You can replace with a more suitable image later

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  gsap.utils.toArray('.story-content, .craft-card, .value-item').forEach((element) => {
    gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    })
  })
})
</script>

<style scoped>
.icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(var(--v-theme-primary), 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.craft-card,
.value-item {
  transition: transform 0.3s ease;
}

.craft-card:hover,
.value-item:hover {
  transform: translateY(-5px);
}
</style>
