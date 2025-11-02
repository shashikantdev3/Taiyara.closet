<template>
  <v-app>
    <!-- Luxury Header with sticky navigation -->
    <v-app-bar app elevation="0" color="background" class="border-b border-gray-100">
      <div class="container mx-auto px-4 flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="text-primary font-playfair text-2xl font-medium">
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
        <div class="flex items-center space-x-4">
          <v-btn icon variant="text" color="primary">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon variant="text" color="primary">
            <v-icon>mdi-heart-outline</v-icon>
          </v-btn>
          <v-btn icon variant="text" color="primary">
            <v-icon>mdi-cart-outline</v-icon>
          </v-btn>
          <v-btn icon variant="text" color="primary" class="md:hidden">
            <v-icon>mdi-menu</v-icon>
          </v-btn>
        </div>
      </div>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </v-main>

    <!-- Luxury Footer -->
    <v-footer class="bg-primary text-white py-12">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Brand -->
          <div>
            <h3 class="font-playfair text-xl mb-4">Taiyara.Closet</h3>
            <p class="text-gray-300 text-sm mb-4">Luxury Fit. Delivered Fast.</p>
            <div class="flex space-x-4">
              <v-btn icon variant="text" color="white">
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon variant="text" color="white">
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon variant="text" color="white">
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </div>
          </div>
          
          <!-- Links -->
          <div>
            <h4 class="text-accent font-medium mb-4">Shop</h4>
            <ul class="space-y-2">
              <li><router-link to="/products" class="text-gray-300 hover:text-accent text-sm">Collection</router-link></li>
              <li><router-link to="/customize" class="text-gray-300 hover:text-accent text-sm">Customize</router-link></li>
              <li><router-link to="/new-arrivals" class="text-gray-300 hover:text-accent text-sm">New Arrivals</router-link></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-accent font-medium mb-4">Company</h4>
            <ul class="space-y-2">
              <li><router-link to="/about" class="text-gray-300 hover:text-accent text-sm">About Us</router-link></li>
              <li><router-link to="/contact" class="text-gray-300 hover:text-accent text-sm">Contact</router-link></li>
              <li><router-link to="/careers" class="text-gray-300 hover:text-accent text-sm">Careers</router-link></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-accent font-medium mb-4">Customer Care</h4>
            <ul class="space-y-2">
              <li><router-link to="/faq" class="text-gray-300 hover:text-accent text-sm">FAQ</router-link></li>
              <li><router-link to="/shipping" class="text-gray-300 hover:text-accent text-sm">Shipping & Returns</router-link></li>
              <li><router-link to="/size-guide" class="text-gray-300 hover:text-accent text-sm">Size Guide</router-link></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">&copy; {{ new Date().getFullYear() }} Taiyara.Closet. All rights reserved.</p>
          <div class="flex space-x-4 mt-4 md:mt-0">
            <router-link to="/privacy" class="text-gray-400 hover:text-accent text-sm">Privacy Policy</router-link>
            <router-link to="/terms" class="text-gray-400 hover:text-accent text-sm">Terms of Service</router-link>
          </div>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script setup>
// App component setup
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
</style>