<template lang="jade">
  main.router-view.error404-page
    h1 {{ errorTitle }}
    div.content {{ errorMsg }}
</template>

<script>
export default {

  data () {
    return {
      errorTitle: 'Ошибка 404',
      errorMsg: 'Извините, но такой страницы не существует.'
    }
  }

}
</script>

<style lang="sass" scoped>
</style>