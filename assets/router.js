import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import BlogPage from './pages/BlogPage.vue'
import IndexPage from './pages/IndexPage.vue'
import ErrorPage from './pages/ErrorPage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import ContactsPage from './pages/ContactsPage.vue'
import PortfolioPage from './pages/PortfolioPage.vue'

const routes = {
  '*': {
    component(resolve) {
      resolve(Vue.component('error-page', ErrorPage))
    }
  },
  '/': {
    component(resolve) {
      resolve(Vue.component('index-page', IndexPage))
    }
  },
  '/blog': {
    component(resolve) {
      resolve(Vue.component('blog-page', BlogPage))
    }
  },
  '/portfolio': {
    component(resolve) {
      resolve(Vue.component('portfolio-page', PortfolioPage))
    }
  },
  '/services': {
    component(resolve) {
      resolve(Vue.component('services-page', ServicesPage))
    }
  },
  '/contacts': {
    component(resolve) {
      resolve(Vue.component('contacts-page', ContactsPage))
    }
  }
}

let router = new VueRouter({
  hashbang: false,
  history: true,
  linkActiveClass: 'is-active',
  mode: 'html5',
  saveScrollPosition: false,
  transitionOnLoad: true
})

router.map(routes)

export default router

