<template>
  <div>

    <div class="container">

      <h1>card component</h1>
      <p>
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3">

      <h6><strong>PROPS:</strong></h6>
      <ul>
        <li>none</li>
      </ul>

      <div class="section-padding-50"></div>

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
