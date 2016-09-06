<template lang="jade">
  div.nav-item.search-field
    span.icon
      i.fa.fa-search(@click="showInput = !showInput")
    span.control.has-addons(v-show="showInput" transition="slide")
      input.input.is-link(v-model="searchString" v-bind:placeholder="placeholder")
</template>

<script>
export default {

  props: {
    placeholder: {
      type: String,
      default() {
        return 'Найти'
      }
    }
  },

  data () {
    return {
      searchString: '',
      showInput: false,
      focused: false
    }
  },

  methods: {
    toggleInput() {
      this.showInput = !this.showInput
    },
    focus() {
      this.focused = true
    },
    blur() {
      this.focused = false
    }
  }
}
</script>

<style lang="sass" scoped>
i {
  transition: color .45s linear;
  color: rgba(255, 255, 255, 0.75);
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
}
.search-field {
  width: 15%;
  height: 77px;
  justify-content: flex-start;
  .icon {
    cursor: pointer;
    width: 5%;
    height: 20px;
    margin: -30px 5% 5% 5%;
  }
  .control.has-addons {
    input {
      background: transparent;
      border: none;
      box-shadow: none;
      border-bottom: 4px solid rgba(255, 255, 255, 0.25);
      border-radius: 0;
      font-size: 1em;
      height: 94px;
      color: #fff;
      margin-top: -30px;
      margin-left: 5%;
      width: 90%;
      transition: border 2.9s linear;
      &:focus {
        border-color: rgba(255, 255, 255, 0.75);
      }
    }
  }
}

</style>
