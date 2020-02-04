<template>
  <div>

    <div class="container">

      <h1>card component</h1>
      <p>
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3">

      <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
      <p>This component will have fields for:</p>
      <ul>
        <li>category (optional)</li>
        <li>title (optional)</li>
        <li>content (optional)</li>
        <li>link (optional)</li>
        <li>:tags - array of objects [{name, link}] (optional)</li>
        <li>video - url to vimeo or youtube iframe (optional)</li>
        <li>background - true or false (false by default)</li>
      </ul>

      <div class="section-padding-50"></div>

      <p>component goes here</p>

      <div class="section-padding-100"></div>

    </div>

  </div>
</template>

<script>
  // import BiographyCard from '../components/BiographyCard'
  //
  // export default {
  //   name: 'BiographyCardPage',
  //   components: {
  //     'biography-card': BiographyCard
  //   }
  // }
</script>
