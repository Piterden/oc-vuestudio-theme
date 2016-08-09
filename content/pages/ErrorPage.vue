<template>
  <main class="router-view error404-page">
    <h1>{{ errorTitle }}</h1>
    <div class="content">
      {{ errorMsg }}
    </div>
  </main>
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
