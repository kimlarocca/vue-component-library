<template>
  <div>

    <div class="container">

      <h1>test</h1>
      <p>
        <nuxt-link to="/">&lt; back to style guide</nuxt-link>
      </p>

      <hr class="margin-vertical-3">

      <p @click="clickMe">click me</p>

      <div class="section-padding-100"></div>

    </div>

  </div>
</template>

<script>
  export default {
    name: 'Test',
    data () {
      return {
      }
    },

    methods: {
      clickMe () {
        console.log('clicked')
      }
    }
  }
</script>
