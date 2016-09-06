<template lang="jade">
  header(:class="{ bottom: bottom }")
    nav(:class="{ nav: true, mini: mini }")
      logo-block
      social-panel(v-show="bottom")
      main-nav(v-bind:menu-data="topMenuData")
      search-field
</template>

<script>
import MainNav from './MainNav.vue'
import LogoBlock from './LogoBlock.vue'
import SocialPanel from './SocialPanel.vue'
import SearchField from './SearchField.vue'

export default {

  data() {
    return {
      topMenuData: [
        { title: 'Главная',   link:{path: '/'},          icon: 'home' },
        { title: 'Блог',      link:{path: '/blog'},      icon: 'feed' },
        { title: 'Портфолио', link:{path: '/portfolio'}, icon: 'book' },
        { title: 'Услуги',    link:{path: '/services'},  icon: 'list' },
        { title: 'Контакты',  link:{path: '/contacts'},  icon: 'phone'}
      ],
      mini: !this.isAtTop(),
      bottom: this.isAtBottom()
    }
  },

  components: {
    SocialPanel, LogoBlock, SearchField, MainNav
  },

  ready() {
    this.calcPosition()
    window.addEventListener('scroll', this.calcPosition)
    window.addEventListener('resize', this.calcPosition)
  },

  methods: {
    isAtBottom() {
      return window.scrollY >= document.body.scrollHeight - window.innerHeight
    },
    isAtTop() {
      return window.scrollY < 40
    },
    calcPosition() {
      /* eslint-disable no-console */
      console.log(window.scrollY, document.body.scrollHeight - window.innerHeight)
      /* eslint-enable no-console */
      if (this.isAtTop()) {
        this.$set('mini', false)
        this.$set('bottom', false)
      } else if (this.isAtBottom()) {
        this.$set('mini', false)
        this.$set('bottom', true)
      } else {
        this.$set('mini', true)
        this.$set('bottom', false)
      }
    }
  }
}
</script>

<style lang="sass" scoped>
#App header{
  &.bottom {
    height: 100%;
    max-height: 735px;
    bottom: 0;
  }
  nav {
    position: relative;
    padding-top: 85px;
    background: transparent;
    transition: all .45s linear;
    &.mini {
      padding-top: 45px;
      background: rgba(0, 0, 0, .5);
      box-shadow: 0 2px 10px 2px rgba(0, 0, 0, .5);
    }
  }
}
</style>
