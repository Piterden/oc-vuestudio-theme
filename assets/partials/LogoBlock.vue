<template lang="jade">
  div(:class="{logo: true, wrapper: true, mini: $parent.mini}")
    div.inner
      a(v-link="{path: '/'}")
        img(v-bind:src="logo.src" v-bind:alt="logo.alt")
</template>

<script>
export default {

  data() {
    return {
      logo: {
        src: '/themes/web-studio/assets/img/logo-index-big.jpg',
        alt: 'Вебстудия Санкт-Петербург'
      }
    }
  }

}
</script>

<style lang="sass">
.bottom .inner {
  position: relative;
  height: 100%;
}
.logo.wrapper {
  position: absolute;
  top: 113%;
  left: 15%;
  text-align: left;
  transition: all .45s linear;
  img {
    transition: all .45s linear;
    width: 100%;
  }
  &.mini {
    top: 18%;
  }
  &.mini img {
    width: 25%;
  }
  @media (max-width: 1280px) {
    left: 10%;
  }
}
.bottom .logo.wrapper {
  left: 15%;
  top: 15%;
  @media (max-width: 1280px) {
    left: 8%;
  }
}

</style>
