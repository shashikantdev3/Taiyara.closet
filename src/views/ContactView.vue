<template>
  <div class="contact-page">
    <!-- Header Section -->
    <section class="contact-header py-16 bg-secondary">
      <div class="container mx-auto px-4 text-center">
        <h1 class="font-playfair text-4xl md:text-5xl mb-4">We'd Love to Hear From You</h1>
        <p class="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">Have questions about our products or services? Reach out to our team.</p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-form py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="contact-info">
            <h2 class="font-playfair text-3xl mb-6">Get in Touch</h2>
            <p class="mb-8">Our customer service team is available Monday through Friday, 10am to 6pm IST to assist you with any inquiries.</p>
            
            <div class="contact-details mb-8">
              <div class="flex items-start mb-4">
                <v-icon icon="mdi-map-marker" color="primary" class="mr-4 mt-1"></v-icon>
                <div>
                  <h3 class="font-medium mb-1">Visit Our Studio</h3>
                  <p>Taiyara.Closet Flagship Store<br>Sector 18, Noida<br>Delhi-NCR, India</p>
                </div>
              </div>
              
              <div class="flex items-start mb-4">
                <v-icon icon="mdi-phone" color="primary" class="mr-4 mt-1"></v-icon>
                <div>
                  <h3 class="font-medium mb-1">Call Us</h3>
                  <p>+91 98765 43210</p>
                </div>
              </div>
              
              <div class="flex items-start">
                <v-icon icon="mdi-email" color="primary" class="mr-4 mt-1"></v-icon>
                <div>
                  <h3 class="font-medium mb-1">Email Us</h3>
                  <p>info@taiyaracloset.com</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <h3 class="font-medium mb-4">Follow Us</h3>
              <div class="flex gap-4">
                <a href="https://instagram.com" target="_blank" class="social-link">
                  <v-icon icon="mdi-instagram" size="large"></v-icon>
                </a>
                <a href="https://facebook.com" target="_blank" class="social-link">
                  <v-icon icon="mdi-facebook" size="large"></v-icon>
                </a>
                <a href="https://twitter.com" target="_blank" class="social-link">
                  <v-icon icon="mdi-twitter" size="large"></v-icon>
                </a>
              </div>
            </div>
          </div>
          
          <div class="form-wrapper">
            <v-card class="pa-6">
              <h2 class="font-playfair text-2xl mb-6">Send Us a Message</h2>
              
              <v-form @submit.prevent="submitForm">
                <v-text-field
                  v-model="form.name"
                  label="Full Name"
                  variant="outlined"
                  :rules="[v => !!v || 'Name is required']"
                  class="mb-4"
                ></v-text-field>
                
                <v-text-field
                  v-model="form.email"
                  label="Email Address"
                  variant="outlined"
                  :rules="[
                    v => !!v || 'Email is required',
                    v => /.+@.+\..+/.test(v) || 'Email must be valid'
                  ]"
                  class="mb-4"
                ></v-text-field>
                
                <v-textarea
                  v-model="form.message"
                  label="Your Message"
                  variant="outlined"
                  :rules="[v => !!v || 'Message is required']"
                  rows="5"
                  class="mb-6"
                ></v-textarea>
                
                <v-btn
                  type="submit"
                  color="primary"
                  size="large"
                  block
                  :loading="loading"
                >
                  Send Message
                </v-btn>
              </v-form>
            </v-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="font-playfair text-3xl text-center mb-8">Visit Our Showroom</h2>
        <div class="map-placeholder bg-gray-200 h-96 rounded-lg flex items-center justify-center">
          <p class="text-gray-500">Interactive Map Placeholder</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const loading = ref(false);
const form = ref({
  name: '',
  email: '',
  message: ''
});

const submitForm = () => {
  loading.value = true;
  
  // Simulate form submission
  setTimeout(() => {
    loading.value = false;
    alert('Thank you for your message! We will get back to you shortly.');
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      message: ''
    };
  }, 1500);
};
</script>

<style scoped>
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(var(--v-theme-primary), 0.1);
  color: var(--v-theme-primary);
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--v-theme-primary);
  color: white;
  transform: translateY(-3px);
}
</style>