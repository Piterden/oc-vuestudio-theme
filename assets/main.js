window.Pusher = require('pusher-js')
import Echo from 'laravel-echo'
window.echo = new Echo('22f4db9d9cfae6d9dd31')

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.config.debug = true
Vue.config.silent = false
Vue.config.devtools = true

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  hashbang: false,
  history: 'html5',
  linkActiveClass: 'active'
})

import routes from './routes'
router.map(routes)

import store from './vuex/store'
import TopMenu from './partials/TopMenu.vue'

let App = Vue.extend({
  store,

  data() {
    return {

    }
  },

  components: { TopMenu }
})

router.start(App, '#App')



