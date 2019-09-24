<template>
  <div>

    <div class="container">

      <h1>reviews component</h1>
      <p>
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3">

      <h6><strong>PROPS:</strong></h6>
      <ul>
        <li>gets quote, name (optional), reviewDate (optional) and byline (optional) from reviews.json file</li>
        <li>alignment: can be left or center (optional, center is the default)</li>
      </ul>

      <div class="section-padding-50"></div>

    </div>

    <reviews></reviews>

    <div class="section-padding-100"></div>

    <reviews alignment="left"></reviews>

    <div class="section-padding-100"></div>

  </div>
</template>
<script>
  import Reviews from '../components/Reviews'

  export default {
    components: { Reviews }
  }
</script>
