import IndexPage from './pages/IndexPage.vue'
import PortfolioPage from './pages/PortfolioPage.vue'
import ServicesPage from './pages/ServicesPage.vue'
import ContactsPage from './pages/ContactsPage.vue'
import ErrorPage from './pages/ErrorPage.vue'

const routes = {
  '/': {
    component: IndexPage
  },
  '/portfolio': {
    component: PortfolioPage
  },
  '/services': {
    component: ServicesPage
  },
  '/contacts': {
    component: ContactsPage
  },
  '*': {
    component: ErrorPage
  }
}

export default routes

