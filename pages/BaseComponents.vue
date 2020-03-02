<template>
  <div>

    <div class="container">

      <h1>base components</h1>
      <p>
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3">

      <h2>Spacer Component: v-spacer</h2>
      <v-spacer/>

      <p><strong>RULES &amp; DEPENDENCIES:</strong></p>
      <p>This component will have fields for:</p>
      <ul>
        <li>size: an array of numbers that indicate the mobile, tablet and desktop spacing in rem (optional, the default is [1,1,1])</li>
      </ul>

      <v-spacer :size="[2,3,4]"></v-spacer>

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
