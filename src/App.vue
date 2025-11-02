<template>
  <v-app>
    <!-- Luxury Header with sticky navigation -->
    <v-app-bar app elevation="0" color="background" class="border-b border-gray-100">
      <div class="container mx-auto px-4 flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="text-primary font-playfair text-xl sm:text-2xl font-medium">
          Taiyara.Closet
        </router-link>
        
        <!-- Navigation Links - Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/products" class="nav-link">Collection</router-link>
          <router-link to="/customize" class="nav-link">Customize</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </div>
        
        <!-- Icons -->
        <div class="flex items-center space-x-2 sm:space-x-4">
          <v-btn icon variant="text" color="primary" class="hidden sm:flex">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon variant="text" color="primary" class="hidden sm:flex">
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
          <v-btn icon variant="text" color="primary">
            <v-icon>mdi-cart-outline</v-icon>
          </v-btn>
          <v-btn icon variant="text" color="primary" class="md:hidden" @click="mobileMenuOpen = !mobileMenuOpen">
            <v-icon>{{ mobileMenuOpen ? 'mdi-close' : 'mdi-menu' }}</v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>
    
    <!-- Mobile Navigation Menu -->
    <v-navigation-drawer
      v-model="mobileMenuOpen"
      temporary
      location="right"
      width="280"
      class="pt-4"
    >
      <div class="px-4 py-6">
        <div class="flex justify-between items-center mb-6">
          <h3 class="font-playfair text-xl">Menu</h3>
          <v-btn icon variant="text" @click="mobileMenuOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-list>
          <v-list-item to="/" @click="mobileMenuOpen = false">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item to="/products" @click="mobileMenuOpen = false">
            <v-list-item-title>Collection</v-list-item-title>
          </v-list-item>
          <v-list-item to="/customize" @click="mobileMenuOpen = false">
            <v-list-item-title>Customize</v-list-item-title>
          </v-list-item>
          <v-list-item to="/about" @click="mobileMenuOpen = false">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item to="/contact" @click="mobileMenuOpen = false">
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <!-- Luxury Footer -->
    <v-footer class="bg-primary text-white py-8 sm:py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <!-- Brand -->
          <div class="col-span-2 sm:col-span-2 md:col-span-1 mb-6 md:mb-0">
            <h3 class="font-playfair text-xl mb-4">Taiyara.Closet</h3>
            <p class="text-gray-300 text-sm mb-4">Luxury Fit. Delivered Fast.</p>
            <div class="flex space-x-4">
              <v-btn icon variant="text" color="white" size="small" class="sm:size-default">
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon variant="text" color="white" size="small" class="sm:size-default">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon variant="text" color="white" size="small" class="sm:size-default">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </div>
          </div>
          
          <!-- Links -->
          <div>
            <h4 class="text-accent font-medium mb-3 sm:mb-4">Shop</h4>
            <ul class="space-y-1 sm:space-y-2">
              <li><router-link to="/products" class="text-gray-300 hover:text-accent text-sm">Collection</router-link></li>
              <li><router-link to="/customize" class="text-gray-300 hover:text-accent text-sm">Customize</router-link></li>
              <li><router-link to="/new-arrivals" class="text-gray-300 hover:text-accent text-sm">New Arrivals</router-link></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-accent font-medium mb-3 sm:mb-4">Company</h4>
            <ul class="space-y-1 sm:space-y-2">
              <li><router-link to="/about" class="text-gray-300 hover:text-accent text-sm">About Us</router-link></li>
              <li><router-link to="/contact" class="text-gray-300 hover:text-accent text-sm">Contact</router-link></li>
              <li><router-link to="/careers" class="text-gray-300 hover:text-accent text-sm">Careers</router-link></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-accent font-medium mb-3 sm:mb-4">Customer Care</h4>
            <ul class="space-y-1 sm:space-y-2">
              <li><router-link to="/faq" class="text-gray-300 hover:text-accent text-sm">FAQ</router-link></li>
              <li><router-link to="/shipping" class="text-gray-300 hover:text-accent text-sm">Shipping & Returns</router-link></li>
              <li><router-link to="/size-guide" class="text-gray-300 hover:text-accent text-sm">Size Guide</router-link></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-xs sm:text-sm">&copy; {{ new Date().getFullYear() }} Taiyara.Closet. All rights reserved.</p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <router-link to="/privacy" class="text-gray-400 hover:text-accent text-xs sm:text-sm">Privacy Policy</router-link>
            <router-link to="/terms" class="text-gray-400 hover:text-accent text-xs sm:text-sm">Terms of Service</router-link>
          </div>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';

// Mobile menu state
const mobileMenuOpen = ref(false);
</script>

<style>
/* Global styles */
:root {
  --color-charcoal: #212121;
  --color-gold: #D4AF37;
  --color-white: #FFFFFF;
  --color-light-bg: #F5F5F5;
}

body {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}

/* Responsive text adjustments */
@media (max-width: 640px) {
  body {
    font-size: 14px;
  }
  
  h1 {
    font-size: 1.75rem !important;
  }
  
  h2 {
    font-size: 1.5rem !important;
  }
  
  h3 {
    font-size: 1.25rem !important;
  }
}

/* Custom transitions for smooth UX */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

/* Responsive container */
.container {
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
</style>