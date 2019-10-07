<template>
  <div>

    <div class="container">

      <h1>pagination component</h1>
      <p>
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3">

      <pagination></pagination>

      <div class="section-padding-100"></div>

    </div>

  </div>
</template>
<script>
  import Pagination from '../components/Pagination'

  export default {
    components: { Pagination }
  }
</script>
