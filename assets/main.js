import Vue from 'vue'
import VueResource from 'vue-resource'
import VueHelmet from 'vue-helmet'

Vue.config.debug = true
Vue.config.silent = false
Vue.config.devtools = true

Vue.use(VueResource)

import HeaderEl from './partials/HeaderEl.vue'
import FooterArea from './partials/FooterArea.vue'

Vue.component('header-el', HeaderEl)
Vue.component('footer-area', FooterArea)

import store from './vuex/store'

let App = Vue.extend({

  store,

  data() {
    return {

    }
  },

  components: {
    VueHelmet
  }

})

import router from './router'

router.start(App, '#App')
