import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './assets/styles/main.css'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Create Vuetify instance with custom theme
const taiyaraTheme = {
  dark: false,
  colors: {
    primary: '#0D0D0D',    // Charcoal Black
    accent: '#C6A664',     // Gold
    secondary: '#F5F5F5',  // Soft neutral
    background: '#FFFFFF', // Clean white
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  }
}

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'taiyaraTheme',
    themes: {
      taiyaraTheme,
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  }
})

// Create Pinia store
const pinia = createPinia()

// Create and mount the app
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(vuetify)

// Global properties
app.config.globalProperties.$gsap = gsap

// Mount the app
app.mount('#app')