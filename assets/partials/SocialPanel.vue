<template lang="jade">
  .social-panel.tabs.is-medium
    ul
      li(v-for="icon in socialIcons" v-bind:style="{ width: (100 / this.iconsCount) + '%'}")
        a.icon.is-large(v-bind:href="icon.link" v-bind:title="icon.title" v-bind:target="icon.target")
          i.fa(v-bind:class="'fa-' + icon.title | lowercase")
</template>

<script>
export default {

  data() {
    return {
      socialIcons: [
        { title: 'Facebook',  link: 'http://facebook.com',  target: '_blank' },
        { title: 'Vk',        link: 'http://vk.com',        target: '_blank' },
        { title: 'Twitter',   link: 'http://twitter.com',   target: '_blank' }
      ]
    }
  },

  methods: {
    e(str) {
      return encodeURIComponent(str)
    }
  },

  computed: {
    iconsCount() {
      return this.socialIcons && this.socialIcons.length
    }
  }
}
</script>

<style lang="sass" scoped>
#App header {
  .social-panel {
    position: absolute;
    top: calc(50% - 135px);
    left: 50%;
    right: 15%;
    ul {
      border-bottom-color: transparent;
      overflow: hidden;
      width: 100%;
      li {
        a.icon {
          font-size: 24px;
          margin: 10px;
          border-bottom-color: transparent;
          padding: 10px 40px;
        }
      }
    }
  }
}
</style>
