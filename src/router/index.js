import { createRouter, createWebHistory } from 'vue-router'

// Lazy load all components for better performance
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
    meta: {
      title: 'Taiyara.Closet - Luxury Fit. Delivered Fast.',
      description: 'Perfectly personalized luxury footwear crafted to your measurements.'
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '../views/ProductsView.vue'),
    meta: {
      title: 'Premium Footwear Collection | Taiyara.Closet',
      description: 'Explore our collection of luxury personalized footwear. Classic oxfords, luxury loafers, premium derbies, and custom sneakers.'
    }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductView.vue'),
    meta: {
      title: 'Product Details - Taiyara.Closet',
      description: 'Explore the details of our luxury footwear products.'
    }
  },
  {
    path: '/customize/:id?',
    name: 'customize',
    component: () => import(/* webpackChunkName: "customize" */ '../views/CustomizeView.vue'),
    meta: {
      title: 'Customize Your Footwear - Taiyara.Closet',
      description: 'Create your perfect luxury footwear with our customization options.'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      title: 'About Us - Taiyara.Closet',
      description: 'Learn about our story and commitment to luxury footwear.'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
    meta: {
      title: 'Contact Us - Taiyara.Closet',
      description: 'Get in touch with our customer support team.'
    }
  },
  {
    path: '/measurement-guide',
    name: 'measurement-guide',
    component: () => import(/* webpackChunkName: "measurement" */ '../views/MeasurementGuideView.vue'),
    meta: {
      title: 'Measurement Guide - Taiyara.Closet',
      description: 'Learn how to take accurate measurements for your custom footwear.'
    }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Update page title based on route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Taiyara.Closet - Luxury Personalized Footwear'
  next()
})

export default router