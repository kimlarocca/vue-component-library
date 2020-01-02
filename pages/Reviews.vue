<template>
  <div>

    <div class="container">

      <h1>reviews component</h1>

      <hr class="margin-vertical-3">

      <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
      <p>This component will have fields for:</p>
      <ul class="margin-bottom-1">
        <li>quote</li>
        <li>name (optional)</li>
        <li>review date (optional)</li>
        <li>byline (optional)</li>
        <li>alignment: can be left or center (optional, center is the default)</li>
      </ul>

      <div class="section-padding-25"></div>

      <p><strong>EXAMPLES:</strong></p>

      <div class="section-padding-25"></div>

    </div>

    <reviews/>

    <div class="section-padding-100"></div>

    <reviews alignment="left"/>

    <div class="section-padding-100"></div>

  </div>
</template>
<script>
  import Reviews from '../components/Reviews'

  export default {
    components: { Reviews }
  }
</script>
