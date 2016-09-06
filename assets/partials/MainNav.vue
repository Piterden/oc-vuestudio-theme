<template lang="jade">
  .ul.nav-right.nav-menu
    a.nav-item(v-for="item in menuData" v-link="item.link")
      span.icon
        i.fa(class="fa-{{ item.icon }}")
      span.menutitle {{ item.title }}
</template>

<script>
export default {

  props: {
    menuData: {
      type: Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style lang="sass" scoped>

.ul {
  transition: all .45s linear;
  a {
    margin-left: 2%;
    padding: 10px 0.4% 49px;
    background: transparent;
    border: none;
    border-bottom: 6px solid transparent;
    border-radius: 0;
    transition: border .45s linear;
    &.active {
      border-color: rgba(255, 255, 255, 0.25);
    }
    &:hover {
      border-color: rgba(255, 255, 255, 0.75);
    }
    span {
      font-family: Comfortaa;
      color: rgba(255, 255, 255, 0.75);
      border-color: transparent;
      text-transform: uppercase;
    }
    .icon {
      display: none;
    }
  }
}
</style>
